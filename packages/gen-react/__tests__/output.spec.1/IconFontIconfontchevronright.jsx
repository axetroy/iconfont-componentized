// generate by iconfont-componentized
import React, { memo, useMemo } from 'react';

function IconFontIconfontchevronright (props) {
    const classNames = useMemo(() => {
        const classNameParts = ['icon-font', 'icon-font-iconfontchevronright'];

        if (props.className) {
            classNameParts.push(props.className);
        }

        return classNameParts.join(' ');
    }, [props.className]);

    const styles = useMemo(() => {
        const size = props.size;

        return {
            width: size,
            height: size,
            ...(props.style || {})
        }
    }, [props.size, props.style])

    return (
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} fill={props.color} {...props} className={classNames} style={styles}>
            <path d="M425.984 256l256 256-256 256-59.989333-59.989333 196.010667-196.010667-196.010667-196.010667z" fill={props.color} />
        </svg>
    )
}

IconFontIconfontchevronright.displayName = 'IconFontIconfontchevronright';

IconFontIconfontchevronright.defaultProps = {
    size: 32
}

export default memo(IconFontIconfontchevronright)
