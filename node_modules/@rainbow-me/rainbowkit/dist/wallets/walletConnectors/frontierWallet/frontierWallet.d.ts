import type { InjectedConnectorOptions } from '@wagmi/core';
import type { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import type { Wallet } from '../../Wallet';
import type { WalletConnectConnectorOptions, WalletConnectLegacyConnectorOptions } from '../../getWalletConnectConnector';
declare global {
    interface Window {
        frontier: any;
    }
}
export interface FrontierWalletLegacyOptions {
    projectId?: string;
    chains: Chain[];
    walletConnectVersion: '1';
    walletConnectOptions?: WalletConnectLegacyConnectorOptions;
}
export interface FrontierWalletOptions {
    projectId: string;
    chains: Chain[];
    walletConnectVersion?: '2';
    walletConnectOptions?: WalletConnectConnectorOptions;
}
export declare const frontierWallet: ({ chains, projectId, walletConnectOptions, walletConnectVersion, ...options }: (FrontierWalletLegacyOptions | FrontierWalletOptions) & InjectedConnectorOptions) => Wallet;
