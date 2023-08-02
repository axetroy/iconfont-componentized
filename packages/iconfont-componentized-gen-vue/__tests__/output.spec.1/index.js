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
        name: String,
        required: true
    },
    render(h) {
        switch (this.name) {
            case "jia": return h("IconFontJia", { attrs: this.$attrs });
            case "briefcase": return h("IconFontBriefcase", { attrs: this.$attrs });
            case "anonymous-iconfont": return h("IconFontAnonymousIconfont", { attrs: this.$attrs });
            case "jiesuan": return h("IconFontJiesuan", { attrs: this.$attrs });
            case "canju-yongcan": return h("IconFontCanjuYongcan", { attrs: this.$attrs });
            default:
                return h("div", {"attrs":{"style":{"display":"none"}, ...this.$attrs}});
        }
    }
}
