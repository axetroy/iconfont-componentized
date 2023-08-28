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
        return "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPXtwcm9wcy5zaXplfSBoZWlnaHQ9e3Byb3BzLnNpemV9IHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc05hbWVzfT4KICAgIDxwYXRoIGQ9Ik00MjEuNjQ3MDU5IDc4My4wNTg4MjRsMC05MC4zNTI5NDEgNjAuMjM1Mjk0IDAgMCAzMC4xMTc2NDcgNjAuMjM1Mjk0IDAgMC0zMC4xMTc2NDcgNjAuMjM1Mjk0IDAgMCA5MC4zNTI5NDEtMTgwLjcwNTg4MiAwek0xMDI0IDY2Mi41ODgyMzVsLTYwLjIzNTI5NCAwIDAgMzYxLjQxMTc2NS05MDMuNTI5NDEyIDAgMC0zNjEuNDExNzY1LTYwLjIzNTI5NCAwIDAtNDgxLjg4MjM1MyAyMTcuODEwODI0IDBjNTYuNTAwNzA2LTExMC4yMzA1ODggMTY4Ljk2LTE4MC43MDU4ODIgMjk0LjE4OTE3Ni0xODAuNzA1ODgyczIzNy43NDg3MDYgNzAuNTM1NTI5IDI5NC4xODkxNzYgMTgwLjcwNTg4MmwyMTcuODEwODI0IDAgMCA0ODEuODgyMzUzek0yODcuMjYyMTE4IDE4MC43MDU4ODJsNDQ5LjU5NjIzNSAwYy00OS42OTQxMTgtNzQuMjcwMTE4LTEzMy4xMi0xMjAuNDcwNTg4LTIyNC43OTgxMTgtMTIwLjQ3MDU4OHMtMTc1LjEwNCA0Ni4yNjA3MDYtMjI0Ljc5ODExOCAxMjAuNDcwNTg4ek05MDMuNTI5NDEyIDY2Mi41ODgyMzVsLTc4My4wNTg4MjQgMCAwIDMwMS4xNzY0NzEgNzgzLjA1ODgyNCAwIDAtMzAxLjE3NjQ3MXpNOTYzLjc2NDcwNiAyNDAuOTQxMTc2bC05MDMuNTI5NDEyIDAgMCAzNjEuNDExNzY1IDkwMy41Mjk0MTIgMCAwLTM2MS40MTE3NjV6IiAvPgo8L3N2Zz4="
    }, [])

    const styles = useMemo(() => {
        return {
            width: props.size,
            height: props.size,
            ...(props.style || {})
        }
    }, [props.size, props.style])

    return <Image className={classNames} {...props} style={styles} src={src} />
}

IconFontBriefcase.displayName = 'IconFontBriefcase';

IconFontBriefcase.defaultProps = {
    size: 32
}

export default memo(IconFontBriefcase)
