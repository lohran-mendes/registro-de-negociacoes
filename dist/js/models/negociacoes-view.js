export class NegociacoesView {
    constructor(elemento) {
        this.tabela = document.querySelector(elemento);
    }
    template(model) {
        return `
    <table class='table table-hover table-bordered'>
<tr >
<th>Data</th>
<th>Quantidade</th>
<th>Valor</th>
</tr>
<tbody>
${model
            .lista()
            .map((negociacao) => {
            return `<tr>
  <td>${new Intl.DateTimeFormat('pt-BR').format(negociacao.data)}</td>
  <td>${negociacao.quantidade}</td>
  <td>${negociacao.valor}</td>
  </tr>`;
        })
            .join("")}
</tbody>
</table>`;
    }
    renderizaTabela(model) {
        const template = this.template;
        this.tabela.innerHTML = this.template(model);
    }
}
