// PASTA ONDE IMPORTAREI AS DEMAIS 

import fetchVagas from "./dados.js"
import {VagasTi} from "./motor.js"
import renderVagas from "./ui.js"

console.log("Script principal carregado com sucesso!")

const form = document.getElementById("perfil-candidato")

const vagas = await fetchVagas();

if (vagas) {
    renderVagas(vagas);
} else {
    console.log("Vagas não carregadas!");
}

