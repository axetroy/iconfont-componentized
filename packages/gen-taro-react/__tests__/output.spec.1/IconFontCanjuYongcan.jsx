// generate by iconfont-componentized
import React, { memo, useMemo } from 'react';
import { Image } from '@tarojs/components';

function IconFontCanjuYongcan (props) {
    const classNames = useMemo(() => {
        const classNameParts = ['icon-font', 'icon-font-canju-yongcan'];

        if (props.className) {
            classNameParts.push(props.className);
        }

        return classNameParts.join(' ');
    }, [props.className]);

    const src = useMemo(() => {
        return "data:image/svg+xml;base64,UEhOMlp5QjJhV1YzUW05NFBTSXdJREFnTVRBeU5DQXhNREkwSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QWHR3Y205d2N5NXphWHBsZlNCb1pXbG5hSFE5ZTNCeWIzQnpMbk5wZW1WOUlIc3VMaTV3Y205d2MzMGdZMnhoYzNOT1lXMWxQWHRqYkdGemMwNWhiV1Z6ZlQ0S0lDQWdJRHh3WVhSb0lHUTlJazB6TlRFdU56UTNNREV4SURJNE1pNDJOelV3TlRGb05qRXVOamt4T1RrMmJERTBMakUyTVRrNU9TMHlOakl1T1RVMk9UZ3lhRFEyTGpVeE9UazVOMVl5TVRZdU9UUXdNRFUxWXpBZ016VXVNVFU0T1RrNElETXVOekl6SURjM0xqTXhNams1TlMwMUxqQTFOaUF4TURVdU1UYzVPVGt6TFRFeUxqazNORGs1T1NBME1TNHhPVEE1T1RjdE5USXVPRE01T1RrMklEYzRMak0zTlRrNU5TMDVOUzR3TmpjNU9UUWdPVEF1TURFd09UazBkalUzTnk0ME9EWTVObU10TXpZdU5EYzNPVGs0SURJNExqWXhNams1T0MwMU5DNHlNRGs1T1RZZ01qWXVOVEV5T1RrNExUa3hMakF5TURrNU15QXdkaTAxTnpjdU5EZzVPVFpNTWpRM0xqVTRNREF4T0NBek9UY3VPVGN3TURRell5MHlNUzQzTXprNU9Ua3RPUzR6T1RFNU9Ua3RORE11TURFd09UazNMVEl5TGprd016azVPQzAxTkM0Mk1UVTVPVFl0TkRJdU5EYzNPVGszTFRFMkxqTTBOems1T1MweU55NDFOams1T1RndE1UUXVNVFUwT1RrNUxUY3lMakUxTXprNU5TMHhOQzR4TlRRNU9Ua3RNVEUyTGpNd05EazVNbFl4T1M0M01qSXdOamxvTkRRdU5Ea3pPVGszYkRJeExqSXpPVGs1T0NBeU5qSXVPVFV5T1RneWFEVXlMalU1TXprNU4ydzNMakEzTlRrNU9TMHlOamt1TURJeU9UZ3lJRFF5TGpRM056azVOeUF4TGpBeE15QTFMakExTmlBeU5qZ3VNREE1T1RneWVrMDFPVGN1TlRBNE9UazBJREV1TlRFM01EZGpNVGd1TlRFMk9UazVMVEF1TWpJMklERXhPUzR4TnpBNU9USXROQzR6TkRNZ01USTJMalF4TmprNU1pQXlMakF5TXlBeU1pNHpOams1T1RnZ01Ua3VORGszT1RrNUlETTBMakV6TVRrNU9DQTFNeTQwT0RZNU9UWWdORGt1TlRVMk9UazJJRGM1TGpnNU5qazVOQ0F6TUM0NU56azVPVGdnTlRNdU1ETTVPVGsySURRNUxqazVPVGs1TnlBeE1UWXVPVE13T1RreUlEWTBMamN5TkRrNU5pQXhPRFl1TURnNU9UZzRiRFl1TURZNU9UazVJRFl4TGpZNU1EazVOU0F4TGpBeE15QTJOUzQzTXpnNU9UWmpMVFVnTWprdU9USXlPVGs0TFRrdU1ERXlPVGs1SURVNUxqWXhNVGs1TmkweE15NHhORGc1T1RrZ09EWXVPVGMwT1RrMGFDMHhNRGt1TWpJNU9Ua3lkalUwTUM0d05qUTVOak5JTlRrM0xqVXdPVGs1TkZZeExqVXhOREEzZWlJZ0x6NEtQQzl6ZG1jKw=="
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

IconFontCanjuYongcan.displayName = 'IconFontCanjuYongcan';

IconFontCanjuYongcan.defaultProps = {
    size: 32
}

export default memo(IconFontCanjuYongcan)
