import type { MetaMaskConnectorOptions } from '@wagmi/core/connectors/metaMask';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
import type { WalletConnectConnectorOptions, WalletConnectLegacyConnectorOptions } from '../../getWalletConnectConnector';
export interface MetaMaskWalletLegacyOptions {
    projectId?: string;
    chains: Chain[];
    walletConnectVersion: '1';
    walletConnectOptions?: WalletConnectLegacyConnectorOptions;
}
export interface MetaMaskWalletOptions {
    projectId: string;
    chains: Chain[];
    walletConnectVersion?: '2';
    walletConnectOptions?: WalletConnectConnectorOptions;
}
export declare const metaMaskWallet: ({ chains, projectId, walletConnectOptions, walletConnectVersion, ...options }: (MetaMaskWalletLegacyOptions | MetaMaskWalletOptions) & MetaMaskConnectorOptions) => Wallet;
