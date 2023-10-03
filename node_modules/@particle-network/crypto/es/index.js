var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/uuidv4.ts
import { v4 } from "uuid";
var uuidv4 = () => v4().toString();
var uuidv4_default = uuidv4;

// src/url-crypto.ts
var url_crypto_exports = {};
__export(url_crypto_exports, {
  decryptData: () => decryptData,
  decryptUrlParam: () => decryptUrlParam,
  encryptData: () => encryptData,
  encryptUrlParam: () => encryptUrlParam
});
import CryptoJS from "crypto-js";
import { v4 as uuidv42 } from "uuid";
function encryptUrlParam(params = {}, encoding = "base64") {
  const secretKey = uuidv42().replace(/-/g, "").toUpperCase();
  const cipherText = encryptData(params, secretKey, encoding);
  return cipherText + secretKey;
}
function encryptData(data = {}, secretKey, encoding = "base64") {
  if (typeof data !== "string") {
    data = JSON.stringify(data);
  }
  const keyWA = CryptoJS.enc.Utf8.parse(secretKey);
  const cipherText = CryptoJS.AES.encrypt(data, keyWA, {
    mode: CryptoJS.mode.ECB,
    algorithm: CryptoJS.algo.AES,
    padding: CryptoJS.pad.Pkcs7,
    formatter: CryptoJS.format.Hex
  }).ciphertext;
  if (encoding === "base64") {
    return encodeURIComponent(CryptoJS.enc.Base64.stringify(cipherText));
  } else {
    return CryptoJS.enc.Hex.stringify(cipherText).toUpperCase();
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
    dec = CryptoJS.enc.Base64.parse(params);
  } else {
    dec = CryptoJS.enc.Hex.parse(params);
  }
  const keyWA = CryptoJS.enc.Utf8.parse(secretKey);
  const bytes = CryptoJS.AES.decrypt(
    CryptoJS.lib.CipherParams.create({
      ciphertext: dec,
      key: keyWA,
      algorithm: CryptoJS.algo.AES,
      padding: CryptoJS.pad.Pkcs7,
      formatter: CryptoJS.format.Hex
    }),
    keyWA,
    {
      mode: CryptoJS.mode.ECB
    }
  );
  return bytes.toString(CryptoJS.enc.Utf8);
}
export {
  url_crypto_exports as urlCrypto,
  uuidv4_default as uuidv4
};
//# sourceMappingURL=index.js.map
