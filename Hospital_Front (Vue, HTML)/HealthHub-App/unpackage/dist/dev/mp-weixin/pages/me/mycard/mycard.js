"use strict";
const common_Global = require("../../../common/Global.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userInfo: {
        name: "",
        avatar: "",
        gender: "",
        birth: "",
        passport: "",
        phone: "",
        address: "",
        nationality: ""
      },
      globalOption: {},
      globalData: {},
      inputFocus: false,
      checkboxDatas: [
        {
          value: "1",
          label: "Male",
          checked: true
        },
        {
          value: "2",
          label: "Female",
          checked: false
        }
      ],
      showDate: false,
      checkbox: [""],
      date: "",
      input3Focus: false,
      input1Focus: false,
      input2Focus: false
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
    let auth = sessionStorage.getItem("auth");
    let account = sessionStorage.getItem("account");
    if (auth != null) {
      this.currentAuth = JSON.parse(auth);
    }
    if (account != null) {
      this.currentAccount = JSON.parse(account);
    }
    this.init();
  },
  methods: {
    async init() {
      fetch(`${common_Global.server.site_add}/patient/${this.currentAccount}?authorization=${this.currentAuth}`).then((res) => res.json()).then((res) => {
        this.userInfo.name = res.name;
        this.userInfo.avatar = res.avatar;
        this.userInfo.gender = res.gender;
        this.checkbox = (res.gender = "Male") ? ["1"] : ["2"];
        this.userInfo.birth = res.birth;
        this.userInfo.passport = res.passport;
        this.userInfo.phone = res.phone;
        this.userInfo.address = res.address;
        this.userInfo.nationality = res.nationality;
      });
    },
    changeCheckbox(evt) {
    },
    changeDate(evt) {
      this.date = evt.result;
    }
  }
};
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  const _easycom_u_calendar2 = common_vendor.resolveComponent("u-calendar");
  (_easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_checkbox2 + _easycom_u_checkbox_group2 + _easycom_u_calendar2)();
}
const _easycom_u_input = () => "../../../uni_modules/diy-uview-ui/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../../uni_modules/diy-uview-ui/components/u-form-item/u-form-item.js";
const _easycom_u_checkbox = () => "../../../uni_modules/diy-uview-ui/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../../../uni_modules/diy-uview-ui/components/u-checkbox-group/u-checkbox-group.js";
const _easycom_u_calendar = () => "../../../uni_modules/diy-uview-ui/components/u-calendar/u-calendar.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_form_item + _easycom_u_checkbox + _easycom_u_checkbox_group + _easycom_u_calendar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.userInfo.name = $event),
    b: common_vendor.p({
      focus: $data.inputFocus,
      placeholder: "Please input",
      type: "text",
      modelValue: $data.userInfo.name
    }),
    c: common_vendor.p({
      label: "Name",
      prop: "input"
    }),
    d: common_vendor.f($data.checkboxDatas, (checkboxitem, checkboxindex, i0) => {
      return {
        a: common_vendor.t(checkboxitem.label),
        b: checkboxindex,
        c: "a4b64241-4-" + i0 + ",a4b64241-3",
        d: common_vendor.o(($event) => checkboxitem.checked = $event, checkboxindex),
        e: common_vendor.p({
          name: checkboxitem.value,
          modelValue: checkboxitem.checked
        })
      };
    }),
    e: common_vendor.o($options.changeCheckbox),
    f: common_vendor.o(($event) => $data.checkbox = $event),
    g: common_vendor.p({
      wrapClass: " justify-start",
      activeColor: "#8dc63f",
      modelValue: $data.checkbox
    }),
    h: common_vendor.p({
      label: "Gender",
      required: true,
      prop: "checkbox"
    }),
    i: common_vendor.o(($event) => $data.showDate = true),
    j: common_vendor.o(($event) => $data.userInfo.birth = $event),
    k: common_vendor.p({
      placeholder: "Please choose",
      type: "select",
      modelValue: $data.userInfo.birth
    }),
    l: common_vendor.p({
      label: "Birthday",
      required: true,
      prop: "date"
    }),
    m: common_vendor.o($options.changeDate),
    n: common_vendor.o(($event) => $data.showDate = $event),
    o: common_vendor.p({
      maxDate: "2050-12-31",
      mode: "date",
      modelValue: $data.showDate
    }),
    p: common_vendor.o(($event) => $data.userInfo.passport = $event),
    q: common_vendor.p({
      focus: $data.input3Focus,
      placeholder: "Please input",
      type: "text",
      modelValue: $data.userInfo.passport
    }),
    r: common_vendor.p({
      label: "Passport",
      prop: "input3"
    }),
    s: common_vendor.o(($event) => $data.userInfo.phone = $event),
    t: common_vendor.p({
      focus: $data.input1Focus,
      placeholder: "Please input",
      type: "text",
      modelValue: $data.userInfo.phone
    }),
    v: common_vendor.p({
      label: "Phone",
      prop: "input1"
    }),
    w: common_vendor.o(($event) => $data.userInfo.address = $event),
    x: common_vendor.p({
      focus: $data.input2Focus,
      placeholder: "Please input",
      type: "text",
      modelValue: $data.userInfo.address
    }),
    y: common_vendor.p({
      label: "Address",
      prop: "input2"
    }),
    z: common_vendor.o(($event) => $data.userInfo.nationality = $event),
    A: common_vendor.p({
      focus: $data.input2Focus,
      placeholder: "Please input",
      type: "text",
      modelValue: $data.userInfo.nationality
    }),
    B: common_vendor.p({
      label: "Nationality",
      prop: "input2"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a4b64241"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/pages/me/mycard/mycard.vue"]]);
wx.createPage(MiniProgramPage);
