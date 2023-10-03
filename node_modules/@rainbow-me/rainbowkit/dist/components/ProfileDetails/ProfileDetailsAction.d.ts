import React from 'react';
interface ProfileDetailsActionProps {
    label: string;
    action?: () => void;
    icon: JSX.Element;
    url?: string;
    testId?: string;
}
export declare function ProfileDetailsAction({ action, icon, label, testId, url, }: ProfileDetailsActionProps): React.JSX.Element;
export {};
