export declare enum AcitveLoginType {
    PARTICLE = "particle",
    PRIVATE_KEY = "private_key",
    METAMASK = "metamask",
    RAINBOW = "rainbow",
    TRUST = "trust",
    IM_TOKEN = "im_token",
    BIT_KEEP = "bit_keep",
    PHANTOM = "phantom",
    OTHER = "other"
}
export declare enum ActiveAction {
    SIGN = "sign",
    LOGIN = "login",
    OPEN = "open",
    OPEN_WALLET = "open_wallet"
}
export interface BiOptions {
    sdk_api_domain: string;
    device_id: string;
    sdk_version: string;
    project_config: {
        project_uuid: string;
        project_key: string;
        project_app_uuid: string;
    };
}
export interface SendActiveParams {
    chain_id: number;
    identity: string;
    login_type: AcitveLoginType;
    action: ActiveAction;
    wallet_address: string;
    user_info?: string;
}
export declare enum RecordType {
    PAGE_LOGIN_BUTTON_CLICK = "page_login_button_click",
    PAGE_LOGIN_BUTTON_CLICK_SUCCESS = "page_login_button_click_success",
    PAGE_LOGIN_BUTTON_CLICK_FAILURE = "page_login_button_click_failure",
    PAGE_LOGIN_SUCCESS_BACK = "page_login_success_back",
    PAGE_SIGN_CONFIRM_BUTTON_CLICK = "page_sign_confirm_button_click",
    PAGE_SIGN_CONFIRM_BUTTON_CLICK_SUCCESS = "page_sign_confirm_button_click_success",
    PAGE_SIGN_CONFIRM_BUTTON_CLICK_FAILURE = "page_sign_confirm_button_click_failure",
    PAGE_SETTING_MASTER_PASSWORD_ENTER = "page_setting_master_password_enter",
    PAGE_SETTING_MASTER_PASSWORD_SET = "page_setting_master_password_set",
    PAGE_SETTING_MASTER_PASSWORD_CHANGE = "page_setting_master_password_change",
    PAGE_MASTER_PASSWORD_VERIFY = "page_master_password_verify",
    PAGE_MASTER_PASSWORD_VERIFY_SUCCESS = "page_master_password_verify_success"
}
export interface SendRecordsParams {
    record_type: RecordType;
    reason?: string;
}
export declare class BI {
    private options;
    constructor(options: BiOptions);
    active(params: SendActiveParams): void;
    records(params: SendRecordsParams): void;
}
