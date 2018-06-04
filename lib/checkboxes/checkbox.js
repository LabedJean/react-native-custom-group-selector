import React, { PureComponent } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image, Platform, TouchableNativeFeedback } from 'react-native'
import { PropTypes } from 'prop-types';

class Checkbox extends PureComponent {
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
    labelStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onChange: PropTypes.func,
    // Not used
    numberOfLabelLines: PropTypes.number,
    checkboxStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, Image.propTypes.style]),
    containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, View.propTypes.style]),
  }

  render () {
    const { checked } = this.state
    const {
      labelBefore,
      containerStyle,
      checkedComponent,
      uncheckedComponent,
      checkedImage,
      uncheckedImage,
      checkboxStyle,
      labelStyle,
      numberOfLabelLines,
      label
    } = this.props

    return (
      <Checkbox.Container
        style={[styles.container, containerStyle]}
        onPress={this.handleToggleChecked}
      >
        <View style={[styles.container, containerStyle]}>
          {labelBefore ? (
            <Label
              labelStyle={labelStyle}
              numberOfLabelLines={numberOfLabelLines}
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
              style={[styles.checkbox, checkboxStyle]}
              source={checked ? checkedImage : uncheckedImage}
            />
          )}

          {!labelBefore && (
            <Label
              labelStyle={labelStyle}
              numberOfLabelLines={numberOfLabelLines}
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

const Label = ({ labelStyle, numberOfLabelLines, label }) => (
  <View style={styles.labelContainer}>
    <Text style={[styles.label, labelStyle]} numberOfLines={numberOfLabelLines}>
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

export default Checkbox