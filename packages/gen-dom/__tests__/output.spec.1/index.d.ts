// generate by iconfont-componentized

export type IconFontName = 'jia' | 'briefcase' | 'anonymous-iconfont' | 'jiesuan' | 'canju-yongcan';

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

interface IconFontProps {
    name: IconFontName
}

declare var IconFont: (props: IconFontProps) => SVGElement;

export default IconFont;
