<script setup lang="ts">
import { HdButton, HdButtonGroup } from './components';
import { mdiCodeBraces, mdiFileOutline, mdiChip, mdiHomeOutline } from '@mdi/js'
// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'
import { ref } from 'vue';

const nav = {
    'Github': mdiCodeBraces,
    'Guide': mdiFileOutline,
    'Components': mdiChip,
}, navHeader = {
    'Home': mdiHomeOutline,
    ...nav
}

const gotoSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({behavior: 'smooth'});
}
</script>
<template>
    <header class="d-flex ai-center jc-between wrap">
        <div class="h2">Hedera UI</div>
        <nav class="d-flex gap-1">
            <hd-button
                plain
                size="large"
                @click="gotoSection(label)"
                v-for="(icon, label) in navHeader"
            >
                <template #icon>
                    <svg-icon type="mdi" :size="20" :path="icon"/>
                </template>
                {{ label }}
            </hd-button>
        </nav>
    </header>
    <main class="d-flex fd-column gap-2">
        <article class="d-flex fd-column ai-center gap-2 wrap hero" id="Home">
            <h1 class="h1">Hedera UI</h1>
            <p class="p">A library of components for Vue 3<br>with an elegant ivy design</p>
            <div class="d-flex gap-1 wrap">
            <hd-button
                size="large"
                type="primary"
                @click="gotoSection(label)"
                v-for="(icon, label) in {...nav}"
            >
                <template #icon>
                    <svg-icon type="mdi" :size="20" :path="icon"/>
                </template>
                {{ label }}
            </hd-button>
            </div>
        </article>
        <article>
            <div class="content p">
                text. <br>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora aspernatur dignissimos dolore ab, amet est quo odit ad, maiores animi voluptatum, quae repudiandae et quam impedit laudantium excepturi vero consectetur.
                <br>
            </div>
        </article>
    </main>
</template>
<style scoped>
main {
    padding-top: 150px;
    padding-inline: 24px;
    background: linear-gradient(
        90deg,
        var(--primary-50),
        var(--secondary-50)
    );
}
header {
    padding: 12px 24px;
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    backdrop-filter: blur(3px);
    border-bottom: solid 1px var(--primary-100);
}
article {
    background: linear-gradient(
        90deg,
        var(--primary-100),
        var(--secondary-100)
    );
    width: max-content;
    margin-inline: auto;
    border-radius: .75rem;
    padding: .25rem;
    box-sizing: border-box;
    width: 100%;
}
article .content {
    background: var(--background);
    border-radius: .25rem;
    padding: 1rem;
}
article:has(.content) {
    border: solid .2rem var(--background);
}
.hero {
    padding: 3.5% 15%;
    width: max-content;
}
.hero :is(h1, p) {
    margin: 0;
}
.hero p {
    text-align: center;
    font-size: 18px;
}
</style>