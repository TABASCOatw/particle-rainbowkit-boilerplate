"use client";
// src/wallets/walletConnectors/tahoWallet/tahoWallet.ts
import { InjectedConnector } from "wagmi/connectors/injected";
var tahoWallet = ({
  chains,
  ...options
}) => ({
  id: "taho",
  name: "Taho",
  iconBackground: "#d08d57",
  iconUrl: async () => (await import("./tahoWallet-BYONWLHD.js")).default,
  downloadUrls: {
    chrome: "https://chrome.google.com/webstore/detail/taho/eajafomhmkipbjmfmhebemolkcicgfmd",
    browserExtension: "https://taho.xyz"
  },
  installed: typeof window !== "undefined" && typeof window.tally !== "undefined" && window["tally"] ? true : void 0,
  createConnector: () => {
    return {
      connector: new InjectedConnector({
        chains,
        options: {
          getProvider: () => {
            const getTaho = (tally) => (tally == null ? void 0 : tally.isTally) ? tally : void 0;
            if (typeof window === "undefined")
              return;
            return getTaho(window.tally);
          },
          ...options
        }
      }),
      extension: {
        instructions: {
          learnMoreUrl: "https://tahowallet.notion.site/Taho-Knowledge-Base-4d95ed5439c64d6db3d3d27abf1fdae5",
          steps: [
            {
              description: "We recommend pinning Taho to your taskbar for quicker access to your wallet.",
              step: "install",
              title: "Install the Taho extension"
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
  }
});

export {
  tahoWallet
};
