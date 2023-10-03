"use client";
// src/wallets/walletConnectors/mewWallet/mewWallet.ts
import { InjectedConnector } from "wagmi/connectors/injected";
var mewWallet = ({
  chains,
  ...options
}) => {
  var _a;
  const isMewWalletInjected = typeof window !== "undefined" && Boolean((_a = window.ethereum) == null ? void 0 : _a.isMEWwallet);
  return {
    id: "mew",
    name: "MEW wallet",
    iconUrl: async () => (await import("./mewWallet-4ZVF6HCJ.js")).default,
    iconBackground: "#fff",
    installed: isMewWalletInjected,
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=com.myetherwallet.mewwallet&referrer=utm_source%3Drainbow",
      ios: "https://apps.apple.com/app/apple-store/id1464614025?pt=118781877&mt=8&ct=rainbow",
      mobile: "https://mewwallet.com",
      qrCode: "https://mewwallet.com"
    },
    createConnector: () => {
      return {
        connector: new InjectedConnector({
          chains,
          options
        })
      };
    }
  };
};

export {
  mewWallet
};
