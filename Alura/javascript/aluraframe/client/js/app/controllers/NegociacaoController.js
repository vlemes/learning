class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this.inputData = $("#data");
        this.inputQuantidade = $("#quantidade");
        this.inputValor = $("#valor");
    }

    adiciona(event) {
        event.preventDefault();

        let data = new Date(
            ...this.inputData.value
                .split("-")
                .map((item, indice) => item - (indice % 2))
        );

        let negocicao = new Negociacao(
            data,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        console.log(negocicao);
    }
}
