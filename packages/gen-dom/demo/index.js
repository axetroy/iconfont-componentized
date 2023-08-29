import IconFontAnonymousIconfont from "../__tests__/output.spec.1/IconFontAnonymousIconfont.js";
import IconFontBriefcase from "../__tests__/output.spec.1/IconFontBriefcase.js";
import IconFontCanjuYongcan from "../__tests__/output.spec.1/IconFontCanjuYongcan.js";
import IconFontJia from "../__tests__/output.spec.1/IconFontJia.js";
import IconFontJiesuan from "../__tests__/output.spec.1/IconFontJiesuan.js";
import IconFont from "../__tests__/output.spec.1/index.js";

document.body.appendChild(IconFontAnonymousIconfont({ size: 16 }));
document.body.appendChild(IconFontBriefcase({ size: 32 }));
document.body.appendChild(IconFontCanjuYongcan({ size: 48 }));
document.body.appendChild(IconFontJia({ size: 64 }));
document.body.appendChild(IconFontJiesuan({ size: 96, className: "test-font", color: "red" }));

document.body.appendChild(IconFont({ name: "anonymous-iconfont" }));
document.body.appendChild(IconFont({ name: "briefcase" }));
document.body.appendChild(IconFont({ name: "canju-yongcan" }));
document.body.appendChild(IconFont({ name: "jia" }));
document.body.appendChild(IconFont({ name: "jiesuan" }));
