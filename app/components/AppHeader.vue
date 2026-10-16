<script setup lang="ts"></script>

<template>
    <header class="bg-zinc-900/50 sticky top-0 z-50 border-b border-zinc-800">
        <UContainer class="h-16 flex items-center justify-between">
            <NuxtLink to="/" class="text-xl">
                <span>Key<span class="text-primary">Store</span></span>
            </NuxtLink>

            <div class="flex-1 max-w-xs">
                <UInput icon="i-heroicons-magnifying-glass" size="md" color="primary" variant="outline"
                    placeholder="Поиск товаров" class="w-full" />
            </div>

            <nav class="flex items-center gap-2">
                <NuxtLink to="/"
                    class="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-rose-400 hover:bg-slate-800/50 transition-all">
                    <UIcon name="i-heroicons-home" class="w-5 h-5" />
                    <span>Главная</span>
                </NuxtLink>
                <NuxtLink to="/topup"
                    class="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-rose-400 hover:bg-slate-800/50 transition-all">
                    <UIcon name="i-heroicons-home" class="w-5 h-5" />
                    <span>Пополнить Steam</span>
                </NuxtLink>
                <NuxtLink to="/orders"
                    class="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-rose-400 hover:bg-slate-800/50 transition-all">
                    <UIcon name="i-heroicons-shopping-bag" class="w-5 h-5" />
                    <span>Заказы</span>
                </NuxtLink>
                <NuxtLink to="/favorites"
                    class="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-rose-400 hover:bg-slate-800/50 transition-all">
                    <UIcon name="i-heroicons-heart" class="w-5 h-5" />
                    <span class="hidden md:inline">Избранное</span>
                </NuxtLink>

                <NuxtLink to="/auth/login"
                    class="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-rose-400 hover:bg-slate-800/50 transition-all">
                    <UIcon name="i-heroicons-user" class="w-5 h-5" />
                    <span>Войти</span>
                </NuxtLink>

                <NuxtLink to="/auth/register"
                    class="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-rose-400 hover:bg-slate-800/50 transition-all">
                    <UIcon name="i-heroicons-user" class="w-5 h-5" />
                    <span>Зарегистрироваться</span>
                </NuxtLink>
            </nav>
        </UContainer>
    </header>
</template>