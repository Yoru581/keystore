<script setup>
defineProps({
    game: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <NuxtLink :to="`/game/${game.id}`">
        <div
            class="bg-zinc-900 flex flex-col h-full border border-zinc-800 rounded-xl overflow-hidden hover:border-rose-500 transition-colors duration-300">
            <div class="relative aspect-square overflow-hidden bg-zinc-800">
                <img :src="game.image" :alt="game.title" class="w-full h-full object-cover" />
                <span v-if="game.discount"
                    class="absolute top-3 right-3 bg-rose-500 text-slate-100 text-xs font-bold px-2 py-1 rounded-md">
                    {{ game.discount }}
                </span>
            </div>

            <div class="p-4 flex flex-col grow justify-between gap-1">
                <span class="text-xl font-semibold text-rose-400">
                    {{ game.price }}
                </span>
                <h3 class="font-bold text-slate-100 mt-1">
                    {{ game.title }}
                </h3>
                <p class="mt-1 text-xs text-slate-400  line-clamp-2">
                    {{ game.sales_count || 'Количевство продаж' }}
                </p>
            </div>
        </div>
    </NuxtLink>
</template>
