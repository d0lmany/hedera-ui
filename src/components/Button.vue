<script setup lang="ts">
import { mdiLoading } from '@mdi/js';
import { computed } from 'vue';
// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon';

const props = withDefaults(defineProps<{
    type?: 'default' | 'primary' | 'secondary',
    round?: boolean,
    nativeType?: 'button' | 'submit' | 'reset',
    circle?: boolean,
    size?: 'small' | 'medium' | 'large',
    plain?: boolean,
    disabled?: boolean,
    fillWidth?: boolean,
    tag?: string,
    loading?: boolean,
    loadingIcon?: Element | string,
}>(), {
    type: 'default',
    nativeType: 'button',
    size: 'medium',
    disabled: false,
    tag: 'button',
    loadingIcon: mdiLoading,
});
const classButton = computed(() => {
    const classes: string[] = ['hd-button'];

    if (props.type !== 'default') classes.push(props.type);

    if (props.round) classes.push('round');

    if (props.circle) classes.push('circle');

    if (props.size !== 'medium') classes.push(props.size);

    if (props.plain) classes.push('plain');

    if (props.fillWidth) classes.push('w-full');

    if (props.loading) classes.push('loading');

    return classes.join(' ');
})
</script>
<template>
<component :is="tag" :class="classButton" :type="nativeType" :disabled="disabled">
    <slot
        name="icon"
        v-if="!loading"
    />
    <component
        v-else-if="typeof loadingIcon !== 'string'"
        :is="loadingIcon"
        class="loadingIcon"
    />
    <svg-icon
        v-else
        type="mdi"
        :size="20"
        :path="loadingIcon"
        class="loadingIcon"
    />
    <span v-if="$slots.default">
        <slot />
    </span>
</component>
</template>
<style scoped>
.hd-button:is(.circle, .round) {
    --border-radius: 100px;
}
.hd-button.circle {
    aspect-ratio: 1 / 1;
    padding: 0 !important;
}
.loadingIcon {
    animation: spin .8s linear infinite;
}
.loading {
    filter: brightness(.8);
    cursor: wait;
}
.plain.loading {
    background: var(--blind-color-1);
}
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>