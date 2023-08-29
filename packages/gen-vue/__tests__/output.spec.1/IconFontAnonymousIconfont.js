// generate by iconfont-componentized

export default {
    name: "IconFontAnonymousIconfont",
    props: {
        size: {
            type: [String, Number],
            default: 32
        },
        color: {
            type: String
        }
    },
    computed: {
        classNames({ $attrs }) {
            const classNameParts = ['icon-font', 'icon-font-anonymous-iconfont'];

            if ($attrs.className) {
                classNameParts.push($attrs.className);
            }

            return classNameParts.join(' ');
        }
    },
    render(h) {
        return (
            h("svg", { "attrs": {"viewBox": "0 0 1024 1024", "xmlns": "http://www.w3.org/2000/svg", ...(this.$attrs || {}), width: this.size, height: this.size, className: this.classNames, fill: this.color}, "on": {...(this.$listeners || {})} }, [
                h("path", { "attrs": {"d": "M512.017908 126.754892c-210.718189 0-381.527436 172.019819-381.527436 384.221802s170.809247 384.221802 381.527436 384.221802 381.543809-172.019819 381.543809-384.221802S722.736097 126.754892 512.017908 126.754892zM702.799022 522.063193c0 16.338107-13.149485 29.573549-29.352515 29.573549L350.606705 551.636742c-16.202007 0-29.335119-13.235442-29.335119-29.573549l0-29.53978c0-16.33913 13.132088-29.573549 29.335119-29.573549l322.839803 0c16.20303 0 29.352515 13.235442 29.352515 29.573549L702.799022 522.063193z"} })
            ])
        )
    }
}
