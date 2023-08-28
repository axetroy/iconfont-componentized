// generate by iconfont-componentized
import React, { memo, useMemo, useEffect } from 'react';
import { Image } from '@tarojs/components';

import { svgToBase64, generateSvgJSX } from './share';

let node;
let count = 0;

function IconFontJia (props) {
    const classNames = useMemo(() => {
        const classNameParts = ['icon-font', 'icon-font-jia'];

        if (props.className) {
            classNameParts.push(props.className);
        }

        return classNameParts.join(' ');
    }, [props.className]);

    const src = useMemo(() => {
        node = node || {"name":"svg","type":"element","value":"","parent":null,"attributes":{"id":"icon-jia","viewBox":"0 0 1024 1024"},"children":[{"name":"path","type":"element","value":"","parent":null,"attributes":{"d":"M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z"},"children":[]}]}; // 避免大量使用组件造成的重复内存申请

        const svgStr = generateSvgJSX(node, 0, [{ type: "normal", key: "fill", value: "red" }]);

        return svgToBase64(svgStr);
    }, [])

    const styles = useMemo(() => {
        return {
            width: props.size,
            height: props.size,
            ...(props.style || {})
        }
    }, [props.size, props.style])

    useEffect(() => {
        count+=1;

        return () => {
            count-=1;

            if (count === 0) {
                node = null;
            }
        }
    }, [])

    return <Image className={classNames} {...props} style={styles} src={src} />
}

IconFontJia.displayName = 'IconFontJia';

IconFontJia.defaultProps = {
    size: 32
}

export default memo(IconFontJia)
