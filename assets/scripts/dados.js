// PASTA ONDE FICARÁ SALVO OS DADOS DO USUÁRIO E FARÁ AS BUSCAS EXTERNAS.
console.log("Script de dados carregado com sucesso!")

export default async function fetchVagas() {
    const dataURL = "./assets/data/vagas.json"

    try {
        const response = await fetch(dataURL)

        if (response.ok !== true) {
            throw new Error(`Erro ao carregar arquivo: ${response.status}`)
        }

        const vagas = await response.json()
        return vagas
    } catch (error) {
        console.error("Erro ao consultar os dados das vagas", error)
        throw error
    }
}

const listaKey = "perfil-candidato"

export function salvarCandidato(candidato) {
    localStorage.setItem(listaKey, JSON.stringify(candidato))
    return candidato
}

export function carregarCandidato() {
    const valor = localStorage.getItem(listaKey)
    return valor ? JSON.parse(valor) : null
}
