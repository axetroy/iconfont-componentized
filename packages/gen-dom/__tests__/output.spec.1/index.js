// generate by iconfont-componentized

import IconFontJia from "./IconFontJia";
import IconFontBriefcase from "./IconFontBriefcase";
import IconFontAnonymousIconfont from "./IconFontAnonymousIconfont";
import IconFontJiesuan from "./IconFontJiesuan";
import IconFontCanjuYongcan from "./IconFontCanjuYongcan";

export { IconFontJia };
export { IconFontBriefcase };
export { IconFontAnonymousIconfont };
export { IconFontJiesuan };
export { IconFontCanjuYongcan };

export const names = ["jia","briefcase","anonymous-iconfont","jiesuan","canju-yongcan"];

export default function IconFont(props = {}) {
    switch (name) {
        case 'jia': return IconFontJia(props);
        case 'briefcase': return IconFontBriefcase(props);
        case 'anonymous-iconfont': return IconFontAnonymousIconfont(props);
        case 'jiesuan': return IconFontJiesuan(props);
        case 'canju-yongcan': return IconFontCanjuYongcan(props);
        default:
            throw new Error(`IconFont's name must one of ${JSON.stringify(names)} but got "${props.name}"`)
    }
}