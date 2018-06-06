import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image, Platform, TouchableNativeFeedback } from 'react-native'
import { PropTypes } from 'prop-types';

export default class Checkbox extends Component {
  state = {
    checked: this.props.checked
  }

  static Container = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

  static propTypes = {
    checkedComponent: PropTypes.element,
    uncheckedComponent: PropTypes.element,
    checked: PropTypes.bool,
    label: PropTypes.string,
    labelBefore: PropTypes.bool,
    labelStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, Text.propTypes.style]),
    onChange: PropTypes.func,
  }

  render () {
    const { checked } = this.state
    const {
      labelBefore,
      checkedComponent,
      uncheckedComponent,
      checkedImage,
      uncheckedImage,
      labelStyle,
      containerStyle,
      label
    } = this.props

    return (
      <Checkbox.Container
        style={[styles.container, containerStyle]}
        onPress={this.handleToggleChecked}
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
            checked ? (
              checkedComponent
            ) : (
              uncheckedComponent
            )
          ) : (
            <Image
              style={styles.checkbox}
              source={checked ? checkedImage : uncheckedImage}
            />
          )}

          {!labelBefore && (
            <Label
              labelStyle={labelStyle}
              label={label}
            />
          )}
        </View>
      </Checkbox.Container>
    )
  }

  handleToggleChecked = () => {
    const { label } = this.props
    const checked = !this.state.checked

    this.setState({ checked })
    this.props.onChange && this.props.onChange({ label, checked })
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