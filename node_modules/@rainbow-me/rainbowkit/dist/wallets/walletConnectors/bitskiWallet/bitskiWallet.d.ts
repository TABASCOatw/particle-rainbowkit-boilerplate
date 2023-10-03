import type { InjectedConnectorOptions } from '@wagmi/core/dist/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface BitskiWalletOptions {
    chains: Chain[];
}
export declare const bitskiWallet: ({ chains, ...options }: BitskiWalletOptions & InjectedConnectorOptions) => Wallet;
