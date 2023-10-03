declare const silenceLogout: ({ token, projectUuid, projectKey, }: {
    token: string;
    projectUuid: string;
    projectKey: string;
}) => Promise<boolean>;
export default silenceLogout;
