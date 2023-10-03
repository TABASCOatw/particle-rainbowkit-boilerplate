import type { InjectedConnectorOptions } from '@wagmi/core/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
import { WalletConnectConnectorOptions, WalletConnectLegacyConnectorOptions } from '../../getWalletConnectConnector';
declare global {
    interface Window {
        coin98Wallet: Window['ethereum'];
    }
}
export interface Coin98WalletLegacyOptions {
    projectId?: string;
    chains: Chain[];
    walletConnectVersion: '1';
    walletConnectOptions?: WalletConnectLegacyConnectorOptions;
}
export interface Coin98WalletOptions {
    projectId: string;
    chains: Chain[];
    walletConnectVersion?: '2';
    walletConnectOptions?: WalletConnectConnectorOptions;
}
export declare const coin98Wallet: ({ chains, projectId, walletConnectOptions, walletConnectVersion, ...options }: (Coin98WalletLegacyOptions | Coin98WalletOptions) & InjectedConnectorOptions) => Wallet;
