"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-dropdown-item",
  emits: ["update:modelValue", "input", "change"],
  props: {
    value: {
      type: [Number, String, Array],
      default: ""
    },
    modelValue: {
      type: [Number, String, Array],
      default: ""
    },
    title: {
      type: [String, Number],
      default: ""
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: "auto"
    }
  },
  data() {
    return {
      active: false,
      activeColor: "#19be6b",
      inactiveColor: "#606266"
    };
  },
  computed: {
    valueCom() {
      return this.modelValue;
    },
    propsChange() {
      return `${this.title}-${this.disabled}`;
    }
  },
  watch: {
    propsChange(n) {
      if (this.parent)
        this.parent.init();
    }
  },
  created() {
    this.parent = false;
  },
  methods: {
    init() {
      let parent = this.$u.$parent.call(this, "u-dropdown");
      if (parent) {
        this.parent = parent;
        this.activeColor = parent.activeColor;
        this.inactiveColor = parent.inactiveColor;
        let exist = parent.children.find((val) => {
          return this === val;
        });
        if (!exist)
          parent.children.push(this);
        if (parent.children.length == 1)
          this.active = true;
        parent.menuList.push({
          title: this.title,
          disabled: this.disabled
        });
      }
    },
    cellClick(value) {
      this.$emit("input", value);
      this.$emit("update:modelValue", value);
      this.parent.close();
      this.$emit("change", value);
    }
  },
  mounted() {
    this.init();
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_cell_item2 = common_vendor.resolveComponent("u-cell-item");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  (_easycom_u_icon2 + _easycom_u_cell_item2 + _easycom_u_cell_group2)();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_cell_item = () => "../u-cell-item/u-cell-item.js";
const _easycom_u_cell_group = () => "../u-cell-group/u-cell-group.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_cell_item + _easycom_u_cell_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.active
  }, $data.active ? common_vendor.e({
    b: !_ctx.$slots.default && !_ctx.$slots.$default
  }, !_ctx.$slots.default && !_ctx.$slots.$default ? {
    c: common_vendor.f($props.options, (item, index, i0) => {
      return common_vendor.e({
        a: $options.valueCom == item.value
      }, $options.valueCom == item.value ? {
        b: "838d49ed-2-" + i0 + "," + ("838d49ed-1-" + i0),
        c: common_vendor.p({
          name: "checkbox-mark",
          color: $data.activeColor,
          size: "32"
        })
      } : {}, {
        d: common_vendor.o(($event) => $options.cellClick(item.value), index),
        e: index,
        f: "838d49ed-1-" + i0 + ",838d49ed-0",
        g: common_vendor.p({
          arrow: false,
          title: item.label || item.text,
          ["title-style"]: {
            color: $options.valueCom == item.value ? $data.activeColor : $data.inactiveColor
          }
        })
      });
    }),
    d: _ctx.$u.addUnit($props.height)
  } : {}, {
    e: common_vendor.o(() => {
    }),
    f: common_vendor.o(() => {
    })
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-838d49ed"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/uni_modules/diy-uview-ui/components/u-dropdown-item/u-dropdown-item.vue"]]);
wx.createComponent(Component);
