"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userInfo: {},
      globalOption: {},
      globalData: {},
      search: ""
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
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.search,
    b: common_vendor.o(($event) => $data.search = $event.detail.value),
    c: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    d: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    e: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    f: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e3c62018"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/pages/message/messages.vue"]]);
wx.createPage(MiniProgramPage);
