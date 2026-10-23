<template>
    <div class="bg-zinc-950 min-h-screen">
        <div class="flex gap-8">
            <aside class="max-w-xs flex-1 bg-zinc-900 border-r border-zinc-800 h-screen flex flex-col">
                <div class="bg-zinc-800 p-5 text-center">
                    <h3 class="text-xl text-rose-400 font-semibold">Админ-панель</h3>
                </div>
                <div class="flex flex-col justify-between px-6 py-4 h-full">
                    <nav class="flex flex-col gap-4">
                        <NuxtLink to="/admin/game-list"
                            class="px-3 py-2 rounded-lg text-md font-medium text-slate-300 hover:text-rose-400 hover:bg-slate-800/50 transition-all">
                            Список игр</NuxtLink>
                        <NuxtLink to="/admin/create-game"
                            class="px-3 py-2 rounded-lg text-md font-medium text-slate-300 hover:text-rose-400 hover:bg-slate-800/50 transition-all">
                            Создать игры</NuxtLink>
                        <NuxtLink to="/admin/users"
                            class="px-3 py-2 rounded-lg text-md font-medium text-slate-300 hover:text-rose-400 hover:bg-slate-800/50 transition-all">
                            Пользователи</NuxtLink>
                        <NuxtLink to="/admin/tickets"
                            class="px-3 py-2 rounded-lg text-md font-medium text-slate-300 hover:text-rose-400 hover:bg-slate-800/50 transition-all">
                            Заявки</NuxtLink>
                    </nav>
                    <button>
                        Выйти
                    </button>
                </div>
            </aside>

            <main class="flex-1 p-12 overflow-y-auto">
                <slot />
            </main>
        </div>
    </div>
</template>