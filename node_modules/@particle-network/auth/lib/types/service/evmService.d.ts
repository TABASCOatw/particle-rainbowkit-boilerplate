import type { MessageTypes, SignTypedDataVersion, TypedDataV1, TypedMessage } from '@metamask/eth-sig-util';
import { Auth } from '../auth';
import { EIP1559TxData, PrefixedHexString, TxData } from '../types';
declare class EvmService {
    private auth;
    constructor(auth: Auth);
    private assertEVM;
    sendTransaction(transaction: TxData | EIP1559TxData): Promise<PrefixedHexString>;
    personalSign(message: PrefixedHexString): Promise<PrefixedHexString>;
    personalSignUniq(message: PrefixedHexString): Promise<PrefixedHexString>;
    signTypedData<V extends SignTypedDataVersion, T extends MessageTypes>({ data, version, }: {
        data: V extends 'V1' ? TypedDataV1 : TypedMessage<T>;
        version: V;
    }): Promise<PrefixedHexString>;
    signTypedDataUniq<T extends MessageTypes>(data: TypedMessage<T>): Promise<PrefixedHexString>;
    getAddress(): Promise<PrefixedHexString | undefined>;
    getRpcUrl(): string;
}
export default EvmService;
