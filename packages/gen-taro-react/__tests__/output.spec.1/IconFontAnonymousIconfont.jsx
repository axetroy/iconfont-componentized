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
        return "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPXtwcm9wcy5zaXplfSBoZWlnaHQ9e3Byb3BzLnNpemV9IHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc05hbWVzfT4KICAgIDxwYXRoIGQ9Ik01MTIuMDE3OTA4IDEyNi43NTQ4OTJjLTIxMC43MTgxODkgMC0zODEuNTI3NDM2IDE3Mi4wMTk4MTktMzgxLjUyNzQzNiAzODQuMjIxODAyczE3MC44MDkyNDcgMzg0LjIyMTgwMiAzODEuNTI3NDM2IDM4NC4yMjE4MDIgMzgxLjU0MzgwOS0xNzIuMDE5ODE5IDM4MS41NDM4MDktMzg0LjIyMTgwMlM3MjIuNzM2MDk3IDEyNi43NTQ4OTIgNTEyLjAxNzkwOCAxMjYuNzU0ODkyek03MDIuNzk5MDIyIDUyMi4wNjMxOTNjMCAxNi4zMzgxMDctMTMuMTQ5NDg1IDI5LjU3MzU0OS0yOS4zNTI1MTUgMjkuNTczNTQ5TDM1MC42MDY3MDUgNTUxLjYzNjc0MmMtMTYuMjAyMDA3IDAtMjkuMzM1MTE5LTEzLjIzNTQ0Mi0yOS4zMzUxMTktMjkuNTczNTQ5bDAtMjkuNTM5NzhjMC0xNi4zMzkxMyAxMy4xMzIwODgtMjkuNTczNTQ5IDI5LjMzNTExOS0yOS41NzM1NDlsMzIyLjgzOTgwMyAwYzE2LjIwMzAzIDAgMjkuMzUyNTE1IDEzLjIzNTQ0MiAyOS4zNTI1MTUgMjkuNTczNTQ5TDcwMi43OTkwMjIgNTIyLjA2MzE5M3oiIC8+Cjwvc3ZnPg=="
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

IconFontAnonymousIconfont.displayName = 'IconFontAnonymousIconfont';

IconFontAnonymousIconfont.defaultProps = {
    size: 32
}

export default memo(IconFontAnonymousIconfont)
