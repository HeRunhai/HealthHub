"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userInfo: {},
      globalOption: {},
      globalData: {},
      dropdowns10: "",
      dropdowns11: "",
      dropdowns1Datas0: [
        { text: "emergency department", value: 0 },
        { text: "gynecology department", value: 1 },
        { text: "stomatology department", value: 2 },
        { text: "ear, nose and throat", value: 3 },
        { text: "ophthalmology department", value: 4 },
        { text: "padiatrics department", value: 5 }
      ],
      dropdowns1Datas1: [
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
    closeDropdowns1() {
      this.$refs.refDropdowns1.close();
    },
    changeDropdowns10(evt) {
      let item = this.dropdowns1Datas0.find((item2) => {
        return item2.value == evt;
      });
      item && item.action && this.navigateTo(item.action);
    },
    changeDropdowns11(evt) {
      let item = this.dropdowns1Datas1.find((item2) => {
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
    },
    scrolltoupperFlex28(evt) {
    },
    scrolltolowerFlex28(evt) {
    },
    scrolltoupperFlex31(evt) {
    },
    scrolltolowerFlex31(evt) {
    }
  }
};
if (!Array) {
  const _easycom_u_dropdown_item2 = common_vendor.resolveComponent("u-dropdown-item");
  const _easycom_u_dropdown2 = common_vendor.resolveComponent("u-dropdown");
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_calendar2 = common_vendor.resolveComponent("u-calendar");
  (_easycom_u_dropdown_item2 + _easycom_u_dropdown2 + _easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_calendar2)();
}
const _easycom_u_dropdown_item = () => "../../../uni_modules/diy-uview-ui/components/u-dropdown-item/u-dropdown-item.js";
const _easycom_u_dropdown = () => "../../../uni_modules/diy-uview-ui/components/u-dropdown/u-dropdown.js";
const _easycom_u_input = () => "../../../uni_modules/diy-uview-ui/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../../uni_modules/diy-uview-ui/components/u-form-item/u-form-item.js";
const _easycom_u_calendar = () => "../../../uni_modules/diy-uview-ui/components/u-calendar/u-calendar.js";
if (!Math) {
  (_easycom_u_dropdown_item + _easycom_u_dropdown + _easycom_u_input + _easycom_u_form_item + _easycom_u_calendar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    b: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    c: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    d: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    e: common_vendor.o($options.changeDropdowns10),
    f: common_vendor.o(($event) => $data.dropdowns10 = $event),
    g: common_vendor.p({
      title: "emergency department",
      options: $data.dropdowns1Datas0,
      modelValue: $data.dropdowns10
    }),
    h: common_vendor.o($options.changeDropdowns11),
    i: common_vendor.o(($event) => $data.dropdowns11 = $event),
    j: common_vendor.p({
      title: "all doctors",
      options: $data.dropdowns1Datas1,
      modelValue: $data.dropdowns11
    }),
    k: common_vendor.sr("refDropdowns1", "ba9fce83-0"),
    l: common_vendor.p({
      direction: "down",
      ["close-on-click-overlay"]: "false"
    }),
    m: common_vendor.o(($event) => $data.showDate = true),
    n: common_vendor.o(($event) => $data.date = $event),
    o: common_vendor.p({
      placeholder: "Please choose expected date",
      type: "select",
      modelValue: $data.date
    }),
    p: common_vendor.p({
      label: "Date",
      prop: "date"
    }),
    q: common_vendor.o($options.changeDate),
    r: common_vendor.o(($event) => $data.showDate = $event),
    s: common_vendor.p({
      maxDate: "2050-12-31",
      mode: "date",
      modelValue: $data.showDate
    }),
    t: common_vendor.o((...args) => $options.scrolltoupperFlex10 && $options.scrolltoupperFlex10(...args)),
    v: common_vendor.o((...args) => $options.scrolltolowerFlex10 && $options.scrolltolowerFlex10(...args)),
    w: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    x: common_vendor.o((...args) => $options.scrolltoupperFlex8 && $options.scrolltoupperFlex8(...args)),
    y: common_vendor.o((...args) => $options.scrolltolowerFlex8 && $options.scrolltolowerFlex8(...args)),
    z: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    A: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    B: common_vendor.o((...args) => $options.scrolltoupperFlex31 && $options.scrolltoupperFlex31(...args)),
    C: common_vendor.o((...args) => $options.scrolltolowerFlex31 && $options.scrolltolowerFlex31(...args)),
    D: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    E: common_vendor.o((...args) => $options.scrolltoupperFlex28 && $options.scrolltoupperFlex28(...args)),
    F: common_vendor.o((...args) => $options.scrolltolowerFlex28 && $options.scrolltolowerFlex28(...args)),
    G: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    H: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ba9fce83"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/pages/home/appointment/doctors_list.vue"]]);
wx.createPage(MiniProgramPage);
