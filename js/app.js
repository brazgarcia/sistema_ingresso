function comprar() {

    // Coletar valores do formulário de ingressos.
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    // Validador de quantidade positiva.
    if(qtd <= 0 || isNaN(qtd)){

        alert('quantidade inserida não é válida.');
        document.getElementById('qtd').value = '';
        return;

    }

    // Conticional do tipo do ingresso escolhido.
    if(tipoIngresso == 'inferior') {

        comprarInferior(qtd);
        zerarQuantidade();

    } 
    else if(tipoIngresso == 'superior') {

        comprarSuperior(qtd);
        zerarQuantidade();

    } else if(tipoIngresso == 'pista') {

        comprarPista(qtd);
        zerarQuantidade();

    }
}

function zerarQuantidade() {
    document.getElementById('qtd').value = ''
}

function comprarInferior(qtd) {

    // Coletar valor Ingresso em estoque.
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    // Verificar disponibilidade no estoque.
    if(qtd > qtdInferior) {

        alert('Lamentamos, mas a quantidade desejada não está disponível!');


    } else {

        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');

    }

}

function comprarSuperior(qtd) {

    // Coletar valor Ingresso em estoque.
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);


    // Verificar disponibilidade de estoque 
    if (qtd > qtdSuperior) {

        alert('Lamentamos, a quantidade desejada não está disponível.');

    } else {

        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');

    }
}

function comprarPista(qtd) {

    // Coletar valor Ingresso em estoque.
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    // Validando disponibilidade no estoque
    if(qtd > qtdPista) {

    alert('Lamentamos, a quantidade desejada não está disponível.');

    } else {

        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');

    }

}
