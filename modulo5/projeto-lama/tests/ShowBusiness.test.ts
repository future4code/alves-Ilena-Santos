import {ShowDatabaseMock} from "./mocks/ShowDatabaseMock"
import {IdGeneratorMock} from "./mocks/IdGeneratorMock"
import {HashManagerMock} from "./mocks/HashManagerMock"
import {AuthenticatorMock} from "./mocks/AuthenticatorMock"
import {ShowBusiness} from "../src/business/ShowBusiness"




describe("Testando a ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Uma mensagem de sucesso é retornada quando o show é cadastrado", async () => {
        const input = {
           band: "banda teste",
            starts_at: "2022-12-10",
            token: "token-mock-admin"
        }

        const response = await showBusiness.registerShow(input)
        expect(response.message).toBe("Show cadastrado com sucesso")
    })

    test("Uma lista de shows é retornada ", async () => {
        const input = {
            token: "token-mock-admin"
        }

        const response = await showBusiness.getShows(input)
        expect(response.shows.length).toBe(3)

    })

    test("Uma mensagem confirmando a reserva do show é retornada ", async () => {
        const input = {
            token: "token-mock-normal",
            showId: "201"
        }

        const response = await showBusiness.ticketReservation(input)
        expect(response.message).toBe("Reserva feita com sucesso")

    })

    test("Uma mensagem confirmando o cancelamento da reserva do show é retornada ", async () => {
        const input = {
            token: "token-mock-normal",
            showId: "201"
        }

        const response = await showBusiness.deleteReservation(input)
        expect(response.message).toBe("Reserva cancelada")

    })



})