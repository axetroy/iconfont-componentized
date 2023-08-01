// generate by iconfont-componentized

import React from 'react';

import IconFontJia from "./IconFontJia";
import IconFontBriefcase from "./IconFontBriefcase";
import IconFontAnonymousIconfont from "./IconFontAnonymousIconfont";
import IconFontJiesuan from "./IconFontJiesuan";
import IconFontCanjuYongcan from "./IconFontCanjuYongcan";

export * from "./IconFontJia";
export * from "./IconFontBriefcase";
export * from "./IconFontAnonymousIconfont";
export * from "./IconFontJiesuan";
export * from "./IconFontCanjuYongcan";

export default function IconFont(props) {
    switch (props.name) {
        case 'jia': return <IconFontJia {...props} />;
        case 'briefcase': return <IconFontBriefcase {...props} />;
        case 'anonymous-iconfont': return <IconFontAnonymousIconfont {...props} />;
        case 'jiesuan': return <IconFontJiesuan {...props} />;
        case 'canju-yongcan': return <IconFontCanjuYongcan {...props} />;
        default:
            return <i style="display: none" {...props} />
    }
}