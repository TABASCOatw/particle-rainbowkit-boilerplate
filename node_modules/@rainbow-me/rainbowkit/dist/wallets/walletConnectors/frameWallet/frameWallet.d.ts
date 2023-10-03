import type { InjectedConnectorOptions } from '@wagmi/core/dist/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface FrameWalletOptions {
    chains: Chain[];
}
export declare const frameWallet: ({ chains, ...options }: FrameWalletOptions & InjectedConnectorOptions) => Wallet;
