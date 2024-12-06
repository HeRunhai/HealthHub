"use strict";
let checkboxGroup = {
  name: "",
  value: () => [],
  shape: "square",
  disabled: false,
  activeColor: "#2979ff",
  inactiveColor: "#c8c9cc",
  size: 18,
  placement: "row",
  labelSize: "",
  labelColor: "#303133",
  labelDisabled: false,
  iconColor: "#ffffff",
  iconSize: 18,
  iconPlacement: "left",
  borderBottom: false
};
const props = {
  props: {
    name: {
      type: String,
      default: checkboxGroup.name
    },
    value: {
      type: Array,
      default: checkboxGroup.value
    },
    modelValue: {
      type: Array,
      default: checkboxGroup.value
    },
    shape: {
      type: String,
      default: checkboxGroup.shape
    },
    disabled: {
      type: Boolean,
      default: checkboxGroup.disabled
    },
    customStyle: {
      type: [Object, String],
      default: () => ({})
    },
    customClass: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: checkboxGroup.activeColor
    },
    inactiveColor: {
      type: String,
      default: checkboxGroup.inactiveColor
    },
    size: {
      type: [String, Number],
      default: checkboxGroup.size
    },
    placement: {
      type: String,
      default: checkboxGroup.placement
    },
    labelSize: {
      type: [String, Number],
      default: checkboxGroup.labelSize
    },
    labelColor: {
      type: [String],
      default: checkboxGroup.labelColor
    },
    labelDisabled: {
      type: Boolean,
      default: checkboxGroup.labelDisabled
    },
    iconColor: {
      type: String,
      default: checkboxGroup.iconColor
    },
    iconSize: {
      type: [String, Number],
      default: checkboxGroup.iconSize
    },
    iconPlacement: {
      type: String,
      default: checkboxGroup.iconPlacement
    },
    borderBottom: {
      type: Boolean,
      default: checkboxGroup.borderBottom
    }
  }
};
exports.props = props;
