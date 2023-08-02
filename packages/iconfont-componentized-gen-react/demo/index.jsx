import { createRoot } from "react-dom/client";
import IconFont, { IconFontJia } from "../__tests__/output.spec.1";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
    <div>
        <div>
            IconFont: <IconFont name="jia" style={{ width: 20, height: 20 }}></IconFont>
        </div>
        <div>
            IconFontJia: <IconFontJia style={{ width: 20, height: 20 }}></IconFontJia>
        </div>
    </div>,
);
