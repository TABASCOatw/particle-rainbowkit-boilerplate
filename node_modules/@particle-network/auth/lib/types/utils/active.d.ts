import { ActiveAction, BI } from '@particle-network/analytics';
import { UserInfo } from '../types';
export declare function particleActive(bi: BI, chainId: number, walletAddress: string, userInfo: UserInfo, action: ActiveAction): void;
