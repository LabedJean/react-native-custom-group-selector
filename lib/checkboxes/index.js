import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Checkbox from './checkbox';
import { PropTypes } from 'prop-types';

export default class Checkboxes extends Component {
  static propTypes = {
    datas: PropTypes.array.isRequired,
    selected: PropTypes.array,
    onSelectionChange: PropTypes.func,
    labelBefore: PropTypes.bool,
    styles: PropTypes.object,
  }

  state = {
    selected: this.props.selected
  }

  onSelectionChange(idx) {
    selection = this.state.selected
    if (selection.includes(idx)) {
      let item = selection.indexOf(idx)
      selection.splice(item, 1);
    }
    else {
      selection.push(idx)
    }
    this.setState({
      selected: selection
    })

    this.props.onSelectionChange(this.state.selected)
  }
  render() {
    return (
      <View style={this.props.styles && this.props.styles.containerStyle ? this.props.styles.containerStyle : styles.container}>
        {
          this.props.datas.map((data, idx) => {
            let pictoCheckedSource = data.picto ? {uri: data.picto.checked }: require('./images/checked.png')
            let pictoUncheckedSource = data.picto ? {uri: data.picto.unchecked }: require('./images/unchecked.png')
            return (
              <Checkbox 
                checked={this.props.selected.includes(idx)} 
                key={`checkbox-${idx}`}
                onChange={(e) => this.onSelectionChange(idx)}
                label={data.label}
                checkedComponent={<Image source={pictoCheckedSource} style={this.props.styles ? this.props.styles.checked : styles.checkedPicto}></Image>}
                uncheckedComponent={<Image source={pictoUncheckedSource} style={this.props.styles ? this.props.styles.unchecked : styles.uncheckedPicto}></Image>}
                labelBefore={this.props.labelBefore}
                labelStyle={this.props.styles ? this.props.styles.label : null}
                containerStyle={this.props.styles ? this.props.styles.labelAndPictoContainer : null}
              />
            )
        })
      }
    </View>
    )
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  checkedPicto: {
    width: 30,
    height: 30,
    opacity: 1,
  },
  uncheckedPicto: {
    width: 30,
    height: 30,
    opacity: 0.5,
  }
}