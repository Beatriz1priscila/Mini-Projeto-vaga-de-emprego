// PASTA ONDE FICARÁ SALVO OS DADOS DO USUÁRIO E FARÁ AS BUSCAS EXTERNAS.

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

