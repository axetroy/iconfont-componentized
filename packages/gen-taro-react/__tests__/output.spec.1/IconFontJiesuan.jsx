// generate by iconfont-componentized
import React, { memo, useMemo, useEffect } from 'react';
import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components';

import { svgToBase64, generateSvgJSX } from './share';

let node;
let referenceCount = 0;

function IconFontJiesuan (props) {
    const classNames = useMemo(() => {
        const classNameParts = ['icon-font', 'icon-font-jiesuan'];

        if (props.className) {
            classNameParts.push(props.className);
        }

        return classNameParts.join(' ');
    }, [props.className]);

    const src = useMemo(() => {
        // 避免大量使用组件造成的重复内存申请
        // 这么做只是为了降低内存使用量
        node = node || {"name":"svg","type":"element","value":"","parent":null,"attributes":{"id":"icon-jiesuan","viewBox":"0 0 1024 1024"},"children":[{"name":"path","type":"element","value":"","parent":null,"attributes":{"d":"M383 873.4c-28.8 0-52.4-23.6-52.4-52.4 0-28.8 23.6-52.4 52.4-52.4 29 0 52.4 23.6 52.4 52.4C435.4 850 411.8 873.4 383 873.4L383 873.4zM383 873.4"},"children":[]},{"name":"path","type":"element","value":"","parent":null,"attributes":{"d":"M743.6 873.4c-29 0-52.4-23.6-52.4-52.4 0-28.8 23.6-52.4 52.4-52.4 29 0 52.4 23.6 52.4 52.4C796 850 772.4 873.4 743.6 873.4L743.6 873.4zM743.6 873.4"},"children":[]},{"name":"path","type":"element","value":"","parent":null,"attributes":{"d":"M376.2 744.6c-37.6 0-70.6-29.6-75.2-67.6l-43.6-307.4-24.8-144c-1.4-11.6-12.2-22-23.2-22L176.4 203.6c-14.6 0-26.6-12-26.6-26.6 0-14.6 12-26.6 26.6-26.6l32.8 0c38 0 71.4 29.6 76 67.4l24.8 143.4L354 670.2c1.4 11.2 11.8 21.2 22.2 21.2l418.4 0c14.6 0 26.6 12 26.6 26.6 0 14.6-12 26.6-26.6 26.6L376.2 744.6 376.2 744.6zM376.2 744.6"},"children":[]},{"name":"path","type":"element","value":"","parent":null,"attributes":{"d":"M408.4 641.6c-13.8 0-25.6-10.8-26.6-24.6-0.6-7 1.8-14 6.4-19.4 4.6-5.4 11-8.6 18.2-9.2l349.6-25.8c12 0 22.6-9.2 24-20.8l40.6-232c1-8.8-1.4-18-6.2-23.4-3.2-3.6-7-5.4-11.6-5.4l-446 0c-14.8 0-26.6-12-26.6-26.6 0-14.6 12-26.6 26.6-26.6l446 0c20 0 38.2 8.2 51.6 23.4 15.2 17.2 22.2 41.4 19.2 66.4l-40.6 232c-2.2 18-11.2 34.6-25 47-14 12.4-31.6 19.4-49.8 19.4l-347.6 25.6L408.4 641.6 408.4 641.6zM408.4 641.6"},"children":[]}]};

        const svgStr = generateSvgJSX(node, 0, [props.color ? { type: "normal", key: "fill", value: props.color } : undefined].filter(v=>v));

        return "data:image/svg+xml;base64," + svgToBase64(svgStr);
    }, [props.color])

    const styles = useMemo(() => {
        const size = typeof props.size === "number" ? Taro.pxTransform(props.size) : props.size

        return {
            width: size,
            height: size,
            ...(props.style || {})
        }
    }, [props.size, props.style])

    useEffect(() => {
        referenceCount+=1;

        return () => {
            referenceCount-=1;

            if (referenceCount === 0) {
                node = null; // 释放内存
            }
        }
    }, [])

    return <Image lazyLoad {...props} className={classNames} style={styles} src={src} />
}

IconFontJiesuan.displayName = 'IconFontJiesuan';

IconFontJiesuan.defaultProps = {
    size: 32
}

export default memo(IconFontJiesuan)
