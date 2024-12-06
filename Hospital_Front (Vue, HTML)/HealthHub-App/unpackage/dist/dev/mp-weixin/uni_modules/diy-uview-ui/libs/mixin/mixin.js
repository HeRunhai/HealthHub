"use strict";
const common_vendor = require("../../../../common/vendor.js");
const mixin = {
  data() {
    return {};
  },
  onLoad() {
    this.$u.getRect = this.$uGetRect;
  },
  created() {
    this.$u.getRect = this.$uGetRect;
  },
  computed: {
    $u() {
      return common_vendor.index.$u.deepMerge(common_vendor.index.$u, {
        props: void 0,
        http: void 0,
        mixin: void 0
      });
    },
    bem() {
      return function(name, fixed, change) {
        const prefix = `u-${name}--`;
        const classes = {};
        if (fixed) {
          fixed.map((item) => {
            classes[prefix + this[item]] = true;
          });
        }
        if (change) {
          change.map((item) => {
            this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
          });
        }
        return Object.keys(classes);
      };
    }
  },
  methods: {
    openPage(urlKey = "url") {
      const url = this[urlKey];
      if (url) {
        common_vendor.index[this.linkType]({
          url
        });
      }
    },
    $uGetRect(selector, all) {
      return new Promise((resolve) => {
        common_vendor.index.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    },
    getParentData(parentName = "") {
      if (!this.parent)
        this.parent = {};
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent.children) {
        this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
      }
      if (this.parent && this.parentData) {
        Object.keys(this.parentData).map((key) => {
          this.parentData[key] = this.parent[key];
        });
        this.parentData.value = this.parent.modelValue;
      }
    },
    preventEvent(e) {
      e && typeof e.stopPropagation === "function" && e.stopPropagation();
    },
    noop(e) {
      this.preventEvent(e);
    }
  },
  onReachBottom() {
    common_vendor.index.$emit("uOnReachBottom");
  },
  beforeUnmount() {
    if (this.parent && common_vendor.index.$u.test.array(this.parent.children)) {
      const childrenList = this.parent.children;
      childrenList.map((child, index) => {
        if (child === this) {
          childrenList.splice(index, 1);
        }
      });
    }
  }
};
exports.mixin = mixin;
