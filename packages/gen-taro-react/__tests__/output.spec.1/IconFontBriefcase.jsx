// generate by iconfont-componentized
import React, { memo, useMemo } from 'react';
import { Image } from '@tarojs/components';

function IconFontBriefcase (props) {
    const classNames = useMemo(() => {
        const classNameParts = ['icon-font', 'icon-font-briefcase'];

        if (props.className) {
            classNameParts.push(props.className);
        }

        return classNameParts.join(' ');
    }, [props.className]);

    const src = useMemo(() => {
        return "data:image/svg+xml;base64,UEhOMlp5QjJhV1YzUW05NFBTSXdJREFnTVRBeU5DQXhNREkwSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QWHR3Y205d2N5NXphWHBsZlNCb1pXbG5hSFE5ZTNCeWIzQnpMbk5wZW1WOUlIc3VMaTV3Y205d2MzMGdZMnhoYzNOT1lXMWxQWHRqYkdGemMwNWhiV1Z6ZlQ0S0lDQWdJRHh3WVhSb0lHUTlJazAwTWpFdU5qUTNNRFU1SURjNE15NHdOVGc0TWpSc01DMDVNQzR6TlRJNU5ERWdOakF1TWpNMU1qazBJREFnTUNBek1DNHhNVGMyTkRjZ05qQXVNak0xTWprMElEQWdNQzB6TUM0eE1UYzJORGNnTmpBdU1qTTFNamswSURBZ01DQTVNQzR6TlRJNU5ERXRNVGd3TGpjd05UZzRNaUF3ZWsweE1ESTBJRFkyTWk0MU9EZ3lNelZzTFRZd0xqSXpOVEk1TkNBd0lEQWdNell4TGpReE1UYzJOUzA1TURNdU5USTVOREV5SURBZ01DMHpOakV1TkRFeE56WTFMVFl3TGpJek5USTVOQ0F3SURBdE5EZ3hMamc0TWpNMU15QXlNVGN1T0RFd09ESTBJREJqTlRZdU5UQXdOekEyTFRFeE1DNHlNekExT0RnZ01UWTRMamsyTFRFNE1DNDNNRFU0T0RJZ01qazBMakU0T1RFM05pMHhPREF1TnpBMU9EZ3ljekl6Tnk0M05EZzNNRFlnTnpBdU5UTTFOVEk1SURJNU5DNHhPRGt4TnpZZ01UZ3dMamN3TlRnNE1td3lNVGN1T0RFd09ESTBJREFnTUNBME9ERXVPRGd5TXpVemVrMHlPRGN1TWpZeU1URTRJREU0TUM0M01EVTRPREpzTkRRNUxqVTVOakl6TlNBd1l5MDBPUzQyT1RReE1UZ3ROelF1TWpjd01URTRMVEV6TXk0eE1pMHhNakF1TkRjd05UZzRMVEl5TkM0M09UZ3hNVGd0TVRJd0xqUTNNRFU0T0hNdE1UYzFMakV3TkNBME5pNHlOakEzTURZdE1qSTBMamM1T0RFeE9DQXhNakF1TkRjd05UZzRlazA1TURNdU5USTVOREV5SURZMk1pNDFPRGd5TXpWc0xUYzRNeTR3TlRnNE1qUWdNQ0F3SURNd01TNHhOelkwTnpFZ056Z3pMakExT0RneU5DQXdJREF0TXpBeExqRTNOalEzTVhwTk9UWXpMamMyTkRjd05pQXlOREF1T1RReE1UYzJiQzA1TURNdU5USTVOREV5SURBZ01DQXpOakV1TkRFeE56WTFJRGt3TXk0MU1qazBNVElnTUNBd0xUTTJNUzQwTVRFM05qVjZJaUF2UGdvOEwzTjJaejQ9"
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

IconFontBriefcase.displayName = 'IconFontBriefcase';

IconFontBriefcase.defaultProps = {
    size: 32
}

export default memo(IconFontBriefcase)
