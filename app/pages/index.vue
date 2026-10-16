<script setup lang="ts">
const games = ref([
    { id: 1, title: 'Cybepunk 2077', price: '2499 ₽', discount: '-50%', image: '' },
    { id: 2, title: 'The Witcher 3', price: '1199 ₽', image: '' },
    { id: 3, title: 'Elden Ring', price: '3999 ₽', discount: '-75%', image: '' },
    { id: 4, title: 'Hades II', price: '1499 ₽', image: '' },
])
</script>

<template>
    <div class="space-y-6">
        <h2 class="text-xl font-bold text-slate-100">
            Популярные игры
        </h2>

        <div class="grid grid-cols-4 gap-6">
            <GameCard v-for="item in games" :key="item.id" :game="item" />
        </div>
    </div>
</template>