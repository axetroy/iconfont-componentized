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
        return "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPXtwcm9wcy5zaXplfSBoZWlnaHQ9e3Byb3BzLnNpemV9IHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc05hbWVzfT4KICAgIDxwYXRoIGQ9Ik0zNTEuNzQ3MDExIDI4Mi42NzUwNTFoNjEuNjkxOTk2bDE0LjE2MTk5OS0yNjIuOTU2OTgyaDQ2LjUxOTk5N1YyMTYuOTQwMDU1YzAgMzUuMTU4OTk4IDMuNzIzIDc3LjMxMjk5NS01LjA1NiAxMDUuMTc5OTkzLTEyLjk3NDk5OSA0MS4xOTA5OTctNTIuODM5OTk2IDc4LjM3NTk5NS05NS4wNjc5OTQgOTAuMDEwOTk0djU3Ny40ODY5NmMtMzYuNDc3OTk4IDI4LjYxMjk5OC01NC4yMDk5OTYgMjYuNTEyOTk4LTkxLjAyMDk5MyAwdi01NzcuNDg5OTZMMjQ3LjU4MDAxOCAzOTcuOTcwMDQzYy0yMS43Mzk5OTktOS4zOTE5OTktNDMuMDEwOTk3LTIyLjkwMzk5OC01NC42MTU5OTYtNDIuNDc3OTk3LTE2LjM0Nzk5OS0yNy41Njk5OTgtMTQuMTU0OTk5LTcyLjE1Mzk5NS0xNC4xNTQ5OTktMTE2LjMwNDk5MlYxOS43MjIwNjloNDQuNDkzOTk3bDIxLjIzOTk5OCAyNjIuOTUyOTgyaDUyLjU5Mzk5N2w3LjA3NTk5OS0yNjkuMDIyOTgyIDQyLjQ3Nzk5NyAxLjAxMyA1LjA1NiAyNjguMDA5OTgyek01OTcuNTA4OTk0IDEuNTE3MDdjMTguNTE2OTk5LTAuMjI2IDExOS4xNzA5OTItNC4zNDMgMTI2LjQxNjk5MiAyLjAyMyAyMi4zNjk5OTggMTkuNDk3OTk5IDM0LjEzMTk5OCA1My40ODY5OTYgNDkuNTU2OTk2IDc5Ljg5Njk5NCAzMC45Nzk5OTggNTMuMDM5OTk2IDQ5Ljk5OTk5NyAxMTYuOTMwOTkyIDY0LjcyNDk5NiAxODYuMDg5OTg4bDYuMDY5OTk5IDYxLjY5MDk5NSAxLjAxMyA2NS43Mzg5OTZjLTUgMjkuOTIyOTk4LTkuMDEyOTk5IDU5LjYxMTk5Ni0xMy4xNDg5OTkgODYuOTc0OTk0aC0xMDkuMjI5OTkydjU0MC4wNjQ5NjNINTk3LjUwOTk5NFYxLjUxNDA3eiIgLz4KPC9zdmc+"
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

IconFontCanjuYongcan.displayName = 'IconFontCanjuYongcan';

IconFontCanjuYongcan.defaultProps = {
    size: 32
}

export default memo(IconFontCanjuYongcan)
