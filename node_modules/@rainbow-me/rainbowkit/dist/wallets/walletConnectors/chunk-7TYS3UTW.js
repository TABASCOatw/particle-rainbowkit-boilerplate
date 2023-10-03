"use client";
// src/wallets/walletConnectors/injectedWallet/injectedWallet.ts
import { InjectedConnector } from "wagmi/connectors/injected";
var injectedWallet = ({
  chains,
  ...options
}) => ({
  id: "injected",
  name: "Browser Wallet",
  iconUrl: async () => (await import("./injectedWallet-EUKDEAIU.js")).default,
  iconBackground: "#fff",
  hidden: ({ wallets }) => wallets.some((wallet) => wallet.installed && wallet.name === wallet.connector.name && (wallet.connector instanceof InjectedConnector || wallet.id === "coinbase")),
  createConnector: () => ({
    connector: new InjectedConnector({
      chains,
      options
    })
  })
});

export {
  injectedWallet
};
