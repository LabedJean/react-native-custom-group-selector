import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Radio from './radio';
import PropTypes from 'prop-types';

export default class Radios extends Component {
  static propTypes = {
    datas: PropTypes.array.isRequired,
    selected: PropTypes.number,
    onSelectionChange: PropTypes.func,
    labelBefore: PropTypes.bool,
    styles: PropTypes.object,
  }

  state = {
    selected: this.props.selected
  }

  radioSelect = (key, value) => {
    this.setState({selected: key});
    this.props.onSelectionChange(key, value)
  }

  render() {
    const containerStyle = this.props.styles ? this.props.styles.containerStyle : null; 
    return (
      <View style={[styles.container, containerStyle]}>
        {
          this.props.datas.map((data, idx) => {
            // User can add custom picto when the radio is active or not
            let pictoCheckedSource = data.picto ? {uri: data.picto.checked }: require('./images/checked.png')
            let pictoUncheckedSource = data.picto ? {uri: data.picto.unchecked }: require('./images/unchecked.png')
            return (
              <Radio 
                active={this.state.selected == idx}
                key={`radio-${idx}`}
                radioSelect={this.radioSelect}
                index={idx}
                value={data.value}
                label={data.label}
                checkedComponent={<Image source={pictoCheckedSource} style={this.props.styles ? this.props.styles.checked : styles.checkedPicto}></Image>}
                uncheckedComponent={<Image source={pictoUncheckedSource} style={this.props.styles ? this.props.styles.unchecked : styles.uncheckedPicto}></Image>}
                labelBefore={this.props.labelBefore}
                labelStyle={this.props.styles ? this.props.styles.label : null}
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