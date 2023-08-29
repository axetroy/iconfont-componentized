<template>
    <div>
        <div>
            <IconFont name="jia" :size="24" @click="onClick()" />
            <IconFont name="anonymous-iconfont" size="32px" />
            <IconFont name="briefcase" size="48" />
            <IconFont name="canju-yongcan" class="test-class" size="64" color="red" />
        </div>
        <div>
            <IconFontJia :size="24" @click="onClick()"></IconFontJia>
            <IconFontAnonymousIconfont size="32px"></IconFontAnonymousIconfont>
            <IconFontBriefcase size="48"></IconFontBriefcase>
            <IconFontCanjuYongcan class="test-class" size="64" color="red"></IconFontCanjuYongcan>
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
