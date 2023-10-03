import type { InjectedConnectorOptions } from '@wagmi/core/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
import type { WalletConnectConnectorOptions } from '../../getWalletConnectConnector';
export interface FoxWalletOptions {
    projectId: string;
    chains: Chain[];
    walletConnectVersion?: '2';
    walletConnectOptions?: WalletConnectConnectorOptions;
}
export declare const foxWallet: ({ chains, projectId, walletConnectOptions, walletConnectVersion, ...options }: FoxWalletOptions & InjectedConnectorOptions) => Wallet;
