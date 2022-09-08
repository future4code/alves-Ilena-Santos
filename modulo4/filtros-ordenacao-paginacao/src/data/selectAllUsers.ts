import { connection } from "../connection"

// Exeercicio 1
// a)
export async function selectAllUsersByName(name: string): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       WHERE name LIKE "%${name}%"
    `)

    return result[0]
}

// b)
export async function selectAllUsersByType(type: string): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       WHERE type LIKE "%${type}%"
    `)

    return result[0]
}

// Exercicio 2 
export async function selectAllUsersByOrder(orderBy: string, order: string): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       ORDER BY ${orderBy} ${order}
    `)

    return result[0]
}

// Exercicio 3
export async function selectAllUsersByLimit(page: number): Promise<any> {
    const size = 5
    const offset = size * (page - 1)
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       ORDER BY name ASC
       LIMIT ${size}
       OFFSET ${offset}
    `)

    return result[0]
}

// Exercicio 4
export async function selectAllUsers(page: number, filterBy: string, filter: string, orderBy: string, order: string): Promise<any> {
    const size = 5
    const offset = size * (page - 1)
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       WHERE ${filterBy} LIKE "%${filter}%"
       ORDER BY ${orderBy} ${order}
       LIMIT ${size}
       OFFSET ${offset}
    `)

    return result[0]
}