// PASTA ONDE IMPORTAREI AS DEMAIS 

import fetchVagas, { carregarCandidato } from "./dados.js"
import {VagasTi} from "./motor.js"
import renderVagas, { exibirEstadoInicial } from "./ui.js"

console.log("Script principal carregado com sucesso!")

const form = typeof document !== "undefined" ? document.getElementById("perfil-candidato") : null
const listaVagas = typeof document !== "undefined" ? document.getElementById("lista-vagas") : null

const salvarCandidato = (dados) => {
    if (typeof localStorage !== "undefined") {
        localStorage.setItem("perfil-candidato", JSON.stringify(dados))
    }
}

const listarHabilidadesSelecionadas = () => {
    if (typeof document === "undefined") {
        return []
    }

    const habilidades = Array.from(
        document.querySelectorAll(".lista-habilidades input[type='checkbox']:checked")
    )

    return habilidades.map((checkbox) => {
        const label = checkbox.nextElementSibling
        return label ? label.textContent.trim() : checkbox.value
    })
}

if (listaVagas) {
    listaVagas.hidden = false
    exibirEstadoInicial()
}

const linkVagas = typeof document !== "undefined" ? document.querySelector('.menu a[href="#vagas"]') : null

if (linkVagas) {
    linkVagas.addEventListener("click", async (event) => {
        const candidatoSalvo = carregarCandidato()
        const painelVagas = document.getElementById("vagas")

        if (!candidatoSalvo) {
            event.preventDefault()
            exibirEstadoInicial()
            painelVagas?.scrollIntoView({ behavior: "smooth", block: "start" })
            return
        }

        if (painelVagas) {
            painelVagas.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    })
}

if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        if (!form.checkValidity()) {
            form.reportValidity()
            return
        }

        const candidato = {
            nome: form.nome.value.trim(),
            area: form.area.value,
            habilidades: listarHabilidadesSelecionadas(),
            experiencia: form["tempo-exp"].value.trim()
        }

        salvarCandidato(candidato)

        try {
            const vagas = await fetchVagas()

            if (listaVagas) {
                listaVagas.hidden = false
                renderVagas(vagas, candidato)
            }
        } catch (error) {
            console.error("Erro ao carregar vagas após envio do formulário:", error)
        }
    })
}

import fetchVagas from "./dados.js"
import readerRegistration, { showRegistrationForm} from "./user.js"
import renderVagas from "./ui.js"

console.log("Hello, World!");

const vagas = await fetchVagas();

if (vagas) {
    renderVagas(vagas);
} else {
    console.log("Vagas não carregadas!");
}

showRegistrationForm();
readerRegistration();
// PASTA ONDE IMPORTAREI AS DEMAIS 
