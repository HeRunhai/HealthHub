"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userInfo: {},
      globalOption: {},
      globalData: {},
      tabsDatas: [
        { text: `Outpatient service`, icon: `` },
        { text: `Hospitalization`, icon: `` }
      ],
      tabsTimer: null,
      tabsMainIndex: 0,
      tabsLeft: 0,
      tabsWidth: 0,
      tabsItemWidth: 0,
      tabsIndex: 0
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
    scrolltoupperFlex8(evt) {
    },
    scrolltolowerFlex8(evt) {
    },
    scrolltoupperFlex3(evt) {
    },
    scrolltolowerFlex3(evt) {
    },
    scrolltoupperFlex4(evt) {
    },
    scrolltolowerFlex4(evt) {
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
        tabsIndex: index
      });
      this.setTabsStatus(index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.scrolltoupperFlex3 && $options.scrolltoupperFlex3(...args)),
    b: common_vendor.o((...args) => $options.scrolltolowerFlex3 && $options.scrolltolowerFlex3(...args)),
    c: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    d: common_vendor.o((...args) => $options.scrolltoupperFlex4 && $options.scrolltoupperFlex4(...args)),
    e: common_vendor.o((...args) => $options.scrolltolowerFlex4 && $options.scrolltolowerFlex4(...args)),
    f: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    g: common_vendor.o((...args) => $options.scrolltoupperFlex8 && $options.scrolltoupperFlex8(...args)),
    h: common_vendor.o((...args) => $options.scrolltolowerFlex8 && $options.scrolltolowerFlex8(...args)),
    i: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    j: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    k: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    l: common_vendor.f($data.tabsDatas, (item, index, i0) => {
      return common_vendor.e({
        a: item.icon
      }, item.icon ? {
        b: common_vendor.n(item.icon)
      } : {}, {
        c: common_vendor.t(item.text),
        d: "scroll-" + index,
        e: common_vendor.n(index == $data.tabsIndex ? " cur text-green " : ""),
        f: index,
        g: common_vendor.o((...args) => $options.changeTabs && $options.changeTabs(...args), index),
        h: index
      });
    }),
    m: "scroll-" + $data.tabsIndex,
    n: $data.tabsLeft,
    o: $data.tabsIndex == 0
  }, $data.tabsIndex == 0 ? {
    p: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    q: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    r: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    s: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args))
  } : {}, {
    t: $data.tabsIndex == 1
  }, $data.tabsIndex == 1 ? {
    v: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
    w: common_vendor.o((...args) => _ctx.navigateTo && _ctx.navigateTo(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-07e72d3c"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
