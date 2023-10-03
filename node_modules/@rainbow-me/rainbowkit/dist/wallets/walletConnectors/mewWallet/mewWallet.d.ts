import type { InjectedConnectorOptions } from '@wagmi/core/dist/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface MewWalletOptions {
    chains: Chain[];
}
export declare const mewWallet: ({ chains, ...options }: MewWalletOptions & InjectedConnectorOptions) => Wallet;
