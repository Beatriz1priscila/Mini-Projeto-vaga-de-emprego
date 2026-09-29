// PASTA ONDE IMPORTAREI AS DEMAIS 

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