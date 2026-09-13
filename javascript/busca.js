const produtos = [
    //lista criada pelo GEMINI com base em bicicletas.html
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike1.png",
            alt: "Bicicleta Wendy aro 26 azul de quadro alto"
        },
        nome: "Wendy Aro 26 Azul",
        descricao: "18 marchas, freio V-brake",
        preco: "R$ 899,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike3.png",
            alt: "Bicicleta Wendy aro 26 verde água de quadro alto"
        },
        nome: "Wendy Aro 26 Verde Água",
        descricao: "18 marchas, freio V-brake",
        preco: "R$ 899,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike4.png",
            alt: "Bicicleta Wendy aro 26 verde de quadro alto"
        },
        nome: "Wendy Aro 26 Verde",
        descricao: "18 marchas, freio V-brake",
        preco: "R$ 899,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike5.png",
            alt: "Bicicleta Wendy aro 26 vermelha de quadro alto"
        },
        nome: "Wendy Aro 26 Vermelha",
        descricao: "18 marchas, freio V-brake",
        preco: "R$ 949,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike2.png",
            alt: "Bicicleta Wendy aro 26 rosa de quadro baixo"
        },
        nome: "Wendy Aro 26 Rosa",
        descricao: "18 marchas, freio V-brake",
        preco: "R$ 899,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike6.png",
            alt: "Bicicleta Wendy aro 26 pink de quadro baixo"
        },
        nome: "Wendy Aro 26 Pink",
        descricao: "18 marchas, freio V-brake",
        preco: "R$ 899,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike7.png",
            alt: "Bicicleta Wendy aro 26 roxa de quadro baixo"
        },
        nome: "Wendy Aro 26 Roxa",
        descricao: "18 marchas, freio V-brake",
        preco: "R$ 949,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike8.png",
            alt: "Mountain bike Sense aro 29 azul com freio a disco"
        },
        nome: "Sense Aro 29 Azul",
        descricao: "21 marchas, freio a disco",
        preco: "R$ 3.299,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike9.png",
            alt: "Mountain bike Caloi aro 29 preta e amarela com freio a disco"
        },
        nome: "Caloi Aro 29 Preta",
        descricao: "21 marchas, freio a disco",
        preco: "R$ 2.899,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike10.png",
            alt: "Mountain bike Cannondale aro 29 azul com freio a disco"
        },
        nome: "Cannondale Aro 29 Azul",
        descricao: "12 marchas, freio a disco",
        preco: "R$ 4.590,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike15.png",
            alt: "Mountain bike Sense aro 29 grafite e vermelha com freio a disco"
        },
        nome: "Sense Aro 29 Grafite",
        descricao: "21 marchas, freio a disco",
        preco: "R$ 3.590,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike14.png",
            alt: "Mountain bike Sense aro 29 prata e preta com freio a disco"
        },
        nome: "Sense Aro 29 Prata",
        descricao: "12 marchas, freio a disco",
        preco: "R$ 5.290,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike11.png",
            alt: "Mountain bike Sense aro 29 cinza com freio a disco"
        },
        nome: "Sense Aro 29 Cinza",
        descricao: "12 marchas, freio a disco",
        preco: "R$ 8.900,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike13.png",
            alt: "Mountain bike Sense aro 29 verde escura com freio a disco"
        },
        nome: "Sense Aro 29 Verde",
        descricao: "12 marchas, freio a disco",
        preco: "R$ 9.500,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike12.png",
            alt: "Bicicleta speed KODE preta e vermelha de quadro de carbono"
        },
        nome: "KODE Speed Carbono",
        descricao: "Quadro de carbono, freio a disco",
        preco: "R$ 12.900,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike16.png",
            alt: "Bicicleta speed Swift preta de quadro de carbono"
        },
        nome: "Swift Speed Carbono",
        descricao: "Quadro de carbono, freio a disco",
        preco: "R$ 15.900,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike18.png",
            alt: "Bicicleta speed Swift Racevox preta de quadro de carbono"
        },
        nome: "Swift Racevox Carbono",
        descricao: "Quadro de carbono, freio a disco",
        preco: "R$ 18.500,00"
    },
    {
        tag: "bicicleta",
        imagem: {
            src: "fotos/bike17.png",
            alt: "Bicicleta elétrica Sense full suspension preta"
        },
        nome: "Sense E-Bike Full Suspension",
        descricao: "Motor central, suspensão full",
        preco: "R$ 34.900,00"
    }
];


const barra_busca = document.getElementById("textarea-buscar");
const container_buscas = document.getElementById("resultados-busca");

const template_grade = document.getElementById("template-grade");
const template_produto = document.getElementById('template-produto');
const resultados_busca = document.getElementById('resultados-busca');


var categoria_selecionada = "bicicleta";
const categorias = document.querySelectorAll('input[name="categoria"]');
categorias.forEach(cat => {
    cat.addEventListener('change', (event) => {
        if (event.target.checked) {
            categoria_selecionada = event.target.value
            executar_busca()
        }
    })
});


function limpar_buscas(){
    container_buscas.innerHTML = "";
}

function fuzzy_match(busca, analisado) {
    busca = busca.toLowerCase();
    analisado = analisado.toLowerCase();
    
    let busca_i = 0;
    let analisado_i = 0;
    
    while (busca_i < busca.length && analisado_i < analisado.length) {
        if (busca[busca_i] == analisado[analisado_i]) busca_i++;
        analisado_i++;
    }
    return busca_i == busca.length;
}


barra_busca.onkeyup = function (){
    executar_busca();
}


function executar_busca(){
    let busca = barra_busca.value;
    limpar_buscas();

    resultados = [];
    produtos.forEach(produto => {
        if (fuzzy_match(busca, produto["nome"]) && produto["tag"] == categoria_selecionada){
            resultados.push(produto);
        }
    });

    let coluna_atual = null;
    for (let i = 0; i < resultados.length; i++) {
        if (i % 3 == 0) {
            const linha = template_grade.content.cloneNode(true);
            coluna_atual = linha.querySelector('.grade-produtos');
            resultados_busca.appendChild(linha);
        }

        const produto = resultados[i];
        const novo_prod = template_produto.content.cloneNode(true);

        novo_prod.querySelector('img').src = produto.imagem.src;
        novo_prod.querySelector('img').alt = produto.imagem.alt;
        novo_prod.querySelector('.card-nome').textContent = produto.nome;
        novo_prod.querySelector('.card-desc').textContent = produto.descricao;
        novo_prod.querySelector('.card-preco').textContent = produto.preco;

        coluna_atual.appendChild(novo_prod);
    }
}
