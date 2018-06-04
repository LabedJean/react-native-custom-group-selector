import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Checkboxes from './checkboxes/index';
import Radios from './radios/index';

export default class RNCustomSelectGroup extends Component {
  render() {
    switch(this.props.selectType) {
      case 'checkbox':
        return <Checkboxes 
                  datas={this.props.datas} 
                  selected={this.props.selected} 
                  onSelectionChange={(arrayOfSelected) => this.props.onSelectionChange(arrayOfSelected)}
                  labelBefore={this.props.labelBefore}
                  styles={this.props.styles}
                />
      case 'radio':
        return <Radios 
                datas={this.props.datas}
                selected={this.props.selected}
                onSelectionChange={(newSelectedIdx, newSelectedValue) => this.props.onSelectionChange(newSelectedIdx, newSelectedValue)}
                labelBefore={this.props.labelBefore}
                styles={this.props.styles}
              />
      default:
        return  <Text>Please add selectType props 'radio' or 'checkbox'</Text>
    }
  }
}