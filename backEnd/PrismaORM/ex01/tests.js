const {
    getAllEvents,
    createEvent,
    getEventByName,
    getEventsByDate,
    sellTicket,
} = require("./functions")

async function tests() {
    try {
        // Criar um evento
        // await createEvent("Show 2", "2027-01-02", 100)
        // Listar todos os eventos
        //const result = await getAllEvents()
        //console.log("Todos os eventos:", result)
        // Buscar evento pelo nome
        // const result2 = await getEventByName("Show 2")
        // console.log("Evento encontrado:", result2)
        // Buscar eventos por data
        // const result3 = await getEventsByDate("2027-01-02")
        // console.log("Eventos na data:", result3)
        // Vender um ingresso
        // const result4 = await sellTicket(1)
        // console.log("Venda realizada:", result4)
    } catch (error) {
        console.error("Erro durante os testes:", error.message)
    } finally {
        process.exit(0)
    }
}

tests()
