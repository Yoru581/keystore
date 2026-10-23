import { games } from "../../database/schema";
import { useDb } from "../../utils/db";

export default defineEventHandler(async (event) => {
    const db = useDb();
    const method = event.method;

    if (method === 'GET') {
        return await db.select().from(games)
    }

    if (method === 'POST') {
        const body = await readBody(event);

        const newGame = await db.insert(games).values({
            title: body.title,
            description: body.description,
            price: body.price,
            rating: body.rating,
            reviewsCount: body.reviewsCount,
            salesCount: body.salesCount
        }).returning();

        return newGame;
    }
})