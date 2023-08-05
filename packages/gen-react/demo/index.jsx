import { createRoot } from "react-dom/client";
import IconFont, { IconFontJia, IconFontAnonymousIconfont, IconFontBriefcase, IconFontCanjuYongcan } from "../__tests__/output.spec.1";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
    <div>
        <div>
            <IconFont name="jia" style={{ width: 20, height: 20 }}></IconFont>
            <IconFont name="anonymous-iconfont" style={{ width: 20, height: 20 }}></IconFont>
            <IconFont name="briefcase" style={{ width: 20, height: 20 }}></IconFont>
            <IconFont name="canju-yongcan" style={{ width: 20, height: 20 }}></IconFont>
        </div>
        <div>
            <IconFontJia style={{ width: 20, height: 20 }}></IconFontJia>
            <IconFontAnonymousIconfont style={{ width: 20, height: 20 }}></IconFontAnonymousIconfont>
            <IconFontBriefcase style={{ width: 20, height: 20 }}></IconFontBriefcase>
            <IconFontCanjuYongcan style={{ width: 20, height: 20 }}></IconFontCanjuYongcan>
        </div>
    </div>,
);
