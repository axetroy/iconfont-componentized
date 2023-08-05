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

export default function IconFont({ name } = {}) {
    switch (name) {
        case 'jia': return IconFontJia();
        case 'briefcase': return IconFontBriefcase();
        case 'anonymous-iconfont': return IconFontAnonymousIconfont();
        case 'jiesuan': return IconFontJiesuan();
        case 'canju-yongcan': return IconFontCanjuYongcan();
        default:
            var defaultIcon = document.createElement("i");
            defaultIcon.setAttribute("style", "display: none");
            return defaultIcon;
    }
}