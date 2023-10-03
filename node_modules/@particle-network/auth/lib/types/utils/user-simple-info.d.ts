import type { SecurityAccount } from '../types';
declare const userSimpleInfo: ({ token, projectUuid, projectKey, projectAppUuid, }: {
    token: string;
    projectUuid: string;
    projectKey: string;
    projectAppUuid: string;
}) => Promise<SecurityAccount>;
export default userSimpleInfo;
