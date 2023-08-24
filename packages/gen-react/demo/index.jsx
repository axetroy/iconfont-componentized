import { createRoot } from "react-dom/client";

import IconFont, { IconFontAnonymousIconfont, IconFontBriefcase, IconFontCanjuYongcan, IconFontJia } from "../__tests__/output.spec.1";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
    <div>
        <div>
            <IconFont name="jia" size={16}></IconFont>
            <IconFont name="anonymous-iconfont" size={32}></IconFont>
            <IconFont name="briefcase" style={{ width: 64, height: 64 }}></IconFont>
            <IconFont name="canju-yongcan" className="icon"></IconFont>
        </div>
        <div>
            <IconFontJia size={16}></IconFontJia>
            <IconFontAnonymousIconfont size={32}></IconFontAnonymousIconfont>
            <IconFontBriefcase style={{ width: 64, height: 64 }}></IconFontBriefcase>
            <IconFontCanjuYongcan className="icon"></IconFontCanjuYongcan>
        </div>
    </div>,
);
