import { Negociacao } from "./../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();
  private mensagemView: MensagemView = new MensagemView("#mensagemView", true);
  private negociacoesView: NegociacoesView = new NegociacoesView(
    "#negociacao-view"
  );

  constructor() {
    this.inputData = document.querySelector("#data") as HTMLInputElement;
    this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
    this.inputValor = document.querySelector("#valor") as HTMLInputElement;
    this.negociacoesView.renderizaTabela(this.negociacoes)
  }

  public adicionar(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value, 
      this.inputValor.value
    );
    if (!this.ehDiaDeSemana(negociacao.data)) {
      return this.mensagemView.renderizaTabela(
        "Coloque um dia util para a negociação ser realizada."
      );
    }
    this.negociacoes.adicionar(negociacao);
    this.atualizaView();
    this.limparForm();
  }

  private limparForm(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private ehDiaDeSemana(data: Date) {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }

  private atualizaView() {
    this.negociacoesView.renderizaTabela(this.negociacoes);
    this.mensagemView.renderizaTabela("Negociação atualizada");
  }
}
