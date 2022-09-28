import { UserBusiness } from "../src/business/UserBusiness"
import { BaseError } from "../src/errors/BaseError"
import { ParamsError } from "../src/errors/ParamsError"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"

describe("Testando a UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
        const input: ISignupInputDTO = {
            email: "fulano@gmail.com",
            name: "Fulano",
            password: "fulano123"
        }

        const response = await userBusiness.signup(input)
        expect(response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })

    test("Um token é retornado quando o login é bem-sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })

    

    test("Erro quando 'password' for incorreto", async () => {
        expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "astrodev@gmail.com",
                password: "bananinha123"
            }

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Password incorreto")
            }
        }
    })

    test("Erro quando 'email' for diferente de string", async () => {
        expect.assertions(2)

        try {
            const input = {
                email: 1234,
                password: "bananinha123"
            } as any

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        }
    })

    test("Erro quando 'password' for diferente de string", async () => {
        expect.assertions(2)

        try {
            const input = {
                email: "astrodev@gmail.com",
                password: 1234
            } as any

            await userBusiness.login(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido")
            }
        }
    })

    // Signup

    test("Erro quando 'password' possuir menos de 6 caracteres", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                email: "fulano@gmail.com",
                name: "Fulano",
                password: "123"
            }

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres")
            }
        }
    })

    test("Erro no cadastro quando 'name' for diferente do tipo string", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: undefined,
                email: "fulano@gmail.com",
                password: "fulano123"
            } as any

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'name' inválido")
            }
        }
    })

    test("Erro quando 'name' tiver menos de 3 caracteres", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                name: "oi",
                email: "fulano@gmail.com",
                password: "fulano123"
            } 

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'name' inválido: mínimo de 3 caracteres")
            }
        }
    })

    test("Erro quando email tiver fora do padrão", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                name: "osdfdsf",
                email: "gmail.com",
                password: "fulano123"
            }

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        }
    })

    test("Erro quando email já estiver cadastrado", async () => {
        expect.assertions(2)

        try {
            const input: ISignupInputDTO = {
                name: "osdfdsf",
                email: "astrodev@gmail.com",
                password: "fulano123"
            }

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Email já cadastrado")
            }
        }
    })

    test("Erro no cadastro quando o email for diferente do tipo string", async () => {
        expect.assertions(2)

        try {
            const input = {
                name: "lalala",
                email: 1234,
                password: "fulano123"
            } as any

            await userBusiness.signup(input)

        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Parâmetro 'email' inválido")
            }
        }
    })
})
