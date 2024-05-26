export abstract class View<T> {
  protected tabela: HTMLElement;
  private escapar = false;

  constructor(elemento: string, escapar?: boolean) {
    const tabela = document.querySelector(elemento);
    if (tabela) {
      this.tabela = tabela as HTMLElement;
    } else {
      throw Error(`Seletor da classe ${elemento} não existe no dom, procure um que exista`)
    }
    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;

  public renderizaTabela(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '')
    }
    this.tabela.innerHTML = template;
  }
}
