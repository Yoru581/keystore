<script setup lang="ts">

import type { TableColumn } from '@nuxt/ui'

const UBadge = resolveComponent('UBadge')

type Payment = {
    id: string
    product: string
    date: string
    status: 'paid' | 'failed' | 'pending'
    amount: number
}

const data = ref<Payment[]>([
    {
        id: '1',
        product: 'Пополнение Steam',
        date: '2024-03-11T15:30:00',
        status: 'paid',
        amount: 594
    }   
])

const columns: TableColumn<Payment>[] = [
    {
        accessorKey: 'id',
        header: 'ID заказа',
        cell: ({ row }) => `${row.getValue('id')}`
    },
    {
        accessorKey: 'product',
        header: 'Товар',
        cell: ({ row }) => `${row.getValue('product')}`
    },
    {
        accessorKey: 'date',
        header: 'Дата',
        cell: ({ row }) => {
            return new Date(row.getValue('date')).toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            })
        }
    },
    {
        accessorKey: 'status',
        header: 'Статус',
        cell: ({ row }) => {
            const color = {
                paid: 'success' as const,
                failed: 'error' as const,
                pending: 'neutral' as const
            }[row.getValue('status') as string]

            return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () =>
                row.getValue('status')
            )
        }
    },
    {
        accessorKey: 'amount',
        header: 'Сумма',
        meta: {
            class: {
                th: 'text-right',
                td: 'text-right font-medium'
            }
        },
        cell: ({ row }) => {
            const amount = Number.parseFloat(row.getValue('amount'))
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'RUB'
            }).format(amount)
        }
    }
]
</script>

<template>
    <div v-if="data" class="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
        <h1>История заказов</h1>
        <UTable :data="data" :columns="columns" class="flex-1 mt-5" />
    </div>
    <div v-else>
        <h3 class="text-center mt-12 text-3xl">Вы не сделали еще ни одного заказа</h3>
    </div>
</template>