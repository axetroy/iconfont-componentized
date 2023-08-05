// generate by iconfont-componentized

import { DefineComponent } from "vue";

import IconFontJia from './IconFontJia';
import IconFontBriefcase from './IconFontBriefcase';
import IconFontAnonymousIconfont from './IconFontAnonymousIconfont';
import IconFontJiesuan from './IconFontJiesuan';
import IconFontCanjuYongcan from './IconFontCanjuYongcan';

export { IconFontJia };
export { IconFontBriefcase };
export { IconFontAnonymousIconfont };
export { IconFontJiesuan };
export { IconFontCanjuYongcan };

type SvgProps = JSX.IntrinsicElements['svg'];

export type IconNames = "jia" | "briefcase" | "anonymous-iconfont" | "jiesuan" | "canju-yongcan"

export interface IconFontProps extends SvgProps {
    name: IconNames
}

declare const IconFont: DefineComponent<IconFontProps>;

export default IconFont;
