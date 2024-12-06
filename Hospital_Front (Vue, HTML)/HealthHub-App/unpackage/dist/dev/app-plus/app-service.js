if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$v = {
    name: "u-icon",
    emits: ["click", "touchstart"],
    props: {
      name: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: ""
      },
      size: {
        type: [Number, String],
        default: "inherit"
      },
      bold: {
        type: Boolean,
        default: false
      },
      index: {
        type: [Number, String],
        default: ""
      },
      hoverClass: {
        type: String,
        default: ""
      },
      customPrefix: {
        type: String,
        default: "uicon"
      },
      label: {
        type: [String, Number],
        default: ""
      },
      labelPos: {
        type: String,
        default: "right"
      },
      labelSize: {
        type: [String, Number],
        default: "28"
      },
      labelColor: {
        type: String,
        default: "#606266"
      },
      marginLeft: {
        type: [String, Number],
        default: "6"
      },
      marginTop: {
        type: [String, Number],
        default: "6"
      },
      marginRight: {
        type: [String, Number],
        default: "6"
      },
      marginBottom: {
        type: [String, Number],
        default: "6"
      },
      imgMode: {
        type: String,
        default: "widthFix"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      width: {
        type: [String, Number],
        default: ""
      },
      height: {
        type: [String, Number],
        default: ""
      },
      top: {
        type: [String, Number],
        default: 0
      },
      showDecimalIcon: {
        type: Boolean,
        default: false
      },
      inactiveColor: {
        type: String,
        default: "#ececec"
      },
      percent: {
        type: [Number, String],
        default: "50"
      }
    },
    computed: {
      customClass() {
        let classes = [];
        let { customPrefix, name } = this;
        let index = name.indexOf("-icon-");
        if (index > -1) {
          customPrefix = name.substring(0, index + 5);
          classes.push(name);
        } else {
          classes.push(`${customPrefix}-${name}`);
        }
        if (customPrefix === "uicon") {
          classes.push("u-iconfont");
        } else {
          classes.push(customPrefix);
        }
        if (this.showDecimalIcon && this.inactiveColor && this.$u.config.type.includes(this.inactiveColor)) {
          classes.push("u-icon__icon--" + this.inactiveColor);
        } else if (this.color && this.$u.config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: this.size == "inherit" ? "inherit" : this.$u.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          top: this.$u.addUnit(this.top)
        };
        if (this.showDecimalIcon && this.inactiveColor && !this.$u.config.type.includes(this.inactiveColor)) {
          style.color = this.inactiveColor;
        } else if (this.color && !this.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      isImg() {
        return this.name.indexOf("/") !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? this.$u.addUnit(this.width) : this.$u.addUnit(this.size);
        style.height = this.height ? this.$u.addUnit(this.height) : this.$u.addUnit(this.size);
        return style;
      },
      decimalIconStyle() {
        let style = {};
        style = {
          fontSize: this.size == "inherit" ? "inherit" : this.$u.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          top: this.$u.addUnit(this.top),
          width: this.percent + "%"
        };
        if (this.color && !this.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      decimalIconClass() {
        let classes = [];
        classes.push(this.customPrefix + "-" + this.name);
        if (this.customPrefix == "uicon") {
          classes.push("u-iconfont");
        } else {
          classes.push(this.customPrefix);
        }
        if (this.color && this.$u.config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        else
          classes.push("u-icon__icon--primary");
        return classes;
      }
    },
    methods: {
      click() {
        this.$emit("click", this.index);
      },
      touchstart() {
        this.$emit("touchstart", this.index);
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      style: vue.normalizeStyle([$props.customStyle]),
      class: vue.normalizeClass(["u-icon", ["u-icon--" + $props.labelPos]]),
      onClick: _cache[1] || (_cache[1] = (...args) => $options.click && $options.click(...args))
    }, [
      $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
        key: 0,
        class: "u-icon__img",
        src: $props.name,
        mode: $props.imgMode,
        style: vue.normalizeStyle([$options.imgStyle])
      }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass(["u-icon__icon", $options.customClass]),
        style: vue.normalizeStyle([$options.iconStyle]),
        "hover-class": $props.hoverClass,
        onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.touchstart && $options.touchstart(...args))
      }, [
        $props.showDecimalIcon ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          style: vue.normalizeStyle([$options.decimalIconStyle]),
          class: vue.normalizeClass([$options.decimalIconClass, "u-icon__decimal"]),
          "hover-class": $props.hoverClass
        }, null, 14, ["hover-class"])) : vue.createCommentVNode("v-if", true)
      ], 46, ["hover-class"])),
      vue.createCommentVNode(' \u8FD9\u91CC\u8FDB\u884C\u7A7A\u5B57\u7B26\u4E32\u5224\u65AD\uFF0C\u5982\u679C\u4EC5\u4EC5\u662Fv-if="label"\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4F20\u90120\u7684\u65F6\u5019\uFF0C\u7ED3\u679C\u4E5F\u65E0\u6CD5\u663E\u793A\uFF0C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0D\u4F20\u503C\u9ED8\u8BA4\u4E3Anull\uFF0C\u6545\u9700\u8981\u589E\u52A0null\u7684\u5224\u65AD '),
      $props.label !== "" && $props.label !== null ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 2,
        class: "u-icon__label",
        style: vue.normalizeStyle({
          color: $props.labelColor,
          fontSize: _ctx.$u.addUnit($props.labelSize),
          marginLeft: $props.labelPos == "right" ? _ctx.$u.addUnit($props.marginLeft) : 0,
          marginTop: $props.labelPos == "bottom" ? _ctx.$u.addUnit($props.marginTop) : 0,
          marginRight: $props.labelPos == "left" ? _ctx.$u.addUnit($props.marginRight) : 0,
          marginBottom: $props.labelPos == "top" ? _ctx.$u.addUnit($props.marginBottom) : 0
        })
      }, vue.toDisplayString($props.label), 5)) : vue.createCommentVNode("v-if", true)
    ], 6);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__scopeId", "data-v-305117c1"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-icon/u-icon.vue"]]);
  function formatAppLog(type2, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type2, filename, ...args);
    } else {
      console[type2].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _sfc_main$u = {
    name: "u-toast",
    props: {
      zIndex: {
        type: [Number, String],
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        timer: null,
        config: {
          params: {},
          title: "",
          type: "",
          duration: 2e3,
          isTab: false,
          url: "",
          icon: true,
          position: "center",
          callback: null,
          back: false
        },
        tmpConfig: {}
      };
    },
    computed: {
      iconName() {
        if (["error", "warning", "success", "info"].indexOf(this.tmpConfig.type) >= 0 && this.tmpConfig.icon) {
          let icon = this.$u.type2icon(this.tmpConfig.type);
          return icon;
        }
      },
      uZIndex() {
        return this.isShow ? this.zIndex ? this.zIndex : this.$u.zIndex.toast : "999999";
      }
    },
    methods: {
      show(options) {
        this.tmpConfig = this.$u.deepMerge(this.config, options);
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        this.isShow = true;
        this.timer = setTimeout(() => {
          this.isShow = false;
          clearTimeout(this.timer);
          this.timer = null;
          typeof this.tmpConfig.callback === "function" && this.tmpConfig.callback();
          this.timeEnd();
        }, this.tmpConfig.duration);
      },
      hide() {
        this.isShow = false;
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
      },
      timeEnd() {
        if (this.tmpConfig.url) {
          if (this.tmpConfig.url[0] != "/")
            this.tmpConfig.url = "/" + this.tmpConfig.url;
          if (Object.keys(this.tmpConfig.params).length) {
            let query = "";
            if (/.*\/.*\?.*=.*/.test(this.tmpConfig.url)) {
              query = this.$u.queryParams(this.tmpConfig.params, false);
              this.tmpConfig.url = this.tmpConfig.url + "&" + query;
            } else {
              query = this.$u.queryParams(this.tmpConfig.params);
              this.tmpConfig.url += query;
            }
          }
          if (this.tmpConfig.isTab) {
            uni.switchTab({
              url: this.tmpConfig.url
            });
          } else {
            uni.navigateTo({
              url: this.tmpConfig.url
            });
          }
        } else if (this.tmpConfig.back) {
          this.$u.route({
            type: "back"
          });
        }
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-toast", [$data.isShow ? "u-show" : "", "u-type-" + $data.tmpConfig.type, "u-position-" + $data.tmpConfig.position]]),
      style: vue.normalizeStyle({
        zIndex: $options.uZIndex
      })
    }, [
      vue.createElementVNode("view", { class: "u-icon-wrap" }, [
        $data.tmpConfig.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 0,
          class: "u-icon",
          name: $options.iconName,
          size: 30,
          color: $data.tmpConfig.type
        }, null, 8, ["name", "color"])) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createElementVNode("text", { class: "u-text" }, vue.toDisplayString($data.tmpConfig.title), 1)
    ], 6);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__scopeId", "data-v-ecce1f33"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-toast/u-toast.vue"]]);
  var site_add = "http://runhai.free.idcfengye.com";
  const server = {
    site_add
  };
  const _imports_0 = "/static/img/wx.png";
  const _imports_1 = "/static/img/qq.png";
  const _sfc_main$t = {
    data() {
      return {
        auth: "patient",
        account: "",
        pwd: "",
        logo: "../../static/img/logo.png"
      };
    },
    onLoad() {
    },
    methods: {
      login() {
        var that = this;
        if (!that.account) {
          uni.showToast({
            title: "Please input your account first",
            icon: "none"
          });
          return;
        }
        if (!/^\d{3,9}$/.test(that.account)) {
          uni.showToast({
            title: "Please input correct account",
            icon: "none"
          });
          return;
        }
        if (!that.pwd) {
          uni.showToast({
            title: "Please input correct password",
            icon: "none"
          });
          return;
        }
        uni.showLoading({
          title: "Loading"
        });
        uni.request({
          url: `${server.site_add}/patient/login/${that.account}/${that.pwd}?authorization=${that.auth}`,
          method: "GET",
          success: (res) => {
            if (res.statusCode === 200) {
              if (res.data == true) {
                setTimeout(() => {
                  uni.hideLoading();
                  this.$refs.uToast.show({
                    title: "Success login",
                    type: "success"
                  });
                }, 300), setTimeout(() => {
                  uni.navigateTo({
                    url: "/pages/home/home",
                    animationType: "pop-in",
                    animationDuration: 300
                  });
                }, 1e3);
              } else {
                setTimeout(() => {
                  uni.hideLoading();
                  this.$refs.uToast.show({
                    title: "Account / Password incorrect",
                    type: "error"
                  });
                }, 300);
              }
            }
          }
        });
      },
      reg() {
        uni.navigateTo({
          url: "/pages/login/register",
          animationType: "pop-in",
          animationDuration: 300
        });
      },
      forget() {
        uni.navigateTo({
          url: "/pages/login/forget",
          animationType: "pop-in",
          animationDuration: 300
        });
      },
      wxLogin() {
        uni.showToast({
          title: "Wechat Login",
          icon: "none"
        });
      },
      zfbLogin() {
        uni.showToast({
          title: "Alipay Login",
          icon: "none"
        });
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "img-a" }, [
        vue.createElementVNode("view", { class: "user-icon" }, [
          vue.createElementVNode("image", {
            src: $data.logo,
            style: { "width": "200px", "height": "200px" }
          }, null, 8, ["src"])
        ])
      ]),
      vue.createElementVNode("view", {
        class: "login-view",
        style: {}
      }, [
        vue.createElementVNode("view", { class: "t-login" }, [
          vue.createElementVNode("form", { class: "cl" }, [
            vue.createElementVNode("view", { class: "t-a" }, [
              vue.createElementVNode("text", { class: "txt" }, "Account"),
              vue.withDirectives(vue.createElementVNode("input", {
                type: "number",
                name: "account",
                placeholder: "Please input account",
                maxlength: "11",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.account = $event)
              }, null, 512), [
                [vue.vModelText, $data.account]
              ])
            ]),
            vue.createVNode(_component_u_toast, { ref: "uToast" }, null, 512),
            vue.createElementVNode("view", { class: "t-a" }, [
              vue.createElementVNode("text", { class: "txt" }, "Password"),
              vue.withDirectives(vue.createElementVNode("input", {
                type: "password",
                name: "code",
                maxlength: "18",
                placeholder: "Please input password",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.pwd = $event)
              }, null, 512), [
                [vue.vModelText, $data.pwd]
              ])
            ]),
            vue.createElementVNode("button", {
              onClick: _cache[2] || (_cache[2] = ($event) => $options.login())
            }, "Login"),
            vue.createElementVNode("view", {
              class: "reg",
              onClick: _cache[3] || (_cache[3] = ($event) => $options.reg())
            }, "Register"),
            vue.createElementVNode("view", { class: "links" }, [
              vue.createElementVNode("text", {
                class: "link-highlight",
                onClick: _cache[4] || (_cache[4] = (...args) => $options.forget && $options.forget(...args))
              }, "Forget password?")
            ])
          ]),
          vue.createElementVNode("view", { class: "t-f" }, [
            vue.createElementVNode("text", null, "\u2014\u2014\u2014\u2014\u2014\u2014 Other options \u2014\u2014\u2014\u2014\u2014\u2014")
          ]),
          vue.createElementVNode("view", { class: "t-e cl" }, [
            vue.createElementVNode("view", {
              class: "t-g",
              onClick: _cache[5] || (_cache[5] = ($event) => $options.wxLogin())
            }, [
              vue.createElementVNode("image", { src: _imports_0 })
            ]),
            vue.createElementVNode("view", {
              class: "t-g",
              onClick: _cache[6] || (_cache[6] = ($event) => $options.zfbLogin())
            }, [
              vue.createElementVNode("image", { src: _imports_1 })
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "copy-right" }, "CopyRight 2023.04.10, BSUIR, He Runhai")
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/login/login.vue"]]);
  const _sfc_main$s = {
    data() {
      return {
        captchaImg: "",
        seconds: 10,
        codeBtn: {
          text: "Get SMS",
          waitingCode: false,
          count: this.seconds
        },
        changeSuccess: false
      };
    },
    onLoad() {
    },
    methods: {
      sendCode: function() {
        this.codeBtn.waitingCode = true;
        this.codeBtn.count = this.seconds;
        this.codeBtn.text = this.codeBtn.count + "s";
        let countdown = setInterval(() => {
          this.codeBtn.count--;
          this.codeBtn.text = this.codeBtn.count + "s";
          if (this.codeBtn.count < 0) {
            clearInterval(countdown);
            this.codeBtn.text = "Resend";
            this.codeBtn.waitingCode = false;
          }
        }, 1e3);
      },
      gotoLogin: function() {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      }
    },
    computed: {
      disableCodeBtn: function() {
        return this.codeBtn.waitingCode || this.captchaImg.length < 4;
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      !$data.changeSuccess ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
        vue.createElementVNode("view", { class: "user-icon" }, [
          vue.createElementVNode("image", {
            src: "/static/img/logo.png",
            style: { "width": "200px", "height": "200px" }
          })
        ]),
        vue.createElementVNode("view", { class: "uni-form-item uni-column" }, [
          vue.createElementVNode("input", {
            type: "tel",
            class: "uni-input",
            name: "",
            placeholder: "Phone number"
          })
        ]),
        vue.createElementVNode("view", { class: "uni-form-item uni-column column-with-btn" }, [
          vue.createElementVNode("input", {
            type: "number",
            class: "uni-input",
            name: "",
            placeholder: "Verfication code"
          }),
          vue.createElementVNode("button", {
            class: vue.normalizeClass({ active: !$options.disableCodeBtn }),
            disabled: $options.disableCodeBtn,
            onClick: _cache[0] || (_cache[0] = (...args) => $options.sendCode && $options.sendCode(...args))
          }, vue.toDisplayString($data.codeBtn.text), 11, ["disabled"])
        ]),
        vue.createElementVNode("view", { class: "uni-form-item uni-column column-with-btn" }, [
          vue.withDirectives(vue.createElementVNode("input", {
            type: "text",
            class: "uni-input",
            name: "",
            placeholder: "Captcha code",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.captchaImg = $event)
          }, null, 512), [
            [vue.vModelText, $data.captchaImg]
          ]),
          vue.createElementVNode("image", {
            src: "/static/img/captcha.jpg",
            mode: "",
            class: "img-captcha"
          })
        ]),
        vue.createElementVNode("view", { class: "uni-form-item uni-column" }, [
          vue.createElementVNode("input", {
            type: "password",
            class: "uni-input",
            name: "",
            placeholder: "New password"
          })
        ]),
        vue.createElementVNode("button", {
          type: "primary",
          onClick: _cache[2] || (_cache[2] = ($event) => $data.changeSuccess = !$data.changeSuccess)
        }, "Submit")
      ])) : vue.createCommentVNode("v-if", true),
      $data.changeSuccess ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
        vue.createElementVNode("view", { class: "text-reset" }, "Reset password successfully, please login again"),
        vue.createElementVNode("button", {
          type: "primary",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.gotoLogin && $options.gotoLogin(...args))
        }, "Login now")
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "links" }, [
        vue.createTextVNode("Remember password "),
        vue.createElementVNode("view", {
          class: "link-highlight",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.gotoLogin && $options.gotoLogin(...args))
        }, "Click to login")
      ])
    ]);
  }
  const PagesLoginForget = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-79044ba6"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/login/forget.vue"]]);
  const _sfc_main$r = {
    data() {
      return {
        captchaImg: "",
        seconds: 10,
        codeBtn: {
          text: "\u83B7\u53D6\u9A8C\u8BC1\u7801",
          waitingCode: false,
          count: this.seconds
        }
      };
    },
    onLoad() {
    },
    methods: {
      sendCode: function() {
        this.codeBtn.waitingCode = true;
        this.codeBtn.count = this.seconds;
        this.codeBtn.text = this.codeBtn.count + "s";
        let countdown = setInterval(() => {
          this.codeBtn.count--;
          this.codeBtn.text = this.codeBtn.count + "s";
          if (this.codeBtn.count < 0) {
            clearInterval(countdown);
            this.codeBtn.text = "\u91CD\u65B0\u53D1\u9001";
            this.codeBtn.waitingCode = false;
          }
        }, 1e3);
      },
      gotoLogin: function() {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      }
    },
    computed: {
      disableCodeBtn: function() {
        return this.codeBtn.waitingCode || this.captchaImg.length < 4;
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "user-icon" }, [
        vue.createElementVNode("image", {
          src: "/static/img/logo.png",
          style: { "width": "200px", "height": "200px" }
        })
      ]),
      vue.createElementVNode("view", { class: "uni-form-item uni-column" }, [
        vue.createElementVNode("input", {
          type: "tel",
          class: "uni-input",
          name: "",
          placeholder: "Phone number"
        })
      ]),
      vue.createElementVNode("view", { class: "uni-form-item uni-column column-with-btn" }, [
        vue.createElementVNode("input", {
          type: "number",
          class: "uni-input",
          name: "",
          placeholder: "Verfication code"
        }),
        vue.createElementVNode("button", {
          class: vue.normalizeClass({ active: !$options.disableCodeBtn }),
          disabled: $options.disableCodeBtn,
          onClick: _cache[0] || (_cache[0] = (...args) => $options.sendCode && $options.sendCode(...args))
        }, vue.toDisplayString($data.codeBtn.text), 11, ["disabled"])
      ]),
      vue.createElementVNode("view", { class: "uni-form-item uni-column column-with-btn" }, [
        vue.withDirectives(vue.createElementVNode("input", {
          type: "text",
          class: "uni-input",
          name: "",
          placeholder: "Captcha code",
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.captchaImg = $event)
        }, null, 512), [
          [vue.vModelText, $data.captchaImg]
        ]),
        vue.createElementVNode("image", {
          src: "/static/img/captcha.jpg",
          mode: "",
          class: "img-captcha"
        })
      ]),
      vue.createElementVNode("view", { class: "uni-form-item uni-column" }, [
        vue.createElementVNode("input", {
          type: "password",
          class: "uni-input",
          name: "",
          placeholder: "Password"
        })
      ]),
      vue.createElementVNode("button", { type: "primary" }, "Register"),
      vue.createElementVNode("view", { class: "links" }, [
        vue.createTextVNode("Already have account\uFF1F"),
        vue.createElementVNode("view", {
          class: "link-highlight",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.gotoLogin && $options.gotoLogin(...args))
        }, "Click to login")
      ])
    ]);
  }
  const PagesLoginRegister = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-838b72c9"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/login/register.vue"]]);
  const _sfc_main$q = {
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
          const query = uni.createSelectorQuery().in(this);
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
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.createElementVNode("view", { class: "status_bar" }, [
        vue.createCommentVNode(" Header ")
      ]),
      vue.createElementVNode("view", { class: "container container18437" }, [
        vue.createElementVNode("view", { class: "flex diygw-col-24" }, [
          vue.createElementVNode("swiper", {
            class: "swiper",
            "indicator-color": "rgba(51, 51, 51, 0.39)",
            "indicator-active-color": "#fff",
            autoplay: "",
            interval: "3000",
            circular: "true",
            style: { "height": "170px" }
          }, [
            vue.createElementVNode("swiper-item", { class: "diygw-swiper-item" }, [
              vue.createElementVNode("view", { class: "diygw-swiper-item-wrap" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/EMR.png",
                  class: "diygw-swiper-image"
                })
              ])
            ]),
            vue.createElementVNode("swiper-item", { class: "diygw-swiper-item" }, [
              vue.createElementVNode("view", { class: "diygw-swiper-item-wrap" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/Service.png",
                  class: "diygw-swiper-image"
                })
              ])
            ]),
            vue.createElementVNode("swiper-item", { class: "diygw-swiper-item" }, [
              vue.createElementVNode("view", { class: "diygw-swiper-item-wrap" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/Convenient.png",
                  class: "diygw-swiper-image"
                })
              ])
            ]),
            vue.createElementVNode("swiper-item", { class: "diygw-swiper-item" }, [
              vue.createElementVNode("view", { class: "diygw-swiper-item-wrap" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/Technology.png",
                  class: "diygw-swiper-image"
                })
              ])
            ])
          ])
        ]),
        vue.createElementVNode("scroll-view", {
          onScrolltoupper: _cache[6] || (_cache[6] = (...args) => $options.scrolltoupperFlex8 && $options.scrolltoupperFlex8(...args)),
          onScrolltolower: _cache[7] || (_cache[7] = (...args) => $options.scrolltolowerFlex8 && $options.scrolltolowerFlex8(...args)),
          "scroll-x": "",
          "scroll-with-animation": "",
          class: "flex scroll-view flex-wrap diygw-col-24 flex-direction-column flex8-clz"
        }, [
          vue.createElementVNode("view", { class: "flex flex-nowrap" }, [
            vue.createElementVNode("scroll-view", {
              onScrolltoupper: _cache[0] || (_cache[0] = (...args) => $options.scrolltoupperFlex3 && $options.scrolltoupperFlex3(...args)),
              onScrolltolower: _cache[1] || (_cache[1] = (...args) => $options.scrolltolowerFlex3 && $options.scrolltolowerFlex3(...args)),
              "scroll-y": "",
              "scroll-with-animation": "",
              class: "flex scroll-view flex-wrap diygw-col-12 flex3-clz",
              onClick: _cache[2] || (_cache[2] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
              "data-type": "page",
              "data-url": "/pages/home/appointment/department"
            }, [
              vue.createElementVNode("view", { class: "flex scroll-y flex-nowrap" }, [
                vue.createElementVNode("view", { class: "flex diygw-col-24 avatar-clz" }, [
                  vue.createElementVNode("view", { class: "diygw-avatar bg-none" }, [
                    vue.createElementVNode("image", {
                      mode: "aspectFit",
                      class: "diygw-avatar-img",
                      src: "/static/icon8_qd.png"
                    })
                  ])
                ]),
                vue.createElementVNode("view", { class: "diygw-col-24 text4-clz diygw-ellipsis" }, " Appointment "),
                vue.createElementVNode("view", { class: "diygw-col-24 text5-clz" }, " Register and make an appointment for outpatient service ")
              ])
            ], 32),
            vue.createElementVNode("scroll-view", {
              onScrolltoupper: _cache[3] || (_cache[3] = (...args) => $options.scrolltoupperFlex4 && $options.scrolltoupperFlex4(...args)),
              onScrolltolower: _cache[4] || (_cache[4] = (...args) => $options.scrolltolowerFlex4 && $options.scrolltolowerFlex4(...args)),
              "scroll-y": "",
              "scroll-with-animation": "",
              class: "flex scroll-view flex-wrap diygw-col-12 flex4-clz",
              onClick: _cache[5] || (_cache[5] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
              "data-type": "page",
              "data-url": "/pages/home/consultation/department"
            }, [
              vue.createElementVNode("view", { class: "flex scroll-y flex-nowrap" }, [
                vue.createElementVNode("view", { class: "flex diygw-col-24 avatar1-clz" }, [
                  vue.createElementVNode("view", { class: "diygw-avatar bg-none" }, [
                    vue.createElementVNode("image", {
                      mode: "aspectFit",
                      class: "diygw-avatar-img",
                      src: "/static/icon8_dpj.png"
                    })
                  ])
                ]),
                vue.createElementVNode("view", { class: "diygw-col-24 text6-clz diygw-ellipsis" }, " Consultation "),
                vue.createElementVNode("view", { class: "diygw-col-24 text7-clz" }, " Online doctor consultation (Chargeable service) ")
              ])
            ], 32)
          ])
        ], 32),
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 justify-around diygw-bottom flex-clz" }, [
          vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex2-clz" }, [
            vue.createElementVNode("text", { class: "flex icon1 diygw-col-0 icon1-clz diy-icon-home" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Home ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex1-clz",
            onClick: _cache[8] || (_cache[8] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/message/messages"
          }, [
            vue.createElementVNode("view", { class: "diygw-col-0 text2-clz" }, " 10 "),
            vue.createElementVNode("text", { class: "flex icon2 diygw-col-0 icon2-clz diy-icon-community" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Consultations ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex6-clz",
            onClick: _cache[9] || (_cache[9] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/records/records"
          }, [
            vue.createElementVNode("text", { class: "flex icon diygw-col-0 icon-clz diy-icon-message" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Records ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex7-clz",
            onClick: _cache[10] || (_cache[10] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/me/me"
          }, [
            vue.createElementVNode("text", { class: "flex icon4 diygw-col-0 icon4-clz diy-icon-people" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Me ")
          ])
        ]),
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex5-clz" }, [
          vue.createElementVNode("view", { class: "flex diygw-col-24 flex-direction-column" }, [
            vue.createElementVNode("scroll-view", {
              "scroll-x": "",
              "show-scrollbar": false,
              enhanced: "",
              "scroll-into-view": "scroll-" + $data.tabsIndex,
              "scroll-left": $data.tabsLeft,
              "scroll-with-animation": "",
              class: "diygw-tabs text-center solid-bottom scale-title small-border tabs-title"
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.tabsDatas, (item2, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  id: "scroll-" + index,
                  class: vue.normalizeClass(["diygw-tab-item tabs-item-title flex-sub", index == $data.tabsIndex ? " cur text-green " : ""]),
                  key: index,
                  onClick: _cache[11] || (_cache[11] = (...args) => $options.changeTabs && $options.changeTabs(...args)),
                  "data-index": index
                }, [
                  item2.icon ? (vue.openBlock(), vue.createElementBlock("text", {
                    key: 0,
                    class: vue.normalizeClass(item2.icon)
                  }, null, 2)) : vue.createCommentVNode("v-if", true),
                  vue.createTextVNode(" " + vue.toDisplayString(item2.text), 1)
                ], 10, ["id", "data-index"]);
              }), 128))
            ], 8, ["scroll-into-view", "scroll-left"]),
            vue.createElementVNode("view", { class: "" }, [
              $data.tabsIndex == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "flex-sub"
              }, [
                vue.createElementVNode("view", { class: "flex diygw-col-24" }, [
                  vue.createElementVNode("view", { class: "diygw-grid col-4" }, [
                    vue.createElementVNode("view", {
                      onClick: _cache[12] || (_cache[12] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
                      "data-type": "page",
                      "data-url": "/pages/records/records",
                      class: "diygw-grid-item"
                    }, [
                      vue.createElementVNode("view", { class: "diygw-grid-inner" }, [
                        vue.createElementVNode("view", { class: "diygw-grid-icon diygw-avatar" }, [
                          vue.createElementVNode("image", {
                            mode: "aspectFit",
                            class: "diygw-avatar-img",
                            src: "/static/icon8_dfk.png"
                          })
                        ]),
                        vue.createElementVNode("view", { class: "diygw-grid-title" }, " payment records ")
                      ])
                    ]),
                    vue.createElementVNode("view", {
                      onClick: _cache[13] || (_cache[13] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
                      "data-type": "page",
                      "data-url": "/pages/records/records",
                      class: "diygw-grid-item"
                    }, [
                      vue.createElementVNode("view", { class: "diygw-grid-inner" }, [
                        vue.createElementVNode("view", { class: "diygw-grid-icon diygw-avatar" }, [
                          vue.createElementVNode("image", {
                            mode: "aspectFit",
                            class: "diygw-avatar-img",
                            src: "/static/icon11_cy.png"
                          })
                        ]),
                        vue.createElementVNode("view", { class: "diygw-grid-title" }, " family member ")
                      ])
                    ]),
                    vue.createElementVNode("view", {
                      onClick: _cache[14] || (_cache[14] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
                      "data-type": "page",
                      "data-url": "/pages/records/records",
                      class: "diygw-grid-item"
                    }, [
                      vue.createElementVNode("view", { class: "diygw-grid-inner" }, [
                        vue.createElementVNode("view", { class: "diygw-grid-icon diygw-avatar" }, [
                          vue.createElementVNode("image", {
                            mode: "aspectFit",
                            class: "diygw-avatar-img",
                            src: "/static/icon11_rz.png"
                          })
                        ]),
                        vue.createElementVNode("view", { class: "diygw-grid-title" }, " medical records ")
                      ])
                    ]),
                    vue.createElementVNode("view", {
                      onClick: _cache[15] || (_cache[15] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
                      "data-type": "page",
                      "data-url": "/pages/records/records",
                      class: "diygw-grid-item"
                    }, [
                      vue.createElementVNode("view", { class: "diygw-grid-inner" }, [
                        vue.createElementVNode("view", { class: "diygw-grid-icon diygw-avatar" }, [
                          vue.createElementVNode("image", {
                            mode: "aspectFit",
                            class: "diygw-avatar-img",
                            src: "/static/icon9_fwdt.png"
                          })
                        ]),
                        vue.createElementVNode("view", { class: "diygw-grid-title" }, " appointment guider ")
                      ])
                    ])
                  ])
                ])
              ])) : vue.createCommentVNode("v-if", true),
              $data.tabsIndex == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "flex-sub"
              }, [
                vue.createElementVNode("view", { class: "flex diygw-col-24" }, [
                  vue.createElementVNode("view", { class: "diygw-grid col-2" }, [
                    vue.createElementVNode("view", {
                      onClick: _cache[16] || (_cache[16] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
                      "data-type": "page",
                      "data-url": "/pages/records/records",
                      class: "diygw-grid-item"
                    }, [
                      vue.createElementVNode("view", { class: "diygw-grid-inner" }, [
                        vue.createElementVNode("view", { class: "diygw-grid-icon diygw-avatar" }, [
                          vue.createElementVNode("image", {
                            mode: "aspectFit",
                            class: "diygw-avatar-img",
                            src: "/static/icon9_xsqk.png"
                          })
                        ]),
                        vue.createElementVNode("view", { class: "diygw-grid-title" }, " hospitalization records ")
                      ])
                    ]),
                    vue.createElementVNode("view", {
                      onClick: _cache[17] || (_cache[17] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
                      "data-type": "page",
                      "data-url": "/pages/records/records",
                      class: "diygw-grid-item"
                    }, [
                      vue.createElementVNode("view", { class: "diygw-grid-inner" }, [
                        vue.createElementVNode("view", { class: "diygw-grid-icon diygw-avatar" }, [
                          vue.createElementVNode("image", {
                            mode: "aspectFit",
                            class: "diygw-avatar-img",
                            src: "/static/icon10_q.png"
                          })
                        ]),
                        vue.createElementVNode("view", { class: "diygw-grid-title" }, " hospitalization payment ")
                      ])
                    ])
                  ])
                ])
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "clearfix" })
      ])
    ]);
  }
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-07e72d3c"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/home/home.vue"]]);
  const _sfc_main$p = {
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
      sessionStorage.setItem("type", "Appointment");
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
        fetch(`${server.site_add}/doctor/departments?authorization=${this.currentAuth}`).then((res) => res.json()).then((res) => {
          this.list = res;
        });
      },
      navigateTo(name) {
        sessionStorage.setItem("department", JSON.stringify(name));
        uni.navigateTo({
          url: "/pages/home/appointment/doctors_list"
        });
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.createElementVNode("view", { class: "container container18437" }, [
        vue.createElementVNode("view", { class: "diygw-col-24" }, [
          vue.createElementVNode("view", { class: "diygw-search" }, [
            vue.createElementVNode("view", { class: "flex1 align-center flex padding-xs solid radius" }, [
              vue.createElementVNode("text", {
                style: { "color": "#555 !important" },
                class: "diy-icon-apps"
              }),
              vue.withDirectives(vue.createElementVNode("input", {
                class: "flex1",
                name: "search1",
                type: "",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.search1 = $event),
                placeholder: "Input Doctor/Department name for searching"
              }, null, 512), [
                [vue.vModelText, $data.search1]
              ])
            ]),
            vue.createElementVNode("text", {
              style: { "color": "#333 !important" },
              class: "diy-icon-search margin-left-xs"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "flex diygw-col-24" }, [
          vue.createElementVNode("view", {
            class: "diygw-pzx",
            style: { "border-bottom": "1px solid #eee" }
          })
        ]),
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 justify-around diygw-bottom flex-clz" }, [
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex2-clz",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.navigateTo && $options.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/home/home"
          }, [
            vue.createElementVNode("text", { class: "flex icon1 diygw-col-0 icon1-clz diy-icon-home" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Home ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex1-clz",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.navigateTo && $options.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/message/messages"
          }, [
            vue.createElementVNode("view", { class: "diygw-col-0 text2-clz" }, " 10 "),
            vue.createElementVNode("text", { class: "flex icon2 diygw-col-0 icon2-clz diy-icon-community" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Consultations ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex6-clz",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.navigateTo && $options.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/records/records"
          }, [
            vue.createElementVNode("text", { class: "flex icon diygw-col-0 icon-clz diy-icon-message" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Records ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex7-clz",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.navigateTo && $options.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/me/me"
          }, [
            vue.createElementVNode("text", { class: "flex icon4 diygw-col-0 icon4-clz diy-icon-people" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Me ")
          ])
        ]),
        vue.createElementVNode("view", { class: "flex diygw-col-24" }, [
          vue.createElementVNode("view", { class: "diygw-list" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.list, (item2) => {
              return vue.openBlock(), vue.createElementBlock("view", null, [
                vue.createElementVNode("view", {
                  onClick: ($event) => $options.navigateTo(item2.name),
                  "data-type": "page",
                  "data-url": "/pages/home/appointment/doctors_list",
                  "data-department": "emergency department",
                  style: {},
                  class: "diygw-item col-100 row arrow solid-bottom diygw-card diygw-shadow"
                }, [
                  vue.createElementVNode("view", { class: "diygw-avatar" }, [
                    vue.createElementVNode("image", {
                      mode: "aspectFit",
                      class: "diygw-avatar-img",
                      src: item2.avatar
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "content" }, [
                    vue.createElementVNode("view", {
                      class: "title",
                      style: { "font-weight": "700", "font-size": "15px" }
                    }, vue.toDisplayString(item2.name), 1),
                    vue.createElementVNode("view", {
                      class: "text-sm remark",
                      style: { "font-size": "10px" }
                    }, vue.toDisplayString(item2.description), 1)
                  ])
                ], 8, ["onClick"])
              ]);
            }), 256))
          ])
        ]),
        vue.createElementVNode("view", { class: "clearfix" })
      ])
    ]);
  }
  const PagesHomeAppointmentDepartment = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-3a8da1f0"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/home/appointment/department.vue"]]);
  const _sfc_main$o = {
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
      sessionStorage.setItem("type", "Appointment");
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
        fetch(`${server.site_add}/doctor/departments?authorization=${this.currentAuth}`).then((res) => res.json()).then((res) => {
          this.list = res;
        });
      },
      navigateTo(name) {
        sessionStorage.setItem("department", JSON.stringify(name));
        uni.navigateTo({
          url: "/pages/home/consultation/doctors_list"
        });
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.createElementVNode("view", { class: "container container18437" }, [
        vue.createElementVNode("view", { class: "diygw-col-24" }, [
          vue.createElementVNode("view", { class: "diygw-search" }, [
            vue.createElementVNode("view", { class: "flex1 align-center flex padding-xs solid radius" }, [
              vue.createElementVNode("text", {
                style: { "color": "#555 !important" },
                class: "diy-icon-apps"
              }),
              vue.withDirectives(vue.createElementVNode("input", {
                class: "flex1",
                name: "search1",
                type: "",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.search1 = $event),
                placeholder: "Input Doctor/Department name for searching"
              }, null, 512), [
                [vue.vModelText, $data.search1]
              ])
            ]),
            vue.createElementVNode("text", {
              style: { "color": "#333 !important" },
              class: "diy-icon-search margin-left-xs"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "flex diygw-col-24" }, [
          vue.createElementVNode("view", {
            class: "diygw-pzx",
            style: { "border-bottom": "1px solid #eee" }
          })
        ]),
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 justify-around diygw-bottom flex-clz" }, [
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex2-clz",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.navigateTo && $options.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/home/home"
          }, [
            vue.createElementVNode("text", { class: "flex icon1 diygw-col-0 icon1-clz diy-icon-home" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Home ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex1-clz",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.navigateTo && $options.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/message/messages"
          }, [
            vue.createElementVNode("view", { class: "diygw-col-0 text2-clz" }, " 10 "),
            vue.createElementVNode("text", { class: "flex icon2 diygw-col-0 icon2-clz diy-icon-community" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Consultations ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex6-clz",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.navigateTo && $options.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/records/records"
          }, [
            vue.createElementVNode("text", { class: "flex icon diygw-col-0 icon-clz diy-icon-message" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Records ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex7-clz",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.navigateTo && $options.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/me/me"
          }, [
            vue.createElementVNode("text", { class: "flex icon4 diygw-col-0 icon4-clz diy-icon-people" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Me ")
          ])
        ]),
        vue.createElementVNode("view", { class: "flex diygw-col-24" }, [
          vue.createElementVNode("view", { class: "diygw-list" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.list, (item2) => {
              return vue.openBlock(), vue.createElementBlock("view", null, [
                vue.createElementVNode("view", {
                  onClick: ($event) => $options.navigateTo(item2.name),
                  "data-type": "page",
                  "data-url": "/pages/home/appointment/doctors_list",
                  "data-department": "emergency department",
                  style: {},
                  class: "diygw-item col-100 row arrow solid-bottom diygw-card diygw-shadow"
                }, [
                  vue.createElementVNode("view", { class: "diygw-avatar" }, [
                    vue.createElementVNode("image", {
                      mode: "aspectFit",
                      class: "diygw-avatar-img",
                      src: item2.avatar
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "content" }, [
                    vue.createElementVNode("view", {
                      class: "title",
                      style: { "font-weight": "700", "font-size": "15px" }
                    }, vue.toDisplayString(item2.name), 1),
                    vue.createElementVNode("view", {
                      class: "text-sm remark",
                      style: { "font-size": "10px" }
                    }, vue.toDisplayString(item2.description), 1)
                  ])
                ], 8, ["onClick"])
              ]);
            }), 256))
          ])
        ]),
        vue.createElementVNode("view", { class: "clearfix" })
      ])
    ]);
  }
  const PagesHomeConsultationDepartment = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-c624fe8f"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/home/consultation/department.vue"]]);
  const _sfc_main$n = {
    name: "u-cell-item",
    emits: ["click"],
    props: {
      icon: {
        type: String,
        default: ""
      },
      title: {
        type: [String, Number],
        default: ""
      },
      value: {
        type: [String, Number],
        default: ""
      },
      label: {
        type: [String, Number],
        default: ""
      },
      borderBottom: {
        type: Boolean,
        default: true
      },
      borderTop: {
        type: Boolean,
        default: false
      },
      hoverClass: {
        type: String,
        default: "u-cell-hover"
      },
      arrow: {
        type: Boolean,
        default: true
      },
      center: {
        type: Boolean,
        default: false
      },
      required: {
        type: Boolean,
        default: false
      },
      titleWidth: {
        type: [Number, String],
        default: ""
      },
      arrowDirection: {
        type: String,
        default: "right"
      },
      titleStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      valueStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      labelStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      bgColor: {
        type: String,
        default: "transparent"
      },
      index: {
        type: [String, Number],
        default: ""
      },
      useLabelSlot: {
        type: Boolean,
        default: false
      },
      iconSize: {
        type: [Number, String],
        default: 34
      },
      iconStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      arrowStyle() {
        let style = {};
        if (this.arrowDirection == "up")
          style.transform = "rotate(-90deg)";
        else if (this.arrowDirection == "down")
          style.transform = "rotate(90deg)";
        else
          style.transform = "rotate(0deg)";
        return style;
      }
    },
    methods: {
      click() {
        this.$emit("click", this.index);
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args)),
      class: vue.normalizeClass(["u-cell", { "u-border-bottom": $props.borderBottom, "u-border-top": $props.borderTop, "u-col-center": $props.center, "u-cell--required": $props.required }]),
      "hover-stay-time": "150",
      "hover-class": $props.hoverClass,
      style: vue.normalizeStyle({
        backgroundColor: $props.bgColor
      })
    }, [
      $props.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
        key: 0,
        size: $props.iconSize,
        name: $props.icon,
        "custom-style": $props.iconStyle,
        class: "u-cell__left-icon-wrap"
      }, null, 8, ["size", "name", "custom-style"])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "u-flex"
      }, [
        vue.renderSlot(_ctx.$slots, "icon", {}, void 0, true)
      ])),
      vue.createElementVNode("view", {
        class: "u-cell_title",
        style: vue.normalizeStyle([
          {
            width: $props.titleWidth ? $props.titleWidth + "rpx" : "auto"
          },
          $props.titleStyle
        ])
      }, [
        $props.title !== "" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createTextVNode(vue.toDisplayString($props.title), 1)
        ], 64)) : vue.renderSlot(_ctx.$slots, "title", { key: 1 }, void 0, true),
        $props.label || _ctx.$slots.label ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "u-cell__label",
          style: vue.normalizeStyle([$props.labelStyle])
        }, [
          $props.label !== "" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            vue.createTextVNode(vue.toDisplayString($props.label), 1)
          ], 64)) : vue.renderSlot(_ctx.$slots, "label", { key: 1 }, void 0, true)
        ], 4)) : vue.createCommentVNode("v-if", true)
      ], 4),
      vue.createElementVNode("view", {
        class: "u-cell__value",
        style: vue.normalizeStyle([$props.valueStyle])
      }, [
        $props.value !== "" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createTextVNode(vue.toDisplayString($props.value), 1)
        ], 64)) : vue.renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true)
      ], 4),
      _ctx.$slots["right-icon"] ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "u-flex u-cell_right"
      }, [
        vue.renderSlot(_ctx.$slots, "right-icon", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true),
      $props.arrow ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
        key: 3,
        name: "arrow-right",
        style: vue.normalizeStyle([$options.arrowStyle]),
        class: "u-icon-wrap u-cell__right-icon-wrap"
      }, null, 8, ["style"])) : vue.createCommentVNode("v-if", true)
    ], 14, ["hover-class"]);
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-383f0da6"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-cell-item/u-cell-item.vue"]]);
  const _sfc_main$m = {
    name: "u-cell-group",
    props: {
      title: {
        type: String,
        default: ""
      },
      border: {
        type: Boolean,
        default: true
      },
      titleStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        index: 0
      };
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-cell-box" }, [
      $props.title ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-cell-title",
        style: vue.normalizeStyle([$props.titleStyle])
      }, vue.toDisplayString($props.title), 5)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["u-cell-item-box", { "u-border-bottom u-border-top": $props.border }])
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2)
    ]);
  }
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-d564e811"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-cell-group/u-cell-group.vue"]]);
  const _sfc_main$l = {
    name: "u-dropdown-item",
    emits: ["update:modelValue", "input", "change"],
    props: {
      value: {
        type: [Number, String, Array],
        default: ""
      },
      modelValue: {
        type: [Number, String, Array],
        default: ""
      },
      title: {
        type: [String, Number],
        default: ""
      },
      options: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      height: {
        type: [Number, String],
        default: "auto"
      }
    },
    data() {
      return {
        active: false,
        activeColor: "#19be6b",
        inactiveColor: "#606266"
      };
    },
    computed: {
      valueCom() {
        return this.modelValue;
      },
      propsChange() {
        return `${this.title}-${this.disabled}`;
      }
    },
    watch: {
      propsChange(n) {
        if (this.parent)
          this.parent.init();
      }
    },
    created() {
      this.parent = false;
    },
    methods: {
      init() {
        let parent = this.$u.$parent.call(this, "u-dropdown");
        if (parent) {
          this.parent = parent;
          this.activeColor = parent.activeColor;
          this.inactiveColor = parent.inactiveColor;
          let exist = parent.children.find((val) => {
            return this === val;
          });
          if (!exist)
            parent.children.push(this);
          if (parent.children.length == 1)
            this.active = true;
          parent.menuList.push({
            title: this.title,
            disabled: this.disabled
          });
        }
      },
      cellClick(value) {
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
        this.parent.close();
        this.$emit("change", value);
      }
    },
    mounted() {
      this.init();
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$4);
    const _component_u_cell_item = resolveEasycom(vue.resolveDynamicComponent("u-cell-item"), __easycom_1$3);
    const _component_u_cell_group = resolveEasycom(vue.resolveDynamicComponent("u-cell-group"), __easycom_2$2);
    return $data.active ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "u-dropdown-item",
      onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers(() => {
      }, ["stop", "prevent"])),
      onClick: _cache[1] || (_cache[1] = vue.withModifiers(() => {
      }, ["stop", "prevent"]))
    }, [
      !_ctx.$slots.default && !_ctx.$slots.$default ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
        key: 0,
        "scroll-y": "true",
        style: vue.normalizeStyle({
          height: _ctx.$u.addUnit($props.height)
        })
      }, [
        vue.createElementVNode("view", { class: "u-dropdown-item__options" }, [
          vue.createVNode(_component_u_cell_group, null, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (item2, index) => {
                return vue.openBlock(), vue.createBlock(_component_u_cell_item, {
                  onClick: ($event) => $options.cellClick(item2.value),
                  arrow: false,
                  title: item2.label || item2.text,
                  key: index,
                  "title-style": {
                    color: $options.valueCom == item2.value ? $data.activeColor : $data.inactiveColor
                  }
                }, {
                  default: vue.withCtx(() => [
                    $options.valueCom == item2.value ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                      key: 0,
                      name: "checkbox-mark",
                      color: $data.activeColor,
                      size: "32"
                    }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true)
                  ]),
                  _: 2
                }, 1032, ["onClick", "title", "title-style"]);
              }), 128))
            ]),
            _: 1
          })
        ])
      ], 4)) : vue.renderSlot(_ctx.$slots, "default", { key: 1 }, void 0, true)
    ], 32)) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-838d49ed"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-dropdown-item/u-dropdown-item.vue"]]);
  const _sfc_main$k = {
    name: "u-dropdown",
    emits: ["open", "close"],
    props: {
      activeColor: {
        type: String,
        default: "inherit"
      },
      inactiveColor: {
        type: String,
        default: "#606266"
      },
      closeOnClickMask: {
        type: Boolean,
        default: true
      },
      closeOnClickSelf: {
        type: Boolean,
        default: true
      },
      duration: {
        type: [Number, String],
        default: 300
      },
      height: {
        type: [Number, String],
        default: 80
      },
      borderBottom: {
        type: Boolean,
        default: false
      },
      titleSize: {
        type: [Number, String],
        default: 28
      },
      borderRadius: {
        type: [Number, String],
        default: 0
      },
      menuIcon: {
        type: String,
        default: "arrow-down"
      },
      menuIconSize: {
        type: [Number, String],
        default: 26
      }
    },
    data() {
      return {
        showDropdown: true,
        menuList: [],
        active: false,
        current: 99999,
        contentStyle: {
          zIndex: -1,
          opacity: 0
        },
        highlightIndex: 99999,
        contentHeight: 0
      };
    },
    computed: {
      popupStyle() {
        let style = {};
        style.transform = `translateY(${this.active ? 0 : "-100%"})`;
        style["transition-duration"] = this.duration / 1e3 + "s";
        style.borderRadius = `0 0 ${this.$u.addUnit(this.borderRadius)} ${this.$u.addUnit(this.borderRadius)}`;
        return style;
      }
    },
    created() {
      this.children = [];
    },
    mounted() {
      this.getContentHeight();
    },
    methods: {
      init() {
        this.menuList = [];
        this.children.map((child) => {
          child.init();
        });
      },
      menuClick(index) {
        if (this.menuList[index].disabled)
          return;
        if (index === this.current && this.closeOnClickSelf) {
          this.close();
          setTimeout(() => {
            this.children[index].active = false;
          }, this.duration);
          return;
        }
        this.open(index);
      },
      open(index) {
        this.contentStyle = {
          zIndex: 11
        };
        this.active = true;
        this.current = index;
        this.children.map((val, idx) => {
          val.active = index == idx ? true : false;
        });
        this.$emit("open", this.current);
      },
      close() {
        this.$emit("close", this.current);
        this.active = false;
        this.current = 99999;
        this.contentStyle = {
          zIndex: -1,
          opacity: 0
        };
      },
      maskClick() {
        if (!this.closeOnClickMask)
          return;
        this.close();
      },
      highlight(index = void 0) {
        this.highlightIndex = index !== void 0 ? index : 99999;
      },
      getContentHeight() {
        let windowHeight = this.$u.sys().windowHeight;
        this.$uGetRect(".u-dropdown__menu").then((res) => {
          this.contentHeight = windowHeight - res.bottom;
        });
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-dropdown" }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["u-dropdown__menu", {
          "u-border-bottom": $props.borderBottom
        }]),
        style: vue.normalizeStyle({
          height: _ctx.$u.addUnit($props.height)
        })
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.menuList, (item2, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "u-dropdown__menu__item",
            key: index,
            onClick: vue.withModifiers(($event) => $options.menuClick(index), ["stop"])
          }, [
            vue.createElementVNode("view", { class: "u-flex" }, [
              vue.createElementVNode("text", {
                class: "u-dropdown__menu__item__text",
                style: vue.normalizeStyle({
                  fontSize: _ctx.$u.addUnit($props.titleSize)
                })
              }, vue.toDisplayString(item2.title), 5),
              vue.createElementVNode("view", {
                class: vue.normalizeClass(["u-dropdown__menu__item__arrow", {
                  "u-dropdown__menu__item__arrow--rotate": index === $data.current
                }])
              }, [
                vue.createVNode(_component_u_icon, {
                  "custom-style": { display: "flex" },
                  name: $props.menuIcon,
                  size: _ctx.$u.addUnit($props.menuIconSize),
                  color: index === $data.current || $data.highlightIndex == index ? $props.activeColor : "#c0c4cc"
                }, null, 8, ["name", "size", "color"])
              ], 2)
            ])
          ], 8, ["onClick"]);
        }), 128))
      ], 6),
      vue.createElementVNode("view", {
        class: "u-dropdown__content",
        style: vue.normalizeStyle([$data.contentStyle, {
          transition: `opacity ${$props.duration / 1e3}s linear`,
          top: _ctx.$u.addUnit($props.height),
          height: $data.active ? $data.contentHeight + "px" : "0px"
        }]),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.maskClick && $options.maskClick(...args)),
        onTouchmove: _cache[2] || (_cache[2] = vue.withModifiers(() => {
        }, ["stop", "prevent"]))
      }, [
        vue.createElementVNode("view", {
          onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
          }, ["stop", "prevent"])),
          class: "u-dropdown__content__popup",
          style: vue.normalizeStyle([$options.popupStyle])
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 4),
        vue.createElementVNode("view", { class: "u-dropdown__content__mask" })
      ], 36)
    ]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-0ad5aceb"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-dropdown/u-dropdown.vue"]]);
  function broadcast(componentName, eventName, params) {
  }
  const Emitter = {
    methods: {
      dispatch(componentName, eventName, params) {
        let parent = this.$parent || this.$root;
        let name = parent.$options.name;
        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent;
          if (parent) {
            name = parent.$options.name;
          }
        }
        if (parent) {
          parent[eventName](params);
        }
      },
      broadcast(componentName, eventName, params) {
        broadcast.call(this, componentName, eventName, params);
      }
    }
  };
  const _sfc_main$j = {
    name: "u-input",
    emits: ["update:modelValue", "input", "change", "blur", "focus", "click", "touchstart"],
    mixins: [Emitter],
    props: {
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      type: {
        type: String,
        default: "text"
      },
      inputAlign: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: "\u8BF7\u8F93\u5165\u5185\u5BB9"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      placeholderStyle: {
        type: String,
        default: "color: #c0c4cc;"
      },
      confirmType: {
        type: String,
        default: "done"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      fixed: {
        type: Boolean,
        default: false
      },
      focus: {
        type: Boolean,
        default: false
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      border: {
        type: Boolean,
        default: false
      },
      borderColor: {
        type: String,
        default: "#dcdfe6"
      },
      autoHeight: {
        type: Boolean,
        default: true
      },
      selectOpen: {
        type: Boolean,
        default: false
      },
      height: {
        type: [Number, String],
        default: ""
      },
      clearable: {
        type: [Boolean, String],
        default: true
      },
      cursorSpacing: {
        type: [Number, String],
        default: 0
      },
      selectionStart: {
        type: [Number, String],
        default: -1
      },
      selectionEnd: {
        type: [Number, String],
        default: -1
      },
      trim: {
        type: Boolean,
        default: true
      },
      showConfirmbar: {
        type: Boolean,
        default: true
      },
      backgroundColor: {
        type: String
      },
      padding: {
        type: String
      }
    },
    data() {
      return {
        defaultValue: "",
        inputHeight: 70,
        textareaHeight: 100,
        validateState: false,
        focused: false,
        showPassword: false,
        lastValue: "",
        uForm: {
          inputAlign: "",
          clearable: ""
        }
      };
    },
    watch: {
      valueCom(nVal, oVal) {
        this.defaultValue = nVal;
        if (nVal != oVal && this.type == "select")
          this.handleInput({
            detail: {
              value: nVal
            }
          });
      }
    },
    computed: {
      valueCom() {
        return this.modelValue;
      },
      inputAlignCom() {
        return this.inputAlign || this.uForm.inputAlign || "left";
      },
      clearableCom() {
        if (typeof this.clearable == "boolean")
          return this.clearable;
        if (typeof this.uForm.clearable == "boolean")
          return this.uForm.clearable;
        return true;
      },
      inputMaxlength() {
        return Number(this.maxlength);
      },
      getStyle() {
        let style = {};
        style.minHeight = (this.height ? isNaN(this.height) ? this.height : this.height + "rpx" : this.type == "textarea" ? this.textareaHeight + "rpx" : this.inputHeight + "rpx") + " !important";
        style = Object.assign(style, this.customStyle);
        return style;
      },
      getCursorSpacing() {
        return Number(this.cursorSpacing);
      },
      uSelectionStart() {
        return String(this.selectionStart);
      },
      uSelectionEnd() {
        return String(this.selectionEnd);
      }
    },
    created() {
      this.defaultValue = this.valueCom;
    },
    mounted() {
      let parent = this.$u.$parent.call(this, "u-form");
      if (parent) {
        Object.keys(this.uForm).map((key) => {
          this.uForm[key] = parent[key];
        });
      }
    },
    methods: {
      handleInput(event) {
        let value = event.detail.value;
        if (this.trim)
          value = this.$u.trim(value);
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
        this.defaultValue = value;
        setTimeout(() => {
          this.dispatch("u-form-item", "onFieldChange", value);
        }, 40);
      },
      handleBlur(event) {
        setTimeout(() => {
          this.focused = false;
        }, 100);
        this.$emit("blur", event.detail.value);
        setTimeout(() => {
          this.dispatch("u-form-item", "onFieldBlur", event.detail.value);
        }, 40);
      },
      onFormItemError(status) {
        this.validateState = status;
      },
      onFocus(event) {
        this.focused = true;
        this.$emit("focus");
      },
      onConfirm(e) {
        this.$emit("confirm", e.detail.value);
      },
      onClear(event) {
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
      },
      inputClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-input", {
        "u-input--border": $props.border,
        "u-input--error": $data.validateState
      }]),
      style: vue.normalizeStyle({
        padding: $props.padding ? $props.padding : `0 ${$props.border ? 20 : 0}rpx`,
        borderColor: $props.borderColor,
        textAlign: $options.inputAlignCom,
        backgroundColor: $props.backgroundColor
      }),
      onClick: _cache[10] || (_cache[10] = vue.withModifiers((...args) => $options.inputClick && $options.inputClick(...args), ["stop"]))
    }, [
      $props.type == "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
        key: 0,
        class: "u-input__input u-input__textarea",
        style: vue.normalizeStyle([$options.getStyle]),
        value: $data.defaultValue,
        placeholder: $props.placeholder,
        placeholderStyle: $props.placeholderStyle,
        disabled: $props.disabled,
        maxlength: $options.inputMaxlength,
        fixed: $props.fixed,
        focus: $props.focus,
        autoHeight: $props.autoHeight,
        "selection-end": $options.uSelectionEnd,
        "selection-start": $options.uSelectionStart,
        "cursor-spacing": $options.getCursorSpacing,
        onInput: _cache[0] || (_cache[0] = (...args) => $options.handleInput && $options.handleInput(...args)),
        onBlur: _cache[1] || (_cache[1] = (...args) => $options.handleBlur && $options.handleBlur(...args)),
        onFocus: _cache[2] || (_cache[2] = (...args) => $options.onFocus && $options.onFocus(...args)),
        onConfirm: _cache[3] || (_cache[3] = (...args) => $options.onConfirm && $options.onConfirm(...args))
      }, null, 44, ["value", "placeholder", "placeholderStyle", "disabled", "maxlength", "fixed", "focus", "autoHeight", "selection-end", "selection-start", "cursor-spacing"])) : (vue.openBlock(), vue.createElementBlock("input", {
        key: 1,
        class: "u-input__input",
        type: $props.type == "password" ? "text" : $props.type,
        style: vue.normalizeStyle([$options.getStyle]),
        value: $data.defaultValue,
        password: $props.type == "password" && !$data.showPassword,
        placeholder: $props.placeholder,
        placeholderStyle: $props.placeholderStyle,
        disabled: $props.disabled || $props.type === "select",
        maxlength: $options.inputMaxlength,
        focus: $props.focus,
        confirmType: $props.confirmType,
        "cursor-spacing": $options.getCursorSpacing,
        "selection-end": $options.uSelectionEnd,
        "selection-start": $options.uSelectionStart,
        onFocus: _cache[4] || (_cache[4] = (...args) => $options.onFocus && $options.onFocus(...args)),
        onBlur: _cache[5] || (_cache[5] = (...args) => $options.handleBlur && $options.handleBlur(...args)),
        onInput: _cache[6] || (_cache[6] = (...args) => $options.handleInput && $options.handleInput(...args)),
        onConfirm: _cache[7] || (_cache[7] = (...args) => $options.onConfirm && $options.onConfirm(...args))
      }, null, 44, ["type", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType", "cursor-spacing", "selection-end", "selection-start"])),
      vue.createElementVNode("view", { class: "u-input__right-icon u-flex" }, [
        $options.clearableCom && $options.valueCom != "" && $data.focused ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-input__right-icon__clear u-input__right-icon__item",
          onClick: _cache[8] || (_cache[8] = (...args) => $options.onClear && $options.onClear(...args))
        }, [
          vue.createVNode(_component_u_icon, {
            size: "32",
            name: "close-circle-fill",
            color: "#c0c4cc"
          })
        ])) : vue.createCommentVNode("v-if", true),
        $props.passwordIcon && $props.type == "password" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "u-input__right-icon__clear u-input__right-icon__item"
        }, [
          vue.createVNode(_component_u_icon, {
            size: "32",
            name: !$data.showPassword ? "eye" : "eye-fill",
            color: "#c0c4cc",
            onClick: _cache[9] || (_cache[9] = ($event) => $data.showPassword = !$data.showPassword)
          }, null, 8, ["name"])
        ])) : vue.createCommentVNode("v-if", true),
        $props.type == "select" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: vue.normalizeClass(["u-input__right-icon--select u-input__right-icon__item", {
            "u-input__right-icon--select--reverse": $props.selectOpen
          }])
        }, [
          vue.createVNode(_component_u_icon, {
            name: "arrow-right",
            size: "26",
            color: "#c0c4cc"
          })
        ], 2)) : vue.createCommentVNode("v-if", true)
      ])
    ], 6);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-42f09606"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-input/u-input.vue"]]);
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  var formatRegExp = /%[sdj%]/g;
  var warning = function warning2() {
  };
  if (typeof process !== "undefined" && process.env && true && typeof window !== "undefined" && typeof document !== "undefined") {
    warning = function warning2(type2, errors) {
      if (typeof console !== "undefined" && console.warn) {
        if (errors.every(function(e) {
          return typeof e === "string";
        })) {
          formatAppLog("warn", "at uni_modules/diy-uview-ui/libs/util/async-validator.js:30", type2, errors);
        }
      }
    };
  }
  function convertFieldsError(errors) {
    if (!errors || !errors.length)
      return null;
    var fields = {};
    errors.forEach(function(error) {
      var field = error.field;
      fields[field] = fields[field] || [];
      fields[field].push(error);
    });
    return fields;
  }
  function format() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var i = 1;
    var f = args[0];
    var len = args.length;
    if (typeof f === "function") {
      return f.apply(null, args.slice(1));
    }
    if (typeof f === "string") {
      var str = String(f).replace(formatRegExp, function(x) {
        if (x === "%%") {
          return "%";
        }
        if (i >= len) {
          return x;
        }
        switch (x) {
          case "%s":
            return String(args[i++]);
          case "%d":
            return Number(args[i++]);
          case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }
            break;
          default:
            return x;
        }
      });
      for (var arg = args[i]; i < len; arg = args[++i]) {
        str += " " + arg;
      }
      return str;
    }
    return f;
  }
  function isNativeStringType(type2) {
    return type2 === "string" || type2 === "url" || type2 === "hex" || type2 === "email" || type2 === "pattern";
  }
  function isEmptyValue(value, type2) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (type2 === "array" && Array.isArray(value) && !value.length) {
      return true;
    }
    if (isNativeStringType(type2) && typeof value === "string" && !value) {
      return true;
    }
    return false;
  }
  function asyncParallelArray(arr, func2, callback) {
    var results = [];
    var total = 0;
    var arrLength = arr.length;
    function count(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === arrLength) {
        callback(results);
      }
    }
    arr.forEach(function(a) {
      func2(a, count);
    });
  }
  function asyncSerialArray(arr, func2, callback) {
    var index = 0;
    var arrLength = arr.length;
    function next(errors) {
      if (errors && errors.length) {
        callback(errors);
        return;
      }
      var original = index;
      index = index + 1;
      if (original < arrLength) {
        func2(arr[original], next);
      } else {
        callback([]);
      }
    }
    next([]);
  }
  function flattenObjArr(objArr) {
    var ret = [];
    Object.keys(objArr).forEach(function(k) {
      ret.push.apply(ret, objArr[k]);
    });
    return ret;
  }
  function asyncMap(objArr, option, func2, callback) {
    if (option.first) {
      var _pending = new Promise(function(resolve, reject) {
        var next = function next2(errors) {
          callback(errors);
          return errors.length ? reject({
            errors,
            fields: convertFieldsError(errors)
          }) : resolve();
        };
        var flattenArr = flattenObjArr(objArr);
        asyncSerialArray(flattenArr, func2, next);
      });
      _pending["catch"](function(e) {
        return e;
      });
      return _pending;
    }
    var firstFields = option.firstFields || [];
    if (firstFields === true) {
      firstFields = Object.keys(objArr);
    }
    var objArrKeys = Object.keys(objArr);
    var objArrLength = objArrKeys.length;
    var total = 0;
    var results = [];
    var pending = new Promise(function(resolve, reject) {
      var next = function next2(errors) {
        results.push.apply(results, errors);
        total++;
        if (total === objArrLength) {
          callback(results);
          return results.length ? reject({
            errors: results,
            fields: convertFieldsError(results)
          }) : resolve();
        }
      };
      if (!objArrKeys.length) {
        callback(results);
        resolve();
      }
      objArrKeys.forEach(function(key) {
        var arr = objArr[key];
        if (firstFields.indexOf(key) !== -1) {
          asyncSerialArray(arr, func2, next);
        } else {
          asyncParallelArray(arr, func2, next);
        }
      });
    });
    pending["catch"](function(e) {
      return e;
    });
    return pending;
  }
  function complementError(rule) {
    return function(oe) {
      if (oe && oe.message) {
        oe.field = oe.field || rule.fullField;
        return oe;
      }
      return {
        message: typeof oe === "function" ? oe() : oe,
        field: oe.field || rule.fullField
      };
    };
  }
  function deepMerge$1(target, source) {
    if (source) {
      for (var s in source) {
        if (source.hasOwnProperty(s)) {
          var value = source[s];
          if (typeof value === "object" && typeof target[s] === "object") {
            target[s] = _extends({}, target[s], {}, value);
          } else {
            target[s] = value;
          }
        }
      }
    }
    return target;
  }
  function required(rule, value, source, errors, options, type2) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type2 || rule.type))) {
      errors.push(format(options.messages.required, rule.fullField));
    }
  }
  function whitespace(rule, value, source, errors, options) {
    if (/^\s+$/.test(value) || value === "") {
      errors.push(format(options.messages.whitespace, rule.fullField));
    }
  }
  var pattern = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    ),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  };
  var types = {
    integer: function integer2(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    "float": function float(value) {
      return types.number(value) && !types.integer(value);
    },
    array: function array2(value) {
      return Array.isArray(value);
    },
    regexp: function regexp2(value) {
      if (value instanceof RegExp) {
        return true;
      }
      try {
        return !!new RegExp(value);
      } catch (e) {
        return false;
      }
    },
    date: function date2(value) {
      return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function";
    },
    number: function number2(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof +value === "number";
    },
    object: function object2(value) {
      return typeof value === "object" && !types.array(value);
    },
    method: function method2(value) {
      return typeof value === "function";
    },
    email: function email2(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url: function url2(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    hex: function hex(value) {
      return typeof value === "string" && !!value.match(pattern.hex);
    }
  };
  function type(rule, value, source, errors, options) {
    if (rule.required && value === void 0) {
      required(rule, value, source, errors, options);
      return;
    }
    var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
    var ruleType = rule.type;
    if (custom.indexOf(ruleType) > -1) {
      if (!types[ruleType](value)) {
        errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
      }
    } else if (ruleType && typeof value !== rule.type) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  }
  function range$1(rule, value, source, errors, options) {
    var len = typeof rule.len === "number";
    var min = typeof rule.min === "number";
    var max = typeof rule.max === "number";
    var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    var val = value;
    var key = null;
    var num = typeof value === "number";
    var str = typeof value === "string";
    var arr = Array.isArray(value);
    if (num) {
      key = "number";
    } else if (str) {
      key = "string";
    } else if (arr) {
      key = "array";
    }
    if (!key) {
      return false;
    }
    if (arr) {
      val = value.length;
    }
    if (str) {
      val = value.replace(spRegexp, "_").length;
    }
    if (len) {
      if (val !== rule.len) {
        errors.push(format(options.messages[key].len, rule.fullField, rule.len));
      }
    } else if (min && !max && val < rule.min) {
      errors.push(format(options.messages[key].min, rule.fullField, rule.min));
    } else if (max && !min && val > rule.max) {
      errors.push(format(options.messages[key].max, rule.fullField, rule.max));
    } else if (min && max && (val < rule.min || val > rule.max)) {
      errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
    }
  }
  var ENUM = "enum";
  function enumerable(rule, value, source, errors, options) {
    rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
    if (rule[ENUM].indexOf(value) === -1) {
      errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
    }
  }
  function pattern$1(rule, value, source, errors, options) {
    if (rule.pattern) {
      if (rule.pattern instanceof RegExp) {
        rule.pattern.lastIndex = 0;
        if (!rule.pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      } else if (typeof rule.pattern === "string") {
        var _pattern = new RegExp(rule.pattern);
        if (!_pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      }
    }
  }
  var rules = {
    required,
    whitespace,
    type,
    range: range$1,
    "enum": enumerable,
    pattern: pattern$1
  };
  function string(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, "string");
      if (!isEmptyValue(value, "string")) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
        rules.pattern(rule, value, source, errors, options);
        if (rule.whitespace === true) {
          rules.whitespace(rule, value, source, errors, options);
        }
      }
    }
    callback(errors);
  }
  function method(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function number$1(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (value === "") {
        value = void 0;
      }
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function _boolean(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function regexp(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value)) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function integer(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function floatFn(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function array$1(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "array") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, "array");
      if (!isEmptyValue(value, "array")) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function object$1(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  var ENUM$1 = "enum";
  function enumerable$1(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (value !== void 0) {
        rules[ENUM$1](rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function pattern$2(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, "string") && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value, "string")) {
        rules.pattern(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function date$1(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
      if (!isEmptyValue(value)) {
        var dateObject;
        if (typeof value === "number") {
          dateObject = new Date(value);
        } else {
          dateObject = value;
        }
        rules.type(rule, dateObject, source, errors, options);
        if (dateObject) {
          rules.range(rule, dateObject.getTime(), source, errors, options);
        }
      }
    }
    callback(errors);
  }
  function required$1(rule, value, callback, source, options) {
    var errors = [];
    var type2 = Array.isArray(value) ? "array" : typeof value;
    rules.required(rule, value, source, errors, options, type2);
    callback(errors);
  }
  function type$1(rule, value, callback, source, options) {
    var ruleType = rule.type;
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value, ruleType) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options, ruleType);
      if (!isEmptyValue(value, ruleType)) {
        rules.type(rule, value, source, errors, options);
      }
    }
    callback(errors);
  }
  function any(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }
      rules.required(rule, value, source, errors, options);
    }
    callback(errors);
  }
  var validators = {
    string,
    method,
    number: number$1,
    "boolean": _boolean,
    regexp,
    integer,
    "float": floatFn,
    array: array$1,
    object: object$1,
    "enum": enumerable$1,
    pattern: pattern$2,
    date: date$1,
    url: type$1,
    hex: type$1,
    email: type$1,
    required: required$1,
    any
  };
  function newMessages() {
    return {
      "default": "Validation error on field %s",
      required: "%s is required",
      "enum": "%s must be one of %s",
      whitespace: "%s cannot be empty",
      date: {
        format: "%s date %s is invalid for format %s",
        parse: "%s date could not be parsed, %s is invalid ",
        invalid: "%s date %s is invalid"
      },
      types: {
        string: "%s is not a %s",
        method: "%s is not a %s (function)",
        array: "%s is not an %s",
        object: "%s is not an %s",
        number: "%s is not a %s",
        date: "%s is not a %s",
        "boolean": "%s is not a %s",
        integer: "%s is not an %s",
        "float": "%s is not a %s",
        regexp: "%s is not a valid %s",
        email: "%s is not a valid %s",
        url: "%s is not a valid %s",
        hex: "%s is not a valid %s"
      },
      string: {
        len: "%s must be exactly %s characters",
        min: "%s must be at least %s characters",
        max: "%s cannot be longer than %s characters",
        range: "%s must be between %s and %s characters"
      },
      number: {
        len: "%s must equal %s",
        min: "%s cannot be less than %s",
        max: "%s cannot be greater than %s",
        range: "%s must be between %s and %s"
      },
      array: {
        len: "%s must be exactly %s in length",
        min: "%s cannot be less than %s in length",
        max: "%s cannot be greater than %s in length",
        range: "%s must be between %s and %s in length"
      },
      pattern: {
        mismatch: "%s value %s does not match pattern %s"
      },
      clone: function clone() {
        var cloned = JSON.parse(JSON.stringify(this));
        cloned.clone = this.clone;
        return cloned;
      }
    };
  }
  var messages = newMessages();
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  Schema.prototype = {
    messages: function messages2(_messages) {
      if (_messages) {
        this._messages = deepMerge$1(newMessages(), _messages);
      }
      return this._messages;
    },
    define: function define(rules2) {
      if (!rules2) {
        throw new Error("Cannot configure a schema with no rules");
      }
      if (typeof rules2 !== "object" || Array.isArray(rules2)) {
        throw new Error("Rules must be an object");
      }
      this.rules = {};
      var z;
      var item2;
      for (z in rules2) {
        if (rules2.hasOwnProperty(z)) {
          item2 = rules2[z];
          this.rules[z] = Array.isArray(item2) ? item2 : [item2];
        }
      }
    },
    validate: function validate(source_, o, oc) {
      var _this = this;
      if (o === void 0) {
        o = {};
      }
      if (oc === void 0) {
        oc = function oc2() {
        };
      }
      var source = source_;
      var options = o;
      var callback = oc;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (callback) {
          callback();
        }
        return Promise.resolve();
      }
      function complete(results) {
        var i;
        var errors = [];
        var fields = {};
        function add(e) {
          if (Array.isArray(e)) {
            var _errors;
            errors = (_errors = errors).concat.apply(_errors, e);
          } else {
            errors.push(e);
          }
        }
        for (i = 0; i < results.length; i++) {
          add(results[i]);
        }
        if (!errors.length) {
          errors = null;
          fields = null;
        } else {
          fields = convertFieldsError(errors);
        }
        callback(errors, fields);
      }
      if (options.messages) {
        var messages$1 = this.messages();
        if (messages$1 === messages) {
          messages$1 = newMessages();
        }
        deepMerge$1(messages$1, options.messages);
        options.messages = messages$1;
      } else {
        options.messages = this.messages();
      }
      var arr;
      var value;
      var series = {};
      var keys = options.keys || Object.keys(this.rules);
      keys.forEach(function(z) {
        arr = _this.rules[z];
        value = source[z];
        arr.forEach(function(r) {
          var rule = r;
          if (typeof rule.transform === "function") {
            if (source === source_) {
              source = _extends({}, source);
            }
            value = source[z] = rule.transform(value);
          }
          if (typeof rule === "function") {
            rule = {
              validator: rule
            };
          } else {
            rule = _extends({}, rule);
          }
          rule.validator = _this.getValidationMethod(rule);
          rule.field = z;
          rule.fullField = rule.fullField || z;
          rule.type = _this.getType(rule);
          if (!rule.validator) {
            return;
          }
          series[z] = series[z] || [];
          series[z].push({
            rule,
            value,
            source,
            field: z
          });
        });
      });
      var errorFields = {};
      return asyncMap(series, options, function(data, doIt) {
        var rule = data.rule;
        var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
        deep = deep && (rule.required || !rule.required && data.value);
        rule.field = data.field;
        function addFullfield(key, schema) {
          return _extends({}, schema, {
            fullField: rule.fullField + "." + key
          });
        }
        function cb(e) {
          if (e === void 0) {
            e = [];
          }
          var errors = e;
          if (!Array.isArray(errors)) {
            errors = [errors];
          }
          if (!options.suppressWarning && errors.length) {
            Schema.warning("async-validator:", errors);
          }
          if (errors.length && rule.message) {
            errors = [].concat(rule.message);
          }
          errors = errors.map(complementError(rule));
          if (options.first && errors.length) {
            errorFields[rule.field] = 1;
            return doIt(errors);
          }
          if (!deep) {
            doIt(errors);
          } else {
            if (rule.required && !data.value) {
              if (rule.message) {
                errors = [].concat(rule.message).map(complementError(rule));
              } else if (options.error) {
                errors = [options.error(rule, format(options.messages.required, rule.field))];
              } else {
                errors = [];
              }
              return doIt(errors);
            }
            var fieldsSchema = {};
            if (rule.defaultField) {
              for (var k in data.value) {
                if (data.value.hasOwnProperty(k)) {
                  fieldsSchema[k] = rule.defaultField;
                }
              }
            }
            fieldsSchema = _extends({}, fieldsSchema, {}, data.rule.fields);
            for (var f in fieldsSchema) {
              if (fieldsSchema.hasOwnProperty(f)) {
                var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
                fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
              }
            }
            var schema = new Schema(fieldsSchema);
            schema.messages(options.messages);
            if (data.rule.options) {
              data.rule.options.messages = options.messages;
              data.rule.options.error = options.error;
            }
            schema.validate(data.value, data.rule.options || options, function(errs) {
              var finalErrors = [];
              if (errors && errors.length) {
                finalErrors.push.apply(finalErrors, errors);
              }
              if (errs && errs.length) {
                finalErrors.push.apply(finalErrors, errs);
              }
              doIt(finalErrors.length ? finalErrors : null);
            });
          }
        }
        var res;
        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options);
        } else if (rule.validator) {
          res = rule.validator(rule, data.value, cb, data.source, options);
          if (res === true) {
            cb();
          } else if (res === false) {
            cb(rule.message || rule.field + " fails");
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }
        if (res && res.then) {
          res.then(function() {
            return cb();
          }, function(e) {
            return cb(e);
          });
        }
      }, function(results) {
        complete(results);
      });
    },
    getType: function getType(rule) {
      if (rule.type === void 0 && rule.pattern instanceof RegExp) {
        rule.type = "pattern";
      }
      if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
        throw new Error(format("Unknown rule type %s", rule.type));
      }
      return rule.type || "string";
    },
    getValidationMethod: function getValidationMethod(rule) {
      if (typeof rule.validator === "function") {
        return rule.validator;
      }
      var keys = Object.keys(rule);
      var messageIndex = keys.indexOf("message");
      if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
      }
      if (keys.length === 1 && keys[0] === "required") {
        return validators.required;
      }
      return validators[this.getType(rule)] || false;
    }
  };
  Schema.register = function register(type2, validator) {
    if (typeof validator !== "function") {
      throw new Error("Cannot register a validator by type, validator is not a function");
    }
    validators[type2] = validator;
  };
  Schema.warning = warning;
  Schema.messages = messages;
  Schema.warning = function() {
  };
  const _sfc_main$i = {
    name: "u-form-item",
    mixins: [Emitter],
    inject: {
      uForm: {
        default() {
          return null;
        }
      }
    },
    props: {
      label: {
        type: String,
        default: ""
      },
      prop: {
        type: String,
        default: ""
      },
      borderBottom: {
        type: [String, Boolean],
        default: ""
      },
      labelClass: {
        type: String,
        default: ""
      },
      labelPosition: {
        type: String,
        default: ""
      },
      labelWidth: {
        type: [String, Number],
        default: "5em"
      },
      labelStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      labelAlign: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      leftIconStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      rightIconStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      required: {
        type: Boolean,
        default: false
      },
      inputAlign: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        initialValue: "",
        validateState: "",
        validateMessage: "",
        errorType: ["message"],
        fieldValue: "",
        parentData: {
          borderBottom: true,
          labelWidth: 90,
          labelPosition: "left",
          labelStyle: {},
          labelAlign: "left",
          inputAlign: "left"
        }
      };
    },
    watch: {
      validateState(val) {
        this.broadcastInputError();
      },
      "uForm.errorType"(val) {
        this.errorType = val;
        this.broadcastInputError();
      }
    },
    computed: {
      uLabelWidth() {
        return this.elLabelPosition == "left" ? this.label === "true" || this.label === "" ? "auto" : this.$u.addUnit(this.elLabelWidth) : "100%";
      },
      showError() {
        return (type2) => {
          if (this.errorType.indexOf("none") >= 0)
            return false;
          else if (this.errorType.indexOf(type2) >= 0)
            return true;
          else
            return false;
        };
      },
      elLabelWidth() {
        return this.labelWidth != 0 || this.labelWidth != "" ? this.labelWidth : this.parentData.labelWidth ? this.parentData.labelWidth : 90;
      },
      elLabelStyle() {
        return Object.keys(this.labelStyle).length ? this.labelStyle : this.parentData.labelStyle ? this.parentData.labelStyle : {};
      },
      elLabelPosition() {
        return this.labelPosition ? this.labelPosition : this.parentData.labelPosition ? this.parentData.labelPosition : "left";
      },
      elLabelAlign() {
        return this.labelAlign ? this.labelAlign : this.parentData.labelAlign ? this.parentData.labelAlign : "left";
      },
      elBorderBottom() {
        return this.borderBottom !== "" ? this.borderBottom : this.parentData.borderBottom ? this.parentData.borderBottom : true;
      },
      elInputAlign() {
        return this.inputAlign ? this.inputAlign : this.parentData.inputAlign ? this.parentData.inputAlign : "left";
      }
    },
    methods: {
      broadcastInputError() {
        this.broadcast("u-input", "onFormItemError", this.validateState === "error" && this.showError("border"));
      },
      setRules() {
      },
      getRules() {
        let rules2 = this.parent.rules;
        rules2 = rules2 ? rules2[this.prop] : [];
        return [].concat(rules2 || []);
      },
      onFieldBlur() {
        this.validation("blur");
      },
      onFieldChange() {
        this.validation("change");
      },
      getFilteredRule(triggerType = "") {
        let rules2 = this.getRules();
        if (!triggerType)
          return rules2;
        return rules2.filter((res) => res.trigger && res.trigger.indexOf(triggerType) !== -1);
      },
      getData(dataObj, name, defaultValue) {
        let newDataObj;
        if (dataObj) {
          newDataObj = JSON.parse(JSON.stringify(dataObj));
          let k = "", d = ".", l = "[", r = "]";
          name = name.replace(/\s+/g, k) + d;
          let tstr = k;
          for (let i = 0; i < name.length; i++) {
            let theChar = name.charAt(i);
            if (theChar != d && theChar != l && theChar != r) {
              tstr += theChar;
            } else if (newDataObj) {
              if (tstr != k)
                newDataObj = newDataObj[tstr];
              tstr = k;
            }
          }
        }
        if (typeof newDataObj === "undefined" && typeof defaultValue !== "undefined")
          newDataObj = defaultValue;
        return newDataObj;
      },
      setData(dataObj, name, value) {
        let dataValue;
        if (typeof value === "object") {
          dataValue = JSON.parse(JSON.stringify(value));
        } else {
          dataValue = value;
        }
        let regExp = new RegExp("([\\w$]+)|\\[(:\\d)\\]", "g");
        const patten = name.match(regExp);
        for (let i = 0; i < patten.length - 1; i++) {
          let keyName = patten[i];
          if (typeof dataObj[keyName] !== "object")
            dataObj[keyName] = {};
          dataObj = dataObj[keyName];
        }
        dataObj[patten[patten.length - 1]] = dataValue;
      },
      validation(trigger, callback = () => {
      }) {
        this.fieldValue = this.getData(this.parent.model, this.prop);
        let rules2 = this.getFilteredRule(trigger);
        if (!rules2 || rules2.length === 0) {
          return callback("");
        }
        this.validateState = "validating";
        let validator = new Schema({
          [this.prop]: rules2
        });
        validator.validate({
          [this.prop]: this.fieldValue
        }, {
          firstFields: true
        }, (errors, fields) => {
          this.validateState = !errors ? "success" : "error";
          this.validateMessage = errors ? errors[0].message : "";
          let field = errors ? errors[0].field : "";
          callback(this.validateMessage, {
            state: this.validateState,
            key: field,
            msg: this.validateMessage
          });
        });
      },
      resetField() {
        this.setData(this.parent.model, this.prop, this.initialValue);
        this.validateState = "success";
      }
    },
    mounted() {
      this.parent = this.$u.$parent.call(this, "u-form");
      if (this.parent) {
        Object.keys(this.parentData).map((key) => {
          this.parentData[key] = this.parent[key];
        });
        if (this.prop) {
          this.parent.fields.push(this);
          this.errorType = this.parent.errorType;
          this.initialValue = this.fieldValue;
          this.$nextTick(() => {
            this.setRules();
          });
        }
      }
    },
    beforeUnmount() {
      if (this.parent && this.prop) {
        this.parent.fields.map((item2, index) => {
          if (item2 === this)
            this.parent.fields.splice(index, 1);
        });
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-form-item", { "u-border-bottom": $options.elBorderBottom, "u-form-item__border-bottom--error": $data.validateState === "error" && $options.showError("border-bottom") }])
    }, [
      vue.createElementVNode("view", {
        class: "u-form-item__body",
        style: vue.normalizeStyle({
          flexDirection: $options.elLabelPosition == "left" ? "row" : "column"
        })
      }, [
        vue.createCommentVNode(' \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E2D\uFF0C\u5C06\u4E00\u4E2A\u53C2\u6570\u8BBE\u7F6E\u7A7A\u5B57\u7B26\u4E32\uFF0C\u7ED3\u679C\u4F1A\u53D8\u6210\u5B57\u7B26\u4E32"true" '),
        $props.label ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-form-item--left",
          style: vue.normalizeStyle({
            width: $options.uLabelWidth,
            marginBottom: $options.elLabelPosition == "left" ? 0 : "10rpx"
          })
        }, [
          vue.createCommentVNode(" \u4E3A\u4E86\u5757\u5BF9\u9F50 "),
          $props.required || $props.leftIcon || $props.label ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: vue.normalizeClass(["u-form-item--left__content", $props.labelClass])
          }, [
            vue.createCommentVNode(" nvue\u4E0D\u652F\u6301\u4F2A\u5143\u7D20before "),
            $props.required ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "u-form-item--left__content--required"
            }, "*")) : vue.createCommentVNode("v-if", true),
            $props.leftIcon ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "u-form-item--left__content__icon"
            }, [
              vue.createVNode(_component_u_icon, {
                name: $props.leftIcon,
                "custom-style": $props.leftIconStyle
              }, null, 8, ["name", "custom-style"])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", {
              class: "u-form-item--left__content__label",
              style: vue.normalizeStyle([$options.elLabelStyle, {
                "justify-content": $options.elLabelAlign == "left" ? "flex-start" : $options.elLabelAlign == "center" ? "center" : "flex-end"
              }])
            }, vue.toDisplayString($props.label), 5)
          ], 2)) : vue.createCommentVNode("v-if", true)
        ], 4)) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "u-form-item--right u-flex" }, [
          vue.createElementVNode("view", { class: "u-form-item--right__content" }, [
            vue.createElementVNode("view", {
              class: "u-form-item--right__content__slot",
              style: vue.normalizeStyle($options.elLabelPosition == "left" && $options.elInputAlign == "right" ? "text-align:right;display: inline-block;line-height:initial;" : "")
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 4),
            _ctx.$slots.right || $props.rightIcon ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "u-form-item--right__content__icon u-flex"
            }, [
              $props.rightIcon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 0,
                "custom-style": $props.rightIconStyle,
                name: $props.rightIcon
              }, null, 8, ["custom-style", "name"])) : vue.createCommentVNode("v-if", true),
              vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ])
      ], 4),
      $data.validateState === "error" && $options.showError("message") ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-form-item__message",
        style: vue.normalizeStyle({
          paddingLeft: $options.elLabelPosition == "left" ? "calc(" + _ctx.$u.addUnit($options.elLabelWidth) + " + 24rpx)" : "0",
          textAlign: $options.elInputAlign == "right" ? "right" : "left"
        })
      }, vue.toDisplayString($data.validateMessage), 5)) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-e2d0cb75"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-form-item/u-form-item.vue"]]);
  const _sfc_main$h = {
    name: "u-button",
    emits: ["click", "getphonenumber", "getuserinfo", "error", "opensetting", "launchapp"],
    props: {
      hairLine: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "default"
      },
      size: {
        type: String,
        default: "default"
      },
      shape: {
        type: String,
        default: "square"
      },
      plain: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      openType: {
        type: String,
        default: ""
      },
      formType: {
        type: String,
        default: ""
      },
      appParameter: {
        type: String,
        default: ""
      },
      hoverStopPropagation: {
        type: Boolean,
        default: false
      },
      lang: {
        type: String,
        default: "en"
      },
      sessionFrom: {
        type: String,
        default: ""
      },
      sendMessageTitle: {
        type: String,
        default: ""
      },
      sendMessagePath: {
        type: String,
        default: ""
      },
      sendMessageImg: {
        type: String,
        default: ""
      },
      showMessageCard: {
        type: Boolean,
        default: false
      },
      hoverBgColor: {
        type: String,
        default: ""
      },
      rippleBgColor: {
        type: String,
        default: ""
      },
      ripple: {
        type: Boolean,
        default: false
      },
      hoverClass: {
        type: String,
        default: ""
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      dataName: {
        type: String,
        default: ""
      },
      throttleTime: {
        type: [String, Number],
        default: 500
      },
      hoverStartTime: {
        type: [String, Number],
        default: 20
      },
      hoverStayTime: {
        type: [String, Number],
        default: 150
      },
      timerId: {
        type: [String, Number]
      }
    },
    computed: {
      getHoverClass() {
        if (this.loading || this.disabled || this.ripple || this.hoverClass)
          return "";
        let hoverClass = "";
        hoverClass = this.plain ? "u-" + this.type + "-plain-hover" : "u-" + this.type + "-hover";
        return hoverClass;
      },
      showHairLineBorder() {
        if (["primary", "success", "error", "warning"].indexOf(this.type) >= 0 && !this.plain) {
          return "";
        } else {
          return "u-hairline-border";
        }
      }
    },
    data() {
      let btnTimerId = this.timerId || "button_" + Math.floor(Math.random() * 1e8 + 0);
      return {
        btnTimerId,
        rippleTop: 0,
        rippleLeft: 0,
        fields: {},
        waveActive: false
      };
    },
    methods: {
      click(e) {
        this.$u.throttle(() => {
          if (this.loading === true || this.disabled === true)
            return;
          if (this.ripple) {
            this.waveActive = false;
            this.$nextTick(function() {
              this.getWaveQuery(e);
            });
          }
          this.$emit("click", e);
        }, this.throttleTime, true, this.btnTimerId);
      },
      getWaveQuery(e) {
        this.getElQuery().then((res) => {
          let data = res[0];
          if (!data.width || !data.width)
            return;
          data.targetWidth = data.height > data.width ? data.height : data.width;
          if (!data.targetWidth)
            return;
          this.fields = data;
          let touchesX = "", touchesY = "";
          touchesX = e.touches[0].clientX;
          touchesY = e.touches[0].clientY;
          this.rippleTop = touchesY - data.top - data.targetWidth / 2;
          this.rippleLeft = touchesX - data.left - data.targetWidth / 2;
          this.$nextTick(() => {
            this.waveActive = true;
          });
        });
      },
      getElQuery() {
        return new Promise((resolve) => {
          let queryInfo = "";
          queryInfo = uni.createSelectorQuery().in(this);
          queryInfo.select(".u-btn").boundingClientRect();
          queryInfo.exec((data) => {
            resolve(data);
          });
        });
      },
      getphonenumber(res) {
        this.$emit("getphonenumber", res);
      },
      getuserinfo(res) {
        this.$emit("getuserinfo", res);
      },
      error(res) {
        this.$emit("error", res);
      },
      opensetting(res) {
        this.$emit("opensetting", res);
      },
      launchapp(res) {
        this.$emit("launchapp", res);
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", {
      id: "u-wave-btn",
      class: vue.normalizeClass(["u-btn u-line-1 u-fix-ios-appearance", [
        "u-size-" + $props.size,
        $props.plain ? "u-btn--" + $props.type + "--plain" : "",
        $props.loading ? "u-loading" : "",
        $props.shape == "circle" ? "u-round-circle" : "",
        $props.hairLine ? $options.showHairLineBorder : "u-btn--bold-border",
        "u-btn--" + $props.type,
        $props.disabled ? `u-btn--${$props.type}--disabled` : ""
      ]]),
      "hover-start-time": Number($props.hoverStartTime),
      "hover-stay-time": Number($props.hoverStayTime),
      disabled: $props.disabled,
      "form-type": $props.formType,
      "open-type": $props.openType,
      "app-parameter": $props.appParameter,
      "hover-stop-propagation": $props.hoverStopPropagation,
      "send-message-title": $props.sendMessageTitle,
      "send-message-path": "sendMessagePath",
      lang: $props.lang,
      "data-name": $props.dataName,
      "session-from": $props.sessionFrom,
      "send-message-img": $props.sendMessageImg,
      "show-message-card": $props.showMessageCard,
      onGetphonenumber: _cache[0] || (_cache[0] = (...args) => $options.getphonenumber && $options.getphonenumber(...args)),
      onGetuserinfo: _cache[1] || (_cache[1] = (...args) => $options.getuserinfo && $options.getuserinfo(...args)),
      onError: _cache[2] || (_cache[2] = (...args) => $options.error && $options.error(...args)),
      onOpensetting: _cache[3] || (_cache[3] = (...args) => $options.opensetting && $options.opensetting(...args)),
      onLaunchapp: _cache[4] || (_cache[4] = (...args) => $options.launchapp && $options.launchapp(...args)),
      style: vue.normalizeStyle([$props.customStyle, {
        overflow: $props.ripple ? "hidden" : "visible"
      }]),
      onClick: _cache[5] || (_cache[5] = vue.withModifiers(($event) => $options.click($event), ["stop"])),
      "hover-class": $options.getHoverClass,
      loading: $props.loading
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.ripple ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["u-wave-ripple", [$data.waveActive ? "u-wave-active" : ""]]),
        style: vue.normalizeStyle({
          top: $data.rippleTop + "px",
          left: $data.rippleLeft + "px",
          width: $data.fields.targetWidth + "px",
          height: $data.fields.targetWidth + "px",
          "background-color": $props.rippleBgColor || "rgba(0, 0, 0, 0.15)"
        })
      }, null, 6)) : vue.createCommentVNode("v-if", true)
    ], 46, ["hover-start-time", "hover-stay-time", "disabled", "form-type", "open-type", "app-parameter", "hover-stop-propagation", "send-message-title", "lang", "data-name", "session-from", "send-message-img", "show-message-card", "hover-class", "loading"]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-99d81fec"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-button/u-button.vue"]]);
  const _sfc_main$g = {
    name: "u-mask",
    emits: ["click"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      zIndex: {
        type: [Number, String],
        default: ""
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      zoom: {
        type: Boolean,
        default: true
      },
      duration: {
        type: [Number, String],
        default: 300
      },
      maskClickAble: {
        type: Boolean,
        default: true
      },
      blur: {
        type: [Number, String],
        default: 0
      }
    },
    data() {
      return {
        zoomStyle: {
          transform: ""
        },
        scale: "scale(1.2, 1.2)"
      };
    },
    watch: {
      show(n) {
        if (n && this.zoom) {
          this.zoomStyle.transform = "scale(1, 1)";
        } else if (!n && this.zoom) {
          this.zoomStyle.transform = this.scale;
        }
      }
    },
    computed: {
      maskStyle() {
        let style = {};
        style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        if (this.show)
          style.zIndex = this.zIndex ? this.zIndex : this.$u.zIndex.mask;
        else
          style.zIndex = -1;
        style.transition = `all ${this.duration / 1e3}s ease-in-out`;
        if (Object.keys(this.customStyle).length)
          style = {
            ...style,
            ...this.customStyle
          };
        return style;
      },
      filterStyle() {
        let { blur } = this;
        let style = {};
        if (blur) {
          style.backdropFilter = `blur(${blur}rpx)`;
        }
        return style;
      }
    },
    methods: {
      click() {
        if (!this.maskClickAble)
          return;
        this.$emit("click");
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-mask", {
        "u-mask-zoom": $props.zoom,
        "u-mask-show": $props.show
      }]),
      "hover-stop-propagation": "",
      style: vue.normalizeStyle([$options.maskStyle, $data.zoomStyle, $options.filterStyle]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args)),
      onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers(() => {
      }, ["stop", "prevent"]))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 38);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-0883ba89"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-mask/u-mask.vue"]]);
  const _sfc_main$f = {
    name: "u-popup",
    emits: ["update:modelValue", "input", "open", "close"],
    props: {
      value: {
        type: Boolean,
        default: false
      },
      modelValue: {
        type: Boolean,
        default: false
      },
      show: {
        type: Boolean,
        default: false
      },
      mode: {
        type: String,
        default: "left"
      },
      mask: {
        type: Boolean,
        default: true
      },
      length: {
        type: [Number, String],
        default: "auto"
      },
      zoom: {
        type: Boolean,
        default: true
      },
      safeAreaInsetBottom: {
        type: Boolean,
        default: false
      },
      maskCloseAble: {
        type: Boolean,
        default: true
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      popup: {
        type: Boolean,
        default: true
      },
      borderRadius: {
        type: [Number, String],
        default: 0
      },
      zIndex: {
        type: [Number, String],
        default: ""
      },
      closeable: {
        type: Boolean,
        default: false
      },
      closeIcon: {
        type: String,
        default: "close"
      },
      closeIconPos: {
        type: String,
        default: "top-right"
      },
      closeIconColor: {
        type: String,
        default: "#909399"
      },
      closeIconSize: {
        type: [String, Number],
        default: "30"
      },
      width: {
        type: String,
        default: ""
      },
      height: {
        type: String,
        default: ""
      },
      negativeTop: {
        type: [String, Number],
        default: 0
      },
      maskCustomStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      duration: {
        type: [String, Number],
        default: 250
      },
      blur: {
        type: [String, Number],
        default: 0
      }
    },
    data() {
      return {
        visibleSync: false,
        showDrawer: false,
        timer: null,
        closeFromInner: false
      };
    },
    computed: {
      valueCom() {
        return this.modelValue;
      },
      style() {
        let style = {};
        if (this.mode == "left" || this.mode == "right") {
          style = {
            width: this.width ? this.getUnitValue(this.width) : this.getUnitValue(this.length),
            height: "100%",
            transform: `translate3D(${this.mode == "left" ? "-100%" : "100%"},0px,0px)`
          };
        } else if (this.mode == "top" || this.mode == "bottom") {
          style = {
            width: "100%",
            height: this.height ? this.getUnitValue(this.height) : this.getUnitValue(this.length),
            transform: `translate3D(0px,${this.mode == "top" ? "-100%" : "100%"},0px)`
          };
        }
        style.zIndex = this.uZindex;
        if (this.borderRadius) {
          switch (this.mode) {
            case "left":
              style.borderRadius = `0 ${this.borderRadius}rpx ${this.borderRadius}rpx 0`;
              break;
            case "top":
              style.borderRadius = `0 0 ${this.borderRadius}rpx ${this.borderRadius}rpx`;
              break;
            case "right":
              style.borderRadius = `${this.borderRadius}rpx 0 0 ${this.borderRadius}rpx`;
              break;
            case "bottom":
              style.borderRadius = `${this.borderRadius}rpx ${this.borderRadius}rpx 0 0`;
              break;
          }
          style.overflow = "hidden";
        }
        if (this.duration)
          style.transition = `all ${this.duration / 1e3}s linear`;
        return style;
      },
      centerStyle() {
        let style = {};
        style.width = this.width ? this.getUnitValue(this.width) : this.getUnitValue(this.length);
        style.height = this.height ? this.getUnitValue(this.height) : "auto";
        style.zIndex = this.uZindex;
        style.marginTop = `-${this.$u.addUnit(this.negativeTop)}`;
        if (this.borderRadius) {
          style.borderRadius = `${this.borderRadius}rpx`;
          style.overflow = "hidden";
        }
        return style;
      },
      uZindex() {
        return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
      }
    },
    watch: {
      valueCom: {
        immediate: true,
        handler(val) {
          if (val) {
            this.open();
          } else if (!this.closeFromInner) {
            this.close();
          }
          this.closeFromInner = false;
        }
      }
    },
    mounted() {
      this.valueCom && this.open();
    },
    methods: {
      getUnitValue(val) {
        if (/(%|px|rpx|auto)$/.test(val))
          return val;
        else
          return val + "rpx";
      },
      maskClick() {
        this.close();
      },
      close() {
        this.closeFromInner = true;
        this.change("showDrawer", "visibleSync", false);
      },
      modeCenterClose(mode) {
        if (mode != "center" || !this.maskCloseAble)
          return;
        this.close();
      },
      open() {
        this.change("visibleSync", "showDrawer", true);
      },
      change(param1, param2, status) {
        if (this.popup == true) {
          this.$emit("input", status);
          this.$emit("update:modelValue", status);
        }
        this[param1] = status;
        if (status) {
          this.$nextTick(() => {
            this[param2] = status;
            this.$emit(status ? "open" : "close");
          });
        } else {
          this.timer = setTimeout(() => {
            this[param2] = status;
            this.$emit(status ? "open" : "close");
          }, this.duration);
        }
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_mask = resolveEasycom(vue.resolveDynamicComponent("u-mask"), __easycom_0);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$4);
    return $data.visibleSync ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      style: vue.normalizeStyle([$props.customStyle, {
        zIndex: $options.uZindex - 1
      }]),
      class: "u-drawer",
      "hover-stop-propagation": ""
    }, [
      vue.createVNode(_component_u_mask, {
        blur: $props.blur,
        duration: $props.duration,
        "custom-style": $props.maskCustomStyle,
        maskClickAble: $props.maskCloseAble,
        "z-index": $options.uZindex - 2,
        show: $data.showDrawer && $props.mask,
        onClick: $options.maskClick
      }, null, 8, ["blur", "duration", "custom-style", "maskClickAble", "z-index", "show", "onClick"]),
      vue.createCommentVNode(" \u79FB\u9664	@tap.stop.prevent "),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["u-drawer-content", [
          $props.safeAreaInsetBottom ? "safe-area-inset-bottom" : "",
          "u-drawer-" + $props.mode,
          $data.showDrawer ? "u-drawer-content-visible" : "",
          $props.zoom && $props.mode == "center" ? "u-animation-zoom" : ""
        ]]),
        onClick: _cache[3] || (_cache[3] = ($event) => $options.modeCenterClose($props.mode)),
        onTouchmove: _cache[4] || (_cache[4] = vue.withModifiers(() => {
        }, ["stop", "prevent"])),
        style: vue.normalizeStyle([$options.style])
      }, [
        $props.mode == "center" ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "u-mode-center-box",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
          }, ["stop", "prevent"])),
          onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers(() => {
          }, ["stop", "prevent"])),
          style: vue.normalizeStyle([$options.centerStyle])
        }, [
          $props.closeable ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
            key: 0,
            onClick: $options.close,
            class: vue.normalizeClass(["u-close", ["u-close--" + $props.closeIconPos]]),
            name: $props.closeIcon,
            color: $props.closeIconColor,
            size: $props.closeIconSize
          }, null, 8, ["onClick", "class", "name", "color", "size"])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("scroll-view", {
            class: "u-drawer__scroll-view",
            "scroll-y": "true"
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ], 36)) : (vue.openBlock(), vue.createElementBlock("scroll-view", {
          key: 1,
          class: "u-drawer__scroll-view",
          "scroll-y": "true"
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])),
        vue.createElementVNode("view", {
          onClick: _cache[2] || (_cache[2] = (...args) => $options.close && $options.close(...args)),
          class: vue.normalizeClass(["u-close", ["u-close--" + $props.closeIconPos]])
        }, [
          $props.mode != "center" && $props.closeable ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
            key: 0,
            name: $props.closeIcon,
            color: $props.closeIconColor,
            size: $props.closeIconSize
          }, null, 8, ["name", "color", "size"])) : vue.createCommentVNode("v-if", true)
        ], 2)
      ], 38)
    ], 4)) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-f8245d0b"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-popup/u-popup.vue"]]);
  const _sfc_main$e = {
    name: "u-calendar",
    emits: ["update:modelValue", "input", "change"],
    props: {
      value: {
        type: Boolean,
        default: false
      },
      modelValue: {
        type: Boolean,
        default: false
      },
      safeAreaInsetBottom: {
        type: Boolean,
        default: false
      },
      maskCloseAble: {
        type: Boolean,
        default: true
      },
      zIndex: {
        type: [String, Number],
        default: 0
      },
      changeYear: {
        type: Boolean,
        default: true
      },
      changeMonth: {
        type: Boolean,
        default: true
      },
      mode: {
        type: String,
        default: "date"
      },
      maxYear: {
        type: [Number, String],
        default: 2050
      },
      minYear: {
        type: [Number, String],
        default: 1950
      },
      minDate: {
        type: [Number, String],
        default: "1950-01-01"
      },
      maxDate: {
        type: [Number, String],
        default: ""
      },
      borderRadius: {
        type: [String, Number],
        default: 20
      },
      monthArrowColor: {
        type: String,
        default: "#606266"
      },
      yearArrowColor: {
        type: String,
        default: "#909399"
      },
      color: {
        type: String,
        default: "#303133"
      },
      activeBgColor: {
        type: String,
        default: "#19be6b"
      },
      activeColor: {
        type: String,
        default: "#ffffff"
      },
      rangeBgColor: {
        type: String,
        default: "rgba(25, 190, 107, 0.13)"
      },
      rangeColor: {
        type: String,
        default: "#19be6b"
      },
      startText: {
        type: String,
        default: "\u5F00\u59CB"
      },
      endText: {
        type: String,
        default: "\u7ED3\u675F"
      },
      btnType: {
        type: String,
        default: "primary"
      },
      isActiveCurrent: {
        type: Boolean,
        default: true
      },
      isChange: {
        type: Boolean,
        default: false
      },
      closeable: {
        type: Boolean,
        default: true
      },
      toolTip: {
        type: String,
        default: "\u9009\u62E9\u65E5\u671F"
      },
      blur: {
        type: [Number, String],
        default: 0
      },
      dateValue: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        popupValue: false,
        weekday: 1,
        weekdayArr: [],
        days: 0,
        daysArr: [],
        showTitle: "",
        year: 2020,
        month: 0,
        day: 0,
        startYear: 0,
        startMonth: 0,
        startDay: 0,
        endYear: 0,
        endMonth: 0,
        endDay: 0,
        today: "",
        activeDate: "",
        startDate: "",
        endDate: "",
        isStart: true,
        min: null,
        max: null,
        weekDayZh: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"]
      };
    },
    computed: {
      valueCom() {
        return this.modelValue;
      },
      dataChange() {
        return `${this.mode}-${this.minDate}-${this.maxDate}`;
      },
      uZIndex() {
        return this.zIndex ? this.zIndex : this.$u.zIndex.popup;
      }
    },
    watch: {
      dataChange(val) {
        this.init();
      },
      valueCom: {
        immediate: true,
        handler(val) {
          this.popupValue = val;
        }
      }
    },
    created() {
      this.init();
    },
    methods: {
      getColor(index, type2) {
        let color2 = type2 == 1 ? "" : this.color;
        let day = index + 1;
        let date2 = `${this.year}-${this.month}-${day}`;
        let timestamp = new Date(date2.replace(/\-/g, "/")).getTime();
        let start = this.startDate.replace(/\-/g, "/");
        let end = this.endDate.replace(/\-/g, "/");
        if (this.isActiveCurrent && this.activeDate == date2 || this.startDate == date2 || this.endDate == date2) {
          color2 = type2 == 1 ? this.activeBgColor : this.activeColor;
        } else if (this.endDate && timestamp > new Date(start).getTime() && timestamp < new Date(end).getTime()) {
          color2 = type2 == 1 ? this.rangeBgColor : this.rangeColor;
        }
        return color2;
      },
      string2date(str) {
        return new Date(Date.parse(str.replace(/-/g, "/")));
      },
      init() {
        let now = new Date();
        if (this.dateValue) {
          now = this.string2date(this.dateValue);
        }
        this.year = now.getFullYear();
        this.month = now.getMonth() + 1;
        this.day = now.getDate();
        this.today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
        this.activeDate = this.today;
        this.min = this.initDate(this.minDate);
        this.max = this.initDate(this.maxDate || this.today);
        this.startDate = "";
        this.startYear = 0;
        this.startMonth = 0;
        this.startDay = 0;
        this.endYear = 0;
        this.endMonth = 0;
        this.endDay = 0;
        this.endDate = "";
        this.isStart = true;
        this.changeData();
      },
      initDate(date2) {
        let fdate = date2.split("-");
        return {
          year: Number(fdate[0] || 1920),
          month: Number(fdate[1] || 1),
          day: Number(fdate[2] || 1)
        };
      },
      openDisAbled: function(year, month, day) {
        let bool = true;
        let date2 = `${year}/${month}/${day}`;
        let min = `${this.min.year}/${this.min.month}/${this.min.day}`;
        let max = `${this.max.year}/${this.max.month}/${this.max.day}`;
        let timestamp = new Date(date2).getTime();
        if (timestamp >= new Date(min).getTime() && timestamp <= new Date(max).getTime()) {
          bool = false;
        }
        return bool;
      },
      generateArray: function(start, end) {
        return Array.from(new Array(end + 1).keys()).slice(start);
      },
      formatNum: function(num) {
        return num < 10 ? "0" + num : num + "";
      },
      getMonthDay(year, month) {
        let days = new Date(year, month, 0).getDate();
        return days;
      },
      getWeekday(year, month) {
        let date2 = new Date(`${year}/${month}/01 00:00:00`);
        return date2.getDay();
      },
      checkRange(year) {
        let overstep = false;
        if (year < this.minYear || year > this.maxYear) {
          uni.showToast({
            title: "\u65E5\u671F\u8D85\u51FA\u8303\u56F4\u5566~",
            icon: "none"
          });
          overstep = true;
        }
        return overstep;
      },
      changeMonthHandler(isAdd) {
        if (isAdd) {
          let month = this.month + 1;
          let year = month > 12 ? this.year + 1 : this.year;
          if (!this.checkRange(year)) {
            this.month = month > 12 ? 1 : month;
            this.year = year;
            this.changeData();
          }
        } else {
          let month = this.month - 1;
          let year = month < 1 ? this.year - 1 : this.year;
          if (!this.checkRange(year)) {
            this.month = month < 1 ? 12 : month;
            this.year = year;
            this.changeData();
          }
        }
      },
      changeYearHandler(isAdd) {
        let year = isAdd ? this.year + 1 : this.year - 1;
        if (!this.checkRange(year)) {
          this.year = year;
          this.changeData();
        }
      },
      changeData() {
        this.days = this.getMonthDay(this.year, this.month);
        this.daysArr = this.generateArray(1, this.days);
        this.weekday = this.getWeekday(this.year, this.month);
        this.weekdayArr = this.generateArray(1, this.weekday);
        this.showTitle = `${this.year}\u5E74${this.month}\u6708`;
        if (this.isChange && this.mode == "date") {
          this.btnFix(true);
        }
      },
      dateClick: function(day) {
        day += 1;
        if (!this.openDisAbled(this.year, this.month, day)) {
          this.day = day;
          let date2 = `${this.year}-${this.month}-${day}`;
          if (this.mode == "date") {
            this.activeDate = date2;
          } else {
            let compare = new Date(date2.replace(/\-/g, "/")).getTime() < new Date(this.startDate.replace(/\-/g, "/")).getTime();
            if (this.isStart || compare) {
              this.startDate = date2;
              this.startYear = this.year;
              this.startMonth = this.month;
              this.startDay = this.day;
              this.endYear = 0;
              this.endMonth = 0;
              this.endDay = 0;
              this.endDate = "";
              this.activeDate = "";
              this.isStart = false;
            } else {
              this.endDate = date2;
              this.endYear = this.year;
              this.endMonth = this.month;
              this.endDay = this.day;
              this.isStart = true;
            }
          }
        }
      },
      close() {
        this.$emit("input", false);
        this.$emit("update:modelValue", false);
      },
      getWeekText(date2) {
        date2 = new Date(`${date2.replace(/\-/g, "/")} 00:00:00`);
        let week = date2.getDay();
        return "\u661F\u671F" + ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"][week];
      },
      btnFix(show) {
        if (!show) {
          this.close();
        }
        if (this.mode == "date") {
          let arr = this.activeDate.split("-");
          let year = this.isChange ? this.year : Number(arr[0]);
          let month = this.isChange ? this.month : Number(arr[1]);
          let day = this.isChange ? this.day : Number(arr[2]);
          let days = this.getMonthDay(year, month);
          let result = `${year}-${this.formatNum(month)}-${this.formatNum(day)}`;
          let weekText = this.getWeekText(result);
          let isToday = false;
          if (`${year}-${month}-${day}` == this.today) {
            isToday = true;
          }
          this.$emit("change", {
            year,
            month,
            day,
            days,
            result,
            week: weekText,
            isToday
          });
        } else {
          if (!this.startDate || !this.endDate)
            return;
          let startMonth = this.formatNum(this.startMonth);
          let startDay = this.formatNum(this.startDay);
          let startDate = `${this.startYear}-${startMonth}-${startDay}`;
          let startWeek = this.getWeekText(startDate);
          let endMonth = this.formatNum(this.endMonth);
          let endDay = this.formatNum(this.endDay);
          let endDate = `${this.endYear}-${endMonth}-${endDay}`;
          let endWeek = this.getWeekText(endDate);
          this.$emit("change", {
            startYear: this.startYear,
            startMonth: this.startMonth,
            startDay: this.startDay,
            startDate,
            startWeek,
            endYear: this.endYear,
            endMonth: this.endMonth,
            endDay: this.endDay,
            endDate,
            endWeek
          });
        }
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$4);
    const _component_u_button = resolveEasycom(vue.resolveDynamicComponent("u-button"), __easycom_1);
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_2$1);
    return vue.openBlock(), vue.createBlock(_component_u_popup, {
      blur: $props.blur,
      closeable: "",
      maskCloseAble: $props.maskCloseAble,
      mode: "bottom",
      popup: false,
      modelValue: $data.popupValue,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.popupValue = $event),
      length: "auto",
      safeAreaInsetBottom: $props.safeAreaInsetBottom,
      onClose: $options.close,
      "z-index": $options.uZIndex,
      "border-radius": $props.borderRadius
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "u-calendar" }, [
          vue.createElementVNode("view", { class: "u-calendar__header" }, [
            !_ctx.$slots["tooltip"] ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "u-calendar__header__text"
            }, vue.toDisplayString($props.toolTip), 1)) : vue.renderSlot(_ctx.$slots, "tooltip", { key: 1 }, void 0, true)
          ]),
          vue.createElementVNode("view", { class: "u-calendar__action u-flex u-row-center" }, [
            vue.createElementVNode("view", { class: "u-calendar__action__icon" }, [
              $props.changeYear ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 0,
                name: "arrow-left-double",
                color: $props.yearArrowColor,
                onClick: _cache[0] || (_cache[0] = ($event) => $options.changeYearHandler(0))
              }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("view", { class: "u-calendar__action__icon" }, [
              $props.changeMonth ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 0,
                name: "arrow-left",
                color: $props.monthArrowColor,
                onClick: _cache[1] || (_cache[1] = ($event) => $options.changeMonthHandler(0))
              }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("view", { class: "u-calendar__action__text" }, vue.toDisplayString($data.showTitle), 1),
            vue.createElementVNode("view", { class: "u-calendar__action__icon" }, [
              $props.changeMonth ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 0,
                name: "arrow-right",
                color: $props.monthArrowColor,
                onClick: _cache[2] || (_cache[2] = ($event) => $options.changeMonthHandler(1))
              }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("view", { class: "u-calendar__action__icon" }, [
              $props.changeYear ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 0,
                name: "arrow-right-double",
                color: $props.yearArrowColor,
                onClick: _cache[3] || (_cache[3] = ($event) => $options.changeYearHandler(1))
              }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          vue.createElementVNode("view", { class: "u-calendar__week-day" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.weekDayZh, (item2, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "u-calendar__week-day__text",
                key: index
              }, vue.toDisplayString(item2), 1);
            }), 128))
          ]),
          vue.createElementVNode("view", { class: "u-calendar__content" }, [
            vue.createCommentVNode(" \u524D\u7F6E\u7A7A\u767D\u90E8\u5206 "),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.weekdayArr, (item2, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "u-calendar__content__item"
              });
            }), 128)),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.daysArr, (item2, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass(["u-calendar__content__item", {
                  "u-hover-class": $options.openDisAbled($data.year, $data.month, index + 1),
                  "u-calendar__content--start-date": $props.mode == "range" && $data.startDate == `${$data.year}-${$data.month}-${index + 1}` || $props.mode == "date",
                  "u-calendar__content--end-date": $props.mode == "range" && $data.endDate == `${$data.year}-${$data.month}-${index + 1}` || $props.mode == "date"
                }]),
                style: vue.normalizeStyle({ backgroundColor: $options.getColor(index, 1) }),
                key: index,
                onClick: ($event) => $options.dateClick(index)
              }, [
                vue.createElementVNode("view", {
                  class: "u-calendar__content__item__inner",
                  style: vue.normalizeStyle({ color: $options.getColor(index, 2) })
                }, [
                  vue.createElementVNode("view", null, vue.toDisplayString(index + 1), 1)
                ], 4),
                $props.mode == "range" && $data.startDate == `${$data.year}-${$data.month}-${index + 1}` && $data.startDate != $data.endDate ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "u-calendar__content__item__tips",
                  style: vue.normalizeStyle({ color: $props.activeColor })
                }, vue.toDisplayString($props.startText), 5)) : vue.createCommentVNode("v-if", true),
                $props.mode == "range" && $data.endDate == `${$data.year}-${$data.month}-${index + 1}` ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "u-calendar__content__item__tips",
                  style: vue.normalizeStyle({ color: $props.activeColor })
                }, vue.toDisplayString($props.endText), 5)) : vue.createCommentVNode("v-if", true)
              ], 14, ["onClick"]);
            }), 128)),
            vue.createElementVNode("view", { class: "u-calendar__content__bg-month" }, vue.toDisplayString($data.month), 1)
          ]),
          vue.createElementVNode("view", { class: "u-calendar__bottom" }, [
            vue.createElementVNode("view", { class: "u-calendar__bottom__choose" }, [
              vue.createElementVNode("text", null, vue.toDisplayString($props.mode == "date" ? $data.activeDate : $data.startDate), 1),
              $data.endDate ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "\u81F3" + vue.toDisplayString($data.endDate), 1)) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("view", { class: "u-calendar__bottom__btn" }, [
              vue.createVNode(_component_u_button, {
                type: $props.btnType,
                shape: "circle",
                size: "default",
                onClick: _cache[4] || (_cache[4] = ($event) => $options.btnFix(false))
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("\u786E\u5B9A")
                ]),
                _: 1
              }, 8, ["type"])
            ])
          ])
        ])
      ]),
      _: 3
    }, 8, ["blur", "maskCloseAble", "modelValue", "safeAreaInsetBottom", "onClose", "z-index", "border-radius", "closeable"]);
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-624646de"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-calendar/u-calendar.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        list: [],
        userInfo: {},
        globalOption: {
          chosen_department: ""
        },
        globalData: {
          type: ""
        },
        dropdowns10: "",
        dropdowns11: "",
        dropdowns1Datas0: [
          {
            text: "emergency department",
            value: 0
          },
          {
            text: "gynecology department",
            value: 1
          },
          {
            text: "stomatology department",
            value: 2
          },
          {
            text: "ear, nose and throat",
            value: 3
          },
          {
            text: "ophthalmology department",
            value: 4
          },
          {
            text: "padiatrics department",
            value: 5
          }
        ],
        dropdowns1Datas1: [
          {
            text: "all doctors",
            value: 0
          },
          {
            text: "common doctors",
            value: 1
          },
          {
            text: "specialists",
            value: 2
          }
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
      let auth = sessionStorage.getItem("auth");
      let account = sessionStorage.getItem("account");
      this.globalOption.chosen_department = sessionStorage.getItem("department");
      this.globalData.type = sessionStorage.getItem("type");
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
        let department = this.globalOption.chosen_department.substring(1, this.globalOption.chosen_department.length - 1);
        fetch(`${server.site_add}/doctor/getdoctors/${department}/${this.globalData.type}?authorization=${this.currentAuth}`).then((res) => res.json()).then((res) => {
          this.list = res;
        });
      },
      navigateToFinish(item2) {
        sessionStorage.setItem("doctor", JSON.stringify(item2.name));
        sessionStorage.setItem("date", JSON.stringify(item2.date));
        sessionStorage.setItem("time", JSON.stringify(item2.time));
        sessionStorage.setItem("price", JSON.stringify(item2.price));
        sessionStorage.setItem("type", JSON.stringify(item2.type));
        uni.navigateTo({
          url: "/pages/home/appointment/finish"
        });
      },
      navigateToDoctor(name) {
        sessionStorage.setItem("doctor", JSON.stringify(item.name));
        uni.navigateTo({
          url: "/pages/home/appointment/doctor_page"
        });
      },
      closeDropdowns1() {
        this.$refs.refDropdowns1.close();
      },
      changeDropdowns10(evt) {
        let item2 = this.dropdowns1Datas0.find((item3) => {
          return item3.value == evt;
        });
        item2 && item2.action && this.navigateTo(item2.action);
      },
      changeDropdowns11(evt) {
        let item2 = this.dropdowns1Datas1.find((item3) => {
          return item3.value == evt;
        });
        item2 && item2.action && this.navigateTo(item2.action);
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
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_dropdown_item = resolveEasycom(vue.resolveDynamicComponent("u-dropdown-item"), __easycom_0$2);
    const _component_u_dropdown = resolveEasycom(vue.resolveDynamicComponent("u-dropdown"), __easycom_1$2);
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_0$1);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_1$1);
    const _component_u_calendar = resolveEasycom(vue.resolveDynamicComponent("u-calendar"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container container18437" }, [
      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 justify-around diygw-bottom flex-clz" }, [
        vue.createElementVNode("view", {
          class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex2-clz",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
          "data-type": "page",
          "data-url": "/pages/home/home"
        }, [
          vue.createElementVNode("text", { class: "flex icon1 diygw-col-0 icon1-clz diy-icon-home" }),
          vue.createElementVNode("view", { class: "diygw-col-0" }, " Home ")
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex1-clz",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
          "data-type": "page",
          "data-url": "/pages/message/messages"
        }, [
          vue.createElementVNode("view", { class: "diygw-col-0 text2-clz" }, " 10 "),
          vue.createElementVNode("text", { class: "flex icon2 diygw-col-0 icon2-clz diy-icon-community" }),
          vue.createElementVNode("view", { class: "diygw-col-0" }, " Consultations ")
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex6-clz",
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
          "data-type": "page",
          "data-url": "/pages/records/records"
        }, [
          vue.createElementVNode("text", { class: "flex icon diygw-col-0 icon-clz diy-icon-message" }),
          vue.createElementVNode("view", { class: "diygw-col-0" }, " Records ")
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex7-clz",
          onClick: _cache[3] || (_cache[3] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
          "data-type": "page",
          "data-url": "/pages/me/me"
        }, [
          vue.createElementVNode("text", { class: "flex icon4 diygw-col-0 icon4-clz diy-icon-people" }),
          vue.createElementVNode("view", { class: "diygw-col-0" }, " Me ")
        ])
      ]),
      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex3-clz" }, [
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex43-clz" }, [
          vue.createElementVNode("view", { class: "flex diygw-dropdown diygw-col-24" }, [
            vue.createVNode(_component_u_dropdown, {
              class: "flex-sub",
              direction: "down",
              "close-on-click-overlay": "false",
              ref: "refDropdowns1"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_dropdown_item, {
                  onChange: $options.changeDropdowns10,
                  modelValue: $data.dropdowns10,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.dropdowns10 = $event),
                  title: $data.globalOption.chosen_department,
                  options: $data.dropdowns1Datas0
                }, null, 8, ["onChange", "modelValue", "title", "options"]),
                vue.createVNode(_component_u_dropdown_item, {
                  onChange: $options.changeDropdowns11,
                  modelValue: $data.dropdowns11,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.dropdowns11 = $event),
                  title: "all doctors",
                  options: $data.dropdowns1Datas1
                }, null, 8, ["onChange", "modelValue", "options"])
              ]),
              _: 1
            }, 512)
          ]),
          vue.createVNode(_component_u_form_item, {
            class: "diygw-col-24",
            label: "Date",
            prop: "date"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_input, {
                onClick: _cache[6] || (_cache[6] = ($event) => $data.showDate = true),
                class: "",
                placeholder: "Please choose expected date",
                modelValue: $data.date,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.date = $event),
                type: "select"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_u_calendar, {
            maxDate: "2050-12-31",
            modelValue: $data.showDate,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.showDate = $event),
            mode: "date",
            onChange: $options.changeDate
          }, null, 8, ["modelValue", "onChange"]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.list, (item2) => {
            return vue.openBlock(), vue.createElementBlock("view", null, [
              vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex11-clz" }, [
                vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex12-clz" }, [
                  vue.createElementVNode("scroll-view", {
                    onScrolltoupper: _cache[11] || (_cache[11] = (...args) => $options.scrolltoupperFlex8 && $options.scrolltoupperFlex8(...args)),
                    onScrolltolower: _cache[12] || (_cache[12] = (...args) => $options.scrolltolowerFlex8 && $options.scrolltolowerFlex8(...args)),
                    "scroll-x": "",
                    "scroll-with-animation": "",
                    class: "flex scroll-view flex-wrap diygw-col-24 justify-between flex8-clz"
                  }, [
                    vue.createElementVNode("view", { class: "flex justify-between flex-nowrap" }, [
                      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-15 flex4-clz" }, [
                        vue.createElementVNode("view", { class: "flex diygw-col-6 avatar-clz" }, [
                          vue.createElementVNode("view", { class: "diygw-avatar radius bg-none" }, [
                            vue.createElementVNode("image", {
                              mode: "aspectFit",
                              class: "diygw-avatar-img radius",
                              src: item2.avatar
                            }, null, 8, ["src"])
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "flex diygw-col-13 justify-start items-stretch flex-wrap flex9-clz" }, [
                          vue.createElementVNode("view", { class: "diygw-col-23 text-clz" }, " Doctor " + vue.toDisplayString(item2.name), 1),
                          vue.createElementVNode("scroll-view", {
                            onScrolltoupper: _cache[9] || (_cache[9] = (...args) => $options.scrolltoupperFlex10 && $options.scrolltoupperFlex10(...args)),
                            onScrolltolower: _cache[10] || (_cache[10] = (...args) => $options.scrolltolowerFlex10 && $options.scrolltolowerFlex10(...args)),
                            "scroll-x": "",
                            "scroll-with-animation": "",
                            class: "flex scroll-view flex-wrap diygw-col-24 justify-start flex10-clz"
                          }, [
                            vue.createElementVNode("view", { class: "flex justify-start flex-nowrap" }, [
                              vue.createElementVNode("view", { class: "flex diygw-col-11 flex-nowrap" }, [
                                vue.createElementVNode("view", { class: "diygw-tag margin-xs xs radius diygw-line-green" }, [
                                  vue.createElementVNode("text", null, vue.toDisplayString(item2.tab), 1)
                                ])
                              ])
                            ])
                          ], 32)
                        ])
                      ]),
                      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-8 justify-end items-stretch flex13-clz" }, [
                        vue.createElementVNode("view", { class: "flex diygw-col-11 list-clz" }, [
                          vue.createElementVNode("view", { class: "diygw-list scroll-view not-remark diygw-card diygw-shadow" }, [
                            vue.createElementVNode("view", {
                              onClick: ($event) => $options.navigateToDoctor(item2.name),
                              "data-type": "page",
                              "data-url": "/pages/home/appointment/doctor_page",
                              style: {},
                              class: "diygw-item solid-bottom"
                            }, [
                              vue.createElementVNode("view", { class: "content" }, [
                                vue.createElementVNode("view", { class: "title" }, " Schedule")
                              ])
                            ], 8, ["onClick"])
                          ])
                        ])
                      ])
                    ])
                  ], 32),
                  vue.createCommentVNode(' <view v-for="item2 in list"> '),
                  vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 justify-between items-start flex5-clz" }, [
                    vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-12 flex-direction-column flex14-clz" }, [
                      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex16-clz" }, [
                        vue.createElementVNode("view", { class: "diygw-col-11" }, vue.toDisplayString(item2.date), 1),
                        vue.createElementVNode("view", { class: "diygw-col-13" }, vue.toDisplayString(item2.time), 1)
                      ]),
                      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex17-clz" }, [
                        vue.createElementVNode("view", { class: "diygw-col-20 text5-clz" }, " Quantity available for booking: "),
                        vue.createElementVNode("view", { class: "diygw-col-2 text4-clz" }, vue.toDisplayString(item2.available), 1)
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-10 flex-direction-column flex15-clz" }, [
                      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex18-clz" }, [
                        vue.createElementVNode("view", { class: "flex diygw-col-24 button-clz" }, [
                          vue.createElementVNode("button", {
                            onClick: ($event) => $options.navigateToFinish(item2),
                            "data-type": "page",
                            "data-url": "/pages/home/appointment/finish",
                            class: "diygw-btn blue xs radius-xl flex-sub button-button-clz"
                          }, "register", 8, ["onClick"])
                        ]),
                        vue.createElementVNode("view", { class: "diygw-col-24 text6-clz diygw-ellipsis diygw-text-sm" }, " Cost:" + vue.toDisplayString(item2.price) + " BYN ", 1)
                      ])
                    ])
                  ]),
                  vue.createCommentVNode(" </view> ")
                ])
              ])
            ]);
          }), 256))
        ])
      ]),
      vue.createElementVNode("view", { class: "clearfix" })
    ]);
  }
  const PagesHomeAppointmentDoctors_list = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-ba9fce83"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/home/appointment/doctors_list.vue"]]);
  const _sfc_main$c = {
    name: "u-form",
    props: {
      model: {
        type: Object,
        default() {
          return {};
        }
      },
      errorType: {
        type: Array,
        default() {
          return ["message", "toast"];
        }
      },
      borderBottom: {
        type: Boolean,
        default: true
      },
      labelPosition: {
        type: String,
        default: "left"
      },
      labelWidth: {
        type: [String, Number],
        default: 90
      },
      labelAlign: {
        type: String,
        default: "left"
      },
      labelStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      inputAlign: {
        type: String,
        default: "left"
      },
      clearable: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        uForm: this
      };
    },
    data() {
      return {
        rules: {}
      };
    },
    created() {
      this.fields = [];
    },
    methods: {
      setRules(rules2) {
        this.rules = rules2;
      },
      resetFields() {
        this.fields.map((field) => {
          field.resetField();
        });
      },
      validate(callback) {
        return new Promise((resolve) => {
          let valid = true;
          let count = 0;
          let errorArr = [];
          let errorObjArr = [];
          this.fields.map((field) => {
            field.validation("", (errorMsg, errObj) => {
              if (errorMsg) {
                valid = false;
                errorArr.push(errorMsg);
                errorObjArr.push(errObj);
              }
              if (++count === this.fields.length) {
                resolve(valid, errorObjArr[0]);
                if (this.errorType.indexOf("none") === -1 && this.errorType.indexOf("toast") >= 0 && errorArr.length) {
                  this.$u.toast(errorArr[0]);
                }
                if (typeof callback == "function")
                  callback(valid, errorObjArr[0]);
              }
            });
          });
        });
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-form" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-590dd7e2"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-form/u-form.vue"]]);
  const _sfc_main$b = {
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
          const query = uni.createSelectorQuery().in(this);
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
            let view = wx.createSelectorQuery().select("#tabs-content-" + i);
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
          formatAppLog("log", "at pages/home/appointment/doctor_page.vue:252", "\u9A8C\u8BC1\u5931\u8D25");
        }
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_0$1);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_1$1);
    const _component_u_calendar = resolveEasycom(vue.resolveDynamicComponent("u-calendar"), __easycom_4);
    const _component_u_form = resolveEasycom(vue.resolveDynamicComponent("u-form"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container container18437" }, [
      vue.createElementVNode("view", { class: "flex diygw-col-24" }, [
        vue.createElementVNode("view", {
          class: "diygw-pzx",
          style: { "border-bottom": "1px solid #00a220" }
        })
      ]),
      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-clz" }, [
        vue.createElementVNode("view", { class: "flex diygw-col-4 avatar-clz" }, [
          vue.createElementVNode("view", { class: "diygw-avatar radius bg-none" }, [
            vue.createElementVNode("image", {
              mode: "aspectFit",
              class: "diygw-avatar-img radius",
              src: "/static/icon2_xm.png"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-9 flex-direction-column flex1-clz" }, [
          vue.createElementVNode("view", { class: "diygw-col-24 text1-clz" }, " Doctor Lisa "),
          vue.createElementVNode("scroll-view", {
            onScrolltoupper: _cache[0] || (_cache[0] = (...args) => $options.scrolltoupperFlex8 && $options.scrolltoupperFlex8(...args)),
            onScrolltolower: _cache[1] || (_cache[1] = (...args) => $options.scrolltolowerFlex8 && $options.scrolltolowerFlex8(...args)),
            "scroll-x": "",
            "scroll-with-animation": "",
            class: "flex scroll-view flex-wrap diygw-col-24 flex-direction-column flex8-clz"
          }, [
            vue.createElementVNode("view", { class: "flex flex-nowrap" }, [
              vue.createElementVNode("view", { class: "flex diygw-col-9" }, [
                vue.createElementVNode("view", { class: "diygw-tag margin-xs xs radius diygw-line-green" }, [
                  vue.createElementVNode("text", null, " Head ")
                ])
              ]),
              vue.createElementVNode("view", { class: "flex diygw-col-13 flex-nowrap" }, [
                vue.createElementVNode("view", { class: "diygw-tag margin-xs xs radius diygw-line-green" }, [
                  vue.createElementVNode("text", null, " Specialist ")
                ])
              ])
            ])
          ], 32)
        ]),
        vue.createElementVNode("scroll-view", {
          onScrolltoupper: _cache[2] || (_cache[2] = (...args) => $options.scrolltoupperFlex5 && $options.scrolltoupperFlex5(...args)),
          onScrolltolower: _cache[3] || (_cache[3] = (...args) => $options.scrolltolowerFlex5 && $options.scrolltolowerFlex5(...args)),
          "scroll-y": "",
          "scroll-with-animation": "",
          class: "flex scroll-view flex-wrap diygw-col-11 flex-direction-column flex5-clz"
        }, [
          vue.createElementVNode("view", { class: "flex scroll-y flex-nowrap" }, [
            vue.createElementVNode("view", { class: "diygw-col-24 text4-clz" }, " Gynaecologist "),
            vue.createElementVNode("view", { class: "diygw-col-24 text5-clz" }, " Head of Department Gynaecology and obstetrics ")
          ])
        ], 32)
      ]),
      vue.createVNode(_component_u_form, {
        model: $data.form,
        rules: $data.formRules,
        errorType: ["message", "toast"],
        ref: "formRef",
        class: "flex diygw-form diygw-col-24"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "flex diygw-col-24 flex-direction-column tabs-clz" }, [
            vue.createElementVNode("scroll-view", {
              "scroll-x": "",
              "show-scrollbar": false,
              enhanced: "",
              "scroll-into-view": "scroll-" + $data.tabsIndex,
              "scroll-left": $data.tabsLeft,
              "scroll-with-animation": "",
              class: "diygw-tabs text-center solid-bottom justify-center scale-title small-border tabs-title"
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.tabsDatas, (item2, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["diygw-tab-item tabs-item-title", index == $data.tabsIndex ? " tabs-title-cur  cur text-green " : ""]),
                  key: index,
                  onClick: _cache[4] || (_cache[4] = (...args) => $options.changeTabs && $options.changeTabs(...args)),
                  "data-index": index
                }, [
                  item2.icon ? (vue.openBlock(), vue.createElementBlock("text", {
                    key: 0,
                    class: vue.normalizeClass(item2.icon)
                  }, null, 2)) : vue.createCommentVNode("v-if", true),
                  vue.createTextVNode(" " + vue.toDisplayString(item2.text), 1)
                ], 10, ["data-index"]);
              }), 128))
            ], 8, ["scroll-into-view", "scroll-left"]),
            vue.createElementVNode("scroll-view", {
              "scroll-y": "",
              "scroll-with-animation": "",
              "scroll-into-view": "tabs-content-" + $data.tabsMainIndex,
              onScroll: _cache[9] || (_cache[9] = (...args) => $options.rightScrollTabs && $options.rightScrollTabs(...args)),
              class: "tabs-content"
            }, [
              vue.createElementVNode("view", {
                id: "tabs-content-0",
                class: "tabs-content-inner flex-sub tabs-content-0"
              }, [
                vue.createElementVNode("view", { class: "clearfix" })
              ]),
              vue.createElementVNode("view", {
                id: "tabs-content-1",
                class: "tabs-content-inner flex-sub tabs-content-1"
              }, [
                vue.createVNode(_component_u_form_item, {
                  class: "diygw-col-24",
                  label: "Date",
                  prop: "date1"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_u_input, {
                      onClick: _cache[5] || (_cache[5] = ($event) => $data.formData.showDate1 = true),
                      class: "",
                      placeholder: "",
                      modelValue: $data.form.date1,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.form.date1 = $event),
                      type: "select"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_u_calendar, {
                  maxDate: "2050-12-31",
                  modelValue: $data.formData.showDate1,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.formData.showDate1 = $event),
                  mode: "date",
                  onChange: $options.changeFormDate1
                }, null, 8, ["modelValue", "onChange"]),
                vue.createElementVNode("view", { class: "flex diygw-col-24 button1-clz" }, [
                  vue.createElementVNode("button", {
                    onClick: _cache[8] || (_cache[8] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
                    "data-type": "page",
                    "data-url": "/pages/home/appointment/finish",
                    class: "diygw-btn blue lg radius-xs flex-sub margin-xs button1-button-clz"
                  }, "Reserve now")
                ]),
                vue.createElementVNode("view", { class: "clearfix" })
              ])
            ], 40, ["scroll-into-view"])
          ]),
          vue.createVNode(_component_u_form_item, {
            class: "diygw-col-24 textarea1-clz",
            label: "Education",
            prop: "textarea1"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_input, {
                autoHeight: false,
                maxlength: "200",
                height: "60px",
                class: "",
                placeholder: "\u8BF7\u8F93\u5165\u63D0\u793A\u4FE1\u606F",
                modelValue: $data.form.textarea1,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.form.textarea1 = $event),
                type: "textarea"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_u_form_item, {
            class: "diygw-col-24 textarea2-clz",
            label: "Career",
            prop: "textarea2"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_input, {
                autoHeight: false,
                maxlength: "200",
                height: "60px",
                class: "",
                placeholder: "\u8BF7\u8F93\u5165\u63D0\u793A\u4FE1\u606F",
                modelValue: $data.form.textarea2,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.form.textarea2 = $event),
                type: "textarea"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model", "rules"]),
      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 justify-around diygw-bottom flex2-clz" }, [
        vue.createElementVNode("view", {
          class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex3-clz",
          onClick: _cache[12] || (_cache[12] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
          "data-type": "page",
          "data-url": "/pages/home/home"
        }, [
          vue.createElementVNode("text", { class: "flex icon1 diygw-col-0 icon1-clz diy-icon-home" }),
          vue.createElementVNode("view", { class: "diygw-col-0" }, " Home ")
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex4-clz",
          onClick: _cache[13] || (_cache[13] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
          "data-type": "page",
          "data-url": "/pages/message/messages"
        }, [
          vue.createElementVNode("view", { class: "diygw-col-0 text2-clz" }, " 10 "),
          vue.createElementVNode("text", { class: "flex icon2 diygw-col-0 icon2-clz diy-icon-community" }),
          vue.createElementVNode("view", { class: "diygw-col-0" }, " Consultations ")
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex6-clz",
          onClick: _cache[14] || (_cache[14] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
          "data-type": "page",
          "data-url": "/pages/records/records"
        }, [
          vue.createElementVNode("text", { class: "flex icon diygw-col-0 icon-clz diy-icon-message" }),
          vue.createElementVNode("view", { class: "diygw-col-0" }, " Records ")
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex7-clz",
          onClick: _cache[15] || (_cache[15] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
          "data-type": "page",
          "data-url": "/pages/me/me"
        }, [
          vue.createElementVNode("text", { class: "flex icon4 diygw-col-0 icon4-clz diy-icon-people" }),
          vue.createElementVNode("view", { class: "diygw-col-0" }, " Me ")
        ])
      ]),
      vue.createElementVNode("view", { class: "clearfix" })
    ]);
  }
  const PagesHomeAppointmentDoctor_page = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-c2a8cec5"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/home/appointment/doctor_page.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        patient: [],
        userInfo: {},
        globalOption: {
          doctor: "",
          date: "",
          time: "",
          price: "",
          department: ""
        },
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
      let doctor = sessionStorage.getItem("doctor");
      let date2 = sessionStorage.getItem("date");
      let time = sessionStorage.getItem("time");
      let price = sessionStorage.getItem("price");
      let department = sessionStorage.getItem("department");
      let type2 = sessionStorage.getItem("type");
      if (auth != null) {
        this.currentAuth = JSON.parse(auth);
      }
      if (account != null) {
        this.currentAccount = JSON.parse(account);
      }
      if (doctor != null) {
        this.globalOption.doctor = JSON.parse(doctor);
      }
      if (date2 != null) {
        this.globalOption.date = JSON.parse(date2);
      }
      if (time != null) {
        this.globalOption.time = JSON.parse(time);
      }
      if (price != null) {
        this.globalOption.price = JSON.parse(price);
      }
      if (department != null) {
        this.globalOption.department = JSON.parse(department);
      }
      if (type2 != null) {
        this.globalOption.type = JSON.parse(type2);
      }
      this.init();
    },
    methods: {
      async init() {
        fetch(`${server.site_add}/patient/${this.currentAccount}?authorization=${this.currentAuth}`).then((res) => res.json()).then((res) => {
          this.patient = res;
        });
      },
      AddRegistration() {
        let doctor = this.globalOption.doctor;
        let department = this.globalOption.department;
        let type2 = this.globalOption.type;
        let date2 = this.globalOption.date;
        let time = this.globalOption.time;
        let time_param = date2 + " " + time;
        let price = this.globalOption.price;
        let status = "Waiting";
        let url2 = `${server.site_add}/register/addRegistration
				/${this.currentAccount}/${doctor}/${department}
				/${type2}/${time_param}/${price}/${status}
				?authorization=${this.currentAuth}`;
        fetch(url2, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          }
        }).then((res) => res.json()).then((res) => {
          uni.navigateTo({
            url: "/pages/records/records"
          });
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.createElementVNode("view", { class: "container container18437" }, [
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 justify-around diygw-bottom flex2-clz" }, [
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex3-clz",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/home/home"
          }, [
            vue.createElementVNode("text", { class: "flex icon1 diygw-col-0 icon1-clz diy-icon-home" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Home ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex4-clz",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/message/messages"
          }, [
            vue.createElementVNode("view", { class: "diygw-col-0 text2-clz" }, " 10 "),
            vue.createElementVNode("text", { class: "flex icon2 diygw-col-0 icon2-clz diy-icon-community" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Consultations ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex6-clz",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/records/records"
          }, [
            vue.createElementVNode("text", { class: "flex icon diygw-col-0 icon-clz diy-icon-message" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Records ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex7-clz",
            onClick: _cache[3] || (_cache[3] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/me/me"
          }, [
            vue.createElementVNode("text", { class: "flex icon4 diygw-col-0 icon4-clz diy-icon-people" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Me ")
          ])
        ]),
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex-clz" }, [
          vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex1-clz" }, [
            vue.createElementVNode("view", { class: "diygw-col-24 text1-clz diygw-ellipsis" }, " Patient Information "),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex5-clz" }, [
              vue.createElementVNode("view", { class: "diygw-col-9 text4-clz text-grey" }, " Patient Name "),
              vue.createElementVNode("view", { class: "diygw-col-15" }, vue.toDisplayString($data.patient.name), 1)
            ]),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex8-clz" }, [
              vue.createElementVNode("view", { class: "diygw-col-9 text6-clz text-grey" }, " Passport "),
              vue.createElementVNode("view", { class: "diygw-col-15" }, vue.toDisplayString($data.patient.passport), 1)
            ])
          ]),
          vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex10-clz" }, [
            vue.createElementVNode("view", { class: "diygw-col-24 text10-clz diygw-ellipsis" }, " Register Information "),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex11-clz" }, [
              vue.createElementVNode("view", { class: "diygw-col-9 text11-clz text-grey" }, " Department "),
              vue.createElementVNode("view", { class: "diygw-col-15" }, vue.toDisplayString($data.globalOption.department), 1)
            ]),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex12-clz" }, [
              vue.createElementVNode("view", { class: "diygw-col-9 text13-clz text-grey" }, " Doctor "),
              vue.createElementVNode("view", { class: "diygw-col-15" }, " Doctor " + vue.toDisplayString($data.globalOption.doctor), 1)
            ]),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex13-clz" }, [
              vue.createElementVNode("view", { class: "diygw-col-9 text15-clz text-grey" }, " Appointment Time "),
              vue.createElementVNode("view", { class: "diygw-col-15" }, vue.toDisplayString($data.globalOption.date) + " " + vue.toDisplayString($data.globalOption.time), 1)
            ]),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex14-clz" }, [
              vue.createElementVNode("view", { class: "diygw-col-9 text17-clz text-grey" }, " Register Fee "),
              vue.createElementVNode("view", { class: "diygw-col-15" }, vue.toDisplayString($data.globalOption.price) + " BYN ", 1)
            ])
          ]),
          vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex15-clz" }, [
            vue.createElementVNode("view", { class: "diygw-col-24 text19-clz" }, " Tips: "),
            vue.createElementVNode("view", { class: "diygw-col-24 text20-clz" }, " Due to the uncertainty of patients, it is normal that your appointment time may be earlier or later than expected, please understand (for time slots) ")
          ])
        ]),
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column items-center flex9-clz" }, [
          vue.createElementVNode("view", { class: "flex diygw-col-15 button-clz" }, [
            vue.createElementVNode("button", {
              onClick: _cache[4] || (_cache[4] = ($event) => $options.AddRegistration()),
              "data-type": "page",
              "data-url": "/pages/records/records",
              class: "diygw-btn blue lg radius-xs flex-sub margin-xs button-button-clz"
            }, "Confirm appointment")
          ]),
          vue.createElementVNode("view", { class: "flex diygw-col-15 button1-clz" }, [
            vue.createElementVNode("button", {
              onClick: _cache[5] || (_cache[5] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
              "data-type": "page",
              "data-url": "/pages/home/appointment/doctors_list",
              class: "diygw-btn grey lg radius-xs flex-sub margin-xs button1-button-clz"
            }, "Cancel appointment")
          ])
        ]),
        vue.createElementVNode("view", { class: "clearfix" })
      ])
    ]);
  }
  const PagesHomeAppointmentFinish = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-aca08607"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/home/appointment/finish.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        patient: [],
        userInfo: {},
        globalOption: {
          doctor: "",
          date: "",
          time: "",
          price: "",
          department: ""
        },
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
      let doctor = sessionStorage.getItem("doctor");
      let date2 = sessionStorage.getItem("date");
      let time = sessionStorage.getItem("time");
      let price = sessionStorage.getItem("price");
      let department = sessionStorage.getItem("department");
      let type2 = sessionStorage.getItem("type");
      if (auth != null) {
        this.currentAuth = JSON.parse(auth);
      }
      if (account != null) {
        this.currentAccount = JSON.parse(account);
      }
      if (doctor != null) {
        this.globalOption.doctor = JSON.parse(doctor);
      }
      if (date2 != null) {
        this.globalOption.date = JSON.parse(date2);
      }
      if (time != null) {
        this.globalOption.time = JSON.parse(time);
      }
      if (price != null) {
        this.globalOption.price = JSON.parse(price);
      }
      if (department != null) {
        this.globalOption.department = JSON.parse(department);
      }
      if (type2 != null) {
        this.globalOption.type = JSON.parse(type2);
      }
      this.init();
    },
    methods: {
      async init() {
        fetch(`${server.site_add}/patient/${this.currentAccount}?authorization=${this.currentAuth}`).then((res) => res.json()).then((res) => {
          this.patient = res;
        });
      },
      AddRegistration() {
        let doctor = this.globalOption.doctor;
        let department = this.globalOption.department;
        let type2 = this.globalOption.type;
        let date2 = this.globalOption.date;
        let time = this.globalOption.time;
        let time_param = date2 + " " + time;
        let price = this.globalOption.price;
        let status = "Waiting";
        let url2 = `${server.site_add}/register/addRegistration
				/${this.currentAccount}/${doctor}/${department}
				/${type2}/${time_param}/${price}/${status}
				?authorization=${this.currentAuth}`;
        fetch(url2, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          }
        }).then((res) => res.json()).then((res) => {
          uni.navigateTo({
            url: "/pages/records/records"
          });
        });
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.createElementVNode("view", { class: "container container18437" }, [
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 justify-around diygw-bottom flex2-clz" }, [
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex3-clz",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/home/home"
          }, [
            vue.createElementVNode("text", { class: "flex icon1 diygw-col-0 icon1-clz diy-icon-home" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Home ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex4-clz",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/message/messages"
          }, [
            vue.createElementVNode("view", { class: "diygw-col-0 text2-clz" }, " 10 "),
            vue.createElementVNode("text", { class: "flex icon2 diygw-col-0 icon2-clz diy-icon-community" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Consultations ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex6-clz",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/records/records"
          }, [
            vue.createElementVNode("text", { class: "flex icon diygw-col-0 icon-clz diy-icon-message" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Records ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex7-clz",
            onClick: _cache[3] || (_cache[3] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/me/me"
          }, [
            vue.createElementVNode("text", { class: "flex icon4 diygw-col-0 icon4-clz diy-icon-people" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Me ")
          ])
        ]),
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex-clz" }, [
          vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex1-clz" }, [
            vue.createElementVNode("view", { class: "diygw-col-24 text1-clz diygw-ellipsis" }, " Patient Information "),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex5-clz" }, [
              vue.createElementVNode("view", { class: "diygw-col-9 text4-clz text-grey" }, " Patient Name "),
              vue.createElementVNode("view", { class: "diygw-col-15" }, vue.toDisplayString($data.patient.name), 1)
            ]),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex8-clz" }, [
              vue.createElementVNode("view", { class: "diygw-col-9 text6-clz text-grey" }, " Passport "),
              vue.createElementVNode("view", { class: "diygw-col-15" }, vue.toDisplayString($data.patient.passport), 1)
            ])
          ]),
          vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex10-clz" }, [
            vue.createElementVNode("view", { class: "diygw-col-24 text10-clz diygw-ellipsis" }, " Register Information "),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex11-clz" }, [
              vue.createElementVNode("view", { class: "diygw-col-9 text11-clz text-grey" }, " Department "),
              vue.createElementVNode("view", { class: "diygw-col-15" }, vue.toDisplayString($data.globalOption.department), 1)
            ]),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex12-clz" }, [
              vue.createElementVNode("view", { class: "diygw-col-9 text13-clz text-grey" }, " Doctor "),
              vue.createElementVNode("view", { class: "diygw-col-15" }, " Doctor " + vue.toDisplayString($data.globalOption.doctor), 1)
            ]),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex13-clz" }, [
              vue.createElementVNode("view", { class: "diygw-col-9 text15-clz text-grey" }, " Appointment Time "),
              vue.createElementVNode("view", { class: "diygw-col-15" }, vue.toDisplayString($data.globalOption.date) + " " + vue.toDisplayString($data.globalOption.time), 1)
            ]),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex14-clz" }, [
              vue.createElementVNode("view", { class: "diygw-col-9 text17-clz text-grey" }, " Register Fee "),
              vue.createElementVNode("view", { class: "diygw-col-15" }, vue.toDisplayString($data.globalOption.price) + " BYN ", 1)
            ])
          ]),
          vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex15-clz" }, [
            vue.createElementVNode("view", { class: "diygw-col-24 text19-clz" }, " Tips: "),
            vue.createElementVNode("view", { class: "diygw-col-24 text20-clz" }, " Due to the uncertainty of patients, it is normal that your appointment time may be earlier or later than expected, please understand (for time slots) ")
          ])
        ]),
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column items-center flex9-clz" }, [
          vue.createElementVNode("view", { class: "flex diygw-col-15 button-clz" }, [
            vue.createElementVNode("button", {
              onClick: _cache[4] || (_cache[4] = ($event) => $options.AddRegistration()),
              "data-type": "page",
              "data-url": "/pages/records/records",
              class: "diygw-btn blue lg radius-xs flex-sub margin-xs button-button-clz"
            }, "Confirm reservations")
          ]),
          vue.createElementVNode("view", { class: "flex diygw-col-15 button1-clz" }, [
            vue.createElementVNode("button", {
              onClick: _cache[5] || (_cache[5] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
              "data-type": "page",
              "data-url": "/pages/home/appointment/doctors_list",
              class: "diygw-btn grey lg radius-xs flex-sub margin-xs button1-button-clz"
            }, "Cancel reservations")
          ])
        ]),
        vue.createElementVNode("view", { class: "clearfix" })
      ])
    ]);
  }
  const PagesHomeConsultationFinish = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-2b9197c9"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/home/consultation/finish.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {
        list: [],
        userInfo: {},
        globalOption: {
          chosen_department: ""
        },
        globalData: {
          type: ""
        },
        dropdowns10: "",
        dropdowns11: "",
        dropdowns1Datas0: [
          {
            text: "emergency department",
            value: 0
          },
          {
            text: "gynecology department",
            value: 1
          },
          {
            text: "stomatology department",
            value: 2
          },
          {
            text: "ear, nose and throat",
            value: 3
          },
          {
            text: "ophthalmology department",
            value: 4
          },
          {
            text: "padiatrics department",
            value: 5
          }
        ],
        dropdowns1Datas1: [
          {
            text: "all doctors",
            value: 0
          },
          {
            text: "common doctors",
            value: 1
          },
          {
            text: "specialists",
            value: 2
          }
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
      let auth = sessionStorage.getItem("auth");
      let account = sessionStorage.getItem("account");
      this.globalOption.chosen_department = sessionStorage.getItem("department");
      this.globalData.type = sessionStorage.getItem("type");
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
        let department = this.globalOption.chosen_department.substring(1, this.globalOption.chosen_department.length - 1);
        fetch(`${server.site_add}/doctor/getdoctors/${department}/${this.globalData.type}?authorization=${this.currentAuth}`).then((res) => res.json()).then((res) => {
          this.list = res;
        });
      },
      navigateToFinish(item2) {
        sessionStorage.setItem("doctor", JSON.stringify(item2.name));
        sessionStorage.setItem("date", JSON.stringify(item2.date));
        sessionStorage.setItem("time", JSON.stringify(item2.time));
        sessionStorage.setItem("price", JSON.stringify(item2.price));
        sessionStorage.setItem("type", JSON.stringify(item2.type));
        uni.navigateTo({
          url: "/pages/home/consultation/finish"
        });
      },
      navigateToDoctor(name) {
        sessionStorage.setItem("doctor", JSON.stringify(item.name));
        uni.navigateTo({
          url: "/pages/home/appointment/doctor_page"
        });
      },
      closeDropdowns1() {
        this.$refs.refDropdowns1.close();
      },
      changeDropdowns10(evt) {
        let item2 = this.dropdowns1Datas0.find((item3) => {
          return item3.value == evt;
        });
        item2 && item2.action && this.navigateTo(item2.action);
      },
      changeDropdowns11(evt) {
        let item2 = this.dropdowns1Datas1.find((item3) => {
          return item3.value == evt;
        });
        item2 && item2.action && this.navigateTo(item2.action);
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
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_dropdown_item = resolveEasycom(vue.resolveDynamicComponent("u-dropdown-item"), __easycom_0$2);
    const _component_u_dropdown = resolveEasycom(vue.resolveDynamicComponent("u-dropdown"), __easycom_1$2);
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_0$1);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_1$1);
    const _component_u_calendar = resolveEasycom(vue.resolveDynamicComponent("u-calendar"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container container18437" }, [
      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 justify-around diygw-bottom flex-clz" }, [
        vue.createElementVNode("view", {
          class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex2-clz",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
          "data-type": "page",
          "data-url": "/pages/home/home"
        }, [
          vue.createElementVNode("text", { class: "flex icon1 diygw-col-0 icon1-clz diy-icon-home" }),
          vue.createElementVNode("view", { class: "diygw-col-0" }, " Home ")
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex1-clz",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
          "data-type": "page",
          "data-url": "/pages/message/messages"
        }, [
          vue.createElementVNode("view", { class: "diygw-col-0 text2-clz" }, " 10 "),
          vue.createElementVNode("text", { class: "flex icon2 diygw-col-0 icon2-clz diy-icon-community" }),
          vue.createElementVNode("view", { class: "diygw-col-0" }, " Consultations ")
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex6-clz",
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
          "data-type": "page",
          "data-url": "/pages/records/records"
        }, [
          vue.createElementVNode("text", { class: "flex icon diygw-col-0 icon-clz diy-icon-message" }),
          vue.createElementVNode("view", { class: "diygw-col-0" }, " Records ")
        ]),
        vue.createElementVNode("view", {
          class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex7-clz",
          onClick: _cache[3] || (_cache[3] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
          "data-type": "page",
          "data-url": "/pages/me/me"
        }, [
          vue.createElementVNode("text", { class: "flex icon4 diygw-col-0 icon4-clz diy-icon-people" }),
          vue.createElementVNode("view", { class: "diygw-col-0" }, " Me ")
        ])
      ]),
      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex3-clz" }, [
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex43-clz" }, [
          vue.createElementVNode("view", { class: "flex diygw-dropdown diygw-col-24" }, [
            vue.createVNode(_component_u_dropdown, {
              class: "flex-sub",
              direction: "down",
              "close-on-click-overlay": "false",
              ref: "refDropdowns1"
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u_dropdown_item, {
                  onChange: $options.changeDropdowns10,
                  modelValue: $data.dropdowns10,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.dropdowns10 = $event),
                  title: $data.globalOption.chosen_department,
                  options: $data.dropdowns1Datas0
                }, null, 8, ["onChange", "modelValue", "title", "options"]),
                vue.createVNode(_component_u_dropdown_item, {
                  onChange: $options.changeDropdowns11,
                  modelValue: $data.dropdowns11,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.dropdowns11 = $event),
                  title: "all doctors",
                  options: $data.dropdowns1Datas1
                }, null, 8, ["onChange", "modelValue", "options"])
              ]),
              _: 1
            }, 512)
          ]),
          vue.createVNode(_component_u_form_item, {
            class: "diygw-col-24",
            label: "Date",
            prop: "date"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_u_input, {
                onClick: _cache[6] || (_cache[6] = ($event) => $data.showDate = true),
                class: "",
                placeholder: "Please choose expected date",
                modelValue: $data.date,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.date = $event),
                type: "select"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_u_calendar, {
            maxDate: "2050-12-31",
            modelValue: $data.showDate,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.showDate = $event),
            mode: "date",
            onChange: $options.changeDate
          }, null, 8, ["modelValue", "onChange"]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.list, (item2) => {
            return vue.openBlock(), vue.createElementBlock("view", null, [
              vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex11-clz" }, [
                vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex12-clz" }, [
                  vue.createElementVNode("scroll-view", {
                    onScrolltoupper: _cache[11] || (_cache[11] = (...args) => $options.scrolltoupperFlex8 && $options.scrolltoupperFlex8(...args)),
                    onScrolltolower: _cache[12] || (_cache[12] = (...args) => $options.scrolltolowerFlex8 && $options.scrolltolowerFlex8(...args)),
                    "scroll-x": "",
                    "scroll-with-animation": "",
                    class: "flex scroll-view flex-wrap diygw-col-24 justify-between flex8-clz"
                  }, [
                    vue.createElementVNode("view", { class: "flex justify-between flex-nowrap" }, [
                      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-15 flex4-clz" }, [
                        vue.createElementVNode("view", { class: "flex diygw-col-6 avatar-clz" }, [
                          vue.createElementVNode("view", { class: "diygw-avatar radius bg-none" }, [
                            vue.createElementVNode("image", {
                              mode: "aspectFit",
                              class: "diygw-avatar-img radius",
                              src: "/static/icon2_xm.png"
                            })
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "flex diygw-col-13 justify-start items-stretch flex-wrap flex9-clz" }, [
                          vue.createElementVNode("view", { class: "diygw-col-23 text-clz" }, " Doctor " + vue.toDisplayString(item2.name), 1),
                          vue.createElementVNode("scroll-view", {
                            onScrolltoupper: _cache[9] || (_cache[9] = (...args) => $options.scrolltoupperFlex10 && $options.scrolltoupperFlex10(...args)),
                            onScrolltolower: _cache[10] || (_cache[10] = (...args) => $options.scrolltolowerFlex10 && $options.scrolltolowerFlex10(...args)),
                            "scroll-x": "",
                            "scroll-with-animation": "",
                            class: "flex scroll-view flex-wrap diygw-col-24 justify-start flex10-clz"
                          }, [
                            vue.createElementVNode("view", { class: "flex justify-start flex-nowrap" }, [
                              vue.createElementVNode("view", { class: "flex diygw-col-11 flex-nowrap" }, [
                                vue.createElementVNode("view", { class: "diygw-tag margin-xs xs radius diygw-line-green" }, [
                                  vue.createElementVNode("text", null, vue.toDisplayString(item2.tab), 1)
                                ])
                              ])
                            ])
                          ], 32)
                        ])
                      ]),
                      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-8 justify-end items-stretch flex13-clz" }, [
                        vue.createElementVNode("view", { class: "flex diygw-col-11 list-clz" }, [
                          vue.createElementVNode("view", { class: "diygw-list scroll-view not-remark diygw-card diygw-shadow" }, [
                            vue.createElementVNode("view", {
                              onClick: ($event) => $options.navigateToDoctor(item2.name),
                              "data-type": "page",
                              "data-url": "/pages/home/appointment/doctor_page",
                              style: {},
                              class: "diygw-item solid-bottom"
                            }, [
                              vue.createElementVNode("view", { class: "content" }, [
                                vue.createElementVNode("view", { class: "title" }, " Schedule")
                              ])
                            ], 8, ["onClick"])
                          ])
                        ])
                      ])
                    ])
                  ], 32),
                  vue.createCommentVNode(' <view v-for="item2 in list"> '),
                  vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 justify-between items-start flex5-clz" }, [
                    vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-12 flex-direction-column flex14-clz" }, [
                      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex16-clz" }, [
                        vue.createElementVNode("view", { class: "diygw-col-11" }, vue.toDisplayString(item2.date), 1),
                        vue.createElementVNode("view", { class: "diygw-col-13" }, vue.toDisplayString(item2.time), 1)
                      ]),
                      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex17-clz" }, [
                        vue.createElementVNode("view", { class: "diygw-col-20 text5-clz" }, " Quantity available for booking: "),
                        vue.createElementVNode("view", { class: "diygw-col-2 text4-clz" }, vue.toDisplayString(item2.available), 1)
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-10 flex-direction-column flex15-clz" }, [
                      vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex18-clz" }, [
                        vue.createElementVNode("view", { class: "flex diygw-col-24 button-clz" }, [
                          vue.createElementVNode("button", {
                            onClick: ($event) => $options.navigateToFinish(item2),
                            "data-type": "page",
                            "data-url": "/pages/home/appointment/finish",
                            class: "diygw-btn blue xs radius-xl flex-sub button-button-clz"
                          }, "reserve", 8, ["onClick"])
                        ]),
                        vue.createElementVNode("view", { class: "diygw-col-24 text6-clz diygw-ellipsis diygw-text-sm" }, " Cost:" + vue.toDisplayString(item2.price) + " BYN ", 1)
                      ])
                    ])
                  ]),
                  vue.createCommentVNode(" </view> ")
                ])
              ])
            ]);
          }), 256))
        ])
      ]),
      vue.createElementVNode("view", { class: "clearfix" })
    ]);
  }
  const PagesHomeConsultationDoctors_list = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-d294b228"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/home/consultation/doctors_list.vue"]]);
  const _sfc_main$7 = {
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
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "status_bar" }, [
        vue.createCommentVNode(" Header ")
      ]),
      vue.createElementVNode("view", { class: "container container18437" }, [
        vue.createElementVNode("view", { class: "diygw-col-24 search-clz" }, [
          vue.createElementVNode("view", { class: "diygw-search" }, [
            vue.createElementVNode("view", { class: "flex1 align-center flex padding-xs solid radius" }, [
              vue.createElementVNode("text", {
                style: { "color": "#555 !important" },
                class: "diy-icon-search"
              }),
              vue.withDirectives(vue.createElementVNode("input", {
                class: "flex1",
                name: "search",
                type: "",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.search = $event),
                placeholder: "Keywords"
              }, null, 512), [
                [vue.vModelText, $data.search]
              ])
            ]),
            vue.createElementVNode("image", {
              src: "/static/icon8_ss.png",
              class: "right-icon margin-left-xs radius"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex12-clz" }, [
          vue.createElementVNode("view", {
            class: "flex diygw-col-24 items-stretch flex-nowrap flex-clz",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/message/messages"
          }, [
            vue.createElementVNode("view", { class: "flex diygw-col-0" }, [
              vue.createElementVNode("view", { class: "diygw-avatar radius-sm bg-none" }, [
                vue.createElementVNode("image", {
                  mode: "aspectFit",
                  class: "diygw-avatar-img radius-sm",
                  src: "/static/img/Alex.png"
                }),
                vue.createElementVNode("view", { class: "diygw-tag badge avatar-badge-0 red" }, " 1 ")
              ])
            ]),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column justify-between items-start flex1-clz" }, [
              vue.createElementVNode("view", { class: "flex diygw-col-24 justify-between items-center flex-nowrap flex2-clz" }, [
                vue.createElementVNode("view", { class: "diygw-col-0 text-clz diygw-ellipsis" }, " Doctor Alex "),
                vue.createElementVNode("view", { class: "diygw-col-0" }, " 12:30 ")
              ]),
              vue.createElementVNode("view", { class: "flex diygw-col-24 justify-between items-center flex-nowrap flex4-clz" }, [
                vue.createElementVNode("view", { class: "diygw-col-0 text2-clz diygw-ellipsis" }, " Please check your dignose result ")
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "flex diygw-col-24 items-stretch flex-nowrap flex8-clz" }, [
            vue.createElementVNode("view", { class: "flex diygw-col-0" }, [
              vue.createElementVNode("view", { class: "diygw-avatar radius-sm bg-none" }, [
                vue.createElementVNode("image", {
                  mode: "aspectFit",
                  class: "diygw-avatar-img radius-sm",
                  src: "/static/img/Helen.png"
                }),
                vue.createElementVNode("view", { class: "diygw-tag badge avatar2-badge-0 red" }, " 1 ")
              ])
            ]),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column justify-between items-start flex9-clz" }, [
              vue.createElementVNode("view", { class: "flex diygw-col-24 justify-between items-center flex-nowrap flex10-clz" }, [
                vue.createElementVNode("view", { class: "diygw-col-0 text6-clz diygw-ellipsis" }, "Doctor Helen "),
                vue.createElementVNode("view", { class: "diygw-col-0" }, " 15:30 ")
              ]),
              vue.createElementVNode("view", { class: "flex diygw-col-24 justify-between items-center flex-nowrap flex11-clz" }, [
                vue.createElementVNode("view", { class: "diygw-col-0 text8-clz diygw-ellipsis" }, " Hope you have a nice day ")
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "flex diygw-col-24 items-stretch flex-nowrap flex3-clz" }, [
            vue.createElementVNode("view", { class: "flex diygw-col-0" }, [
              vue.createElementVNode("view", { class: "diygw-avatar radius-sm bg-none" }, [
                vue.createElementVNode("image", {
                  mode: "aspectFit",
                  class: "diygw-avatar-img radius-sm",
                  src: "/static/img/Alan.png"
                }),
                vue.createElementVNode("view", { class: "diygw-tag badge avatar1-badge-0 red" }, " 1 ")
              ])
            ]),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column justify-between items-start flex5-clz" }, [
              vue.createElementVNode("view", { class: "flex diygw-col-24 justify-between items-center flex-nowrap flex6-clz" }, [
                vue.createElementVNode("view", { class: "diygw-col-0 text3-clz diygw-ellipsis" }, "Doctor Alan "),
                vue.createElementVNode("view", { class: "diygw-col-0" }, " 9:30 ")
              ]),
              vue.createElementVNode("view", { class: "flex diygw-col-24 justify-between items-center flex-nowrap flex7-clz" }, [
                vue.createElementVNode("view", { class: "diygw-col-0 text5-clz diygw-ellipsis" }, " You need more relax ")
              ])
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 justify-around diygw-bottom flex13-clz" }, [
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex14-clz",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/home/home"
          }, [
            vue.createElementVNode("text", { class: "flex icon1 diygw-col-0 icon1-clz diy-icon-home" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Home ")
          ]),
          vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex15-clz" }, [
            vue.createElementVNode("view", { class: "diygw-col-0 text10-clz" }, " 10 "),
            vue.createElementVNode("text", { class: "flex icon2 diygw-col-0 icon2-clz diy-icon-community" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Consultations ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex16-clz",
            onClick: _cache[3] || (_cache[3] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/records/records"
          }, [
            vue.createElementVNode("text", { class: "flex icon diygw-col-0 icon-clz diy-icon-message" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Records ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex17-clz",
            onClick: _cache[4] || (_cache[4] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/me/me"
          }, [
            vue.createElementVNode("text", { class: "flex icon4 diygw-col-0 icon4-clz diy-icon-people" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Me ")
          ])
        ]),
        vue.createElementVNode("view", { class: "clearfix" })
      ])
    ], 64);
  }
  const PagesMessageMessages = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-e3c62018"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/message/messages.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        list: [],
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
        fetch(`${server.site_add}/register/getByPno/${this.currentAccount}?authorization=${this.currentAuth}`).then((res) => res.json()).then((res) => {
          this.list = res;
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.createElementVNode("view", { class: "status_bar" }, [
        vue.createCommentVNode(" Header ")
      ]),
      vue.createElementVNode("view", { class: "container container18437" }, [
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 justify-around diygw-bottom flex2-clz" }, [
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex3-clz",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/home/home"
          }, [
            vue.createElementVNode("text", { class: "flex icon1 diygw-col-0 icon1-clz diy-icon-home" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Home ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex4-clz",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/message/messages"
          }, [
            vue.createElementVNode("view", { class: "diygw-col-0 text2-clz" }, " 10 "),
            vue.createElementVNode("text", { class: "flex icon2 diygw-col-0 icon2-clz diy-icon-community" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Consultations ")
          ]),
          vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex6-clz" }, [
            vue.createElementVNode("text", { class: "flex icon diygw-col-0 icon-clz diy-icon-message" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Records ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex7-clz",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/me/me"
          }, [
            vue.createElementVNode("text", { class: "flex icon4 diygw-col-0 icon4-clz diy-icon-people" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Me ")
          ])
        ]),
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex-clz" }, [
          vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex12-clz" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.list, (item2) => {
              return vue.openBlock(), vue.createElementBlock("view", null, [
                vue.createElementVNode("view", {
                  class: "flex flex-wrap diygw-col-24 flex-direction-column flex5-clz",
                  onClick: _cache[3] || (_cache[3] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
                  "data-type": "page",
                  "data-url": "/pages/records/registeration"
                }, [
                  vue.createElementVNode("view", { class: "flex diygw-col-24 items-center flex-wrap flex8-clz" }, [
                    vue.createElementVNode("view", { class: "diygw-col-0 text5-clz diygw-ellipsis" }, vue.toDisplayString(item2.department), 1),
                    vue.createElementVNode("view", { class: "flex diygw-col-5" }, [
                      vue.createElementVNode("view", { class: "diygw-tag margin-xs radius diygw-line-blue" }, [
                        vue.createElementVNode("text", null, vue.toDisplayString(item2.status), 1)
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex10-clz" }, [
                      vue.createElementVNode("view", { class: "diygw-col-13 text1-clz" }, " Doctor " + vue.toDisplayString(item2.dname), 1),
                      vue.createElementVNode("view", { class: "diygw-col-11 text4-clz" }, vue.toDisplayString(item2.type), 1)
                    ]),
                    vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex11-clz" }, [
                      vue.createElementVNode("view", { class: "diygw-col-13 text6-clz" }, vue.toDisplayString(item2.time), 1),
                      vue.createElementVNode("view", { class: "diygw-col-11 text7-clz" }, " No. " + vue.toDisplayString(item2.rno), 1)
                    ])
                  ])
                ])
              ]);
            }), 256))
          ])
        ]),
        vue.createElementVNode("view", { class: "clearfix" })
      ])
    ]);
  }
  const PagesRecordsRecords = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-cb371200"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/records/records.vue"]]);
  const _sfc_main$5 = {
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
        fetch(`${server.site_add}/patient/${this.currentAccount}?authorization=${this.currentAuth}`).then((res) => res.json()).then((res) => {
          this.userInfo.name = res.name;
          this.userInfo.phone = res.phone;
          this.userInfo.nationality = res.nationality;
          this.userInfo.vip = (res.vip = 1) ? "VIP" : "Common User";
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.createElementVNode("view", { class: "status_bar" }, [
        vue.createCommentVNode(" Header ")
      ]),
      vue.createElementVNode("view", { class: "container container18437" }, [
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column gradual-blue flex-clz" }, [
          vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 items-center flex2-clz" }, [
            vue.createElementVNode("image", {
              src: "/static/icon2_QQ.png",
              onClick: _cache[0] || (_cache[0] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
              "data-type": "page",
              "data-url": "/pages/null",
              class: "diygw-image diygw-col-0 image1-clz",
              style: { "height": "50px !important", "width": "50px !important" },
              mode: "widthFix"
            }),
            vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-0 flex-direction-column items-start flex4-clz" }, [
              vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 items-baseline flex5-clz" }, [
                vue.createElementVNode("view", { class: "diygw-col-0 text2-clz" }, vue.toDisplayString($data.userInfo.name), 1),
                vue.createElementVNode("view", { class: "diygw-col-0 text3-clz" }, vue.toDisplayString($data.userInfo.phone), 1)
              ]),
              vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 items-baseline flex7-clz" }, [
                vue.createElementVNode("view", { class: "diygw-col-0 text5-clz" }, vue.toDisplayString($data.userInfo.vip), 1),
                vue.createElementVNode("view", { class: "diygw-col-0 text7-clz" }, vue.toDisplayString($data.userInfo.nationality), 1)
              ])
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 flex-direction-column flex1-clz" }, [
          vue.createElementVNode("view", {
            class: "flex diygw-col-24 items-center flex-nowrap flex3-clz",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/me/mycard/mycard"
          }, [
            vue.createElementVNode("image", {
              src: "/static/icon4_fk.png",
              class: "diygw-image diygw-col-0",
              style: { "height": "30px !important", "width": "30px !important" },
              mode: "widthFix"
            }),
            vue.createElementVNode("view", { class: "diygw-col-0 text-clz" }, " Personal Information "),
            vue.createElementVNode("text", { class: "flex icon diygw-col-0 icon-clz diy-icon-right" })
          ]),
          vue.createElementVNode("view", {
            class: "flex diygw-col-24 items-center flex-nowrap flex6-clz",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/me/mycard/mycard"
          }, [
            vue.createElementVNode("image", {
              src: "/static/icon1_tz.png",
              class: "diygw-image diygw-col-0",
              style: { "height": "30px !important", "width": "30px !important" },
              mode: "widthFix"
            }),
            vue.createElementVNode("view", { class: "diygw-col-0 text4-clz" }, " Official Notice "),
            vue.createElementVNode("view", { class: "diygw-col-0 text6-clz" }, " 0 "),
            vue.createElementVNode("text", { class: "flex icon2 diygw-col-0 icon2-clz diy-icon-right" })
          ]),
          vue.createElementVNode("view", {
            class: "flex diygw-col-24 items-center flex-nowrap flex8-clz",
            onClick: _cache[3] || (_cache[3] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/me/mycard/mycard"
          }, [
            vue.createElementVNode("image", {
              src: "/static/icon1_sz1.png",
              class: "diygw-image diygw-col-0",
              style: { "height": "30px !important", "width": "30px !important" },
              mode: "widthFix"
            }),
            vue.createElementVNode("view", { class: "diygw-col-0 text8-clz" }, " My Collections "),
            vue.createElementVNode("text", { class: "flex icon3 diygw-col-0 icon3-clz diy-icon-right" })
          ]),
          vue.createElementVNode("view", {
            class: "flex diygw-col-24 items-center flex-nowrap flex9-clz",
            onClick: _cache[4] || (_cache[4] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/me/mycard/mycard"
          }, [
            vue.createElementVNode("image", {
              src: "/static/icon1_bj.png",
              class: "diygw-image diygw-col-0",
              style: { "height": "30px !important", "width": "30px !important" },
              mode: "widthFix"
            }),
            vue.createElementVNode("view", { class: "diygw-col-0 text9-clz" }, " Site Feedback "),
            vue.createElementVNode("text", { class: "flex icon4 diygw-col-0 icon4-clz diy-icon-right" })
          ]),
          vue.createElementVNode("view", {
            class: "flex diygw-col-24 items-center flex-nowrap flex10-clz",
            onClick: _cache[5] || (_cache[5] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/me/mycard/mycard"
          }, [
            vue.createElementVNode("image", {
              src: "/static/icon1_kf.png",
              class: "diygw-image diygw-col-0",
              style: { "height": "30px !important", "width": "30px !important" },
              mode: "widthFix"
            }),
            vue.createElementVNode("view", { class: "diygw-col-0 text11-clz" }, " Customer Service "),
            vue.createElementVNode("view", { class: "diygw-col-0 text12-clz" }, " Available: 9:00-22:00 "),
            vue.createElementVNode("text", { class: "flex icon5 diygw-col-0 icon5-clz diy-icon-right" })
          ]),
          vue.createElementVNode("view", {
            class: "flex diygw-col-24 items-center flex-nowrap flex11-clz",
            onClick: _cache[6] || (_cache[6] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/me/mycard/mycard"
          }, [
            vue.createElementVNode("image", {
              src: "/static/icon1_sz11.png",
              class: "diygw-image diygw-col-0",
              style: { "height": "30px !important", "width": "30px !important" },
              mode: "widthFix"
            }),
            vue.createElementVNode("view", { class: "diygw-col-0 text13-clz" }, " Setting "),
            vue.createElementVNode("text", { class: "flex icon6 diygw-col-0 icon6-clz diy-icon-right" })
          ])
        ]),
        vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-24 justify-around diygw-bottom flex12-clz" }, [
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex13-clz",
            onClick: _cache[7] || (_cache[7] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/home/home"
          }, [
            vue.createElementVNode("text", { class: "flex icon1 diygw-col-0 icon1-clz diy-icon-home" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Home ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex14-clz",
            onClick: _cache[8] || (_cache[8] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/message/messages"
          }, [
            vue.createElementVNode("view", { class: "diygw-col-0 text10-clz" }, " 10 "),
            vue.createElementVNode("text", { class: "flex icon7 diygw-col-0 icon7-clz diy-icon-community" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Consultations ")
          ]),
          vue.createElementVNode("view", {
            class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex15-clz",
            onClick: _cache[9] || (_cache[9] = (...args) => _ctx.navigateTo && _ctx.navigateTo(...args)),
            "data-type": "page",
            "data-url": "/pages/records/records"
          }, [
            vue.createElementVNode("text", { class: "flex icon8 diygw-col-0 icon8-clz diy-icon-message" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Records ")
          ]),
          vue.createElementVNode("view", { class: "flex flex-wrap diygw-col-0 flex-direction-column items-center flex16-clz" }, [
            vue.createElementVNode("text", { class: "flex icon9 diygw-col-0 icon9-clz diy-icon-people" }),
            vue.createElementVNode("view", { class: "diygw-col-0" }, " Me ")
          ])
        ]),
        vue.createElementVNode("view", { class: "clearfix" })
      ])
    ]);
  }
  const PagesMeMe = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-19c123a7"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/me/me.vue"]]);
  let checkbox = {
    name: "",
    shape: "",
    size: "",
    checkbox: false,
    disabled: "",
    activeColor: "",
    inactiveColor: "",
    iconSize: "",
    iconColor: "",
    label: "",
    labelSize: "",
    labelColor: "",
    labelDisabled: ""
  };
  const props$1 = {
    props: {
      name: {
        type: [String, Number, Boolean],
        default: checkbox.name
      },
      shape: {
        type: String,
        default: checkbox.shape
      },
      size: {
        type: [String, Number],
        default: checkbox.size
      },
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      checked: {
        type: Boolean,
        default: checkbox.checked
      },
      disabled: {
        type: [String, Boolean],
        default: checkbox.disabled
      },
      activeColor: {
        type: String,
        default: checkbox.activeColor
      },
      inactiveColor: {
        type: String,
        default: checkbox.inactiveColor
      },
      iconSize: {
        type: [String, Number],
        default: checkbox.iconSize
      },
      iconColor: {
        type: String,
        default: checkbox.iconColor
      },
      label: {
        type: [String, Number],
        default: checkbox.label
      },
      labelSize: {
        type: [String, Number],
        default: checkbox.labelSize
      },
      labelColor: {
        type: String,
        default: checkbox.labelColor
      },
      labelDisabled: {
        type: [String, Boolean],
        default: checkbox.labelDisabled
      }
    }
  };
  const _sfc_main$4 = {
    name: "u-checkbox",
    mixins: [props$1],
    data() {
      return {
        isChecked: false,
        parentData: {
          iconSize: 12,
          labelDisabled: null,
          disabled: null,
          shape: "square",
          activeColor: null,
          inactiveColor: null,
          size: 18,
          value: null,
          iconColor: null,
          placement: "row",
          borderBottom: false,
          iconPlacement: "left"
        }
      };
    },
    computed: {
      elDisabled() {
        return this.disabled !== "" ? this.disabled : this.parentData.disabled !== null ? this.parentData.disabled : false;
      },
      elLabelDisabled() {
        return this.labelDisabled !== "" ? this.labelDisabled : this.parentData.labelDisabled !== null ? this.parentData.labelDisabled : false;
      },
      elSize() {
        return this.size ? this.size : this.parentData.size ? this.parentData.size : 21;
      },
      elIconSize() {
        return this.iconSize ? this.iconSize : this.parentData.iconSize ? this.parentData.iconSize : 12;
      },
      elActiveColor() {
        return this.activeColor ? this.activeColor : this.parentData.activeColor ? this.parentData.activeColor : "#2979ff";
      },
      elInactiveColor() {
        return this.inactiveColor ? this.inactiveColor : this.parentData.inactiveColor ? this.parentData.inactiveColor : "#c8c9cc";
      },
      elLabelColor() {
        return this.labelColor ? this.labelColor : this.parentData.labelColor ? this.parentData.labelColor : "#606266";
      },
      elShape() {
        return this.shape ? this.shape : this.parentData.shape ? this.parentData.shape : "circle";
      },
      elLabelSize() {
        let labelSize = this.labelSize ? this.labelSize : this.parentData.labelSize;
        if (!labelSize) {
          return "inherit";
        }
        return uni.$u.addUnit(labelSize + "px");
      },
      elIconColor() {
        const iconColor = this.iconColor ? this.iconColor : this.parentData.iconColor ? this.parentData.iconColor : "#ffffff";
        if (this.elDisabled) {
          return this.isChecked ? this.elInactiveColor : "transparent";
        } else {
          return this.isChecked ? iconColor : "transparent";
        }
      },
      iconClasses() {
        let classes = [];
        classes.push("u-checkbox__icon-wrap--" + this.elShape);
        if (this.elDisabled) {
          classes.push("u-checkbox__icon-wrap--disabled");
        }
        if (this.isChecked && this.elDisabled) {
          classes.push("u-checkbox__icon-wrap--disabled--checked");
        }
        return classes;
      },
      iconWrapStyle() {
        const style = {};
        style.backgroundColor = this.isChecked && !this.elDisabled ? this.elActiveColor : "#ffffff";
        style.borderColor = this.isChecked && !this.elDisabled ? this.elActiveColor : this.elInactiveColor;
        style.width = uni.$u.addUnit(this.elSize + "px");
        style.height = uni.$u.addUnit(this.elSize + "px");
        if (this.parentData.iconPlacement === "right") {
          style.marginRight = 0;
        }
        return style;
      },
      checkboxStyle() {
        const style = {};
        if (this.parentData.borderBottom && this.parentData.placement === "row") {
          uni.$u.error("\u68C0\u6D4B\u5230\u60A8\u5C06borderBottom\u8BBE\u7F6E\u4E3Atrue\uFF0C\u9700\u8981\u540C\u65F6\u5C06u-checkbox-group\u7684placement\u8BBE\u7F6E\u4E3Acolumn\u624D\u6709\u6548");
        }
        if (this.parentData.borderBottom && this.parentData.placement === "column") {
          style.paddingBottom = "8px";
        }
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.updateParentData();
        if (!this.parent) {
          uni.$u.error("u-checkbox\u5FC5\u987B\u642D\u914Du-checkbox-group\u7EC4\u4EF6\u4F7F\u7528");
        }
        if (this.checked) {
          this.isChecked = true;
        } else if (uni.$u.test.array(this.parentData.value)) {
          this.isChecked = this.parentData.value.some((item2) => {
            return item2 === this.name;
          });
        }
      },
      updateParentData() {
        this.getParentData("u-checkbox-group");
      },
      wrapperClickHandler(e) {
        this.parentData.iconPlacement === "right" && this.iconClickHandler(e);
      },
      iconClickHandler(e) {
        this.preventEvent(e);
        if (!this.elDisabled) {
          this.setRadioCheckedStatus();
        }
      },
      labelClickHandler(e) {
        this.preventEvent(e);
        if (!this.elLabelDisabled && !this.elDisabled) {
          this.setRadioCheckedStatus();
        }
      },
      emitEvent() {
        this.$emit("change", this.isChecked);
      },
      setRadioCheckedStatus() {
        this.isChecked = !this.isChecked;
        this.emitEvent();
        typeof this.parent.unCheckedOther === "function" && this.parent.unCheckedOther(this);
      }
    },
    watch: {
      checked() {
        this.isChecked = this.checked;
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-checkbox", [`u-checkbox-label--${$data.parentData.iconPlacement}`, $data.parentData.borderBottom && $data.parentData.placement === "column" && "u-border-bottom"]]),
      style: vue.normalizeStyle([$options.checkboxStyle]),
      onClick: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.wrapperClickHandler && $options.wrapperClickHandler(...args), ["stop"]))
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["u-checkbox__icon-wrap", $options.iconClasses]),
        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.iconClickHandler && $options.iconClickHandler(...args), ["stop"])),
        style: vue.normalizeStyle([$options.iconWrapStyle])
      }, [
        vue.renderSlot(_ctx.$slots, "icon", {}, () => [
          vue.createVNode(_component_u_icon, {
            class: "u-checkbox__icon-wrap__icon",
            name: "checkbox-mark",
            size: $options.elIconSize,
            color: $options.elIconColor
          }, null, 8, ["size", "color"])
        ], true)
      ], 6),
      vue.createElementVNode("text", {
        onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.labelClickHandler && $options.labelClickHandler(...args), ["stop"])),
        class: "u-checkbox__label",
        style: vue.normalizeStyle({
          color: $options.elDisabled ? $options.elInactiveColor : $options.elLabelColor,
          fontSize: $options.elLabelSize,
          lineHeight: $options.elLabelSize
        })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4)
    ], 6);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-a25f12a0"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-checkbox/u-checkbox.vue"]]);
  let checkboxGroup = {
    name: "",
    value: () => [],
    shape: "square",
    disabled: false,
    activeColor: "#2979ff",
    inactiveColor: "#c8c9cc",
    size: 18,
    placement: "row",
    labelSize: "",
    labelColor: "#303133",
    labelDisabled: false,
    iconColor: "#ffffff",
    iconSize: 18,
    iconPlacement: "left",
    borderBottom: false
  };
  const props = {
    props: {
      name: {
        type: String,
        default: checkboxGroup.name
      },
      value: {
        type: Array,
        default: checkboxGroup.value
      },
      modelValue: {
        type: Array,
        default: checkboxGroup.value
      },
      shape: {
        type: String,
        default: checkboxGroup.shape
      },
      disabled: {
        type: Boolean,
        default: checkboxGroup.disabled
      },
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      activeColor: {
        type: String,
        default: checkboxGroup.activeColor
      },
      inactiveColor: {
        type: String,
        default: checkboxGroup.inactiveColor
      },
      size: {
        type: [String, Number],
        default: checkboxGroup.size
      },
      placement: {
        type: String,
        default: checkboxGroup.placement
      },
      labelSize: {
        type: [String, Number],
        default: checkboxGroup.labelSize
      },
      labelColor: {
        type: [String],
        default: checkboxGroup.labelColor
      },
      labelDisabled: {
        type: Boolean,
        default: checkboxGroup.labelDisabled
      },
      iconColor: {
        type: String,
        default: checkboxGroup.iconColor
      },
      iconSize: {
        type: [String, Number],
        default: checkboxGroup.iconSize
      },
      iconPlacement: {
        type: String,
        default: checkboxGroup.iconPlacement
      },
      borderBottom: {
        type: Boolean,
        default: checkboxGroup.borderBottom
      }
    }
  };
  const _sfc_main$3 = {
    name: "u-checkbox-group",
    mixins: [Emitter, props],
    computed: {
      parentData() {
        return [
          this.value,
          this.modelValue,
          this.disabled,
          this.inactiveColor,
          this.activeColor,
          this.size,
          this.labelDisabled,
          this.shape,
          this.iconSize,
          this.borderBottom,
          this.placement
        ];
      },
      bemClass() {
        return this.bem("checkbox-group", ["placement"]);
      }
    },
    watch: {
      parentData() {
        if (this.children.length) {
          this.children.map((child) => {
            typeof child.init === "function" && child.init();
          });
        }
      }
    },
    data() {
      return {};
    },
    created() {
      this.children = [];
    },
    methods: {
      unCheckedOther(childInstance) {
        const values = [];
        this.children.map((child) => {
          if (child.isChecked) {
            values.push(child.name);
          }
        });
        this.$emit("change", values);
        this.$emit("input", values);
        this.$emit("update:modelValue", values);
        setTimeout(() => {
          this.dispatch("u-form-item", "onFieldChange", values);
        }, 60);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-checkbox-group", $options.bemClass])
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 2);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-36d61c26"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/uni_modules/diy-uview-ui/components/u-checkbox-group/u-checkbox-group.vue"]]);
  const _sfc_main$2 = {
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
        fetch(`${server.site_add}/patient/${this.currentAccount}?authorization=${this.currentAuth}`).then((res) => res.json()).then((res) => {
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_input = resolveEasycom(vue.resolveDynamicComponent("u-input"), __easycom_0$1);
    const _component_u_form_item = resolveEasycom(vue.resolveDynamicComponent("u-form-item"), __easycom_1$1);
    const _component_u_checkbox = resolveEasycom(vue.resolveDynamicComponent("u-checkbox"), __easycom_2);
    const _component_u_checkbox_group = resolveEasycom(vue.resolveDynamicComponent("u-checkbox-group"), __easycom_3);
    const _component_u_calendar = resolveEasycom(vue.resolveDynamicComponent("u-calendar"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.createElementVNode("view", { class: "container container18437" }, [
        vue.createVNode(_component_u_form_item, {
          class: "diygw-col-20 input-clz",
          label: "Name",
          prop: "input"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_input, {
              focus: $data.inputFocus,
              class: "",
              placeholder: "Please input",
              type: "text",
              modelValue: $data.userInfo.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.userInfo.name = $event)
            }, null, 8, ["focus", "modelValue"])
          ]),
          _: 1
        }),
        vue.createElementVNode("view", { class: "flex diygw-col-4 justify-around avatar-clz" }, [
          vue.createElementVNode("view", { class: "diygw-avatar avatar-avatar olive radius" }, [
            vue.createElementVNode("image", {
              mode: "aspectFit",
              class: "diygw-avatar-img radius",
              src: "/static/icon9_xs.png"
            })
          ])
        ]),
        vue.createVNode(_component_u_form_item, {
          class: "diygw-col-24 checkbox-clz",
          label: "Gender",
          required: true,
          prop: "checkbox"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_checkbox_group, {
              class: "flex flex-wrap diygw-col-24 justify-start",
              wrapClass: " justify-start",
              activeColor: "#8dc63f",
              modelValue: $data.checkbox,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.checkbox = $event),
              onChange: $options.changeCheckbox
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.checkboxDatas, (checkboxitem, checkboxindex) => {
                  return vue.openBlock(), vue.createBlock(_component_u_checkbox, {
                    modelValue: checkboxitem.checked,
                    "onUpdate:modelValue": ($event) => checkboxitem.checked = $event,
                    key: checkboxindex,
                    name: checkboxitem.value
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(checkboxitem.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue", "name"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["modelValue", "onChange"])
          ]),
          _: 1
        }),
        vue.createVNode(_component_u_form_item, {
          class: "diygw-col-24 date-clz",
          label: "Birthday",
          required: true,
          prop: "date"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_input, {
              onClick: _cache[2] || (_cache[2] = ($event) => $data.showDate = true),
              class: "",
              placeholder: "Please choose",
              modelValue: $data.userInfo.birth,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.userInfo.birth = $event),
              type: "select"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        vue.createVNode(_component_u_calendar, {
          maxDate: "2050-12-31",
          modelValue: $data.showDate,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.showDate = $event),
          mode: "date",
          onChange: $options.changeDate
        }, null, 8, ["modelValue", "onChange"]),
        vue.createVNode(_component_u_form_item, {
          class: "diygw-col-24 input3-clz",
          label: "Passport",
          prop: "input3"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_input, {
              focus: $data.input3Focus,
              class: "",
              placeholder: "Please input",
              modelValue: $data.userInfo.passport,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.userInfo.passport = $event),
              type: "text"
            }, null, 8, ["focus", "modelValue"])
          ]),
          _: 1
        }),
        vue.createVNode(_component_u_form_item, {
          class: "diygw-col-24 input1-clz",
          label: "Phone",
          prop: "input1"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_input, {
              focus: $data.input1Focus,
              class: "",
              placeholder: "Please input",
              modelValue: $data.userInfo.phone,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.userInfo.phone = $event),
              type: "text"
            }, null, 8, ["focus", "modelValue"])
          ]),
          _: 1
        }),
        vue.createVNode(_component_u_form_item, {
          class: "diygw-col-24 input2-clz",
          label: "Address",
          prop: "input2"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_input, {
              focus: $data.input2Focus,
              class: "",
              placeholder: "Please input",
              modelValue: $data.userInfo.address,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.userInfo.address = $event),
              type: "text"
            }, null, 8, ["focus", "modelValue"])
          ]),
          _: 1
        }),
        vue.createVNode(_component_u_form_item, {
          class: "diygw-col-24 input2-clz",
          label: "Nationality",
          prop: "input2"
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_u_input, {
              focus: $data.input2Focus,
              class: "",
              placeholder: "Please input",
              modelValue: $data.userInfo.nationality,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.userInfo.nationality = $event),
              type: "text"
            }, null, 8, ["focus", "modelValue"])
          ]),
          _: 1
        }),
        vue.createElementVNode("view", { class: "flex diygw-col-24 button-clz" }, [
          vue.createElementVNode("button", { class: "diygw-btn blue md radius-xs flex-sub margin-xs button-button-clz" }, "Confirm")
        ]),
        vue.createElementVNode("view", { class: "clearfix" })
      ])
    ]);
  }
  const PagesMeMycardMycard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-a4b64241"], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/me/mycard/mycard.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        url: ""
      };
    },
    onLoad(options) {
      if (options && options.url) {
        this.url = decodeURIComponent(options.url);
      }
    },
    onShow() {
    },
    onShareAppMessage: function() {
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "start" }, [
      vue.createElementVNode("web-view", { src: $data.url }, null, 8, ["src"])
    ]);
  }
  const PagesWebview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/pages/webview.vue"]]);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/login/forget", PagesLoginForget);
  __definePage("pages/login/register", PagesLoginRegister);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/home/appointment/department", PagesHomeAppointmentDepartment);
  __definePage("pages/home/consultation/department", PagesHomeConsultationDepartment);
  __definePage("pages/home/appointment/doctors_list", PagesHomeAppointmentDoctors_list);
  __definePage("pages/home/appointment/doctor_page", PagesHomeAppointmentDoctor_page);
  __definePage("pages/home/appointment/finish", PagesHomeAppointmentFinish);
  __definePage("pages/home/consultation/finish", PagesHomeConsultationFinish);
  __definePage("pages/home/consultation/doctors_list", PagesHomeConsultationDoctors_list);
  __definePage("pages/message/messages", PagesMessageMessages);
  __definePage("pages/records/records", PagesRecordsRecords);
  __definePage("pages/me/me", PagesMeMe);
  __definePage("pages/me/mycard/mycard", PagesMeMycardMycard);
  __definePage("pages/webview", PagesWebview);
  const _sfc_main = {
    globalData: {
      userInfo: null,
      tabBar: [],
      homePage: "/pages/home/home",
      pages: ["/pages/login/login", "/pages/home/home", "/pages/home/appointment/department", "/pages/home/consultation/department", "/pages/home/appointment/doctors_list", "/pages/home/appointment/doctor_page", "/pages/home/appointment/finish", "/pages/home/consultation/doctors_list", "/pages/message/messages", "/pages/records/records", "/pages/me/me", "/pages/me/mycard/mycard"],
      userData: {}
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Programming/App_Develop/Projects/DIY_Test/Project/uniapp-DIY_Template5-copy/App.vue"]]);
  class Validate$1 {
    constructor(rules2 = {}) {
      Object.assign(this, {
        rules: rules2
      });
      this.__init();
    }
    __init() {
      this.__initMethods();
      this.__initDefaults();
      this.__initData();
    }
    __initDefaults() {
      this.defaults = {
        messages: {
          required: "\u8FD9\u662F\u5FC5\u586B\u5B57\u6BB5\u3002",
          email: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u3002",
          tel: "\u8BF7\u8F93\u516511\u4F4D\u7684\u624B\u673A\u53F7\u7801\u3002",
          url: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7F51\u5740\u3002",
          date: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u65E5\u671F\u3002",
          dateISO: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u65E5\u671F\uFF08ISO\uFF09\uFF0C\u4F8B\u5982\uFF1A2009-06-23\uFF0C1998/01/22\u3002",
          number: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u6570\u5B57\u3002",
          regexp: "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u6B63\u5219\u5339\u914D\u503C\u3002",
          digits: "\u53EA\u80FD\u8F93\u5165\u6570\u5B57\u3002",
          idcard: "\u8BF7\u8F93\u516518\u4F4D\u7684\u6709\u6548\u8EAB\u4EFD\u8BC1\u3002",
          equalTo: "\u8F93\u5165\u503C\u5FC5\u987B\u548C%s\u76F8\u540C\u3002",
          contains: "\u8F93\u5165\u503C\u5FC5\u987B\u5305\u542B%s\u3002",
          minlength: "\u6700\u5C11\u8981\u8F93\u5165%s\u4E2A\u5B57\u7B26\u3002",
          maxlength: "\u6700\u591A\u53EF\u4EE5\u8F93\u5165%s\u4E2A\u5B57\u7B26\u3002",
          rangelength: "\u8BF7\u8F93\u5165\u957F\u5EA6\u5728%s\u5230%s\u4E4B\u95F4\u7684\u5B57\u7B26\u3002",
          min: "\u8BF7\u8F93\u5165\u4E0D\u5C0F\u4E8E%s\u7684\u6570\u503C\u3002",
          max: "\u8BF7\u8F93\u5165\u4E0D\u5927\u4E8E%s\u7684\u6570\u503C\u3002",
          range: "\u8BF7\u8F93\u5165\u8303\u56F4\u5728%s\u5230 {1} \u4E4B\u95F4\u7684\u6570\u503C\u3002"
        }
      };
    }
    __initData() {
      this.form = {};
      this.errorList = [];
    }
    __initMethods() {
      const that = this;
      that.methods = {
        required: {
          valid(value, param) {
            if (!that.depend(param)) {
              return "dependency-mismatch";
            } else if (typeof value === "number") {
              value = value.toString();
            } else if (typeof value === "boolean") {
              return true;
            }
            return value.length > 0;
          },
          message(param) {
            return param.message || "\u8FD9\u662F\u5FC5\u586B\u5B57\u6BB5\u3002";
          }
        },
        email: {
          valid(value, param) {
            return that.optional(value) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
          },
          message(param) {
            return param.message || "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u3002";
          }
        },
        tel: {
          valid(value, param) {
            return that.optional(value) || /^1[34578]\d{9}$/.test(value);
          },
          message(param) {
            return param.message || "\u8BF7\u8F93\u516511\u4F4D\u7684\u624B\u673A\u53F7\u7801\u3002";
          }
        },
        url: {
          valid(value, param) {
            return that.optional(value) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
          },
          message(param) {
            return param.message || "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7F51\u5740\u3002";
          }
        },
        date: {
          valid(value, param) {
            return that.optional(value) || !/Invalid|NaN/.test(new Date(value).toString());
          },
          message(param) {
            return param.message || "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u65E5\u671F\u3002";
          }
        },
        dateISO: {
          valid(value, param) {
            return that.optional(value) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
          },
          message(param) {
            return param.message || "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u65E5\u671F\uFF08ISO\uFF09\uFF0C\u4F8B\u5982\uFF1A2009-06-23\uFF0C1998/01/22\u3002";
          }
        },
        number: {
          valid(value, param) {
            return that.optional(value) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
          },
          message(param) {
            return param.message || "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u6570\u5B57\u3002";
          }
        },
        digits: {
          valid(value, param) {
            return that.optional(value) || /^\d+$/.test(value);
          },
          message(param) {
            return param.message || "\u53EA\u80FD\u8F93\u5165\u6574\u6570\u3002";
          }
        },
        idcard: {
          valid(value, param) {
            return that.optional(value) || /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
          },
          message(param) {
            return param.message || "\u8BF7\u8F93\u516518\u4F4D\u7684\u6709\u6548\u8EAB\u4EFD\u8BC1\u3002";
          }
        },
        regexp: {
          valid(value, param) {
            var regexp2 = "string" === typeof param.regexp ? new RegExp(param.regexp) : param.regexp;
            return that.optional(value) || regexp2.test(value);
          },
          message(param) {
            return param.message || "\u8BF7\u8F93\u5165\u6709\u6548\u7684\u6B63\u5219\u5339\u914D\u503C";
          }
        },
        equalTo: {
          valid(value, param) {
            return that.optional(value) || value === that.scope.detail.value[param.field];
          },
          message(param) {
            return that.formatMessage(param.message || "\u8F93\u5165\u503C\u5FC5\u987B\u548C%s\u76F8\u540C\u3002", [that.scope.detail.value[param.field]]);
          }
        },
        contains: {
          valid(value, param) {
            return that.optional(value) || value.indexOf(param.value) >= 0;
          },
          message(param) {
            return that.formatMessage(param.message || "\u8F93\u5165\u503C\u5FC5\u987B\u5305\u542B%s\u3002", [param.value]);
          }
        },
        minlength: {
          valid(value, param) {
            return that.optional(value) || value.length >= param.value;
          },
          message(param) {
            return that.formatMessage(param.message || "\u6700\u5C11\u8981\u8F93\u5165%s\u4E2A\u5B57\u7B26\u3002", [param.value]);
          }
        },
        maxlength: {
          valid(value, param) {
            return that.optional(value) || value.length <= param.value;
          },
          message(param) {
            return that.formatMessage(param.message || "\u6700\u591A\u53EF\u4EE5\u8F93\u5165%s\u4E2A\u5B57\u7B26\u3002", [param.value]);
          }
        },
        rangelength: {
          valid(value, param) {
            return that.optional(value) || value.length >= param.min && value.length <= param.max;
          },
          message(param) {
            return that.formatMessage(param.message || "\u8BF7\u8F93\u5165\u957F\u5EA6\u5728%s\u5230%s\u4E4B\u95F4\u7684\u5B57\u7B26\u3002", [param.min, param.max]);
          }
        },
        min: {
          valid(value, param) {
            return that.optional(value) || value >= param.value;
          },
          message(param) {
            return that.formatMessage(param.message || "\u8BF7\u8F93\u5165\u4E0D\u5C0F\u4E8E%s\u7684\u6570\u503C\u3002", [param.value]);
          }
        },
        max: {
          valid(value, param) {
            return that.optional(value) || value <= param.value;
          },
          message(param) {
            return that.formatMessage(param.message || "\u8BF7\u8F93\u5165\u4E0D\u5927\u4E8E%s\u7684\u6570\u503C\u3002", [param.value]);
          }
        },
        range: {
          valid(value, param) {
            return that.optional(value) || value >= param.min && value <= param.max;
          },
          message(param) {
            return that.formatMessage(param.message || "\u8BF7\u8F93\u5165\u8303\u56F4\u5728%s\u5230%s\u4E4B\u95F4\u7684\u6570\u503C\u3002", [param.min, param.max]);
          }
        }
      };
    }
    addMethod(name, method2, message) {
      this.methods[name] = method2;
      this.defaults.messages[name] = message !== void 0 ? message : this.defaults.messages[name];
    }
    isValidMethod(value) {
      return this.methods.hasOwnProperty(value);
    }
    formatMessage(message, parameters) {
      if (!Array.isArray(parameters)) {
        parameters = [parameters];
      }
      for (var i in parameters) {
        message = message.replace("%s", parameters[i]);
      }
      return message;
    }
    formatTpl(source, params) {
      const that = this;
      if (arguments.length === 1) {
        return function() {
          let args = Array.from(arguments);
          args.unshift(source);
          return that.formatTpl.apply(this, args);
        };
      }
      if (params === void 0) {
        return source;
      }
      if (arguments.length > 2 && params.constructor !== Array) {
        params = Array.from(arguments).slice(1);
      }
      if (params.constructor !== Array) {
        params = [params];
      }
      params.forEach(function(n, i) {
        source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
          return n;
        });
      });
      return source;
    }
    depend(param) {
      switch (typeof param) {
        case "boolean":
          param = param;
          break;
        case "string":
          param = !!param.length;
          break;
        case "function":
          param = param();
        default:
          param = true;
      }
      return param;
    }
    optional(value) {
      return !this.methods.required.valid(value) && "dependency-mismatch";
    }
    customMessage(param, rule) {
      if (!rule.parameters.message) {
        rule.parameters.message = this.defaults.messages[rule.method];
      }
      if (rule.parameters.message.indexOf("%s") >= 0) {
        return this.methods[rule.method].message;
      } else {
        return rule.parameters.message;
      }
    }
    defaultMessage(param, rule) {
      let message = this.customMessage(param, rule) || this.defaults.messages[rule.method];
      let type2 = typeof message;
      if (type2 === "undefined") {
        message = `Warning: No message defined for ${rule.method}.`;
      } else if (type2 === "function") {
        message = message.call(this, rule.parameters);
      }
      return message;
    }
    formatTplAndAdd(param, rule, value) {
      let msg = this.defaultMessage(param, rule);
      this.errorList.push({
        param,
        msg,
        value
      });
    }
    checkParam(param, rules2, event) {
      this.scope = event;
      const data = event.detail.value;
      const value = data[param] || "";
      for (let method2 in rules2) {
        if (this.isValidMethod(method2)) {
          const rule = {
            method: method2,
            parameters: rules2[method2]
          };
          const result = this.methods[method2].valid(value, rule.parameters);
          if (result === "dependency-mismatch") {
            continue;
          }
          this.setValue(param, method2, result, value);
          if (!result) {
            this.formatTplAndAdd(param, rule, value);
            break;
          }
        }
      }
    }
    setView(param) {
      this.form[param] = {
        $name: param,
        $valid: true,
        $invalid: false,
        $error: {},
        $success: {},
        $viewValue: ``
      };
    }
    setValue(param, method2, result, value) {
      const params = this.form[param];
      params.$valid = result;
      params.$invalid = !result;
      params.$error[method2] = !result;
      params.$success[method2] = result;
      params.$viewValue = value;
    }
    checkForm(event) {
      this.__initData();
      for (let param in this.rules) {
        this.setView(param);
        this.checkParam(param, this.rules[param], event);
      }
      return this.valid();
    }
    valid() {
      return this.size() === 0;
    }
    size() {
      return this.errorList.length;
    }
    validationErrors() {
      return this.errorList;
    }
  }
  var Login = {
    weixin(thiz, dataset) {
      if (uni.getUserProfile) {
        uni.getUserProfile({
          lang: "zh_CN",
          desc: "\u7528\u4E8E\u767B\u9646",
          success: function(wxInfo) {
            uni.login({
              provider: "weixin",
              success: function(res) {
                let data = {
                  code: res.code,
                  type: dataset.logintype,
                  userInfo: JSON.stringify(wxInfo.userInfo)
                };
                thiz.$http.post(dataset.loginurl, data).then((res2) => {
                  if (res2.code == 200) {
                    thiz.setData({
                      userInfo: res2.data
                    });
                    thiz.$session.setUser(res2.data);
                  }
                  if (thiz[dataset.callback]) {
                    thiz[dataset.callback](res2);
                  }
                });
              },
              fail: function() {
                wx.showModal({
                  title: "\u83B7\u53D6\u7528\u6237\u4FE1\u606F",
                  content: "\u8BF7\u5141\u8BB8\u6388\u6743\u4EE5\u4FBF\u4E3A\u60A8\u63D0\u4F9B\u7ED9\u670D\u52A1",
                  success: function(res) {
                    if (res.confirm) {
                      thiz.navigateTo(dataset);
                    }
                  }
                });
              }
            });
          },
          fail: function(res) {
            wx.showModal({
              title: "\u53CB\u60C5\u63D0\u793A",
              content: "\u5DF2\u62D2\u7EDD\u5C0F\u7A0B\u5E8F\u83B7\u53D6\u4FE1\u606F",
              showCancel: false
            });
          }
        });
      } else {
        uni.showToast({
          title: "\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u5728\u5C0F\u7A0B\u5E8F\u4E0A\u767B\u5F55",
          icon: "none"
        });
      }
    }
  };
  var Pay = {
    async pay(param) {
      let page = getApp().globalData.currentPage;
      let session = page.$session;
      if (!session.getUser().openid) {
        if (!param.openid) {
          page.showToast("\u8BF7\u5148\u767B\u5F55");
          return;
        }
      }
      if (!param.total) {
        page.showToast("\u8BF7\u914D\u7F6E\u4EF7\u683C\u53C2\u6570total");
        return;
      }
      let data = await page.$http.post(param.url || "/api/wepay/order", {
        total: param.total,
        body: param.body,
        openid: param.openid || session.getUser().openid
      }, {}, "json");
      if (data.code != 200) {
        page.showToast(data.msg);
        return;
      }
      if (this[param.paytype]) {
        this[param.paytype](Object.assign(data, param));
      } else {
        page.showToast("\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u6253\u5F00");
        return;
      }
    },
    weixin(params = {}) {
      uni.requestPayment({
        provider: "wxpay",
        timeStamp: params.data.timeStamp,
        nonceStr: params.data.nonceStr,
        package: params.data.package,
        signType: params.data.signType,
        paySign: params.data.paySign,
        success: (res) => {
          if (params.success && typeof params.success == "function") {
            params.success(res);
          } else {
            formatAppLog("log", "at common/Pay.js:47", "\u914D\u7F6E\u652F\u4ED8\u56DE\u8C03\u6210\u529F\u65B9\u6CD5");
          }
        },
        fail: (res) => {
          if (params.fail && typeof params.fail == "function") {
            params.fail(res);
          } else {
            formatAppLog("log", "at common/Pay.js:54", "\u914D\u7F6E\u652F\u4ED8\u56DE\u8C03\u5931\u8D25\u65B9\u6CD5");
          }
        }
      });
    }
  };
  const Validate = (rules2, messages2) => new Validate$1(rules2, messages2);
  function setData(dataset) {
    for (let field in dataset) {
      const regex = /([\w$]+)|\[(:\d)\]/g;
      const patten = field.match(regex);
      let result = this;
      for (let i = 0; i < patten.length - 1; i++) {
        const key = patten[i];
        result = result[key];
      }
      result[patten[patten.length - 1]] = dataset[field];
    }
  }
  var flagArr$1 = [];
  function navigateTo(e) {
    let dataset = e.currentTarget ? e.currentTarget.dataset : e;
    let { id, type: type2 } = dataset;
    let thiz = this;
    if (e.currentTarget) {
      if (!flagArr$1[type2]) {
        flagArr$1[type2] = true;
        setTimeout(() => {
          flagArr$1[type2] = false;
        }, 500);
      } else {
        return;
      }
    }
    if (type2 == "openmodal") {
      thiz[id] = "show";
    } else if (type2 == "closemodal") {
      thiz[id] = "";
    } else if (type2 == "page" || type2 == "inner" || type2 == "href") {
      thiz.$tools.navigateTo(dataset.url, dataset);
    } else if (type2 == "submit") {
      showToast("\u5C06\u6267\u884C\u8868\u5355\u63D0\u4EA4\u52A8\u4F5C");
    } else if (type2 == "reset") {
      showToast("\u5C06\u6267\u884C\u8868\u5355\u91CD\u7F6E\u52A8\u4F5C");
    } else if (type2 == "tip") {
      showToast(dataset.tip);
    } else if (type2 == "confirm") {
      uni.showModal({
        title: "\u63D0\u793A",
        content: dataset.tip,
        showCancel: false
      });
    } else if (type2 == "daohang") {
      uni.openLocation({
        latitude: Number(dataset.lat),
        longitude: Number(dataset.lng),
        address: dataset.address,
        success: function() {
          formatAppLog("log", "at common/Page.js:68", "success");
        }
      });
    } else if (type2 == "phone") {
      thiz.$tools.makePhoneCall(e);
    } else if (type2 == "previewImage" || type2 == "preview") {
      uni.previewImage({
        current: thiz.$tools.renderImage(dataset.img),
        urls: [thiz.$tools.renderImage(dataset.img)]
      });
    } else if (type2 == "copy") {
      uni.setClipboardData({
        data: dataset.copy,
        showToast: false,
        success: function() {
          showToast(dataset.tip || "\u590D\u5236\u6210\u529F", "none");
        }
      });
    } else if (type2 == "xcx") {
      uni.navigateToMiniProgram({
        appId: dataset.appid,
        path: dataset.path,
        success(res) {
        }
      });
    } else if (typeof thiz[type2] == "function") {
      thiz[type2](dataset);
    } else if (type2 == "login") {
      let logintType = dataset.logintype;
      if (Login[logintType]) {
        Login[logintType](thiz, dataset);
      } else {
        showToast(type2 + "\u767B\u5F55\u6709\u5F85\u5B9E\u73B0");
      }
    } else if (type2 == "pay") {
      Pay.pay(dataset);
    } else {
      showToast(type2 + "\u7C7B\u578B\u6709\u5F85\u5B9E\u73B0");
    }
  }
  function showModal(message, title = "\u63D0\u793A", iscancel = true) {
    return new Promise((resolve) => {
      uni.showModal({
        title,
        content: message,
        showCancel: iscancel,
        success: function(res) {
          if (res.confirm) {
            resolve(true);
          } else if (res.cancel) {
            resolve(false);
          }
        }
      });
    });
  }
  function showToast(title, icon) {
    uni.showToast({
      title,
      icon: icon ? icon : "none"
    });
  }
  function getPickerChildren(data, chindInex1, childIndex2) {
    if (chindInex1 != null && data[chindInex1] && data[chindInex1].children && data[chindInex1].children) {
      let children = data[chindInex1].children;
      if (childIndex2 == null) {
        if (children != null && children.length > 0) {
          return children.map((item2) => item2.label);
        } else {
          return [];
        }
      } else {
        if (children[childIndex2] == null) {
          return [];
        }
        let children2 = children[childIndex2].children;
        if (children2 != null && children2.length > 0) {
          return children2.map((item2) => item2.label);
        } else {
          return [];
        }
      }
    } else {
      return [];
    }
  }
  function getData(thiz, field) {
    const regex = /([\w$]+)|\[(:\d)\]/g;
    const patten = field.match(regex);
    let result = thiz;
    for (let i = 0; i < patten.length - 1; i++) {
      let key = patten[i];
      result = result[key];
    }
    return result[patten[patten.length - 1]];
  }
  function uploadImage(thiz, field, fieldData, uploadUrl, count = 9, type2 = "img") {
    return new Promise((resolve) => {
      if (!uploadUrl) {
        showToast("\u8BF7\u914D\u7F6E\u4E0A\u4F20\u5730\u5740");
        resolve();
        return;
      }
      uni.chooseImage({
        count,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: function(res) {
          let tempFilePaths = res.tempFilePaths;
          for (let i = 0; i < tempFilePaths.length; i++) {
            uni.uploadFile({
              url: thiz.$http.setUrl(uploadUrl),
              filePath: tempFilePaths[i],
              name: "file",
              header: {
                Authorization: thiz.$session.getToken() || ""
              },
              success(res2) {
                let data = thiz.$tools.fromJson(res2.data);
                let url2 = "";
                if (data.url) {
                  url2 = thiz.$tools.renderImage(data.url);
                }
                if (data.data && thiz.$tools.isObject(data.data) && data.data.url) {
                  url2 = thiz.$tools.renderImage(data.data.url);
                }
                if (type2 == "avatar") {
                  thiz.setData({
                    [field]: url2
                  });
                } else {
                  let files = getData(thiz, fieldData).concat(url2);
                  thiz.setData({
                    [fieldData]: files,
                    [field]: (files || []).join(",").replace(/^[]/, "")
                  });
                }
              },
              complete() {
                if (i == tempFilePaths.length - 1) {
                  resolve();
                }
              }
            });
          }
        }
      });
    });
  }
  function getOption(option) {
    if (option !== null && typeof option === "object") {
      for (let key in option) {
        option[key] = decodeURIComponent(option[key]);
      }
    }
    return option;
  }
  function setCurrentPage(page) {
    if (this.$session.getUser()) {
      page.userInfo = this.$session.getUser();
    }
    if (this.$session.getValue("redirect_page")) {
      let value = this.$session.getValue("redirect_page");
      this.$session.setValue("redirect_page", null);
      this.$tools.navigateTo(value.url, value);
    }
    getApp().globalData.currentPage = page;
  }
  const __config = {
    basePath: "\u8BF7\u914D\u7F6E\u4F60\u7684API\u5168\u5C40\u57DF\u540D",
    fileBasePath: "\u8BF7\u914D\u7F6E\u4F60\u7684API\u5168\u5C40\u57DF\u540D",
    title: "HealthHub",
    debug: true,
    appid: "18437"
  };
  class Tools {
    constructor() {
      Object.assign(this, {
        $$basePath: __config.basePath
      });
    }
    getFilenameExt(file) {
      const types2 = file.name.split(".");
      return types2[types2.length - 1];
    }
    getWeek(dateTime) {
      let temptTime = new Date(dateTime.getTime());
      let weekday = temptTime.getDay() || 7;
      temptTime.setDate(temptTime.getDate() - weekday + 1 + 5);
      let firstDay = new Date(temptTime.getFullYear(), 0, 1);
      let dayOfWeek = firstDay.getDay();
      let spendDay = 1;
      if (dayOfWeek != 0)
        spendDay = 7 - dayOfWeek + 1;
      firstDay = new Date(temptTime.getFullYear(), 0, 1 + spendDay);
      let d = Math.ceil((temptTime.valueOf() - firstDay.valueOf()) / 864e5);
      let result = Math.ceil(d / 7);
      return result;
    }
    formatDateTime(val, format2 = "YYYY-mm-dd HH:MM:SS") {
      if (this.isDate(val)) {
        return this.formatDate(val, format2);
      } else if (!isNaN(val)) {
        if (String(val).length == 10) {
          val = val * 1e3;
        }
        let date2 = new Date(val);
        return this.formatDate(date2, format2);
      }
    }
    formatDate(date2, format2) {
      let we = date2.getDay();
      let qut = Math.floor((date2.getMonth() + 3) / 3).toString();
      const opt = {
        "Y+": date2.getFullYear().toString(),
        "m+": (date2.getMonth() + 1).toString(),
        "d+": date2.getDate().toString(),
        "H+": date2.getHours().toString(),
        "M+": date2.getMinutes().toString(),
        "S+": date2.getSeconds().toString(),
        "q+": qut
      };
      const week = {
        "0": "\u65E5",
        "1": "\u4E00",
        "2": "\u4E8C",
        "3": "\u4E09",
        "4": "\u56DB",
        "5": "\u4E94",
        "6": "\u516D"
      };
      const quarter = {
        "1": "\u4E00",
        "2": "\u4E8C",
        "3": "\u4E09",
        "4": "\u56DB"
      };
      if (/(W+)/.test(format2))
        format2 = format2.replace(RegExp.$1, RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "\u661F\u671F" + week[we] : "\u5468" + week[we] : week[we]);
      if (/(Q+)/.test(format2))
        format2 = format2.replace(RegExp.$1, RegExp.$1.length == 4 ? "\u7B2C" + quarter[qut] + "\u5B63\u5EA6" : quarter[qut]);
      if (/(Z+)/.test(format2)) {
        let z = this.getWeek(date2);
        format2 = format2.replace(RegExp.$1, RegExp.$1.length == 3 ? "\u7B2C" + z + "\u5468" : z + "");
      }
      for (let k in opt) {
        let r = new RegExp("(" + k + ")").exec(format2);
        if (r)
          format2 = format2.replace(r[1], RegExp.$1.length == 1 ? opt[k] : opt[k].padStart(RegExp.$1.length, "0"));
      }
      return format2;
    }
    getCurrentDate() {
      return this.formatDate(new Date(), "YYYY-mm-dd");
    }
    getCurrentTime() {
      return this.formatDate(new Date(), "HH:MM");
    }
    getCurrentDateTime() {
      return this.formatDate(new Date(), "YYYY-mm-dd HH:MM:SS");
    }
    rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    randString(size) {
      let result = "";
      let allChar = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      size = size || 1;
      while (size--) {
        result += allChar.charAt(this.rand(0, allChar.length - 1));
      }
      return result;
    }
    randFilename(file) {
      return this.randString(this.rand(10, 100)) + Date.parse(new Date()) + "." + this.getFilenameExt(file);
    }
    isString(value) {
      return typeof value === "string";
    }
    isFunction(value) {
      return this.type(value) === "function";
    }
    isArray(value) {
      return Array.isArray(value);
    }
    isObject(value) {
      return value !== null && typeof value === "object";
    }
    isNumber(value) {
      return typeof value === "number";
    }
    isDate(value) {
      return this.type(value) === "[object Date]";
    }
    isRegExp(value) {
      return this.type(value) === "[object RegExp]";
    }
    isFile(obj) {
      return this.type(obj) === "[object File]";
    }
    isFormData(obj) {
      return this.type(obj) === "[object FormData]";
    }
    isBlob(obj) {
      return this.type(obj) === "[object Blob]";
    }
    isBoolean(value) {
      return typeof value === "boolean";
    }
    isPromiseLike(obj) {
      return obj && this.isFunction(obj.then);
    }
    isTypedArray(value) {
      const TYPED_ARRAY_REGEXP = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/;
      return value && this.isNumber(value.length) && TYPED_ARRAY_REGEXP.test(this.type(value));
    }
    isArrayBuffer(obj) {
      return this.type(obj) === "[object ArrayBuffer]";
    }
    isDefined(value) {
      return typeof value !== "undefined";
    }
    isUndefined(value) {
      return typeof value === "undefined";
    }
    isNull(value) {
      return value === null;
    }
    isFinite(value) {
      return typeof value == "number" && isFinite(value);
    }
    isNaN(value) {
      return this.isNumber(value) && value != +value;
    }
    isError(value) {
      return this.type(value) === "[object Error]";
    }
    trim(str) {
      return this.isString(str) ? str.trim() : str;
    }
    escapeForRegexp(str) {
      return str.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }
    makeMap(str) {
      let obj = {}, items = str.split(",");
      for (let i = 0; i < items.length; i++) {
        obj[items[i]] = true;
      }
      return obj;
    }
    includes(arr, obj) {
      return Array.prototype.indexOf.call(arr, obj) != -1;
    }
    arrayRemove(array2, value) {
      let index = array2.indexOf(value);
      if (index >= 0) {
        array2.splice(index, 1);
      }
      return index;
    }
    addDateMinutes(date2, minutes) {
      date2 = new Date(date2.getTime());
      date2.setMinutes(date2.getMinutes() + minutes || 0);
      return date2;
    }
    toJson(obj, pretty) {
      if (this.isUndefined(obj))
        return void 0;
      if (!this.isNumber(pretty)) {
        pretty = pretty ? 2 : null;
      }
      return JSON.stringify(obj, null, pretty);
    }
    fromJson(json) {
      return this.isString(json) ? JSON.parse(decodeURIComponent(json).replace(
        new RegExp("&quot;", "gm"),
        '"'
      )) : json;
    }
    extend() {
      let src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[i] || {};
        i++;
      }
      if (typeof target !== "object" && !this.isFunction(target)) {
        target = {};
      }
      if (i === length) {
        target = this;
        i--;
      }
      for (; i < length; i++) {
        if ((options = arguments[i]) != null) {
          for (name in options) {
            src = target[name];
            copy = options[name];
            if (target === copy) {
              continue;
            }
            if (deep && copy && (this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)))) {
              if (copyIsArray) {
                copyIsArray = false;
                clone = src && this.isArray(src) ? src : [];
              } else {
                clone = src && this.isPlainObject(src) ? src : {};
              }
              target[name] = this.extend(deep, clone, copy);
            } else if (copy !== void 0) {
              target[name] = copy;
            }
          }
        }
      }
      return target;
    }
    isPlainObject(obj) {
      let getProto = Object.getPrototypeOf;
      let class2type = {};
      let hasOwn = class2type.hasOwnProperty;
      let fnToString = hasOwn.toString;
      let ObjectFunctionString = fnToString.call(Object);
      let proto, Ctor;
      if (!obj || this.type(obj) !== "[object Object]") {
        return false;
      }
      proto = getProto(obj);
      if (!proto) {
        return true;
      }
      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    }
    isEmptyObject(obj) {
      for (let i in obj)
        return false;
      return true;
    }
    type(obj) {
      const toString = Object.prototype.toString;
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ? toString.call(obj) || "object" : typeof obj;
    }
    merge(...args) {
      return Object.assign(...args);
    }
    clone(obj) {
      if (typeof obj !== "object" || !obj) {
        return obj;
      }
      let copy = {};
      for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) {
          copy[attr] = obj[attr];
        }
      }
      return copy;
    }
    getUrlParams(url2) {
      var _params = {}, qStart = url2.indexOf("?"), hStart = url2.indexOf("#"), q = url2.substr(qStart + 1), tmp, parts, i;
      if (hStart === -1)
        hStart = url2.length;
      if (q) {
        tmp = q.split("&");
        i = tmp.length;
        while (i--) {
          parts = tmp[i].split("=");
          _params[parts[0]] = decodeURIComponent(parts[1]).replace(/\+/g, " ");
        }
      }
      return _params;
    }
    getUrlParam(url2, name) {
      return this.getUrlParams(url2)[name];
    }
    omit(obj, keys) {
      let o = this.clone(obj);
      keys.forEach((key) => {
        delete o[key];
      });
      return o;
    }
    pluck(arr, key) {
      if (typeof arr !== "object" || arr.length === 0) {
        return [];
      }
      if (!key) {
        return arr;
      }
      return arr.map((a) => a[key]);
    }
    serializeValue(value) {
      if (this.isObject(value))
        return this.isDate(value) ? value.toISOString() : this.toJson(value);
      return value;
    }
    encodeUriQuery(value, pctEncodeSpaces) {
      return encodeURIComponent(value).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, pctEncodeSpaces ? "%20" : "+");
    }
    paramSerializer(obj) {
      if (!obj)
        return "";
      let that = this;
      let parts = [];
      for (let key in obj) {
        const value = obj[key];
        if (value === null || that.isUndefined(value))
          return;
        if (that.isArray(value)) {
          value.forEach(function(v) {
            parts.push(that.encodeUriQuery(key) + "=" + that.encodeUriQuery(that.serializeValue(v)));
          });
        } else {
          parts.push(that.encodeUriQuery(key) + "=" + that.encodeUriQuery(that.serializeValue(value)));
        }
      }
      return parts.join("&");
    }
    buildUrl(url2, obj) {
      const serializedParams = this.paramSerializer(obj);
      if (serializedParams.length > 0) {
        url2 += (url2.indexOf("?") == -1 ? "?" : "&") + serializedParams;
      }
      return url2;
    }
    guid(len = 32, firstU = true, radix = null) {
      let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
      let uuid = [];
      radix = radix || chars.length;
      if (len) {
        for (let i = 0; i < len; i++)
          uuid[i] = chars[0 | Math.random() * radix];
      } else {
        let r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
        uuid[14] = "4";
        for (let i = 0; i < 36; i++) {
          if (!uuid[i]) {
            r = 0 | Math.random() * 16;
            uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
          }
        }
      }
      if (firstU) {
        uuid.shift();
        return "u" + uuid.join("");
      } else {
        return uuid.join("");
      }
    }
    getRect(selector, all) {
      return new Promise((resolve) => {
        uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    }
    renderUrl(url2, defaultUrl) {
      if (!url2 || url2 == "") {
        url2 = defaultUrl;
      }
      if (url2.indexOf("__weui-popup") > 0 || url2.startsWith("tel:") || url2.startsWith("http://") || url2.startsWith(
        "https://"
      )) {
        return url2;
      }
      if (url2.indexOf("/pages/" + url2) != 0) {
        url2 = "/pages/" + url2;
      }
      return url2;
    }
    renderImage(path) {
      if (!path)
        return "";
      if (path.indexOf("http") !== -1)
        return path;
      path = `${this.$$basePath}${path}`;
      return path;
    }
    makePhoneCall(e) {
      let phone = "";
      if (e.currentTarget) {
        var dataset = e.currentTarget.dataset;
        phone = dataset.phone;
      } else if (this.isObject(e) && e.phone) {
        phone = e.phone;
      } else {
        phone = e;
      }
      if (phone.indexOf("tel:") !== -1) {
        phone = phone.substr(4);
      }
      uni.makePhoneCall({
        phoneNumber: phone
      });
    }
    navigateTo(url2, params) {
      if (url2.startsWith("tel:")) {
        this.makePhoneCall(url2);
      } else {
        if (url2.startsWith("http://") || url2.startsWith("https://")) {
          const $$url = this.buildUrl("/pages/webview", params);
          return new Promise((resolve, reject) => {
            uni.navigateTo({
              url: $$url,
              success: (res) => resolve(res),
              fail: (res) => reject(res)
            });
          });
        } else {
          if (url2.startsWith("pages/")) {
            url2 = "/" + url2;
          }
          if (!url2.startsWith("/pages/")) {
            url2 = "/pages/" + url2;
          }
          if (!getApp()) {
            uni.reLaunch({
              url: url2
            });
            uni.hideHomeButton();
            return;
          } else if (getApp().globalData && getApp().globalData.tabBar && getApp().globalData.tabBar.indexOf(url2) != -1 || params["tabbar"]) {
            uni.switchTab({
              url: url2
            });
          } else if (params && params["redirect"]) {
            const $$url = this.buildUrl(url2, params);
            uni.redirectTo({
              url: $$url,
              success: (res) => {
                formatAppLog("log", "at common/Tools.js:811", "success" + res);
              },
              fail: (res) => {
                formatAppLog("log", "at common/Tools.js:814", "error" + res);
              }
            });
            uni.hideHomeButton();
          } else {
            const $$url = this.buildUrl(url2, params);
            uni.navigateTo({
              url: $$url,
              success: (res) => {
                formatAppLog("log", "at common/Tools.js:823", "success" + res);
              },
              fail: (res) => {
                formatAppLog("log", "at common/Tools.js:826", "error" + res);
                if (res && res.errMsg && res.errMsg.indexOf("limit") > 0) {
                  uni.redirectTo({
                    url: $$url,
                    success: (res2) => {
                      formatAppLog("log", "at common/Tools.js:831", "success" + res2);
                    },
                    fail: (res2) => {
                      formatAppLog("log", "at common/Tools.js:834", "error" + res2);
                    }
                  });
                }
              }
            });
          }
        }
      }
    }
    padZero(num, targetLength = 2) {
      let str = `${num}`;
      while (str.length < targetLength) {
        str = `0${str}`;
      }
      return str;
    }
    parseTimeData(time) {
      const SECOND = 1e3;
      const MINUTE = 60 * SECOND;
      const HOUR = 60 * MINUTE;
      const DAY = 24 * HOUR;
      const days = Math.floor(time / DAY);
      const hours = Math.floor(time % DAY / HOUR);
      const minutes = Math.floor(time % HOUR / MINUTE);
      const seconds = Math.floor(time % MINUTE / SECOND);
      const milliseconds = Math.floor(time % SECOND);
      return {
        days,
        hours,
        minutes,
        seconds,
        milliseconds
      };
    }
    parseFormat(format2, timeData) {
      let {
        days,
        hours,
        minutes,
        seconds,
        milliseconds
      } = timeData;
      if (format2.indexOf("DD") === -1) {
        hours += days * 24;
      } else {
        format2 = format2.replace("DD", this.padZero(days));
      }
      if (format2.indexOf("HH") === -1) {
        minutes += hours * 60;
      } else {
        format2 = format2.replace("HH", this.padZero(hours));
      }
      if (format2.indexOf("mm") === -1) {
        seconds += minutes * 60;
      } else {
        format2 = format2.replace("mm", this.padZero(minutes));
      }
      if (format2.indexOf("ss") === -1) {
        milliseconds += seconds * 1e3;
      } else {
        format2 = format2.replace("ss", this.padZero(seconds));
      }
      return format2.replace("SSS", this.padZero(milliseconds, 3));
    }
    isSameSecond(time1, time2) {
      return Math.floor(time1 / 1e3) === Math.floor(time2 / 1e3);
    }
    addUnit(value = "auto", unit = "rpx") {
      return this.isNumber(value) ? `${value}${unit}` : value;
    }
    getParent(parent, name = void 0) {
      while (parent) {
        if (parent.$options && parent.$options.name !== name) {
          parent = parent.$parent;
          let tmp = this.getParent(parent, name);
          if (tmp) {
            return tmp;
          }
        } else {
          return parent;
        }
      }
      return false;
    }
    os() {
      return uni.getSystemInfoSync().platform;
    }
    sys() {
      return uni.getSystemInfoSync();
    }
  }
  var SESSION_SUFFIX = "session_com_";
  var SESSION_KEY = "user_session";
  var REDIRECT_SESSION_KEY = "redirect_session";
  var Session = {
    getRedirecturl() {
      return uni.getStorageSync(SESSION_SUFFIX + __config.appid + "_" + REDIRECT_SESSION_KEY) || null;
    },
    setRedirecturl(url2) {
      if (url2 == null) {
        uni.removeStorageSync(SESSION_SUFFIX + __config.appid + "_" + REDIRECT_SESSION_KEY);
      } else {
        uni.setStorageSync(SESSION_SUFFIX + __config.appid + "_" + REDIRECT_SESSION_KEY, url2);
      }
    },
    getUser() {
      return uni.getStorageSync(SESSION_SUFFIX + __config.appid + SESSION_KEY) || null;
    },
    setUser(session) {
      uni.setStorageSync(SESSION_SUFFIX + __config.appid + SESSION_KEY, session);
    },
    clearUser() {
      uni.removeStorageSync(SESSION_KEY + __config.appid);
      const res = uni.getStorageInfoSync();
      res.keys.forEach((key) => {
        if (key.startsWith(SESSION_SUFFIX + __config.appid)) {
          uni.removeStorageSync(key);
        }
      });
    },
    getToken() {
      var userInfo = this.getUser();
      return userInfo ? userInfo.token : null;
    },
    getOpenId() {
      var userInfo = this.getUser();
      return userInfo ? userInfo.openid : null;
    },
    setValue(key, value) {
      if (value == null) {
        uni.removeStorageSync(SESSION_SUFFIX + __config.appid + key);
      } else {
        uni.setStorageSync(SESSION_SUFFIX + __config.appid + key, value);
      }
    },
    getValue(key) {
      return uni.getStorageSync(SESSION_SUFFIX + __config.appid + key) || null;
    }
  };
  class ServiceBase {
    constructor() {
      Object.assign(this, {
        $$basePath: __config.basePath
      });
      this.__init();
    }
    __init() {
      this.__initDefaults();
      this.__initMethods();
    }
    __initInterceptor() {
    }
    __initDefaults() {
      this.suffix = "";
      this.instanceSource = {
        method: [
          "OPTIONS",
          "GET",
          "HEAD",
          "POST",
          "PUT",
          "DELETE",
          "TRACE",
          "CONNECT"
        ]
      };
    }
    __initMethods() {
      for (let key in this.instanceSource) {
        this.instanceSource[key].forEach((method2, index) => {
          this[method2.toLowerCase() + this.suffix] = (...args) => this.__defaultRequest(method2, ...args);
        });
      }
    }
    __defaultRequest(method2 = "", url2 = "", params = {}, header = {}, dataType = "json") {
      const $$header = Object.assign({}, this.setHeaders(), header);
      const $$url = this.setUrl(url2, params);
      if (params.url) {
        params.url = this.setUrl(params.url, params);
      }
      const chainInterceptors = (promise3, interceptors) => {
        for (let i = 0, ii = interceptors.length; i < ii; ) {
          let thenFn = interceptors[i++];
          let rejectFn = interceptors[i++];
          promise3 = promise3.then(thenFn, rejectFn);
        }
        return promise3;
      };
      const $$config = {
        url: $$url,
        data: params,
        header: $$header,
        method: method2,
        dataType
      };
      let requestInterceptors = [];
      let responseInterceptors = [];
      let reversedInterceptors = this.setInterceptors();
      let promise2 = this.__resolve($$config);
      reversedInterceptors.forEach((n, i) => {
        if (n.request || n.requestError) {
          requestInterceptors.push(n.request, n.requestError);
        }
        if (n.response || n.responseError) {
          responseInterceptors.unshift(n.response, n.responseError);
        }
      });
      promise2 = chainInterceptors(promise2, requestInterceptors);
      promise2 = promise2.then(this.__http);
      promise2 = chainInterceptors(promise2, responseInterceptors);
      promise2 = promise2.then((res) => res.data, (err) => err);
      return promise2;
    }
    __http(obj) {
      return new Promise((resolve, reject) => {
        obj.success = (res) => resolve(res);
        obj.fail = (res) => reject(res);
        uni.request(obj);
      });
    }
    __resolve(res) {
      return new Promise((resolve, reject) => {
        resolve(res);
      });
    }
    __reject(res) {
      return new Promise((resolve, reject) => {
        reject(res);
      });
    }
    getPathValue(obj, desc) {
      var arr = desc.split(".");
      while (arr.length) {
        obj = obj[arr.shift()];
      }
      return obj;
    }
    getRestUrl(url2, data) {
      if (!data) {
        return url2;
      } else if (data !== null && typeof data === "object") {
        url2 = url2.replace(/\{\{(.+?)\}\}/g, (_, key) => {
          let name = key.trim();
          return this.getPathValue(data, name);
        });
        url2 = url2.replace(/\{(.+?)\}/g, (_, key) => {
          let name = key.trim();
          return this.getPathValue(data, name);
        });
        return url2;
      }
      return url2;
    }
    setUrl(url2, param) {
      let ishttp = /^http(s)?:\/\/.*/i.test(url2);
      url2 = this.getRestUrl(url2, param);
      if (ishttp) {
        return url2;
      }
      if (url2.startsWith("/") || this.$$basePath.endsWith("/")) {
        return `${this.$$basePath}${this.$$prefix}${url2}`;
      } else {
        return `${this.$$basePath}/${this.$$prefix}${url2}`;
      }
    }
    setHeaders() {
      return {
        "Content-type": "application/x-www-form-urlencoded"
      };
    }
    setInterceptors() {
      this.interceptors = [{
        request: (request) => {
          request.header = request.header || {};
          request.requestTimestamp = new Date().getTime();
          if (Session.getToken()) {
            request.header.Authorization = Session.getToken();
          }
          uni.showNavigationBarLoading();
          if (request.data["redirecturl"]) {
            Session.setRedirecturl(request.data["redirecturl"]);
            delete request.data["redirecturl"];
          }
          delete request.data["loadmsg"];
          return request;
        },
        requestError: (requestError) => {
          uni.hideToast();
          return requestError;
        },
        response: (response) => {
          response.responseTimestamp = new Date().getTime();
          uni.hideNavigationBarLoading();
          if (response.data.code == 401 || response.data.status == 401) {
            Session.clearUser();
            uni.reLaunch({
              url: getApp().globalData.homePage
            });
          }
          return response;
        },
        responseError: (responseError) => {
          uni.hideNavigationBarLoading();
          return responseError;
        }
      }];
      this.__initInterceptor();
      return this.interceptors;
    }
  }
  class Service extends ServiceBase {
    constructor() {
      super();
      this.$$prefix = "";
    }
    __initInterceptor() {
    }
    postData(params, url2) {
      return this.post(url2 || this.$$path.data, params);
    }
    getData(params, url2) {
      return this.get(url2 || this.$$path.data, params);
    }
    saveData(params, url2) {
      return this.post(url2 || this.$$path.save, params);
    }
    delData(params, url2) {
      return this.post(url2 || this.$$path.del, params);
    }
  }
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
        return uni.$u.deepMerge(uni.$u, {
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
            fixed.map((item2) => {
              classes[prefix + this[item2]] = true;
            });
          }
          if (change) {
            change.map((item2) => {
              this[item2] ? classes[prefix + item2] = this[item2] : delete classes[prefix + item2];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
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
      uni.$emit("uOnReachBottom");
    },
    beforeUnmount() {
      if (this.parent && uni.$u.test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index) => {
          if (child === this) {
            childrenList.splice(index, 1);
          }
        });
      }
    }
  };
  function isArray(arr) {
    return Object.prototype.toString.call(arr) === "[object Array]";
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    var o = isArray(obj) ? [] : {};
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
      }
    }
    return o;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (var prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else {
          if (typeof source[prop] !== "object") {
            target[prop] = source[prop];
          } else {
            if (target[prop].concat && source[prop].concat) {
              target[prop] = target[prop].concat(source[prop]);
            } else {
              target[prop] = deepMerge(target[prop], source[prop]);
            }
          }
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1[23456789]\d{9}$/.test(value);
  }
  function url(value) {
    return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
  }
  function date(value) {
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value
    );
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    } else if (value.length === 8) {
      return xreg.test(value);
    } else {
      return false;
    }
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    let reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    let reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (0 === value || isNaN(value))
          return true;
        break;
      case "object":
        if (null === value || value.length === 0)
          return true;
        for (var i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value == "string") {
      try {
        var obj = JSON.parse(value);
        if (typeof obj == "object" && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    } else {
      return Object.prototype.toString.call(value) === "[object Array]";
    }
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function image(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  const test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range,
    rangeLength,
    empty,
    isEmpty: empty,
    jsonString,
    landline,
    object,
    array,
    code,
    image,
    video,
    func,
    promise
  };
  class Request {
    setConfig(customConfig) {
      this.config = deepMerge(this.config, customConfig);
    }
    request(options = {}) {
      if (this.interceptor.request && typeof this.interceptor.request === "function") {
        let interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          return new Promise(() => {
          });
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || "";
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;
      return new Promise((resolve, reject) => {
        options.complete = (response) => {
          uni.hideLoading();
          clearTimeout(this.config.timer);
          this.config.timer = null;
          if (this.config.originalData) {
            if (this.interceptor.response && typeof this.interceptor.response === "function") {
              let resInterceptors = this.interceptor.response(response);
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                reject(response);
              }
            } else {
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (this.interceptor.response && typeof this.interceptor.response === "function") {
                let resInterceptors = this.interceptor.response(response.data);
                if (resInterceptors !== false) {
                  resolve(resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                resolve(response.data);
              }
            } else {
              reject(response);
            }
          }
        };
        options.url = test.url(options.url) ? options.url : this.config.baseUrl + (options.url.indexOf("/") == 0 ? options.url : "/" + options.url);
        if (this.config.showLoading && !this.config.timer) {
          this.config.timer = setTimeout(() => {
            uni.showLoading({
              title: this.config.loadingText,
              mask: this.config.loadingMask
            });
            this.config.timer = null;
          }, this.config.loadingTime);
        }
        uni.request(options);
      });
    }
    constructor() {
      this.config = {
        baseUrl: "",
        header: {},
        method: "POST",
        dataType: "json",
        responseType: "text",
        showLoading: true,
        loadingText: "\u8BF7\u6C42\u4E2D...",
        loadingTime: 800,
        timer: null,
        originalData: false,
        loadingMask: true
      };
      this.interceptor = {
        request: null,
        response: null
      };
      this.get = (url2, data = {}, header = {}) => {
        return this.request({
          method: "GET",
          url: url2,
          header,
          data
        });
      };
      this.post = (url2, data = {}, header = {}) => {
        return this.request({
          url: url2,
          method: "POST",
          header,
          data
        });
      };
      this.put = (url2, data = {}, header = {}) => {
        return this.request({
          url: url2,
          method: "PUT",
          header,
          data
        });
      };
      this.delete = (url2, data = {}, header = {}) => {
        return this.request({
          url: url2,
          method: "DELETE",
          header,
          data
        });
      };
    }
  }
  const http = new Request();
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    let prefix = isPrefix ? "?" : "";
    let _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (let key in data) {
      let value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value.length; i++) {
              _result.push(key + "[" + i + "]=" + value[i]);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(key + "[]=" + _value);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(key + "=" + _value);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(key + "=" + commaStr);
            break;
          default:
            value.forEach((_value) => {
              _result.push(key + "[]=" + _value);
            });
        }
      } else {
        _result.push(key + "=" + value);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        params: {},
        animationType: "pop-in",
        animationDuration: 300,
        intercept: false
      };
      this.route = this.route.bind(this);
    }
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = uni.$u.queryParams(params, false);
        return url2 += "&" + query;
      } else {
        query = uni.$u.queryParams(params);
        return url2 += query;
      }
    }
    async route(options = {}, params = {}) {
      let mergeConfig = {};
      if (typeof options === "string") {
        mergeConfig.url = this.mixinParam(options, params);
        mergeConfig.type = "navigateTo";
      } else {
        mergeConfig = uni.$u.deepClone(options, this.config);
        mergeConfig.url = this.mixinParam(options.url, options.params);
      }
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig.params = params;
      mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig, resolve);
        });
        isNext && this.openPage(mergeConfig);
      } else {
        this.openPage(mergeConfig);
      }
    }
    openPage(config2) {
      const {
        url: url2,
        type: type2,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  const route = new Router().route;
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]")
        throw new TypeError(
          "fillString must be String"
        );
      let str = this;
      if (str.length >= maxLength)
        return String(str);
      let fillLength = maxLength - str.length, times = Math.ceil(fillLength / fillString.length);
      while (times >>= 1) {
        fillString += fillString;
        if (times === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, fmt = "yyyy-mm-dd") {
    if (!dateTime)
      dateTime = Number(new Date());
    if (dateTime.toString().length == 10)
      dateTime *= 1e3;
    let date2 = new Date(dateTime);
    let ret;
    let opt = {
      "y+": date2.getFullYear().toString(),
      "m+": (date2.getMonth() + 1).toString(),
      "d+": date2.getDate().toString(),
      "h+": date2.getHours().toString(),
      "M+": date2.getMinutes().toString(),
      "s+": date2.getSeconds().toString()
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
      }
    }
    return fmt;
  }
  function timeFrom(dateTime = null, format2 = "yyyy-mm-dd") {
    if (!dateTime)
      dateTime = Number(new Date());
    if (dateTime.toString().length == 10)
      dateTime *= 1e3;
    let timestamp = +new Date(Number(dateTime));
    let timer = (Number(new Date()) - timestamp) / 1e3;
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "\u521A\u521A";
        break;
      case (timer >= 300 && timer < 3600):
        tips = parseInt(timer / 60) + "\u5206\u949F\u524D";
        break;
      case (timer >= 3600 && timer < 86400):
        tips = parseInt(timer / 3600) + "\u5C0F\u65F6\u524D";
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = parseInt(timer / 86400) + "\u5929\u524D";
        break;
      default:
        if (format2 === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = parseInt(timer / (86400 * 30)) + "\u4E2A\u6708\u524D";
          } else {
            tips = parseInt(timer / (86400 * 365)) + "\u5E74\u524D";
          }
        } else {
          tips = timeFormat(timestamp, format2);
        }
    }
    return tips;
  }
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    let startRGB = hexToRgb(startColor, false);
    let startR = startRGB[0];
    let startG = startRGB[1];
    let startB = startRGB[2];
    let endRGB = hexToRgb(endColor, false);
    let endR = endRGB[0];
    let endG = endRGB[1];
    let endB = endRGB[2];
    let sR = (endR - startR) / step;
    let sG = (endG - startG) / step;
    let sB = (endB - startB) / step;
    let colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = rgbToHex("rgb(" + Math.round(sR * i + startR) + "," + Math.round(sG * i + startG) + "," + Math.round(sB * i + startB) + ")");
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = sColor.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      let sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      }
      if (!str) {
        return sColorChange;
      } else {
        return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
      }
    } else if (/^(rgb|RGB)/.test(sColor)) {
      let arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    } else {
      return sColor;
    }
  }
  function rgbToHex(rgb) {
    let _this = rgb;
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      let aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = String(hex).length == 1 ? 0 + "" + hex : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    } else if (reg.test(_this)) {
      let aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      } else if (aNum.length === 3) {
        let numHex = "#";
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  function colorToRgba(color2, alpha = 0.3) {
    color2 = rgbToHex(color2);
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = color2.toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        var sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      var sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      }
      return "rgba(" + sColorChange.join(",") + "," + alpha + ")";
    } else {
      return sColor;
    }
  }
  const colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
  };
  function guid(len = 32, firstU = true, radix = null) {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    let uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return "u" + uuid.join("");
    } else {
      return uuid.join("");
    }
  }
  let color = {
    primary: "#19be6b",
    primaryDark: "#18b566",
    primaryDisabled: "#71d5a1",
    primaryLight: "#dbf1e1",
    bgColor: "#f3f4f6",
    info: "#909399",
    infoDark: "#82848a",
    infoDisabled: "#c8c9cc",
    infoLight: "#f4f4f5",
    warning: "#ff9900",
    warningDark: "#f29100",
    warningDisabled: "#fcbd71",
    warningLight: "#fdf6ec",
    error: "#fa3534",
    errorDark: "#dd6161",
    errorDisabled: "#fab6b6",
    errorLight: "#fef0f0",
    success: "#19be6b",
    successDark: "#18b566",
    successDisabled: "#71d5a1",
    successLight: "#dbf1e1",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  function type2icon(type2 = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type2) == -1)
      type2 = "success";
    let iconName = "";
    switch (type2) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  function addUnit(value = "auto", unit = "rpx") {
    value = String(value);
    return test.number(value) ? `${value}${unit}` : value;
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      let gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    } else {
      return 0;
    }
  }
  function trim(str, pos = "both") {
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    } else if (pos == "left") {
      return str.replace(/^\s*/, "");
    } else if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    } else if (pos == "all") {
      return str.replace(/\s+/g, "");
    } else {
      return str;
    }
  }
  function addStyle(customStyle, target = "object") {
    if (test.empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item2 = styleArray[i].split(":");
          style[trim(item2[0])] = trim(item2[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim(string2);
  }
  function toast(title, duration = 1500) {
    uni.showToast({
      title,
      icon: "none",
      duration
    });
  }
  function getParent(name, keys) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        let data = {};
        if (Array.isArray(keys)) {
          keys.map((val) => {
            data[val] = parent[val] ? parent[val] : "";
          });
        } else {
          for (let i in keys) {
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return data;
      }
    }
    return {};
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function os() {
    return uni.getSystemInfoSync().platform;
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function() {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(function() {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let timeoutArr = [];
  let flagArr = [];
  function throttle(fn, time = 500, isImmediate = true, timeoutName = "default") {
    if (!timeoutArr[timeoutName])
      timeoutArr[timeoutName] = null;
    if (isImmediate) {
      if (!flagArr[timeoutName]) {
        flagArr[timeoutName] = true;
        if (typeof fn === "function")
          fn();
        timeoutArr[timeoutName] = setTimeout(() => {
          flagArr[timeoutName] = false;
        }, time);
      }
    } else {
      if (!flagArr[timeoutName]) {
        flagArr[timeoutName] = true;
        timeoutArr[timeoutName] = setTimeout(() => {
          flagArr[timeoutName] = false;
          if (typeof fn === "function")
            fn();
        }, time);
      }
    }
  }
  let version = "1.10.1";
  const config = {
    v: version,
    version,
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ]
  };
  const zIndex = {
    toast: 1000090,
    noNetwork: 1000080,
    popup: 1000075,
    mask: 1000070,
    navbar: 1000020,
    topTips: 1000015,
    sticky: 1000010,
    indexListSticky: 1000005
  };
  function wranning(str) {
    {
      formatAppLog("warn", "at uni_modules/diy-uview-ui/index.js:13", str);
    }
  }
  const $u = {
    queryParams,
    route,
    timeFormat,
    date: timeFormat,
    timeFrom,
    colorGradient: colorGradient$1.colorGradient,
    colorToRgba: colorGradient$1.colorToRgba,
    guid,
    color,
    sys,
    os,
    type2icon,
    randomArray,
    wranning,
    get: http.get,
    post: http.post,
    put: http.put,
    "delete": http.delete,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    test,
    random,
    deepClone,
    deepMerge,
    getParent,
    $parent,
    addUnit,
    trim,
    addStyle,
    type: ["primary", "success", "error", "warning", "info"],
    http,
    toast,
    config,
    zIndex,
    debounce,
    throttle
  };
  uni.$u = $u;
  const install = (Vue2) => {
    Vue2.mixin(mixin);
    Vue2.config.globalProperties.$u = $u;
  };
  const uView = {
    install
  };
  function createApp() {
    const app = vue.createVueApp(App);
    app.config.globalProperties.$tools = new Tools();
    app.config.globalProperties.$http = new Service();
    app.config.globalProperties.$session = Session;
    uni.getSystemInfo({
      success: function(e) {
        app.config.globalProperties.StatusBar = e.statusBarHeight;
        if (e.platform == "android") {
          app.config.globalProperties.CustomBar = e.statusBarHeight + 50;
        } else {
          app.config.globalProperties.CustomBar = e.statusBarHeight + 45;
        }
      }
    });
    app.mixin({
      methods: {
        setCurrentPage,
        Validate,
        setData,
        navigateTo,
        showModal,
        showToast,
        getPickerChildren,
        uploadImage,
        getOption
      }
    });
    app.use(uView);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
