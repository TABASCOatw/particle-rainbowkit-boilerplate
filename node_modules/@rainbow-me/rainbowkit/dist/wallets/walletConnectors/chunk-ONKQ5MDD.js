"use client";
// src/wallets/walletConnectors/xdefiWallet/xdefiWallet.ts
import { InjectedConnector } from "wagmi/connectors/injected";
var xdefiWallet = ({
  chains,
  ...options
}) => {
  const isInstalled = typeof window !== "undefined" && typeof (window == null ? void 0 : window.xfi) !== "undefined";
  return {
    id: "xdefi",
    name: "XDEFI Wallet",
    installed: isInstalled,
    iconUrl: async () => (await import("./xdefiWallet-YKADIIDU.js")).default,
    iconBackground: "#fff",
    downloadUrls: {
      chrome: "https://chrome.google.com/webstore/detail/xdefi-wallet/hmeobnfnfcmdkdcmlblgagmfpfboieaf",
      browserExtension: "https://xdefi.io"
    },
    createConnector: () => ({
      connector: new InjectedConnector({
        chains,
        options: {
          getProvider: () => {
            var _a;
            return isInstalled ? (_a = window.xfi) == null ? void 0 : _a.ethereum : void 0;
          },
          ...options
        }
      }),
      extension: {
        instructions: {
          learnMoreUrl: "https://xdefi.io/support-categories/xdefi-wallet/",
          steps: [
            {
              description: "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet.",
              step: "install",
              title: "Install the XDEFI Wallet extension"
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
  xdefiWallet
};
