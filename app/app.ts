import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const formulario = document.querySelector(".form");
if (formulario) {
  formulario.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    controller.adicionar();
  });
} else {
    throw Error("Não foi possível iniciar a aplicação.")
}
