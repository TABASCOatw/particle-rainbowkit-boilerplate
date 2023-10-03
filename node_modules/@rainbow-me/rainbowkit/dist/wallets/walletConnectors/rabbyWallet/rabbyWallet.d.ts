import type { InjectedConnectorOptions } from '@wagmi/core/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface RabbyWalletOptions {
    chains: Chain[];
}
export declare const rabbyWallet: ({ chains, ...options }: RabbyWalletOptions & InjectedConnectorOptions) => Wallet;
