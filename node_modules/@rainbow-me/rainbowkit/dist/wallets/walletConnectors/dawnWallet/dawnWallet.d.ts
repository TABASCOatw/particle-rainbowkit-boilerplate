import type { InjectedConnectorOptions } from '@wagmi/core/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface DawnWalletOptions {
    chains: Chain[];
}
export declare const dawnWallet: ({ chains, ...options }: DawnWalletOptions & InjectedConnectorOptions) => Wallet;
