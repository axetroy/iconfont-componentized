// generate by iconfont-componentized

import React, { memo } from 'react';

import IconFontJia from "./IconFontJia";
import IconFontBriefcase from "./IconFontBriefcase";
import IconFontAnonymousIconfont from "./IconFontAnonymousIconfont";
import IconFontJiesuan from "./IconFontJiesuan";
import IconFontCanjuYongcan from "./IconFontCanjuYongcan";
import shared from "./shared";

export { IconFontJia };
export { IconFontBriefcase };
export { IconFontAnonymousIconfont };
export { IconFontJiesuan };
export { IconFontCanjuYongcan };
export { shared };

function IconFont(props) {
    switch (props.name) {
        case 'jia': return <IconFontJia size={props.size} {...props} />;
        case 'briefcase': return <IconFontBriefcase size={props.size} {...props} />;
        case 'anonymous-iconfont': return <IconFontAnonymousIconfont size={props.size} {...props} />;
        case 'jiesuan': return <IconFontJiesuan size={props.size} {...props} />;
        case 'canju-yongcan': return <IconFontCanjuYongcan size={props.size} {...props} />;
        case 'share': return <shared size={props.size} {...props} />;
        default:
            throw new Error(`IconFont's name must one of ["jia","briefcase","anonymous-iconfont","jiesuan","canju-yongcan","share"] but got "${props.name}"`)
    }
}

IconFont.defaultProps = {
    size: 32
}

export default memo(IconFont)