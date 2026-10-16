<template>
  <footer class="bg-zinc-900 border-t border-zinc-800 text-slate-400">
    <UContainer class="h-16 flex items-center justify-between text-sm">
        
      <div class="flex flex-col gap-2 text-md">
        <span>Key<span class="text-primary">Store</span></span>
        <span class=" text-slate-500"> Все права защищены 2026</span>
      </div>

      <div class="flex gap-4 text-xs">
        <NuxtLink to="/catalog" class="hover:text-rose-400 transition-colors">Каталог</NuxtLink>
        <NuxtLink to="/delivery" class="hover:text-rose-400 transition-colors">О нас</NuxtLink>
        <NuxtLink to="/contacts" class="hover:text-rose-400 transition-colors">Контакты</NuxtLink>
      </div>

    </UContainer>
  </footer>
</template>
