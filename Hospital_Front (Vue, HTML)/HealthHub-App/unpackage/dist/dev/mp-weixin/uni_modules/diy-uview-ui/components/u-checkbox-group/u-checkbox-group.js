"use strict";
const uni_modules_diyUviewUi_components_uCheckboxGroup_props = require("./props.js");
const uni_modules_diyUviewUi_libs_util_emitter = require("../../libs/util/emitter.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-checkbox-group",
  mixins: [uni_modules_diyUviewUi_libs_util_emitter.Emitter, uni_modules_diyUviewUi_components_uCheckboxGroup_props.props],
  computed: {
    parentData() {
      return [
        this.value,
        this.modelValue,
        this.disabled,
        this.inactiveColor,
        this.activeColor,
        this.size,
        this.labelDisabled,
        this.shape,
        this.iconSize,
        this.borderBottom,
        this.placement
      ];
    },
    bemClass() {
      return this.bem("checkbox-group", ["placement"]);
    }
  },
  watch: {
    parentData() {
      if (this.children.length) {
        this.children.map((child) => {
          typeof child.init === "function" && child.init();
        });
      }
    }
  },
  data() {
    return {};
  },
  created() {
    this.children = [];
  },
  methods: {
    unCheckedOther(childInstance) {
      const values = [];
      this.children.map((child) => {
        if (child.isChecked) {
          values.push(child.name);
        }
      });
      this.$emit("change", values);
      this.$emit("input", values);
      this.$emit("update:modelValue", values);
      setTimeout(() => {
        this.dispatch("u-form-item", "onFieldChange", values);
      }, 60);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($options.bemClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-36d61c26"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/uni_modules/diy-uview-ui/components/u-checkbox-group/u-checkbox-group.vue"]]);
wx.createComponent(Component);
