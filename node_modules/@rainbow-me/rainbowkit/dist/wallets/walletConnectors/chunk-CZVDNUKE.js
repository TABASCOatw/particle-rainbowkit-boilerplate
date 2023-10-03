"use client";
// src/wallets/walletConnectors/oneKeyWallet/oneKeyWallet.ts
import { InjectedConnector } from "wagmi/connectors/injected";
var oneKeyWallet = ({ chains }) => {
  var _a;
  const provider = typeof window !== "undefined" && ((_a = window["$onekey"]) == null ? void 0 : _a.ethereum);
  const isOnekeyInjected = Boolean(provider);
  return {
    createConnector: () => {
      const connector = new InjectedConnector({
        chains,
        options: {
          getProvider: () => provider
        }
      });
      return {
        connector,
        extension: {
          instructions: {
            learnMoreUrl: "https://help.onekey.so/hc/en-us/categories/360000170236",
            steps: [
              {
                description: "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet.",
                step: "install",
                title: "Install the OneKey Wallet extension"
              },
              {
                description: "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
                step: "create",
                title: "Create or Import a Wallet"
              },
              {
                description: "Once you set up your wallet, click below to refresh the browser and load up the extension.",
                step: "refresh",
                title: "Refresh your browser"
              }
            ]
          }
        }
      };
    },
    downloadUrls: {
      android: "https://play.google.com/store/apps/details?id=so.onekey.app.wallet",
      browserExtension: "https://www.onekey.so/download/",
      chrome: "https://chrome.google.com/webstore/detail/onekey/jnmbobjmhlngoefaiojfljckilhhlhcj",
      edge: "https://microsoftedge.microsoft.com/addons/detail/onekey/obffkkagpmohennipjokmpllocnlndac",
      ios: "https://apps.apple.com/us/app/onekey-open-source-wallet/id1609559473",
      mobile: "https://www.onekey.so/download/",
      qrCode: "https://www.onekey.so/download/"
    },
    iconAccent: "#00B812",
    iconBackground: "#fff",
    iconUrl: async () => (await import("./oneKeyWallet-FEYKOAOJ.js")).default,
    id: "onekey",
    installed: isOnekeyInjected,
    name: "OneKey"
  };
};

export {
  oneKeyWallet
};
