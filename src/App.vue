<script setup lang="ts">
import { HdButton } from './components';
import { mdiCodeBraces, mdiFileOutline, mdiChip } from '@mdi/js'
// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'
</script>
<template>
    <header>
        <div class="h2">Hedera UI</div>
        <nav>
            
        </nav>
    </header>
    <main>
        <section class="d-flex fd-column ai-center gap-1" id="home">
            <h1 class="h1">Hedera UI</h1>
            <p class="p">A library of components for Vue 3 with an elegant ivy design</p>
            <div class="d-flex gap-1">
                <hd-button>
                    <template #icon>
                        <svg-icon type="mdi" :size="20" :path="mdiCodeBraces"/>
                    </template>
                    GitHub
                </hd-button>
                <hd-button>
                    <template #icon>
                        <svg-icon type="mdi" :size="20" :path="mdiFileOutline"/>
                    </template>
                    Guide
                </hd-button>
                <hd-button>
                    <template #icon>
                        <svg-icon type="mdi" :size="20" :path="mdiChip"/>
                    </template>
                    Components
                </hd-button>
            </div>
        </section>
    </main>
</template>