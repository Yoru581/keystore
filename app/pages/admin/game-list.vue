<script setup lang="ts">
setPageLayout('admin-layout')
import type { TableColumn } from '@nuxt/ui';
import type { IGame } from '~/types';

const { data: games, refresh } = await useFetch<IGame[]>('/api/games');

const columns: TableColumn<IGame & { actions?: string }>[] = [
    {
        accessorKey: 'id',
        header: '#',
        cell: ({ row }) => `${row.getValue('id')}`
    },
    {
        accessorKey: 'title',
        header: 'Название',
        cell: ({ row }) => `${row.getValue('title')}`
    },
    {
        accessorKey: 'description',
        header: 'Описание',
        cell: ({ row }) => `${row.getValue('description')}`
    },
    {
        accessorKey: 'price',
        header: 'Цена',
        cell: ({ row }) => {
            const amount = Number.parseFloat(row.getValue('price'))
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'RUB'
            }).format(amount)
        }
    },
    {
        accessorKey: 'rating',
        header: 'Рейтинг',
        cell: ({ row }) => `${row.getValue('rating')}`
    },
    {
        accessorKey: 'reviewsCount',
        header: 'Кол-ов отзывов',
        cell: ({ row }) => `${row.getValue('reviewsCount')}`
    },
    {
        accessorKey: 'salesCount',
        header: 'Кол-ов продаж',
        cell: ({ row }) => `${row.getValue('salesCount')}`
    },
    {
        accessorKey: 'actions',
        header: 'Удалить',
        cell: () => ''
    }
]

const deleteGame = async (id: string | number) => {
    await $fetch(`/api/games/${id}`, {
        method: 'DELETE'
    })

    await refresh()
}
</script>

<template>
    <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 w-full">
        <h1 class="text-xl font-bold text-rose-400">Список игр</h1>
        <UTable :columns="columns" :data="games" class="mt-5" row-key="id">
            <template #actions-cell="{ row }">
                <UButton icon="i-heroicons-trash" @click="deleteGame(row.original.id)" />
            </template>
        </UTable>
    </div>
</template>