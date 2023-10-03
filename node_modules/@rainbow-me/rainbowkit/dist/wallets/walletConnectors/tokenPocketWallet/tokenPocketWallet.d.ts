import type { InjectedConnectorOptions } from '@wagmi/core/connectors/injected';
import type { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import type { Wallet } from '../../Wallet';
import type { WalletConnectConnectorOptions, WalletConnectLegacyConnectorOptions } from '../../getWalletConnectConnector';
export interface TokenPocketWalletLegacyOptions {
    projectId?: string;
    chains: Chain[];
    walletConnectVersion: '1';
    walletConnectOptions?: WalletConnectLegacyConnectorOptions;
}
export interface TokenPocketWalletOptions {
    projectId: string;
    chains: Chain[];
    walletConnectVersion?: '2';
    walletConnectOptions?: WalletConnectConnectorOptions;
}
export declare const tokenPocketWallet: ({ chains, projectId, walletConnectOptions, walletConnectVersion, }: (TokenPocketWalletLegacyOptions | TokenPocketWalletOptions) & InjectedConnectorOptions) => Wallet;
