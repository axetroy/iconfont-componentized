// generate by iconfont-componentized
import React, { memo, useMemo } from 'react';
import { Image } from '@tarojs/components';

function IconFontAnonymousIconfont (props) {
    const classNames = useMemo(() => {
        const classNameParts = ['icon-font', 'icon-font-anonymous-iconfont'];

        if (props.className) {
            classNameParts.push(props.className);
        }

        return classNameParts.join(' ');
    }, [props.className]);

    const src = useMemo(() => {
        return "data:image/svg+xml;base64,UEhOMlp5QjJhV1YzUW05NFBTSXdJREFnTVRBeU5DQXhNREkwSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QWHR3Y205d2N5NXphWHBsZlNCb1pXbG5hSFE5ZTNCeWIzQnpMbk5wZW1WOUlIc3VMaTV3Y205d2MzMGdZMnhoYzNOT1lXMWxQWHRqYkdGemMwNWhiV1Z6ZlQ0S0lDQWdJRHh3WVhSb0lHUTlJazAxTVRJdU1ERTNPVEE0SURFeU5pNDNOVFE0T1RKakxUSXhNQzQzTVRneE9Ea2dNQzB6T0RFdU5USTNORE0ySURFM01pNHdNVGs0TVRrdE16Z3hMalV5TnpRek5pQXpPRFF1TWpJeE9EQXljekUzTUM0NE1Ea3lORGNnTXpnMExqSXlNVGd3TWlBek9ERXVOVEkzTkRNMklETTROQzR5TWpFNE1ESWdNemd4TGpVME16Z3dPUzB4TnpJdU1ERTVPREU1SURNNE1TNDFORE00TURrdE16ZzBMakl5TVRnd01sTTNNakl1TnpNMk1EazNJREV5Tmk0M05UUTRPVElnTlRFeUxqQXhOemt3T0NBeE1qWXVOelUwT0RreWVrMDNNREl1TnprNU1ESXlJRFV5TWk0d05qTXhPVE5qTUNBeE5pNHpNemd4TURjdE1UTXVNVFE1TkRnMUlESTVMalUzTXpVME9TMHlPUzR6TlRJMU1UVWdNamt1TlRjek5UUTVURE0xTUM0Mk1EWTNNRFVnTlRVeExqWXpOamMwTW1NdE1UWXVNakF5TURBM0lEQXRNamt1TXpNMU1URTVMVEV6TGpJek5UUTBNaTB5T1M0ek16VXhNVGt0TWprdU5UY3pOVFE1YkRBdE1qa3VOVE01Tnpoak1DMHhOaTR6TXpreE15QXhNeTR4TXpJd09EZ3RNamt1TlRjek5UUTVJREk1TGpNek5URXhPUzB5T1M0MU56TTFORGxzTXpJeUxqZ3pPVGd3TXlBd1l6RTJMakl3TXpBeklEQWdNamt1TXpVeU5URTFJREV6TGpJek5UUTBNaUF5T1M0ek5USTFNVFVnTWprdU5UY3pOVFE1VERjd01pNDNPVGt3TWpJZ05USXlMakEyTXpFNU0zb2lJQzgrQ2p3dmMzWm5QZz09"
    }, [])

    const styles = useMemo(() => {
        return {
            width: props.size,
            height: props.size,
            ...(props.style || {})
        }
    }, [props.size, props.style])

    return <Image className={classNames} {...props} style={styles} src={src}/>
}

IconFontAnonymousIconfont.displayName = 'IconFontAnonymousIconfont';

IconFontAnonymousIconfont.defaultProps = {
    size: 32
}

export default memo(IconFontAnonymousIconfont)
