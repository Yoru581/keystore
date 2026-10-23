<script setup lang="ts">
import { ref } from 'vue';

const email = ref('')
const password = ref('')

const handleRegister = async () => {
    try {
        await $fetch('/api/auth/register', {
            method: "POST",
            body: {
                email: email.value, password: password.value
            }
        })
    } catch (e) {
        console.log(e)
    }
}
</script>

<template>
    <div class="flex items-center justify-center mt-24">
        <form @submit.prevent="handleRegister"
            class="p-6 bg-zinc-900 w-full max-w-sm border border-zinc-800 rounded-xl">
            <div class="text-center">
                <h1 class="text-xl font-semibold">Вход в аккаунт</h1>
            </div>

            <div class="flex flex-col gap-6 mt-8">
                <UFormField label="Электронная почта" required class="text-xs text-zinc-500">
                    <UInput v-model="email" type="email" placeholder="example@mail.ru" icon="i-heroicons-envelope"
                        size="xl" class="mt-1 w-full" />
                </UFormField>

                <UFormField label="Пароль" required class="text-xs text-zinc-500">
                    <UInput v-model="password" type="password" placeholder="********" icon="i-heroicons-lock-closed"
                        class="w-full mt-1" size="xl" />
                </UFormField>

                <UFormField label="Повторите пароль" required class="text-xs text-zinc-500">
                    <UInput v-model="password" type="password" placeholder="********" icon="i-heroicons-lock-closed"
                        class="w-full mt-1" size="xl" />
                </UFormField>

                <UButton type="submit" color="primary"
                    class="w-full text-white justify-center text-lg font-bold py-2 rounded-xl mt-2 ">
                    Зарегистрироваться
                </UButton>
            </div>
        </form>
    </div>
</template>