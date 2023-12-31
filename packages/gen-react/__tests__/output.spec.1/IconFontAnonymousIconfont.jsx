// generate by iconfont-componentized
import React, { memo, useMemo } from 'react';

function IconFontAnonymousIconfont (props) {
    const classNames = useMemo(() => {
        const classNameParts = ['icon-font', 'icon-font-anonymous-iconfont'];

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
            <path d="M512.018 53.888c-250.575 0-453.69 204.556-453.69 456.895s203.115 456.895 453.69 456.895 453.707-204.556 453.707-456.895-203.138-456.895-453.707-456.895zM738.888 523.966c0 19.429-15.635 35.166-34.903 35.166h-383.901c-19.266 0-34.885-15.738-34.885-35.166v-35.127c0-19.43 15.616-35.166 34.885-35.166h383.901c19.267 0 34.903 15.738 34.903 35.166v35.127z" fill={props.color} />
        </svg>
    )
}

IconFontAnonymousIconfont.displayName = 'IconFontAnonymousIconfont';

IconFontAnonymousIconfont.defaultProps = {
    size: 32
}

export default memo(IconFontAnonymousIconfont)
