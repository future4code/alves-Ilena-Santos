import {UserBusiness} from '../src/business/UserBusiness'
import {UserDatabaseMock} from "./mocks/UserDatabaseMock"

import { BaseError } from '../src/errors/BaseError'

describe("Testando a OrderBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock()
    )

    // Cases of success

    test("Uma mensagem de cadastro concluido é retornada", async () => {
        const input = {
            firstName: "João",
            lastName: "Silva",
            participation: 20
        }

        const response = await userBusiness.signup(input)

        expect(response.message).toBe("Usuário cadastrado com sucesso")
    })

    test("Uma lista de usuários é retornada", async () => {

        const response = await userBusiness.getUsers()

        expect(response.users.length).toBe(3)
    })

    // Cases of error

    test("Erro no parâmetro firstName", async () => {
        expect.assertions(2)

        try {
            const input = {
                firstName: "",
                lastName: "Silva",
                participation: 20
            }

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'first name' inválido")
            }
        }
    })

    test("Erro no parâmetro last name", async () => {
        expect.assertions(2)

        try {
            const input = {
                firstName: "João",
                lastName: "",
                participation: 20
            }

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'last name' inválido")
            }
        }
    })

    test("Erro no parâmetro participation", async () => {
        expect.assertions(2)

        try {
            const input = {
                firstName: "João",
                lastName: "Silva",
                participation: "fsdf"
            }

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'participation' inválido")
            }
        }
    })

    test("Erro quando a soma das participações de todos os usuários forem maiores que 100%", async () => {
        expect.assertions(2)

        try {
            const input = {
                firstName: "João",
                lastName: "Silva",
                participation: 90
            }

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'participation' inválido. A participação total dos usuários deve ser menor ou igual a 100%")
            }
        }
    })
})