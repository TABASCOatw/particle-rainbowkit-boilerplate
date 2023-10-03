import type { InjectedConnectorOptions } from '@wagmi/core/connectors/injected';
import { InjectedConnector } from 'wagmi/connectors/injected';
import type { InjectedProviderFlags } from 'wagmi/window';
import type { Chain } from '../components/RainbowKitProvider/RainbowKitChainContext';
export declare function hasInjectedProvider(flag: keyof InjectedProviderFlags): boolean;
export declare function getInjectedConnector({ chains, flag, options, }: {
    flag: keyof InjectedProviderFlags;
    chains: Chain[];
    options?: InjectedConnectorOptions;
}): InjectedConnector;
