"use client";
import {
  isIOS
} from "./chunk-ZOLACFTK.js";

// src/wallets/walletConnectors/dawnWallet/dawnWallet.ts
import { InjectedConnector } from "wagmi/connectors/injected";
var dawnWallet = ({
  chains,
  ...options
}) => ({
  id: "dawn",
  name: "Dawn",
  iconUrl: async () => (await import("./dawnWallet-MN7QMTX3.js")).default,
  iconBackground: "#000000",
  installed: typeof window !== "undefined" && typeof window.ethereum !== "undefined" && window.ethereum.isDawn,
  hidden: () => !isIOS(),
  downloadUrls: {
    ios: "https://apps.apple.com/us/app/dawn-ethereum-wallet/id1673143782",
    mobile: "https://dawnwallet.xyz"
  },
  createConnector: () => ({
    connector: new InjectedConnector({
      chains,
      options
    })
  })
});

export {
  dawnWallet
};
