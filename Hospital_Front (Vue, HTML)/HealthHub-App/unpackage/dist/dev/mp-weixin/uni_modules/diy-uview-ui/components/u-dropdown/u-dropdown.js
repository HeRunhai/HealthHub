"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-dropdown",
  emits: ["open", "close"],
  props: {
    activeColor: {
      type: String,
      default: "inherit"
    },
    inactiveColor: {
      type: String,
      default: "#606266"
    },
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    closeOnClickSelf: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    height: {
      type: [Number, String],
      default: 80
    },
    borderBottom: {
      type: Boolean,
      default: false
    },
    titleSize: {
      type: [Number, String],
      default: 28
    },
    borderRadius: {
      type: [Number, String],
      default: 0
    },
    menuIcon: {
      type: String,
      default: "arrow-down"
    },
    menuIconSize: {
      type: [Number, String],
      default: 26
    }
  },
  data() {
    return {
      showDropdown: true,
      menuList: [],
      active: false,
      current: 99999,
      contentStyle: {
        zIndex: -1,
        opacity: 0
      },
      highlightIndex: 99999,
      contentHeight: 0
    };
  },
  computed: {
    popupStyle() {
      let style = {};
      style.transform = `translateY(${this.active ? 0 : "-100%"})`;
      style["transition-duration"] = this.duration / 1e3 + "s";
      style.borderRadius = `0 0 ${this.$u.addUnit(this.borderRadius)} ${this.$u.addUnit(this.borderRadius)}`;
      return style;
    }
  },
  created() {
    this.children = [];
  },
  mounted() {
    this.getContentHeight();
  },
  methods: {
    init() {
      this.menuList = [];
      this.children.map((child) => {
        child.init();
      });
    },
    menuClick(index) {
      if (this.menuList[index].disabled)
        return;
      if (index === this.current && this.closeOnClickSelf) {
        this.close();
        setTimeout(() => {
          this.children[index].active = false;
        }, this.duration);
        return;
      }
      this.open(index);
    },
    open(index) {
      this.contentStyle = {
        zIndex: 11
      };
      this.active = true;
      this.current = index;
      this.children.map((val, idx) => {
        val.active = index == idx ? true : false;
      });
      this.$emit("open", this.current);
    },
    close() {
      this.$emit("close", this.current);
      this.active = false;
      this.current = 99999;
      this.contentStyle = {
        zIndex: -1,
        opacity: 0
      };
    },
    maskClick() {
      if (!this.closeOnClickMask)
        return;
      this.close();
    },
    highlight(index = void 0) {
      this.highlightIndex = index !== void 0 ? index : 99999;
    },
    getContentHeight() {
      let windowHeight = this.$u.sys().windowHeight;
      this.$uGetRect(".u-dropdown__menu").then((res) => {
        this.contentHeight = windowHeight - res.bottom;
      });
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
    a: common_vendor.f($data.menuList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: "0ad5aceb-0-" + i0,
        c: common_vendor.p({
          ["custom-style"]: {
            display: "flex"
          },
          name: $props.menuIcon,
          size: _ctx.$u.addUnit($props.menuIconSize),
          color: index === $data.current || $data.highlightIndex == index ? $props.activeColor : "#c0c4cc"
        }),
        d: index === $data.current ? 1 : "",
        e: index,
        f: common_vendor.o(($event) => $options.menuClick(index), index)
      };
    }),
    b: _ctx.$u.addUnit($props.titleSize),
    c: _ctx.$u.addUnit($props.height),
    d: $props.borderBottom ? 1 : "",
    e: common_vendor.o(() => {
    }),
    f: common_vendor.s($options.popupStyle),
    g: common_vendor.s($data.contentStyle),
    h: common_vendor.s({
      transition: `opacity ${$props.duration / 1e3}s linear`,
      top: _ctx.$u.addUnit($props.height),
      height: $data.active ? $data.contentHeight + "px" : "0px"
    }),
    i: common_vendor.o((...args) => $options.maskClick && $options.maskClick(...args)),
    j: common_vendor.o(() => {
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0ad5aceb"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/uni_modules/diy-uview-ui/components/u-dropdown/u-dropdown.vue"]]);
wx.createComponent(Component);
