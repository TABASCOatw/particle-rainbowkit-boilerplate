import type { InjectedConnectorOptions } from '@wagmi/core/dist/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface BraveWalletOptions {
    chains: Chain[];
}
export declare const braveWallet: ({ chains, ...options }: BraveWalletOptions & InjectedConnectorOptions) => Wallet;
