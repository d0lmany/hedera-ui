<script setup lang="ts">
import { mdiLoading } from '@mdi/js';
import { computed } from 'vue';
// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'

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
    round: false,
    nativeType: 'button',
    circle: false,
    size: 'medium',
    view: false,
    disabled: false,
    fillWidth: false,
    tag: 'button',
    loading: false,
    loadingIcon: mdiLoading,
});
const classButton = computed(() => {
    let classes: string[] = ['button'];

    if (props.type !== 'default') classes.push(props.type);

    if (props.round) classes.push('round');

    if (props.circle) classes.push('circle');

    if (props.size !== 'medium') classes.push(props.size)

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
.button {
    --size: 32px;
    font-family: var(--font-regular);
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 6px 10px;
    height: var(--size);
    box-sizing: border-box;
    border: none;
    border-radius: 8px;
    background: var(--gray-100);
    color: var(--text-primary);
    box-shadow: var(--shadow-inner);
    user-select: none;
    transition: background 0.1s ease-out;
    min-width: 70px;
}
.button:hover:not(:disabled) {
    background: var(--gray-300);
}
.button:active:not(:disabled) {
    background: var(--gray-400);
}
.button:disabled {
    cursor: not-allowed;
    box-shadow: none;
    color: var(--gray-400) !important;
}
.button:disabled:not(.plain) {
    background: var(--gray-100);
}
.primary {
    background: var(--primary-500);
    color: var(--text-dark);
}
.primary:hover:not(:disabled) {
    background: var(--primary-600);
}
.primary:active:not(:disabled) {
    background: var(--primary-700);
}
.secondary {
    background: var(--secondary-600);
    color: var(--text-dark);
}
.secondary:hover:not(:disabled) {
    background: var(--secondary-700);
}
.secondary:active:not(:disabled) {
    background: var(--secondary-800);
}
.plain {
    background: transparent;
    box-shadow: none;
}
.plain:hover:not(:disabled) {
    background: var(--blind-color-1);
}
.plain:active:not(:disabled) {
    background: var(--blind-color-2);
}
.plain.primary {
    color: var(--primary-400);
}
.plain.secondary {
    color: var(--secondary-400);
}
.large {
    --size: 40px;
    padding: 8px 14px;
    font-size: 16px;
    min-width: 90px;
}
.small {
    --size: 28px;
    padding: 4px 8px;
    font-size: 13px;
    min-width: 40px;
    gap: 6px;
}
.round,
.circle {
    border-radius: 100px;
}
.circle {
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