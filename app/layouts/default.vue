<script setup lang="ts">
import AppFooter from '~/components/AppFooter.vue';

</script>

<template>
    <div class="bg-zinc-950 min-h-screen flex flex-col">
        <AppHeader />
        <main class="grow py-8">
            <UContainer>
                <slot></slot>
            </UContainer>
        </main>
        <AppFooter />
    </div>
</template> 