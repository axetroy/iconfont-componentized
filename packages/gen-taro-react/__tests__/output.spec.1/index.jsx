// generate by iconfont-componentized

import React, { memo } from 'react';

import IconFontJia from "./IconFontJia";
import IconFontBriefcase from "./IconFontBriefcase";
import IconFontAnonymousIconfont from "./IconFontAnonymousIconfont";
import IconFontJiesuan from "./IconFontJiesuan";
import IconFontCanjuYongcan from "./IconFontCanjuYongcan";
import share from "./share";

export { IconFontJia };
export { IconFontBriefcase };
export { IconFontAnonymousIconfont };
export { IconFontJiesuan };
export { IconFontCanjuYongcan };
export { share };

export const names = ["jia","briefcase","anonymous-iconfont","jiesuan","canju-yongcan","share"];

function IconFont(props) {
    switch (props.name) {
        case 'jia': return <IconFontJia {...props} />;
        case 'briefcase': return <IconFontBriefcase {...props} />;
        case 'anonymous-iconfont': return <IconFontAnonymousIconfont {...props} />;
        case 'jiesuan': return <IconFontJiesuan {...props} />;
        case 'canju-yongcan': return <IconFontCanjuYongcan {...props} />;
        case 'share': return <share {...props} />;
        default:
            throw new Error(`IconFont's name must one of ${JSON.stringify(names)} but got "${props.name}"`)
    }
}

IconFont.defaultProps = {
    size: 32
}

export default memo(IconFont)