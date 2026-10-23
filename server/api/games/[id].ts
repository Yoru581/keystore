import { games } from "../../database/schema";
import { useDb } from "../../utils/db";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
    const db = useDb();
    const method = event.method;
    const id = getRouterParam(event, 'id')

    if (method === 'GET') {
        const getGameById = await db.select().from(games).where(eq(games.id, Number(id))).get();

        if (!getGameById) {
            throw createError({
                statusCode: 404,
                message: 'Игра с этим ID не найдена'
            });
        }

        return getGameById;
    }

    if (method === 'DELETE') {
        const deleteGame = await db.delete(games).where(eq(games.id, Number(id))).returning()

        if (deleteGame.length === 0) {
            throw createError({
                statusCode: 404,
                message: 'Игра с этим ID не найдена'
            });
        }
    }
})