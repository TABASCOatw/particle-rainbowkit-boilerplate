"use client";
// src/wallets/walletConnectors/frameWallet/frameWallet.ts
import { InjectedConnector } from "wagmi/connectors/injected";
var frameWallet = ({
  chains,
  ...options
}) => {
  var _a;
  return {
    id: "frame",
    name: "Frame",
    installed: typeof window !== "undefined" && typeof window.ethereum !== "undefined" && (window.ethereum.isFrame === true || !!((_a = window.ethereum.providers) == null ? void 0 : _a.find((p) => p.isFrame === true))),
    iconUrl: async () => (await import("./frameWallet-J2WUL2NQ.js")).default,
    iconBackground: "#121C20",
    downloadUrls: {
      browserExtension: "https://frame.sh/"
    },
    createConnector: () => ({
      connector: new InjectedConnector({
        chains,
        options
      }),
      extension: {
        instructions: {
          learnMoreUrl: "https://docs.frame.sh/docs/Getting%20Started/Installation/",
          steps: [
            {
              description: "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
              step: "install",
              title: "Install Frame & the companion extension"
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
    })
  };
};

export {
  frameWallet
};
