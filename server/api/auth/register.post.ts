import bcrypt from 'bcrypt'
import { eq } from "drizzle-orm";
import { user } from "~~/server/database/schema";

export default defineEventHandler(async (event) => {
    const { email, password } = await readBody(event);

    if (!(password && email)) {
        throw createError({
            statusCode: 409,
            message: 'Поля не должны быть пустыми'
        })
    }

    const existingUser = await db.query.user.findFirst({
        where: eq(user.email, email)
    })

    if (existingUser) {
        throw createError({
            statusCode: 400,
            message: 'Пользователь с таким Email существует'
        })
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await db.insert(user).values({
        email: email,
        passwordHash: hashPassword
    })

    return {
        succes: 'true',
        message: 'Регистрация успешная'
    }
})