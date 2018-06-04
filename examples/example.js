import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import RNCustomSelectGroup from '../lib';
import { datasCheckBoxes, datasRadios} from './datas';
import { datasStyles } from './datasStyle';


export default class Example extends Component {
  state = {
    selectedCheckboxes: [0, 2],
    selectedRadio: 1
  }

  async radioSelected(idx, value) {
    await this.setState({
      selectedRadio: idx
    })
    console.log("RootApp States => ", this.state)
    console.log("RootApp RadioSelected Value => ", value)
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCustomSelectGroup 
          selectType={'checkbox'}
          datas={datasCheckBoxes}
          selected={this.state.selectedCheckboxes}
          onSelectionChange={(arrayOfSelected) => console.log(arrayOfSelected)}
          labelBefore={true}
          styles={datasStyles}
        />
        <RNCustomSelectGroup 
          selectType={'radio'}
          datas={datasRadios}
          selected={this.state.selectedRadio}
          onSelectionChange={(newSelectedIdx, newSelectedValue) => this.radioSelected(newSelectedIdx, newSelectedValue)}
          styles={datasStyles}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});