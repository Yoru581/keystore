<script setup lang="ts">
import type { GameCardPublic } from '~/types';

const { data: games, refresh } = await useFetch<GameCardPublic[]>('/api/games');
</script>

<template>
    <div class="space-y-6">
        <h2 class="text-xl font-bold text-slate-100">
            Популярные игры
        </h2>

        <div class="grid grid-cols-4 gap-6">
            <GameCard v-for="game in games" :game="game" :key="game.id" />
        </div>
    </div>
</template>