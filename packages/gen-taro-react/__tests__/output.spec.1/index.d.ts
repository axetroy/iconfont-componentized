// generate by iconfont-componentized

import React from 'react';
import { ImageProps } from '@tarojs/components';

export type IconFontName = 'jia' | 'briefcase' | 'anonymous-iconfont' | 'jiesuan' | 'canju-yongcan';
export declare var names: Array<string>;

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

declare var IconFont: React.FC<Omit<ImageProps, "src"> & { name: IconFontName, size?: number | string, color?: string }>;

export default IconFont;
