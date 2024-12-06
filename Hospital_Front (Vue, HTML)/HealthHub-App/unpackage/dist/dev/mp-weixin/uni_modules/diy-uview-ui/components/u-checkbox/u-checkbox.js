"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_diyUviewUi_components_uCheckbox_props = require("./props.js");
const _sfc_main = {
  name: "u-checkbox",
  mixins: [uni_modules_diyUviewUi_components_uCheckbox_props.props],
  data() {
    return {
      isChecked: false,
      parentData: {
        iconSize: 12,
        labelDisabled: null,
        disabled: null,
        shape: "square",
        activeColor: null,
        inactiveColor: null,
        size: 18,
        value: null,
        iconColor: null,
        placement: "row",
        borderBottom: false,
        iconPlacement: "left"
      }
    };
  },
  computed: {
    elDisabled() {
      return this.disabled !== "" ? this.disabled : this.parentData.disabled !== null ? this.parentData.disabled : false;
    },
    elLabelDisabled() {
      return this.labelDisabled !== "" ? this.labelDisabled : this.parentData.labelDisabled !== null ? this.parentData.labelDisabled : false;
    },
    elSize() {
      return this.size ? this.size : this.parentData.size ? this.parentData.size : 21;
    },
    elIconSize() {
      return this.iconSize ? this.iconSize : this.parentData.iconSize ? this.parentData.iconSize : 12;
    },
    elActiveColor() {
      return this.activeColor ? this.activeColor : this.parentData.activeColor ? this.parentData.activeColor : "#2979ff";
    },
    elInactiveColor() {
      return this.inactiveColor ? this.inactiveColor : this.parentData.inactiveColor ? this.parentData.inactiveColor : "#c8c9cc";
    },
    elLabelColor() {
      return this.labelColor ? this.labelColor : this.parentData.labelColor ? this.parentData.labelColor : "#606266";
    },
    elShape() {
      return this.shape ? this.shape : this.parentData.shape ? this.parentData.shape : "circle";
    },
    elLabelSize() {
      let labelSize = this.labelSize ? this.labelSize : this.parentData.labelSize;
      if (!labelSize) {
        return "inherit";
      }
      return common_vendor.index.$u.addUnit(labelSize + "px");
    },
    elIconColor() {
      const iconColor = this.iconColor ? this.iconColor : this.parentData.iconColor ? this.parentData.iconColor : "#ffffff";
      if (this.elDisabled) {
        return this.isChecked ? this.elInactiveColor : "transparent";
      } else {
        return this.isChecked ? iconColor : "transparent";
      }
    },
    iconClasses() {
      let classes = [];
      classes.push("u-checkbox__icon-wrap--" + this.elShape);
      if (this.elDisabled) {
        classes.push("u-checkbox__icon-wrap--disabled");
      }
      if (this.isChecked && this.elDisabled) {
        classes.push("u-checkbox__icon-wrap--disabled--checked");
      }
      return classes;
    },
    iconWrapStyle() {
      const style = {};
      style.backgroundColor = this.isChecked && !this.elDisabled ? this.elActiveColor : "#ffffff";
      style.borderColor = this.isChecked && !this.elDisabled ? this.elActiveColor : this.elInactiveColor;
      style.width = common_vendor.index.$u.addUnit(this.elSize + "px");
      style.height = common_vendor.index.$u.addUnit(this.elSize + "px");
      if (this.parentData.iconPlacement === "right") {
        style.marginRight = 0;
      }
      return style;
    },
    checkboxStyle() {
      const style = {};
      if (this.parentData.borderBottom && this.parentData.placement === "row") {
        common_vendor.index.$u.error("\u68C0\u6D4B\u5230\u60A8\u5C06borderBottom\u8BBE\u7F6E\u4E3Atrue\uFF0C\u9700\u8981\u540C\u65F6\u5C06u-checkbox-group\u7684placement\u8BBE\u7F6E\u4E3Acolumn\u624D\u6709\u6548");
      }
      if (this.parentData.borderBottom && this.parentData.placement === "column") {
        style.paddingBottom = "8px";
      }
      return common_vendor.index.$u.deepMerge(style, common_vendor.index.$u.addStyle(this.customStyle));
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.updateParentData();
      if (!this.parent) {
        common_vendor.index.$u.error("u-checkbox\u5FC5\u987B\u642D\u914Du-checkbox-group\u7EC4\u4EF6\u4F7F\u7528");
      }
      if (this.checked) {
        this.isChecked = true;
      } else if (common_vendor.index.$u.test.array(this.parentData.value)) {
        this.isChecked = this.parentData.value.some((item) => {
          return item === this.name;
        });
      }
    },
    updateParentData() {
      this.getParentData("u-checkbox-group");
    },
    wrapperClickHandler(e) {
      this.parentData.iconPlacement === "right" && this.iconClickHandler(e);
    },
    iconClickHandler(e) {
      this.preventEvent(e);
      if (!this.elDisabled) {
        this.setRadioCheckedStatus();
      }
    },
    labelClickHandler(e) {
      this.preventEvent(e);
      if (!this.elLabelDisabled && !this.elDisabled) {
        this.setRadioCheckedStatus();
      }
    },
    emitEvent() {
      this.$emit("change", this.isChecked);
    },
    setRadioCheckedStatus() {
      this.isChecked = !this.isChecked;
      this.emitEvent();
      typeof this.parent.unCheckedOther === "function" && this.parent.unCheckedOther(this);
    }
  },
  watch: {
    checked() {
      this.isChecked = this.checked;
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "checkbox-mark",
      size: $options.elIconSize,
      color: $options.elIconColor
    }),
    b: common_vendor.o((...args) => $options.iconClickHandler && $options.iconClickHandler(...args)),
    c: common_vendor.n($options.iconClasses),
    d: common_vendor.s($options.iconWrapStyle),
    e: common_vendor.o((...args) => $options.labelClickHandler && $options.labelClickHandler(...args)),
    f: $options.elDisabled ? $options.elInactiveColor : $options.elLabelColor,
    g: $options.elLabelSize,
    h: $options.elLabelSize,
    i: common_vendor.s($options.checkboxStyle),
    j: common_vendor.o((...args) => $options.wrapperClickHandler && $options.wrapperClickHandler(...args)),
    k: common_vendor.n(`u-checkbox-label--${$data.parentData.iconPlacement}`),
    l: common_vendor.n($data.parentData.borderBottom && $data.parentData.placement === "column" && "u-border-bottom")
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a25f12a0"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/uni_modules/diy-uview-ui/components/u-checkbox/u-checkbox.vue"]]);
wx.createComponent(Component);
