// generate by iconfont-componentized
import React, { memo, useMemo } from 'react';
import { Image } from '@tarojs/components';

function IconFontJia (props) {
    const classNames = useMemo(() => {
        const classNameParts = ['icon-font', 'icon-font-jia'];

        if (props.className) {
            classNameParts.push(props.className);
        }

        return classNameParts.join(' ');
    }, [props.className]);

    const src = useMemo(() => {
        return "data:image/svg+xml;base64,UEhOMlp5QjJhV1YzUW05NFBTSXdJREFnTVRBeU5DQXhNREkwSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QWHR3Y205d2N5NXphWHBsZlNCb1pXbG5hSFE5ZTNCeWIzQnpMbk5wZW1WOUlIc3VMaTV3Y205d2MzMGdZMnhoYzNOT1lXMWxQWHRqYkdGemMwNWhiV1Z6ZlQ0S0lDQWdJRHh3WVhSb0lHUTlJazAxTVRRdU1EUTRJRFl5TGpRMk5IRTVNeTR4T0RRZ01DQXhOelV1TmpFMklETTFMak15T0hReE5ETXVPRGN5SURrMkxqYzJPQ0E1Tmk0M05qZ2dNVFF6TGpnM01pQXpOUzR6TWpnZ01UYzFMall4Tm5Fd0lEazBMakl3T0Mwek5TNHpNamdnTVRjMkxqRXlPSFF0T1RZdU56WTRJREUwTXk0ek5pMHhORE11T0RjeUlEazJMamMyT0MweE56VXVOakUySURNMUxqTXlPSEV0T1RRdU1qQTRJREF0TVRjMkxqWTBMVE0xTGpNeU9IUXRNVFF6TGpnM01pMDVOaTQzTmpndE9UWXVOelk0TFRFME15NHpOaTB6TlM0ek1qZ3RNVGMyTGpFeU9IRXdMVGt6TGpFNE5DQXpOUzR6TWpndE1UYzFMall4Tm5RNU5pNDNOamd0TVRRekxqZzNNaUF4TkRNdU9EY3lMVGsyTGpjMk9DQXhOell1TmpRdE16VXVNekk0ZWswM056SXVNRGsySURVM05pNDFNVEp4TWpZdU5qSTBJREFnTkRVdU1EVTJMVEU0TGprME5IUXhPQzQwTXpJdE5EVXVOVFk0TFRFNExqUXpNaTAwTlM0d05UWXRORFV1TURVMkxURTRMalF6TW13dE1Ua3lMalV4TWlBd0lEQXRNVGt5TGpVeE1uRXdMVEkyTGpZeU5DMHhPQzQ1TkRRdE5EVXVOVFk0ZEMwME5TNDFOamd0TVRndU9UUTBMVFExTGpBMU5pQXhPQzQ1TkRRdE1UZ3VORE15SURRMUxqVTJPR3d3SURFNU1pNDFNVEl0TVRreUxqVXhNaUF3Y1MweU5pNDJNalFnTUMwME5TNHdOVFlnTVRndU5ETXlkQzB4T0M0ME16SWdORFV1TURVMklERTRMalF6TWlBME5TNDFOamdnTkRVdU1EVTJJREU0TGprME5Hd3hPVEl1TlRFeUlEQWdNQ0F4T1RFdU5EZzRjVEFnTWpZdU5qSTBJREU0TGpRek1pQTBOUzQxTmpoME5EVXVNRFUySURFNExqazBOQ0EwTlM0MU5qZ3RNVGd1T1RRMElERTRMamswTkMwME5TNDFOamhzTUMweE9URXVORGc0SURFNU1pNDFNVElnTUhvaUlDOCtDand2YzNablBnPT0="
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

IconFontJia.displayName = 'IconFontJia';

IconFontJia.defaultProps = {
    size: 32
}

export default memo(IconFontJia)
