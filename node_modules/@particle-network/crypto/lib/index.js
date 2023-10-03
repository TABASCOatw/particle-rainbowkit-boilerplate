"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  urlCrypto: () => url_crypto_exports,
  uuidv4: () => uuidv4_default
});
module.exports = __toCommonJS(src_exports);

// src/uuidv4.ts
var import_uuid = require("uuid");
var uuidv4 = () => (0, import_uuid.v4)().toString();
var uuidv4_default = uuidv4;

// src/url-crypto.ts
var url_crypto_exports = {};
__export(url_crypto_exports, {
  decryptData: () => decryptData,
  decryptUrlParam: () => decryptUrlParam,
  encryptData: () => encryptData,
  encryptUrlParam: () => encryptUrlParam
});
var import_crypto_js = __toESM(require("crypto-js"), 1);
var import_uuid2 = require("uuid");
function encryptUrlParam(params = {}, encoding = "base64") {
  const secretKey = (0, import_uuid2.v4)().replace(/-/g, "").toUpperCase();
  const cipherText = encryptData(params, secretKey, encoding);
  return cipherText + secretKey;
}
function encryptData(data = {}, secretKey, encoding = "base64") {
  if (typeof data !== "string") {
    data = JSON.stringify(data);
  }
  const keyWA = import_crypto_js.default.enc.Utf8.parse(secretKey);
  const cipherText = import_crypto_js.default.AES.encrypt(data, keyWA, {
    mode: import_crypto_js.default.mode.ECB,
    algorithm: import_crypto_js.default.algo.AES,
    padding: import_crypto_js.default.pad.Pkcs7,
    formatter: import_crypto_js.default.format.Hex
  }).ciphertext;
  if (encoding === "base64") {
    return encodeURIComponent(import_crypto_js.default.enc.Base64.stringify(cipherText));
  } else {
    return import_crypto_js.default.enc.Hex.stringify(cipherText).toUpperCase();
  }
}
function decryptUrlParam(params, encoding = "base64") {
  if (params) {
    const secretKey = params.slice(-32);
    const data = params.slice(0, params.length - 32);
    return decryptData(data, secretKey, encoding);
  } else {
    return "";
  }
}
function decryptData(params, secretKey, encoding = "base64") {
  let dec;
  if (encoding === "base64") {
    dec = import_crypto_js.default.enc.Base64.parse(params);
  } else {
    dec = import_crypto_js.default.enc.Hex.parse(params);
  }
  const keyWA = import_crypto_js.default.enc.Utf8.parse(secretKey);
  const bytes = import_crypto_js.default.AES.decrypt(
    import_crypto_js.default.lib.CipherParams.create({
      ciphertext: dec,
      key: keyWA,
      algorithm: import_crypto_js.default.algo.AES,
      padding: import_crypto_js.default.pad.Pkcs7,
      formatter: import_crypto_js.default.format.Hex
    }),
    keyWA,
    {
      mode: import_crypto_js.default.mode.ECB
    }
  );
  return bytes.toString(import_crypto_js.default.enc.Utf8);
}
//# sourceMappingURL=index.js.map
