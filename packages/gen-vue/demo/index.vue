<template>
    <div>
        <div>
            <IconFont name="jia" :size="64" @click="onClick()" />
            <IconFont name="anonymous-iconfont" size="32px" />
            <IconFont name="briefcase" size="48" />
            <IconFont name="canju-yongcan" size="64" />
        </div>
        <div>
            <IconFontJia @click="onClick()"></IconFontJia>
            <IconFontAnonymousIconfont></IconFontAnonymousIconfont>
            <IconFontBriefcase></IconFontBriefcase>
            <IconFontCanjuYongcan></IconFontCanjuYongcan>
        </div>
    </div>
</template>

<script>
import IconFont, { IconFontJia, IconFontAnonymousIconfont, IconFontBriefcase, IconFontCanjuYongcan } from "../__tests__/output.spec.1";

export default {
    components: {
        IconFont,
        IconFontJia,
        IconFontAnonymousIconfont,
        IconFontBriefcase,
        IconFontCanjuYongcan,
    },
    methods: {
        onClick() {
            alert("click");
        },
    },
};
</script>
