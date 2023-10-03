import type { InjectedConnectorOptions } from '@wagmi/core/dist/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface InjectedWalletOptions {
    chains: Chain[];
}
export declare const injectedWallet: ({ chains, ...options }: InjectedWalletOptions & InjectedConnectorOptions) => Wallet;
