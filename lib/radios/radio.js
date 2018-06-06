import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image, Platform, TouchableNativeFeedback } from 'react-native'
import PropTypes from 'prop-types'

export default class Radio extends Component {

  static Container = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

  static propTypes = {
    active: PropTypes.bool.isRequired,
    checkedComponent: PropTypes.element.isRequired,
    uncheckedComponent: PropTypes.element.isRequired,
    index: PropTypes.number.isRequired,
    value: PropTypes.string,
    radioSelect: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    labelBefore: PropTypes.bool,
    labelStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  }

  onToggle = () => {
    const {radioSelect, value, index} = this.props;
    radioSelect(index, value);
  }

  render() {
    const {
      labelBefore,
      checkedComponent,
      uncheckedComponent,
      checkedImage,
      uncheckedImage,
      labelStyle,
      containerStyle,
      label,
      active
    } = this.props
    return (
      <Radio.Container
        style={[styles.container, containerStyle]}
        onPress={this.onToggle}
      >
        <View
          style={[styles.container, containerStyle]}
        >
          {labelBefore ? (
            <Label
              labelStyle={labelStyle}
              label={label}
            />
          ) : null}

          {checkedComponent && uncheckedComponent ? (
            active ? (
              checkedComponent
            ) : (
              uncheckedComponent
            )
          ) : (
            <Image
              style={styles.checkbox}
              source={active ? checkedImage : uncheckedImage}
            />
          )}

          {!labelBefore && (
            <Label
              labelStyle={labelStyle}
              label={label}
            />
          )}
        </View>
      </Radio.Container>
    )
  }
}

const Label = ({ labelStyle, label }) => (
  <View style={styles.labelContainer}>
    <Text style={[styles.label, labelStyle]}>
      {label}
    </Text>
  </View>
)

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    width: 30,
    height: 30
  },
  labelContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  label: {
    fontSize: 16,
    color: '#222'
  }
})