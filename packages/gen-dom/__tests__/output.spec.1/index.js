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

export default function IconFont({ name, size, className } = {}) {
    switch (name) {
        case 'jia': return IconFontJia({ size, className });
        case 'briefcase': return IconFontBriefcase({ size, className });
        case 'anonymous-iconfont': return IconFontAnonymousIconfont({ size, className });
        case 'jiesuan': return IconFontJiesuan({ size, className });
        case 'canju-yongcan': return IconFontCanjuYongcan({ size, className });
        default:
            throw new Error(`IconFont's name must one of ["jia","briefcase","anonymous-iconfont","jiesuan","canju-yongcan"] but got "${name}"`)
    }
}