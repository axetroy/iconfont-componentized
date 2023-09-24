// generate by iconfont-componentized

import React, { memo } from 'react';

import IconFontGengduo from "./IconFontGengduo";
import IconFontIconfontchevronright from "./IconFontIconfontchevronright";
import IconFontBriefcase from "./IconFontBriefcase";
import IconFontCanjuYongcan from "./IconFontCanjuYongcan";
import IconFontJia from "./IconFontJia";
import IconFontAnonymousIconfont from "./IconFontAnonymousIconfont";
import IconFontJiesuan from "./IconFontJiesuan";

export { IconFontGengduo };
export { IconFontIconfontchevronright };
export { IconFontBriefcase };
export { IconFontCanjuYongcan };
export { IconFontJia };
export { IconFontAnonymousIconfont };
export { IconFontJiesuan };

export const names = ["gengduo","iconfontchevronright","briefcase","canju-yongcan","jia","anonymous-iconfont","jiesuan"];

function IconFont(props) {
    switch (props.name) {
        case 'gengduo': return <IconFontGengduo {...props} />;
        case 'iconfontchevronright': return <IconFontIconfontchevronright {...props} />;
        case 'briefcase': return <IconFontBriefcase {...props} />;
        case 'canju-yongcan': return <IconFontCanjuYongcan {...props} />;
        case 'jia': return <IconFontJia {...props} />;
        case 'anonymous-iconfont': return <IconFontAnonymousIconfont {...props} />;
        case 'jiesuan': return <IconFontJiesuan {...props} />;
        default:
            throw new Error(`IconFont's name must one of ${JSON.stringify(names)} but got "${props.name}"`)
    }
}

IconFont.defaultProps = {
    size: 32
}

export default memo(IconFont)