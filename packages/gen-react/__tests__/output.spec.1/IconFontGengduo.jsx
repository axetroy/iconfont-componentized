// generate by iconfont-componentized
import React, { memo, useMemo } from 'react';

function IconFontGengduo (props) {
    const classNames = useMemo(() => {
        const classNameParts = ['icon-font', 'icon-font-gengduo'];

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
            <path d="M288 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill={props.color || '#ffffff'} />
            <path d="M512 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill={props.color || '#ffffff'} />
            <path d="M736 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill={props.color || '#ffffff'} />
        </svg>
    )
}

IconFontGengduo.displayName = 'IconFontGengduo';

IconFontGengduo.defaultProps = {
    size: 32
}

export default memo(IconFontGengduo)
