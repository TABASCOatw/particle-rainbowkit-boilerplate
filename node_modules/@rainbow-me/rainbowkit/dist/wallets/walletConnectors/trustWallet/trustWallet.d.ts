import type { InjectedConnectorOptions } from '@wagmi/core/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
import type { WalletConnectConnectorOptions, WalletConnectLegacyConnectorOptions } from '../../getWalletConnectConnector';
declare global {
    interface Window {
        trustwallet: Window['ethereum'];
    }
}
export interface TrustWalletLegacyOptions {
    projectId?: string;
    chains: Chain[];
    walletConnectVersion: '1';
    walletConnectOptions?: WalletConnectLegacyConnectorOptions;
}
export interface TrustWalletOptions {
    projectId: string;
    chains: Chain[];
    walletConnectVersion?: '2';
    walletConnectOptions?: WalletConnectConnectorOptions;
}
export declare const trustWallet: ({ chains, projectId, walletConnectOptions, walletConnectVersion, ...options }: (TrustWalletLegacyOptions | TrustWalletOptions) & InjectedConnectorOptions) => Wallet;
