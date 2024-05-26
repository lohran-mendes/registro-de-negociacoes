export class View {
    constructor(elemento, escapar) {
        this.escapar = false;
        const tabela = document.querySelector(elemento);
        if (tabela) {
            this.tabela = tabela;
        }
        else {
            throw Error(`Seletor da classe ${elemento} não existe no dom, procure um que exista`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    renderizaTabela(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.tabela.innerHTML = template;
    }
}
