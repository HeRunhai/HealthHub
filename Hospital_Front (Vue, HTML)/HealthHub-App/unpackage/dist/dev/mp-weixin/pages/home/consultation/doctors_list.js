"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userInfo: {},
      globalOption: {},
      globalData: {},
      dropdowns0: "",
      dropdowns1: "",
      dropdownsDatas0: [
        { text: "emergency department", value: 0 },
        { text: "gynecology department", value: 1 },
        { text: "stomatology department", value: 2 },
        { text: "ear, nose and throat", value: 3 },
        { text: "ophthalmology department", value: 4 },
        { text: "padiatrics department", value: 5 }
      ],
      dropdownsDatas1: [
        { text: "all doctors", value: 0 },
        { text: "common doctors", value: 1 },
        { text: "specialists", value: 2 }
      ],
      showDate: false,
      date: ""
    };
  },
  onShow() {
    this.setCurrentPage(this);
  },
  onLoad(option) {
    this.setCurrentPage(this);
    if (option) {
      this.setData({
        globalOption: this.getOption(option)
      });
    }
    this.init();
  },
  methods: {
    async init() {
    },
    closeDropdowns() {
      this.$refs.refDropdowns.close();
    },
    changeDropdowns0(evt) {
      let item = this.dropdownsDatas0.find((item2) => {
        return item2.value == evt;
      });
      item && item.action && this.navigateTo(item.action);
    },
    changeDropdowns1(evt) {
      let item = this.dropdownsDatas1.find((item2) => {
        return item2.value == evt;
      });
      item && item.action && this.navigateTo(item.action);
    },
    changeDate(evt) {
      this.date = evt.result;
    },
    scrolltoupperFlex8(evt) {
    },
    scrolltolowerFlex8(evt) {
    },
    scrolltoupperFlex10(evt) {
    },
    scrolltolowerFlex10(evt) {
    }
  }
};
if (!Array) {
  const _easycom_u_dropdown_item2 = common_vendor.resolveComponent("u-dropdown-item");
  const _easycom_u_dropdown2 = common_vendor.resolveComponent("u-dropdown");
  const _easycom_diy_noticebar2 = common_vendor.resolveComponent("diy-noticebar");
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_calendar2 = common_vendor.resolveComponent("u-calendar");
  (_easycom_u_dropdown_item2 + _easycom_u_dropdown2 + _easycom_diy_noticebar2 + _easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_calendar2)();
}
const _easycom_u_dropdown_item = () => "../../../uni_modules/diy-uview-ui/components/u-dropdown-item/u-dropdown-item.js";
const _easycom_u_dropdown = () => "../../../uni_modules/diy-uview-ui/components/u-dropdown/u-dropdown.js";
const _easycom_diy_noticebar = () => "../../../components/diy-noticebar/diy-noticebar.js";
const _easycom_u_input = () => "../../../uni_modules/diy-uview-ui/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../../uni_modules/diy-uview-ui/components/u-form-item/u-form-item.js";
const _easycom_u_calendar = () => "../../../uni_modules/diy-uview-ui/components/u-calendar/u-calendar.js";
if (!Math) {
  (_easycom_u_dropdown_item + _easycom_u_dropdown + _easycom_diy_noticebar + _easycom_u_input + _easycom_u_form_item + _easycom_u_calendar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    b: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    c: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    d: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    e: common_vendor.o($options.changeDropdowns0),
    f: common_vendor.o(($event) => $data.dropdowns0 = $event),
    g: common_vendor.p({
      title: "emergency department",
      options: $data.dropdownsDatas0,
      modelValue: $data.dropdowns0
    }),
    h: common_vendor.o($options.changeDropdowns1),
    i: common_vendor.o(($event) => $data.dropdowns1 = $event),
    j: common_vendor.p({
      title: "all doctors",
      options: $data.dropdownsDatas1,
      modelValue: $data.dropdowns1
    }),
    k: common_vendor.sr("refDropdowns", "d294b228-0"),
    l: common_vendor.p({
      direction: "down",
      ["close-on-click-overlay"]: "false"
    }),
    m: common_vendor.p({
      color: "#07c160",
      bgColor: "#fff",
      leftIcon: "diy-icon-notification"
    }),
    n: common_vendor.o(($event) => $data.showDate = true),
    o: common_vendor.o(($event) => $data.date = $event),
    p: common_vendor.p({
      placeholder: "Please choose expected date",
      type: "select",
      modelValue: $data.date
    }),
    q: common_vendor.p({
      label: "Date",
      prop: "date"
    }),
    r: common_vendor.o($options.changeDate),
    s: common_vendor.o(($event) => $data.showDate = $event),
    t: common_vendor.p({
      maxDate: "2050-12-31",
      mode: "date",
      modelValue: $data.showDate
    }),
    v: common_vendor.o((...args) => $options.scrolltoupperFlex10 && $options.scrolltoupperFlex10(...args)),
    w: common_vendor.o((...args) => $options.scrolltolowerFlex10 && $options.scrolltolowerFlex10(...args)),
    x: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    y: common_vendor.o((...args) => $options.scrolltoupperFlex8 && $options.scrolltoupperFlex8(...args)),
    z: common_vendor.o((...args) => $options.scrolltolowerFlex8 && $options.scrolltolowerFlex8(...args)),
    A: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    B: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d294b228"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/pages/home/consultation/doctors_list.vue"]]);
wx.createPage(MiniProgramPage);
