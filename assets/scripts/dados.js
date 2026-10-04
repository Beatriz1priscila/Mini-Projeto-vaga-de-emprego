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
const listaKey = "perfil-candidato"

export function salvarCandidato(candidato) {
    localStorage.setItem(listaKey, JSON.stringify(candidato))
    return candidato
}

export function carregarCandidato() {
    const valor = localStorage.getItem(listaKey)
    return valor ? JSON.parse(valor) : null
}

// RF02 FUNÇÃO ASSÍNCRONA COM FETCH PARA AS VAGAS.JSON
// FR13 FETCH DAS VAGAS USANDO TRY/CATCH 
export default async function fetchVagas(){
    const dataURL = "./assetes/data/vagas.json"

    try{
        const responde = await fetch(dataURL)
        if (responde.ok != true){
            return alert("Erro ao carregar vagas!")
        }

        const vagas = await Response.json()

        return vagas
    } catch (error) {
        return alert("Erro ao consultar os dados das vagas", error)
    }
}






// FR13 FETCH DAS VAGAS USANDO TRY/CATCH CONTENDO: 
// 1 -> FEEDBACK => CARREGANDO VAGAS...
// 2 -> VAZIO => NENHUMA VAGA/NENHUM RESULTADO ENCONTRADO
// 3 -> ERRO => A REDE FALHOU

// RF14 PERSISTÊNCIA COM LOCALSTORAGE <==> SETITEM/GETITEM

