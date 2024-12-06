"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userInfo: {},
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
    },
    AddRegistration() {
      fetch(`${server.site_add}/register/addRegistration
				/${this.currentAccount}
				/
				?authorization=${this.currentAuth}`).then((res) => res.json()).then((res) => {
        this.list = res;
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    b: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    c: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    d: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    e: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    f: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aca08607"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/pages/home/appointment/finish.vue"]]);
wx.createPage(MiniProgramPage);
