"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userInfo: {},
      globalOption: {},
      globalData: {},
      tabsDatas: [
        { text: `Outpatient appointment`, icon: `diy-icon-calendar` },
        { text: `Consultation Reservation`, icon: `diy-icon-community` }
      ],
      tabsTimer: null,
      tabsMainIndex: 0,
      tabsLeft: 0,
      tabsWidth: 0,
      tabsItemWidth: 0,
      tabsLoad: true,
      tabsIndex: 0,
      form: {
        date1: "",
        textarea1: "",
        textarea2: ""
      },
      formRules: {},
      formData: {
        showDate1: false
      }
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
  onReady() {
    var _a;
    (_a = this.$refs.formRef) == null ? void 0 : _a.setRules(this.formRules);
  },
  methods: {
    async init() {
    },
    scrolltoupperFlex8(evt) {
    },
    scrolltolowerFlex8(evt) {
    },
    scrolltoupperFlex5(evt) {
    },
    scrolltolowerFlex5(evt) {
    },
    getElTabsRect(elClass, dataVal) {
      new Promise((resolve, reject) => {
        const query = common_vendor.index.createSelectorQuery().in(this);
        query.select("." + elClass).fields(
          {
            size: true
          },
          (res) => {
            if (!res) {
              setTimeout(() => {
                this.getElTabsRect(elClass);
              }, 10);
              return;
            }
            this[dataVal] = res.width;
            resolve();
          }
        ).exec();
      });
    },
    async setTabsStatus(index) {
      this.current = index;
      if (this.tabsWidth == 0 || this.tabsItemWidth == 0) {
        await this.getElTabsRect("tabs-title", "tabsWidth");
        await this.getElTabsRect("tabs-item-title", "tabsItemWidth");
      }
      this.tabsLeft = index * this.tabsItemWidth + this.tabsItemWidth / 2 - this.tabsWidth / 2;
    },
    changeTabs(evt) {
      let { index } = evt.currentTarget.dataset;
      if (index == this.tabsIndex)
        return;
      this.setData({
        tabsIndex: index,
        tabsMainIndex: index
      });
      this.setTabsStatus(index);
    },
    rightScrollTabs(evt) {
      let tabsLoad = this.tabsLoad;
      let that = this;
      let cates = this.tabsDatas;
      let tabHeight = 0;
      if (this.tabsTimer)
        return;
      if (tabsLoad) {
        for (let i = 0; i < cates.length; i++) {
          let view = common_vendor.wx$1.createSelectorQuery().select("#tabs-content-" + i);
          view.fields(
            {
              size: true
            },
            (data) => {
              cates[i].top = tabHeight;
              tabHeight = tabHeight + data.height;
              cates[i].bottom = tabHeight;
            }
          ).exec();
        }
        that.setData({
          tabsLoad: false,
          tabsDatas: cates
        });
      }
      setTimeout(() => {
        this.tabsTimer = null;
        let scrollTop = evt.detail.scrollTop + 20;
        for (let i = 0; i < cates.length; i++) {
          if (scrollTop > cates[i].top && scrollTop < cates[i].bottom) {
            that.setData({
              tabsIndex: i
            });
            this.setTabsStatus(i);
            return false;
          }
        }
      }, 20);
    },
    changeFormDate1(evt) {
      this.form.date1 = evt.result;
    },
    async submitForm(e) {
      let valid = await this.$refs.formRef.validate();
      if (valid) {
        this.form;
        {
          this.showToast("\u8BF7\u5148\u914D\u7F6E\u8868\u5355\u63D0\u4EA4\u5730\u5740", "none");
          return false;
        }
      } else {
        console.log("\u9A8C\u8BC1\u5931\u8D25");
      }
    }
  }
};
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_calendar2 = common_vendor.resolveComponent("u-calendar");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  (_easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_calendar2 + _easycom_u_form2)();
}
const _easycom_u_input = () => "../../../uni_modules/diy-uview-ui/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../../uni_modules/diy-uview-ui/components/u-form-item/u-form-item.js";
const _easycom_u_calendar = () => "../../../uni_modules/diy-uview-ui/components/u-calendar/u-calendar.js";
const _easycom_u_form = () => "../../../uni_modules/diy-uview-ui/components/u-form/u-form.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_form_item + _easycom_u_calendar + _easycom_u_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.scrolltoupperFlex8 && $options.scrolltoupperFlex8(...args)),
    b: common_vendor.o((...args) => $options.scrolltolowerFlex8 && $options.scrolltolowerFlex8(...args)),
    c: common_vendor.o((...args) => $options.scrolltoupperFlex5 && $options.scrolltoupperFlex5(...args)),
    d: common_vendor.o((...args) => $options.scrolltolowerFlex5 && $options.scrolltolowerFlex5(...args)),
    e: common_vendor.f($data.tabsDatas, (item, index, i0) => {
      return common_vendor.e({
        a: item.icon
      }, item.icon ? {
        b: common_vendor.n(item.icon)
      } : {}, {
        c: common_vendor.t(item.text),
        d: common_vendor.n(index == $data.tabsIndex ? " tabs-title-cur  cur text-green " : ""),
        e: index,
        f: common_vendor.o((...args) => $options.changeTabs && $options.changeTabs(...args), index),
        g: index
      });
    }),
    f: "scroll-" + $data.tabsIndex,
    g: $data.tabsLeft,
    h: common_vendor.o(($event) => $data.formData.showDate1 = true),
    i: common_vendor.o(($event) => $data.form.date1 = $event),
    j: common_vendor.p({
      placeholder: "",
      type: "select",
      modelValue: $data.form.date1
    }),
    k: common_vendor.p({
      label: "Date",
      prop: "date1"
    }),
    l: common_vendor.o($options.changeFormDate1),
    m: common_vendor.o(($event) => $data.formData.showDate1 = $event),
    n: common_vendor.p({
      maxDate: "2050-12-31",
      mode: "date",
      modelValue: $data.formData.showDate1
    }),
    o: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    p: "tabs-content-" + $data.tabsMainIndex,
    q: common_vendor.o((...args) => $options.rightScrollTabs && $options.rightScrollTabs(...args)),
    r: common_vendor.o(($event) => $data.form.textarea1 = $event),
    s: common_vendor.p({
      autoHeight: false,
      maxlength: "200",
      height: "60px",
      placeholder: "\u8BF7\u8F93\u5165\u63D0\u793A\u4FE1\u606F",
      type: "textarea",
      modelValue: $data.form.textarea1
    }),
    t: common_vendor.p({
      label: "Education",
      prop: "textarea1"
    }),
    v: common_vendor.o(($event) => $data.form.textarea2 = $event),
    w: common_vendor.p({
      autoHeight: false,
      maxlength: "200",
      height: "60px",
      placeholder: "\u8BF7\u8F93\u5165\u63D0\u793A\u4FE1\u606F",
      type: "textarea",
      modelValue: $data.form.textarea2
    }),
    x: common_vendor.p({
      label: "Career",
      prop: "textarea2"
    }),
    y: common_vendor.sr("formRef", "c2a8cec5-0"),
    z: common_vendor.p({
      model: $data.form,
      rules: $data.formRules,
      errorType: ["message", "toast"]
    }),
    A: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    B: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    C: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    D: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c2a8cec5"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/pages/home/appointment/doctor_page.vue"]]);
wx.createPage(MiniProgramPage);
