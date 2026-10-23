import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const games = sqliteTable('games', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    title: text('title').notNull(),
    description: text('description').notNull(),
    price: integer('price').notNull(),
    rating: real('rating').default(0.0).notNull(),
    reviewsCount: integer('reviews_count').default(0).notNull(),
    salesCount: integer('sales_count').default(0).notNull()
})

export const user = sqliteTable('user', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    email: text('email').notNull().unique(),
    passwordHash: text('password_hash').notNull(),
})