//Variáveis de controle
let ctrl = 0;
let soma = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$0';

function adicionar(){

    //Produto desejado
    let produto = document.getElementById('produto').value;
    let nome = produto.split('-')[0];
    let valor = produto.split('R$')[1];

    //Quantos produtos
    let quantidade = document.getElementById('quantidade').value;

    //Total da Compra 
    if (quantidade > 0){

        ctrl++;

        if(ctrl == 1){

            soma = valor * quantidade;

        }   
        else{

            soma = soma + valor * quantidade;
        } 

    }

    //Lista de produtos
    let carrinho = document.getElementById('lista-produtos');
    if (quantidade > 0){
    
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${valor*quantidade}</span></section>`;
    
    }
    else{

        alert('A quantidade está zerada. Por favor, adicione quantos produtos deseja comprar.');
    
    }

    //limpar a quantidade
    document.getElementById('quantidade').value = '';

    //Contabilizar o valor
    let total = document.getElementById('valor-total');
    total.textContent = `R$${soma.toFixed(0)}`;

}

function limpar(){

    //limpa todos os campos
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0';
    document.getElementById('quantidade').value = '';
    ctrl = 0;
    soma = 0;

}