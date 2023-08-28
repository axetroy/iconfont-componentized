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
        return "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPXtwcm9wcy5zaXplfSBoZWlnaHQ9e3Byb3BzLnNpemV9IHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc05hbWVzfT4KICAgIDxwYXRoIGQ9Ik01MTQuMDQ4IDYyLjQ2NHE5My4xODQgMCAxNzUuNjE2IDM1LjMyOHQxNDMuODcyIDk2Ljc2OCA5Ni43NjggMTQzLjg3MiAzNS4zMjggMTc1LjYxNnEwIDk0LjIwOC0zNS4zMjggMTc2LjEyOHQtOTYuNzY4IDE0My4zNi0xNDMuODcyIDk2Ljc2OC0xNzUuNjE2IDM1LjMyOHEtOTQuMjA4IDAtMTc2LjY0LTM1LjMyOHQtMTQzLjg3Mi05Ni43NjgtOTYuNzY4LTE0My4zNi0zNS4zMjgtMTc2LjEyOHEwLTkzLjE4NCAzNS4zMjgtMTc1LjYxNnQ5Ni43NjgtMTQzLjg3MiAxNDMuODcyLTk2Ljc2OCAxNzYuNjQtMzUuMzI4ek03NzIuMDk2IDU3Ni41MTJxMjYuNjI0IDAgNDUuMDU2LTE4Ljk0NHQxOC40MzItNDUuNTY4LTE4LjQzMi00NS4wNTYtNDUuMDU2LTE4LjQzMmwtMTkyLjUxMiAwIDAtMTkyLjUxMnEwLTI2LjYyNC0xOC45NDQtNDUuNTY4dC00NS41NjgtMTguOTQ0LTQ1LjA1NiAxOC45NDQtMTguNDMyIDQ1LjU2OGwwIDE5Mi41MTItMTkyLjUxMiAwcS0yNi42MjQgMC00NS4wNTYgMTguNDMydC0xOC40MzIgNDUuMDU2IDE4LjQzMiA0NS41NjggNDUuMDU2IDE4Ljk0NGwxOTIuNTEyIDAgMCAxOTEuNDg4cTAgMjYuNjI0IDE4LjQzMiA0NS41Njh0NDUuMDU2IDE4Ljk0NCA0NS41NjgtMTguOTQ0IDE4Ljk0NC00NS41NjhsMC0xOTEuNDg4IDE5Mi41MTIgMHoiIC8+Cjwvc3ZnPg=="
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

IconFontJia.displayName = 'IconFontJia';

IconFontJia.defaultProps = {
    size: 32
}

export default memo(IconFontJia)
