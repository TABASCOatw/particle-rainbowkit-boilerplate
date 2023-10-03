import QRCodeUtil from 'qrcode';
import React from 'react';
type Props = {
    ecl?: QRCodeUtil.QRCodeErrorCorrectionLevel;
    logoBackground?: string;
    logoUrl?: string | (() => Promise<string>);
    logoMargin?: number;
    logoSize?: number;
    size?: number;
    uri: string;
};
export declare function QRCode({ ecl, logoBackground, logoMargin, logoSize, logoUrl, size: sizeProp, uri, }: Props): React.JSX.Element;
export {};
