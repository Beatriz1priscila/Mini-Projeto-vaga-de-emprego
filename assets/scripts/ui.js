// PASTA ONDE VOU MEXER NO HTML.
console.log("Script de UI carregado com sucesso!")

function calcularCompatibilidade(vaga, candidato) {
    const habilidadesCandidato = Array.isArray(candidato?.habilidades) ? candidato.habilidades : []
    const requisitos = Array.isArray(vaga?.requisitos) ? vaga.requisitos : []

    if (!requisitos.length || !habilidadesCandidato.length) {
        return 0
    }

    const encontradas = requisitos.filter((requisito) =>
        habilidadesCandidato.some((habilidade) => habilidade.toLowerCase() === requisito.toLowerCase())
    )

    return Math.round((encontradas.length / requisitos.length) * 100)
}

function classificarCompatibilidade(percentual) {
    if (percentual >= 80) {
        return { texto: `Alta compatibilidade (${percentual}%)`, classe: "alta" }
    }

    if (percentual >= 50) {
        return { texto: `Média compatibilidade (${percentual}%)`, classe: "media" }
    }

    return { texto: `Baixa compatibilidade (${percentual}%)`, classe: "baixa" }
}

export default function renderVagas(vagas, candidato = null) {
    const listaVagas = document.getElementById("lista-vagas")

    if (!listaVagas) {
        console.error("Elemento #lista-vagas não encontrada")
        return
    }

    if (!Array.isArray(vagas) || vagas.length === 0) {
        listaVagas.innerHTML = `
            <h3>Vagas</h3>
            <p>Nenhuma vaga encontrada no momento.</p>
        `
        return
    }

    listaVagas.innerHTML = `
        <h3>Vagas</h3>
        ${vagas.map((vaga) => {
            const percentual = candidato ? calcularCompatibilidade(vaga, candidato) : 0
            const compatibilidade = classificarCompatibilidade(percentual)
            const recomendacao = percentual < 50
                ? `<p class="recomendacao-estudo"><strong>Recomendação de estudo:</strong> foque em ${vaga.requisitos.slice(0, 2).join(", ")}</p>`
                : ""

            return `
                <article class="card-vaga">
                    <div class="vaga-topo">
                        <h3>${vaga.empresa}</h3>
                        <span class="compatibilidade ${compatibilidade.classe}">${compatibilidade.texto}</span>
                    </div>
                    <p><strong>Cargo:</strong> ${vaga.cargo}</p>
                    <p><strong>Salário:</strong> ${vaga.salario}</p>
                    <p><strong>Modalidade:</strong> ${vaga.modalidade}</p>
                    <p><strong>Nível:</strong> ${vaga.nivel || "N/A"}</p>
                    <ul>
                        ${(vaga.requisitos || []).map((requisito) => `<li>${requisito}</li>`).join("")}
                    </ul>
                    ${recomendacao}
                    <button class="btn-inscricao" type="button">Inscrever-se</button>
                    <p class="mensagem-candidatura" aria-live="polite"></p>
                </article>
            `
        }).join("")}
    `

    document.querySelectorAll(".btn-inscricao").forEach((botao) => {
        botao.addEventListener("click", () => {
            const card = botao.closest(".card-vaga")
            const mensagem = card?.querySelector(".mensagem-candidatura")

            if (!card || !mensagem) return

            mensagem.textContent = "Candidatura enviada com sucesso!"
            mensagem.classList.add("ativo")
            botao.textContent = "Candidatura enviada"
            botao.disabled = true
            botao.classList.add("enviado")
        })
    })
}

export function exibirEstadoInicial() {
    const listaVagasContainer = typeof document !== "undefined" ? document.getElementById("lista-vagas") : null

    if (!listaVagasContainer) return

    listaVagasContainer.innerHTML = `
        <div class="estado-inicial">
            <div class="icone-destaque">🎯</div>
            <h3>Descubra suas vagas compatíveis</h3>
            <p>Preencha o formulário de perfil para filtrar e listar as oportunidades perfeitas para você.</p>
        </div>
    `
}

if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        exibirEstadoInicial()
    })
}

