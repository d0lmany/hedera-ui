<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    direction?: 'row' | 'column',
    size?: 'small' | 'medium' | 'large',
    type?: 'default' | 'primary' | 'secondary',
    plain?: boolean,
    round?: boolean,
}>(), {
    direction: 'row',
    size: 'medium',
    type: 'default',
})

const classGroup = computed(() => {
    const classes: string[] = [
        props.direction,
    ];

    if (props.size !== 'medium') classes.push(props.size);

    if (props.type !== 'default') classes.push(props.type);

    if (props.plain) classes.push('plain');

    if (props.round) classes.push('round');

    return classes.join(' ');
})
</script>
<template>
<div class="hd-button-group" :class="classGroup">
    <slot/>
</div>
</template>