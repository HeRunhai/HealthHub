"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-mask",
  emits: ["click"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: ""
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    zoom: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    maskClickAble: {
      type: Boolean,
      default: true
    },
    blur: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      zoomStyle: {
        transform: ""
      },
      scale: "scale(1.2, 1.2)"
    };
  },
  watch: {
    show(n) {
      if (n && this.zoom) {
        this.zoomStyle.transform = "scale(1, 1)";
      } else if (!n && this.zoom) {
        this.zoomStyle.transform = this.scale;
      }
    }
  },
  computed: {
    maskStyle() {
      let style = {};
      style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      if (this.show)
        style.zIndex = this.zIndex ? this.zIndex : this.$u.zIndex.mask;
      else
        style.zIndex = -1;
      style.transition = `all ${this.duration / 1e3}s ease-in-out`;
      if (Object.keys(this.customStyle).length)
        style = {
          ...style,
          ...this.customStyle
        };
      return style;
    },
    filterStyle() {
      let { blur } = this;
      let style = {};
      if (blur) {
        style.backdropFilter = `blur(${blur}rpx)`;
      }
      return style;
    }
  },
  methods: {
    click() {
      if (!this.maskClickAble)
        return;
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($options.maskStyle),
    b: common_vendor.s($data.zoomStyle),
    c: common_vendor.s($options.filterStyle),
    d: common_vendor.o((...args) => $options.click && $options.click(...args)),
    e: common_vendor.o(() => {
    }),
    f: $props.zoom ? 1 : "",
    g: $props.show ? 1 : ""
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0883ba89"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/uni_modules/diy-uview-ui/components/u-mask/u-mask.vue"]]);
wx.createComponent(Component);
