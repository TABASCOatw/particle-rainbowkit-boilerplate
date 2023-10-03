import type { InjectedConnectorOptions } from '@wagmi/core/dist/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
import { WalletConnectConnectorOptions, WalletConnectLegacyConnectorOptions } from '../../getWalletConnectConnector';
import { InjectedWalletOptions } from '../injectedWallet/injectedWallet';
export interface BifrostWalletLegacyOptions {
    projectId?: string;
    chains: Chain[];
    walletConnectVersion: '1';
    walletConnectOptions?: WalletConnectLegacyConnectorOptions;
}
export interface BifrostWalletOptions {
    projectId: string;
    chains: Chain[];
    walletConnectVersion?: '2';
    walletConnectOptions?: WalletConnectConnectorOptions;
}
export declare const bifrostWallet: ({ chains, projectId, walletConnectOptions, walletConnectVersion, ...options }: (BifrostWalletOptions | BifrostWalletLegacyOptions) & InjectedWalletOptions & InjectedConnectorOptions) => Wallet;
