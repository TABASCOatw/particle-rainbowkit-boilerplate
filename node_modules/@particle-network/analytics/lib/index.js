"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AcitveLoginType: () => AcitveLoginType,
  ActiveAction: () => ActiveAction,
  BI: () => BI,
  RecordType: () => RecordType
});
module.exports = __toCommonJS(src_exports);

// src/bi.ts
var import_uuid = require("uuid");
var AcitveLoginType = /* @__PURE__ */ ((AcitveLoginType2) => {
  AcitveLoginType2["PARTICLE"] = "particle";
  AcitveLoginType2["PRIVATE_KEY"] = "private_key";
  AcitveLoginType2["METAMASK"] = "metamask";
  AcitveLoginType2["RAINBOW"] = "rainbow";
  AcitveLoginType2["TRUST"] = "trust";
  AcitveLoginType2["IM_TOKEN"] = "im_token";
  AcitveLoginType2["BIT_KEEP"] = "bit_keep";
  AcitveLoginType2["PHANTOM"] = "phantom";
  AcitveLoginType2["OTHER"] = "other";
  return AcitveLoginType2;
})(AcitveLoginType || {});
var ActiveAction = /* @__PURE__ */ ((ActiveAction2) => {
  ActiveAction2["SIGN"] = "sign";
  ActiveAction2["LOGIN"] = "login";
  ActiveAction2["OPEN"] = "open";
  ActiveAction2["OPEN_WALLET"] = "open_wallet";
  return ActiveAction2;
})(ActiveAction || {});
var RecordType = /* @__PURE__ */ ((RecordType2) => {
  RecordType2["PAGE_LOGIN_BUTTON_CLICK"] = "page_login_button_click";
  RecordType2["PAGE_LOGIN_BUTTON_CLICK_SUCCESS"] = "page_login_button_click_success";
  RecordType2["PAGE_LOGIN_BUTTON_CLICK_FAILURE"] = "page_login_button_click_failure";
  RecordType2["PAGE_LOGIN_SUCCESS_BACK"] = "page_login_success_back";
  RecordType2["PAGE_SIGN_CONFIRM_BUTTON_CLICK"] = "page_sign_confirm_button_click";
  RecordType2["PAGE_SIGN_CONFIRM_BUTTON_CLICK_SUCCESS"] = "page_sign_confirm_button_click_success";
  RecordType2["PAGE_SIGN_CONFIRM_BUTTON_CLICK_FAILURE"] = "page_sign_confirm_button_click_failure";
  RecordType2["PAGE_SETTING_MASTER_PASSWORD_ENTER"] = "page_setting_master_password_enter";
  RecordType2["PAGE_SETTING_MASTER_PASSWORD_SET"] = "page_setting_master_password_set";
  RecordType2["PAGE_SETTING_MASTER_PASSWORD_CHANGE"] = "page_setting_master_password_change";
  RecordType2["PAGE_MASTER_PASSWORD_VERIFY"] = "page_master_password_verify";
  RecordType2["PAGE_MASTER_PASSWORD_VERIFY_SUCCESS"] = "page_master_password_verify_success";
  return RecordType2;
})(RecordType || {});
var BI = class {
  constructor(options) {
    this.options = options;
  }
  active(params) {
    const timestamp = Math.round(new Date().getTime() / 1e3);
    const randomStr = (0, import_uuid.v4)();
    const { project_uuid, project_key, project_app_uuid } = this.options.project_config;
    const queryParams = {
      timestamp,
      random_str: randomStr,
      project_app_uuid,
      projectUuid: project_uuid,
      projectKey: project_key
    };
    let url = this.options.sdk_api_domain + "/active?";
    Object.keys(queryParams).forEach((key) => {
      url += `${key}=${encodeURI(queryParams[key])}&`;
    });
    url = url.slice(0, -1);
    navigator.sendBeacon(
      url,
      new Blob([new URLSearchParams(params).toString()], {
        type: "application/x-www-form-urlencoded"
      })
    );
  }
  records(params) {
    try {
      const timestamp = Math.round(new Date().getTime() / 1e3);
      const randomStr = (0, import_uuid.v4)();
      const { project_uuid, project_key, project_app_uuid } = this.options.project_config;
      const queryParams = {
        timestamp,
        random_str: randomStr,
        project_app_uuid,
        projectUuid: project_uuid,
        projectKey: project_key
      };
      let url = this.options.sdk_api_domain + "/records?";
      Object.keys(queryParams).forEach((key) => {
        url += `${key}=${encodeURI(queryParams[key])}&`;
      });
      url = url.slice(0, -1);
      navigator.sendBeacon(
        url,
        new Blob([new URLSearchParams(params).toString()], {
          type: "application/x-www-form-urlencoded"
        })
      );
    } catch (error) {
    }
  }
};
//# sourceMappingURL=index.js.map
