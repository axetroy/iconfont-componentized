// generate by iconfont-componentized

import React from 'react';
import { ImageProps } from '@tarojs/components';

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

declare var IconFont: React.FC<ImageProps & { name: IconFontName, size?: number | string }>;

export default IconFont;
