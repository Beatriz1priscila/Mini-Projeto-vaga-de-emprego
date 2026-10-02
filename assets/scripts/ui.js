// PASTA ONDE VOU MEXER NO HTML.
console.log("Script de UI carregado com sucesso!")

export default function renderVagas(vagas) {
    const listaVagas = document.getElementById("lista-vagas")

    if (!listaVagas) {
        console.error("Elemento #lista-vagas não encontrada")
        return
    }

    if (!Array.isArray(vagas) || vagas.length === 0) {
        listaVagas.innerHTML = "<p>Nenhuma vaga encontrada no momento.</p>"
        return
    }

    listaVagas.innerHTML = vagas.map((vaga) => `
        <article class="vaga-card">
            <h3>${vaga.empresa}</h3>
            <p><strong>Cargo:</strong> ${vaga.cargo}</p>
            <p><strong>Salário:</strong> ${vaga.salario}</p>
            <p><strong>Modalidade:</strong> ${vaga.modalidade}</p>
            <p><strong>Nível:</strong> ${vaga.nivel || "N/A"}</p>
            <ul>
                ${(vaga.requisitos || []).map((requisito) => `<li>${requisito}</li>`).join("")}
            </ul>
        </article>
    `).join("")
}

