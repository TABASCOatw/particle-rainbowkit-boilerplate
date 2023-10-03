"use client";
// src/wallets/walletConnectors/safeheronWallet/safeheronWallet.ts
import { InjectedConnector } from "wagmi/connectors/injected";
var safeheronWallet = ({
  chains,
  ...options
}) => ({
  id: "safeheron",
  name: "Safeheron",
  installed: typeof window !== "undefined" && typeof window.safeheron !== "undefined" && window.safeheron.isSafeheron === true,
  iconUrl: async () => (await import("./safeheronWallet-YBMFXEUH.js")).default,
  iconBackground: "#fff",
  downloadUrls: {
    chrome: "https://chrome.google.com/webstore/detail/safeheron/aiaghdjafpiofpainifbgfgjfpclngoh",
    browserExtension: "https://www.safeheron.com/"
  },
  createConnector: () => ({
    connector: new InjectedConnector({
      chains,
      options: {
        getProvider: () => typeof window !== "undefined" ? window.safeheron : void 0,
        ...options
      }
    }),
    extension: {
      instructions: {
        learnMoreUrl: "https://www.safeheron.com/",
        steps: [
          {
            description: "We recommend pinning Safeheron to your taskbar for quicker access to your wallet.",
            step: "install",
            title: "Install the Core extension"
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
});

export {
  safeheronWallet
};
