<template>
    <div>
        <div>
            <IconFont name="jia" />
            <IconFont name="anonymous-iconfont" />
            <IconFont name="briefcase" />
            <IconFont name="canju-yongcan" />
        </div>
        <div>
            <IconFontJia></IconFontJia>
            <IconFontAnonymousIconfont></IconFontAnonymousIconfont>
            <IconFontBriefcase></IconFontBriefcase>
            <IconFontCanjuYongcan></IconFontCanjuYongcan>
        </div>
    </div>
</template>

<style>
svg {
    width: 20px;
    height: 20px;
}
</style>

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
};
</script>
