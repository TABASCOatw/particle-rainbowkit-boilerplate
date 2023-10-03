import type { InjectedConnectorOptions } from '@wagmi/core/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface PhantomWalletOptions {
    chains: Chain[];
}
export declare const phantomWallet: ({ chains, ...options }: PhantomWalletOptions & InjectedConnectorOptions) => Wallet;
