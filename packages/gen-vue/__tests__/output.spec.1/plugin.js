// generate by iconfont-componentized

import IconFontJia from './IconFontJia'
import IconFontBriefcase from './IconFontBriefcase'
import IconFontAnonymousIconfont from './IconFontAnonymousIconfont'
import IconFontJiesuan from './IconFontJiesuan'
import IconFontCanjuYongcan from './IconFontCanjuYongcan'
import IconFont from './index';

const IconFontPlugin = {
    install(Vue) {
        Vue.component('IconFontJia', IconFontJia)
        Vue.component('IconFontBriefcase', IconFontBriefcase)
        Vue.component('IconFontAnonymousIconfont', IconFontAnonymousIconfont)
        Vue.component('IconFontJiesuan', IconFontJiesuan)
        Vue.component('IconFontCanjuYongcan', IconFontCanjuYongcan)
        Vue.component('IconFont', IconFont);
    }
}

export default IconFontPlugin;
