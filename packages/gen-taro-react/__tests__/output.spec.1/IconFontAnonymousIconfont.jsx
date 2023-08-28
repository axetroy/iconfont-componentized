// generate by iconfont-componentized
import React, { memo, useMemo, useEffect } from 'react';
import { Image } from '@tarojs/components';

import { svgToBase64, generateSvgJSX } from './share';

let node;
let count = 0;

function IconFontAnonymousIconfont (props) {
    const classNames = useMemo(() => {
        const classNameParts = ['icon-font', 'icon-font-anonymous-iconfont'];

        if (props.className) {
            classNameParts.push(props.className);
        }

        return classNameParts.join(' ');
    }, [props.className]);

    const src = useMemo(() => {
        node = node || {"name":"svg","type":"element","value":"","parent":null,"attributes":{"id":"icon-anonymous-iconfont","viewBox":"0 0 1024 1024"},"children":[{"name":"path","type":"element","value":"","parent":null,"attributes":{"d":"M512.017908 126.754892c-210.718189 0-381.527436 172.019819-381.527436 384.221802s170.809247 384.221802 381.527436 384.221802 381.543809-172.019819 381.543809-384.221802S722.736097 126.754892 512.017908 126.754892zM702.799022 522.063193c0 16.338107-13.149485 29.573549-29.352515 29.573549L350.606705 551.636742c-16.202007 0-29.335119-13.235442-29.335119-29.573549l0-29.53978c0-16.33913 13.132088-29.573549 29.335119-29.573549l322.839803 0c16.20303 0 29.352515 13.235442 29.352515 29.573549L702.799022 522.063193z"},"children":[]}]}; // 避免大量使用组件造成的重复内存申请

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

IconFontAnonymousIconfont.displayName = 'IconFontAnonymousIconfont';

IconFontAnonymousIconfont.defaultProps = {
    size: 32
}

export default memo(IconFontAnonymousIconfont)
