<script setup>
const games = ref()
</script>

<template>
    <div class="space-y-6">
        <h2 class="text-xl font-bold text-slate-100">
            Избранное
        </h2>

        <div v-if="games" class="grid grid-cols-4 gap-6">
            <GameCard v-for="item in games" :key="item.id" :game="item" />
        </div>

        <div v-else>
            <h3 class="text-center mt-12 text-3xl">Страница избранного пуста</h3>
        </div>
    </div>
</template>