// PASTA ONDE FICARÁ SALVO OS DADOS DO USUÁRIO E FARÁ AS BUSCAS EXTERNAS.
console.log("Script de dados carregado com sucesso!")

// RF02 FUNÇÃO ASSÍNCRONA COM FETCH PARA AS VAGAS.JSON
// FR13 FETCH DAS VAGAS USANDO TRY/CATCH 
export default async function fetchVagas() {
    const dataURL = "./assets/data/vagas.json"

    try {
        const response = await fetch(dataURL)

        if (response.ok != true) {
            throw new Error(`Erro ao carregar arquivo: ${response.status}`)
        }

        const vagas = await response.json()

        return vagas
    } catch (error) {
        console.error("Erro ao consultar os dados das vagas", error)
        throw error
    }
}

// RF14 PERSISTÊNCIA COM LOCALSTORAGE <==> SETITEM/GETITEM
const form = document.getElementById("perfil-candidato")
const listaKey = "perfil-candidato"

const lista = []

let salvarCandidato = localStorage.getItem("listaKey")

if (salvarCandidato == null) {
    localStorage.setItem(listaKey, "Nenhum dado salvo!")
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
})