<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col gap-6">
        <div class="grid grid-cols-12 gap-8">
            <div class="col-span-2 rounded-xl overflow-hidden h-40">
                <img src="" alt="" class="aspect-square overflow-hidden bg-zinc-800 object-cover">
            </div>
            <div class="col-span-6">
                <div class="flex flex-col gap-6">
                    <div class="flex flex-col gap-6 ">
                        <h1 class="text-3xl font-semibold">TITLE</h1>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-4">
                                <div class="flex items-center gap-1">
                                    <UIcon name="i-heroicons-star" class="w-5 h-5 text-amber-400" />
                                    <span>4.9</span>
                                </div>

                                <div class="border-r border-white h-4"></div>

                                <div class="">
                                    <span>4920 продаж</span>
                                </div>

                                <div class="border-r border-white h-4"></div>

                                <div class="">
                                    <span>243 отзыва</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-1">
                                <UIcon name="i-heroicons-heart" class="w-5 h-5" />
                                <span class="text-md underline">В избранное</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8">
                        <h2 class="text-xl font-semibold">О товаре</h2>
                        <p class="mt-4">Какое-то описание</p>
                    </div>
                </div>
            </div>
            <div class="col-span-4">
                <div class=" bg-zinc-900 border-zinc-800 border rounded-xl p-4">
                    <div class="flex flex-col gap-2">
                        <span class="text-3xl font-bold">749 ₽</span>
                        <span class="font-bold">ShopStore</span>
                        <span class="text-sm text-slate-300">174K продаж</span>
                        <NuxtLink to="/buy" class="w-full py-4 text-center text-md bg-rose-600 rounded-xl mt-4">Купить
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-10 mt-12">
            <div class="col-span-6">
                <h3 class="text-xl font-semibold">Отзывы</h3>
                <div class="flex items-start gap-4 p-4">
                    <div
                        class="w-12 h-12 shrink-0 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800">
                        <UIcon name="i-heroicons-user" class="w-6 h-6 text-zinc-300" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="text-xs text-zinc-400 font">
                            12 октября 2026
                        </p>

                        <div class="flex items-center gap-0.5">
                            <UIcon name="i-heroicons-star" class="w-5 h-5 text-amber-400" />
                            <UIcon name="i-heroicons-star" class="w-5 h-5 text-amber-400" />
                            <UIcon name="i-heroicons-star" class="w-5 h-5 text-amber-400" />
                            <UIcon name="i-heroicons-star" class="w-5 h-5 text-amber-400" />
                            <UIcon name="i-heroicons-star" class="w-5 h-5 text-amber-400" />
                        </div>

                        <p class="flex items-center gap-1 text-sm font-medium text-slate-100 pt-0.5">
                            Минут 10 подождала, всё активировалось! Большое спасибо🫶🏻 с учетом последних событий,
                            продавец работает на 100 из 10! Добавляю в избранное
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>