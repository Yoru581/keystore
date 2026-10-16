<script setup lang="ts">
const orders = ref(true)
</script>

<template>
    <div v-if="orders" class="">
        <div class="grid grid-cols-12 gap-12">
            <div class="flex flex-col items-center gap-8 col-span-6">
                <h2>Мои ключи</h2>
                <div class="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-xl p-6 flex gap-8">
                    <div class="w-40 h-40 rounded-2xl overflow-hidden">
                        <img src="" alt="" class="w-full h-full aspect-square overflow-hidden bg-zinc-800 object-cover">
                    </div>
                    <div class="flex flex-col gap-2">
                        <h4 class="text-xl font-bold">TITLE</h4>
                        <span>Статус: ожидание</span>
                        <span>Дата: </span>

                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center gap-8 col-span-6">
                <h2>Мои пополнения</h2>
                <div class="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-xl p-6 flex gap-8">
                    <div class="w-40 h-40 rounded-2xl overflow-hidden">
                        <img src="" alt="" class="w-full h-full aspect-square overflow-hidden bg-zinc-800 object-cover">
                    </div>
                    <div class="flex flex-col gap-2">
                        <h4 class="text-xl font-bold">TITLE</h4>
                        <span>Статус: ожидание</span>
                        <span>Дата: </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <h3 class="text-center mt-12 text-3xl">Вы не сделали еще ни одного заказа</h3>
    </div>
</template>