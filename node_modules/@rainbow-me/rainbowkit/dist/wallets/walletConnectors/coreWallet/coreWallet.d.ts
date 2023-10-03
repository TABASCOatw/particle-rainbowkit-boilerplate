import type { InjectedConnectorOptions } from '@wagmi/core/connectors/injected';
import { WindowProvider } from 'wagmi/dist/window';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
import { WalletConnectConnectorOptions, WalletConnectLegacyConnectorOptions } from '../../getWalletConnectConnector';
declare global {
    interface Window {
        evmproviders?: Record<string, WindowProvider>;
        avalanche?: WindowProvider;
    }
}
export interface CoreWalletLegacyOptions {
    projectId?: string;
    chains: Chain[];
    walletConnectVersion: '1';
    walletConnectOptions?: WalletConnectLegacyConnectorOptions;
}
export interface CoreWalletOptions {
    projectId: string;
    chains: Chain[];
    walletConnectVersion?: '2';
    walletConnectOptions?: WalletConnectConnectorOptions;
}
export declare const coreWallet: ({ chains, projectId, walletConnectOptions, walletConnectVersion, ...options }: (CoreWalletLegacyOptions | CoreWalletOptions) & InjectedConnectorOptions) => Wallet;
