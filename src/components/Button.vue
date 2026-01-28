<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    type?: 'default' | 'primary' | 'secondary',
    round?: boolean,
    nativeType?: 'button' | 'submit' | 'reset',
    circle?: boolean,
    size?: 'small' | 'medium' | 'large',
}>(), {
    type: 'default',
    round: false,
    nativeType: 'button',
    circle: false,
    size: 'medium',
});
const classButton = computed(() => {
    let classes: string[] = [];

    if (props.type !== 'default') classes.push(props.type);

    if (props.round) classes.push('round');

    if (props.circle) classes.push('circle');

    if (props.size !== 'medium') classes.push(props.size)

    return classes.join(' ');
})
/* TODOS
- ghost
- plain
- disabled
- width
- tag
- loading
- loading-icon
- button groups
*/
</script>
<template>
<button :class="classButton" :type="nativeType">
    <slot name="icon"/>
    <span v-if="$slots.default">
        <slot/>
    </span>
</button>
</template>
<style scoped>
button {
    --size: 32px;
    font-family: var(--font-regular);
    font-size: 14px;
    display: inline-flex;
    gap: 8px;
    align-items: center;
    padding: 6px 10px;
    height: var(--size);
    box-sizing: border-box;
    transition: .1s ease-out;
    border: none;
    border-radius: 8px;
    color: var(--text-primary);
    background-color: var(--gray-100);
    user-select: none;
    justify-content: center;
    box-shadow: var(--shadow-inner);
}
button:hover {
    background-color: var(--gray-300);
}
button:active {
    background-color: var(--gray-400);
}
.primary {
    background-color: var(--primary-500);
    color: var(--text-dark);
}    
.primary:hover {
    background-color: var(--primary-600);
}
.primary:active {
    background-color: var(--primary-700);
}
.secondary {
    background-color: var(--secondary-600);
    color: var(--text-dark);
}
.secondary:hover {
    background-color: var(--secondary-700);
}
.secondary:active {
    background-color: var(--secondary-800);
}
.round {
    border-radius: 100px;
}
.circle {
    border-radius: 100px;
    aspect-ratio: 1 / 1;
    padding: 0 !important;
}
.large {
    --size: 40px;
    padding: 8px 14px;
    font-size: 16px;
}
.small {
    --size: 28px;
    padding: 4px 8px;
    font-size: 13px;
    gap: 6px;
}
</style>