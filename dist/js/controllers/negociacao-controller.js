import { Negociacao } from "./../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.mensagemView = new MensagemView("#mensagemView", true);
        this.negociacoesView = new NegociacoesView("#negociacao-view");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.renderizaTabela(this.negociacoes);
    }
    adicionar() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaDeSemana(negociacao.data)) {
            return this.mensagemView.renderizaTabela("Coloque um dia util para a negociação ser realizada.");
        }
        this.negociacoes.adicionar(negociacao);
        this.atualizaView();
        this.limparForm();
    }
    limparForm() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    ehDiaDeSemana(data) {
        return (data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO);
    }
    atualizaView() {
        this.negociacoesView.renderizaTabela(this.negociacoes);
        this.mensagemView.renderizaTabela("Negociação atualizada");
    }
}
