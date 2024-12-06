"use strict";
const common_Global = require("../../common/Global.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userInfo: {
        name: "",
        phone: "",
        vip: "",
        nationality: ""
      },
      globalOption: {},
      globalData: {}
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
      var auth = "patient";
      var account = "456";
      sessionStorage.setItem("auth", JSON.stringify(auth));
      sessionStorage.setItem("account", JSON.stringify(account));
      fetch(`${common_Global.server.site_add}/patient/${account}?authorization=${auth}`).then((res) => res.json()).then((res) => {
        this.userInfo.name = res.name;
        this.userInfo.phone = res.phone;
        this.userInfo.nationality = res.nationality;
        this.userInfo.vip = (res.vip = 1) ? "VIP" : "Common User";
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    b: common_vendor.t($data.userInfo.name),
    c: common_vendor.t($data.userInfo.phone),
    d: common_vendor.t($data.userInfo.vip),
    e: common_vendor.t($data.userInfo.nationality),
    f: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    g: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    h: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    i: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    j: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    k: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    l: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    m: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    n: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-19c123a7"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
