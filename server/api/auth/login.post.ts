import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { user } from "~~/server/database/schema";

export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event);

    if (!(email && password)) {
        throw createError({ statusCode: 400, message: "Поля не должны быть пустыми" })
    }

    const existingUser = await db.query.user.findFirst({
        where: eq(user.email, email)
    })

    if (!existingUser) {
        throw createError({ statusCode: 401, message: "Неверный Email или пароль" })
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.passwordHash)

    if (!isPasswordCorrect) {
        throw createError({
            statusCode: 401, message: "Неверный Email или пароль"
        })
    }

    return {
        success: true,
        message: 'Вход успешно выполнен'
    }
})