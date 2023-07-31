<template>
    <!-- // generate by iconfont-gen-react -->
    <IconFontJia v-if="name === 'jia'" v-bind="$attrs" v-on="$listeners" />
    <IconFontBriefcase v-else-if="name === 'briefcase'" v-bind="$attrs" v-on="$listeners" />
    <IconFontAnonymousIconfont v-else-if="name === 'anonymous-iconfont'" v-bind="$attrs" v-on="$listeners" />
    <IconFontJiesuan v-else-if="name === 'jiesuan'" v-bind="$attrs" v-on="$listeners" />
    <IconFontCanjuYongcan v-else-if="name === 'canju-yongcan'" v-bind="$attrs" v-on="$listeners" />
    <div v-else style="display: none" v-bind="$attrs" v-on="$listeners"></div>
</template>

<script>
import IconFontJia from './IconFontJia.vue'
import IconFontBriefcase from './IconFontBriefcase.vue'
import IconFontAnonymousIconfont from './IconFontAnonymousIconfont.vue'
import IconFontJiesuan from './IconFontJiesuan.vue'
import IconFontCanjuYongcan from './IconFontCanjuYongcan.vue'

export default {
    name: "icon-font",
    components: {
        IconFontJia: IconFontJia,
        IconFontBriefcase: IconFontBriefcase,
        IconFontAnonymousIconfont: IconFontAnonymousIconfont,
        IconFontJiesuan: IconFontJiesuan,
        IconFontCanjuYongcan: IconFontCanjuYongcan,
    },
    props: {
        name: String
    }
}
</script>
