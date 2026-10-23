<script setup lang="ts">
import type { GameCardPublic } from '~/types';

const { game } = defineProps<{
    game: GameCardPublic
}>()
</script>

<template>
    <NuxtLink :to="`/game/${game.id}`">
        <div
            class="bg-zinc-900 flex flex-col h-full border border-zinc-800 rounded-xl overflow-hidden hover:border-rose-500 transition-colors duration-300">
            <div class="relative aspect-square overflow-hidden bg-zinc-800">
                <img class="w-full h-full object-cover" />
            </div>

            <div class="p-4 flex flex-col grow justify-between gap-1">
                <span class="text-xl font-semibold text-rose-400">
                    {{ game.price }} ₽
                </span>
                <h3 class="font-bold text-slate-100 mt-1">
                    {{ game.title }}
                </h3>
                <p class="mt-1 text-xs text-slate-400  line-clamp-2">
                    Количевство продаж {{ game.salesCount }}
                </p>
            </div>
        </div>
    </NuxtLink>
</template>
