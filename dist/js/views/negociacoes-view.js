import { View } from "./view.js";
export class NegociacoesView extends View {
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
  <td>${this.formatarData(negociacao.data)}</td>
  <td>${negociacao.quantidade}</td>
  <td>${negociacao.valor}</td>
  </tr>`;
        })
            .join("")}
</tbody>
</table>`;
    }
    formatarData(data) {
        return new Intl.DateTimeFormat("pt-BR").format(data);
    }
}
