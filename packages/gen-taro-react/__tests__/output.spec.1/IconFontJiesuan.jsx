// generate by iconfont-componentized
import React, { memo, useMemo } from 'react';
import { Image } from '@tarojs/components';

function IconFontJiesuan (props) {
    const classNames = useMemo(() => {
        const classNameParts = ['icon-font', 'icon-font-jiesuan'];

        if (props.className) {
            classNameParts.push(props.className);
        }

        return classNameParts.join(' ');
    }, [props.className]);

    const src = useMemo(() => {
        return "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPXtwcm9wcy5zaXplfSBoZWlnaHQ9e3Byb3BzLnNpemV9IHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc05hbWVzfT4KICAgIDxwYXRoIGQ9Ik0zODMgODczLjRjLTI4LjggMC01Mi40LTIzLjYtNTIuNC01Mi40IDAtMjguOCAyMy42LTUyLjQgNTIuNC01Mi40IDI5IDAgNTIuNCAyMy42IDUyLjQgNTIuNEM0MzUuNCA4NTAgNDExLjggODczLjQgMzgzIDg3My40TDM4MyA4NzMuNHpNMzgzIDg3My40IiAvPgogICAgPHBhdGggZD0iTTc0My42IDg3My40Yy0yOSAwLTUyLjQtMjMuNi01Mi40LTUyLjQgMC0yOC44IDIzLjYtNTIuNCA1Mi40LTUyLjQgMjkgMCA1Mi40IDIzLjYgNTIuNCA1Mi40Qzc5NiA4NTAgNzcyLjQgODczLjQgNzQzLjYgODczLjRMNzQzLjYgODczLjR6TTc0My42IDg3My40IiAvPgogICAgPHBhdGggZD0iTTM3Ni4yIDc0NC42Yy0zNy42IDAtNzAuNi0yOS42LTc1LjItNjcuNmwtNDMuNi0zMDcuNC0yNC44LTE0NGMtMS40LTExLjYtMTIuMi0yMi0yMy4yLTIyTDE3Ni40IDIwMy42Yy0xNC42IDAtMjYuNi0xMi0yNi42LTI2LjYgMC0xNC42IDEyLTI2LjYgMjYuNi0yNi42bDMyLjggMGMzOCAwIDcxLjQgMjkuNiA3NiA2Ny40bDI0LjggMTQzLjRMMzU0IDY3MC4yYzEuNCAxMS4yIDExLjggMjEuMiAyMi4yIDIxLjJsNDE4LjQgMGMxNC42IDAgMjYuNiAxMiAyNi42IDI2LjYgMCAxNC42LTEyIDI2LjYtMjYuNiAyNi42TDM3Ni4yIDc0NC42IDM3Ni4yIDc0NC42ek0zNzYuMiA3NDQuNiIgLz4KICAgIDxwYXRoIGQ9Ik00MDguNCA2NDEuNmMtMTMuOCAwLTI1LjYtMTAuOC0yNi42LTI0LjYtMC42LTcgMS44LTE0IDYuNC0xOS40IDQuNi01LjQgMTEtOC42IDE4LjItOS4ybDM0OS42LTI1LjhjMTIgMCAyMi42LTkuMiAyNC0yMC44bDQwLjYtMjMyYzEtOC44LTEuNC0xOC02LjItMjMuNC0zLjItMy42LTctNS40LTExLjYtNS40bC00NDYgMGMtMTQuOCAwLTI2LjYtMTItMjYuNi0yNi42IDAtMTQuNiAxMi0yNi42IDI2LjYtMjYuNmw0NDYgMGMyMCAwIDM4LjIgOC4yIDUxLjYgMjMuNCAxNS4yIDE3LjIgMjIuMiA0MS40IDE5LjIgNjYuNGwtNDAuNiAyMzJjLTIuMiAxOC0xMS4yIDM0LjYtMjUgNDctMTQgMTIuNC0zMS42IDE5LjQtNDkuOCAxOS40bC0zNDcuNiAyNS42TDQwOC40IDY0MS42IDQwOC40IDY0MS42ek00MDguNCA2NDEuNiIgLz4KPC9zdmc+"
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

IconFontJiesuan.displayName = 'IconFontJiesuan';

IconFontJiesuan.defaultProps = {
    size: 32
}

export default memo(IconFontJiesuan)
