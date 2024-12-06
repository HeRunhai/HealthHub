"use strict";
let checkbox = {
  name: "",
  shape: "",
  size: "",
  checkbox: false,
  disabled: "",
  activeColor: "",
  inactiveColor: "",
  iconSize: "",
  iconColor: "",
  label: "",
  labelSize: "",
  labelColor: "",
  labelDisabled: ""
};
const props = {
  props: {
    name: {
      type: [String, Number, Boolean],
      default: checkbox.name
    },
    shape: {
      type: String,
      default: checkbox.shape
    },
    size: {
      type: [String, Number],
      default: checkbox.size
    },
    customStyle: {
      type: [Object, String],
      default: () => ({})
    },
    customClass: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      default: checkbox.checked
    },
    disabled: {
      type: [String, Boolean],
      default: checkbox.disabled
    },
    activeColor: {
      type: String,
      default: checkbox.activeColor
    },
    inactiveColor: {
      type: String,
      default: checkbox.inactiveColor
    },
    iconSize: {
      type: [String, Number],
      default: checkbox.iconSize
    },
    iconColor: {
      type: String,
      default: checkbox.iconColor
    },
    label: {
      type: [String, Number],
      default: checkbox.label
    },
    labelSize: {
      type: [String, Number],
      default: checkbox.labelSize
    },
    labelColor: {
      type: String,
      default: checkbox.labelColor
    },
    labelDisabled: {
      type: [String, Boolean],
      default: checkbox.labelDisabled
    }
  }
};
exports.props = props;
