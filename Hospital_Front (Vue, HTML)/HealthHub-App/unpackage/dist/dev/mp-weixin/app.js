"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const common_Page = require("./common/Page.js");
const common_Tools = require("./common/Tools.js");
const common_HttpService = require("./common/HttpService.js");
const common_Session = require("./common/Session.js");
const uni_modules_diyUviewUi_index = require("./uni_modules/diy-uview-ui/index.js");
require("./common/Validate.js");
require("./common/Login.js");
require("./common/Pay.js");
require("./siteinfo.js");
require("./common/ServiceBase.js");
require("./uni_modules/diy-uview-ui/libs/mixin/mixin.js");
require("./uni_modules/diy-uview-ui/libs/request/index.js");
require("./uni_modules/diy-uview-ui/libs/function/deepMerge.js");
require("./uni_modules/diy-uview-ui/libs/function/deepClone.js");
require("./uni_modules/diy-uview-ui/libs/function/test.js");
require("./uni_modules/diy-uview-ui/libs/function/queryParams.js");
require("./uni_modules/diy-uview-ui/libs/function/route.js");
require("./uni_modules/diy-uview-ui/libs/function/timeFormat.js");
require("./uni_modules/diy-uview-ui/libs/function/timeFrom.js");
require("./uni_modules/diy-uview-ui/libs/function/colorGradient.js");
require("./uni_modules/diy-uview-ui/libs/function/guid.js");
require("./uni_modules/diy-uview-ui/libs/function/color.js");
require("./uni_modules/diy-uview-ui/libs/function/type2icon.js");
require("./uni_modules/diy-uview-ui/libs/function/randomArray.js");
require("./uni_modules/diy-uview-ui/libs/function/addUnit.js");
require("./uni_modules/diy-uview-ui/libs/function/random.js");
require("./uni_modules/diy-uview-ui/libs/function/trim.js");
require("./uni_modules/diy-uview-ui/libs/function/addStyle.js");
require("./uni_modules/diy-uview-ui/libs/function/toast.js");
require("./uni_modules/diy-uview-ui/libs/function/getParent.js");
require("./uni_modules/diy-uview-ui/libs/function/_parent.js");
require("./uni_modules/diy-uview-ui/libs/function/sys.js");
require("./uni_modules/diy-uview-ui/libs/function/debounce.js");
require("./uni_modules/diy-uview-ui/libs/function/throttle.js");
require("./uni_modules/diy-uview-ui/libs/config/config.js");
require("./uni_modules/diy-uview-ui/libs/config/zIndex.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/home/appointment/department.js";
  "./pages/home/appointment/doctors_list.js";
  "./pages/home/appointment/doctor_page.js";
  "./pages/home/appointment/finish.js";
  "./pages/home/consultation/doctors_list.js";
  "./pages/message/messages.js";
  "./pages/records/records.js";
  "./pages/me/me.js";
  "./pages/me/mycard/mycard.js";
  "./pages/webview.js";
}
const _sfc_main = {
  globalData: {
    userInfo: null,
    tabBar: [],
    homePage: "/pages/home/home",
    pages: ["/pages/home/home", "/pages/home/appointment/department", "/pages/home/appointment/doctors_list", "/pages/home/appointment/doctor_page", "/pages/home/appointment/finish", "/pages/home/consultation/doctors_list", "/pages/message/messages", "/pages/records/records", "/pages/me/me", "/pages/me/mycard/mycard"],
    userData: {}
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-No header/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.config.globalProperties.$tools = new common_Tools.Tools();
  app.config.globalProperties.$http = new common_HttpService.Service();
  app.config.globalProperties.$session = common_Session.Session;
  common_vendor.index.getSystemInfo({
    success: function(e) {
      app.config.globalProperties.StatusBar = e.statusBarHeight;
      let custom = common_vendor.wx$1.getMenuButtonBoundingClientRect();
      app.config.globalProperties.Custom = custom;
      app.config.globalProperties.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
    }
  });
  app.mixin({
    methods: {
      setCurrentPage: common_Page.setCurrentPage,
      Validate: common_Page.Validate,
      setData: common_Page.setData,
      navigateTo: common_Page.navigateTo,
      showModal: common_Page.showModal,
      showToast: common_Page.showToast,
      getPickerChildren: common_Page.getPickerChildren,
      uploadImage: common_Page.uploadImage,
      getOption: common_Page.getOption
    }
  });
  app.use(uni_modules_diyUviewUi_index.uView);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
