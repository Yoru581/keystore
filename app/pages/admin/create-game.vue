<script setup lang="ts">
setPageLayout('admin-layout')
import type { FormSubmitEvent } from '@nuxt/ui';
import { z } from 'zod';

const gameSchema = z.object({
    title: z.string().min(2, 'Название не должно быть короче 2-х символов'),
    description: z.string().min(15, 'Напишите описание на не менее 15 символов и не более 100').max(100),
    price: z.number().min(0, 'Цена не должна быть отрицательной'),
    rating: z.number().min(0).max(5).default(0),
    reviewsCount: z.number().default(0),
    salesCount: z.number().default(0)
})

type gameSchemaType = z.output<typeof gameSchema>

const state = ref<gameSchemaType>({
    title: '',
    description: '',
    price: 0,
    rating: 0,
    reviewsCount: 0,
    salesCount: 0
})

const uploadGame = async (event: FormSubmitEvent<gameSchemaType>) => {
    try {
        await $fetch('/api/games', {
            method: 'POST',
            body: event.data
        })
    } catch (error) {
        console.error('Ошибка при отправке:', error)
    }
}
</script>

<template>
    <div class="border border-zinc-800 bg-zinc-900 rounded-xl max-w-md p-6">
        <h2 class="text-xl text-rose-400 font-semibold">Создать новую игру</h2>
        <UForm :schema="gameSchema" :state="state" class="w-full flex flex-col gap-6 mt-8" @submit="uploadGame">
            <UFormField label="Название игры" name="title" required>
                <UInput v-model="state.title" placeholder="Название игры" class="w-full" />
            </UFormField>

            <UFormField label="Описание" name="description" required>
                <UTextarea v-model="state.description" placeholder="Краткое описание игры" class="w-full resize-none" />
            </UFormField>

            <UFormField label="Цена (₽)" name="price" required>
                <UInput v-model.number="state.price" type="number" placeholder="1499" class="w-full" />
            </UFormField>

            <div class="flex justify-end gap-3 pt-2">
                <UButton type="button" variant="ghost" to="/admin">
                    Отмена
                </UButton>
                <UButton type="submit">
                    Сохранить игру
                </UButton>
            </div>
        </UForm>
    </div>
</template>