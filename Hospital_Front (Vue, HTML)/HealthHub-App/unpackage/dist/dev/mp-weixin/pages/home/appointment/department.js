"use strict";
const common_Global = require("../../../common/Global.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [],
      userInfo: {},
      globalOption: {},
      globalData: {},
      search1: ""
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
      fetch(`${common_Global.server.site_add}/doctor/departments?authorization=${this.currentAuth}`).then((res) => res.json()).then((res) => {
        this.list = res;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.search1,
    b: common_vendor.o(($event) => $data.search1 = $event.detail.value),
    c: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    d: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    e: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    f: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    g: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.description)
      };
    }),
    h: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3a8da1f0"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/pages/home/appointment/department.vue"]]);
wx.createPage(MiniProgramPage);
