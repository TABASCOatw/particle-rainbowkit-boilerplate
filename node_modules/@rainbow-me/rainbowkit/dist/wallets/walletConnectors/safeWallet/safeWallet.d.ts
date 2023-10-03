import type { SafeConnectorOptions } from 'wagmi/connectors/safe';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface SafeWalletOptions {
    chains: Chain[];
}
export declare const safeWallet: ({ chains, ...options }: SafeWalletOptions & SafeConnectorOptions) => Wallet;
