import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
import type { WalletConnectConnectorOptions, WalletConnectLegacyConnectorOptions } from '../../getWalletConnectConnector';
export interface WalletConnectWalletLegacyOptions {
    projectId?: string;
    chains: Chain[];
    version: '1';
    options?: WalletConnectLegacyConnectorOptions;
}
export interface WalletConnectWalletOptions {
    projectId: string;
    chains: Chain[];
    version?: '2';
    options?: WalletConnectConnectorOptions;
}
export declare const walletConnectWallet: ({ chains, options, projectId, version, }: WalletConnectWalletLegacyOptions | WalletConnectWalletOptions) => Wallet;
