// generate by iconfont-componentized

import IconFontJia from './IconFontJia'
import IconFontBriefcase from './IconFontBriefcase'
import IconFontAnonymousIconfont from './IconFontAnonymousIconfont'
import IconFontJiesuan from './IconFontJiesuan'
import IconFontCanjuYongcan from './IconFontCanjuYongcan'

export { IconFontJia };
export { IconFontBriefcase };
export { IconFontAnonymousIconfont };
export { IconFontJiesuan };
export { IconFontCanjuYongcan };

export default {
    name: "IconFont",
    components: {
        IconFontJia: IconFontJia,
        IconFontBriefcase: IconFontBriefcase,
        IconFontAnonymousIconfont: IconFontAnonymousIconfont,
        IconFontJiesuan: IconFontJiesuan,
        IconFontCanjuYongcan: IconFontCanjuYongcan,
    },
    props: {
        name: {
            type: String,
            required: true
        },
        size: {
            type: [String, Number],
            default: 32
        }
    },
    render(h) {
        switch (this.name) {
            case "jia": return h("IconFontJia", { "attrs": {...(this.$attrs || {})}, "props": {size: this.size}, "on": {...(this.$listeners || {})} });
            case "briefcase": return h("IconFontBriefcase", { "attrs": {...(this.$attrs || {})}, "props": {size: this.size}, "on": {...(this.$listeners || {})} });
            case "anonymous-iconfont": return h("IconFontAnonymousIconfont", { "attrs": {...(this.$attrs || {})}, "props": {size: this.size}, "on": {...(this.$listeners || {})} });
            case "jiesuan": return h("IconFontJiesuan", { "attrs": {...(this.$attrs || {})}, "props": {size: this.size}, "on": {...(this.$listeners || {})} });
            case "canju-yongcan": return h("IconFontCanjuYongcan", { "attrs": {...(this.$attrs || {})}, "props": {size: this.size}, "on": {...(this.$listeners || {})} });
            default:
                throw new Error(`IconFont's name must one of ["jia","briefcase","anonymous-iconfont","jiesuan","canju-yongcan"] but got "${this.name}"`)
        }
    }
}
