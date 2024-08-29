const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está aprendendo sobre folclore brasileiro e encontra um livro sobre as lendas e tradições do Brasil. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Isso é fascinante!",
                afirmacao: "Você se empolgou para explorar mais sobre as tradições e mitos brasileiros."
            },
            {
                texto: "Isso parece complicado.",
                afirmacao: "Você ficou preocupado com a complexidade das histórias e como entender todas as suas nuances."
            }
        ]
    },
    {
        enunciado: "Sua professora pede um trabalho sobre as figuras míticas do folclore brasileiro. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza livros e artigos sobre folclore para encontrar informações detalhadas e compreender melhor as figuras míticas.",
                afirmacao: "Você conseguiu reunir informações ricas e variadas para o seu trabalho, explorando a riqueza das lendas brasileiras."
            },
            {
                texto: "Pesquisa na internet e usa fontes confiáveis para reunir dados e fazer o trabalho com suas próprias palavras.",
                afirmacao: "Você preferiu usar suas próprias palavras para expressar o que aprendeu e se sentiu mais confortável com isso."
            }
        ]
    },
    {
        enunciado: "Durante uma discussão em sala sobre as lendas brasileiras, a professora pergunta como o folclore pode influenciar a cultura atual. Como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que o folclore brasileiro enriquece a cultura contemporânea e mantém vivas as tradições.",
                afirmacao: "Você acredita que as lendas e tradições brasileiras são importantes para a identidade cultural e devem ser preservadas."
            },
            {
                texto: "Expõe preocupações sobre a perda de tradições e defende a importância de resgatar e valorizar o folclore nas novas gerações.",
                afirmacao: "Sua preocupação com a perda cultural levou a promover eventos e discussões para valorizar o folclore nas novas gerações."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisa criar uma representação visual de uma figura do folclore brasileiro. O que faz?",
        alternativas: [
            {
                texto: "Desenha uma figura tradicionalmente conhecida, como o Saci-Pererê, utilizando técnicas de desenho à mão.",
                afirmacao: "Você decidiu criar uma arte manual detalhada para capturar a essência das figuras folclóricas e compartilhar seu processo criativo."
            },
            {
                texto: "Utiliza um gerador de imagens para criar uma representação da figura mítica com um estilo moderno.",
                afirmacao: "Você optou por uma abordagem digital para representar a figura folclórica, aproveitando ferramentas modernas para expressar sua visão."
            }
        ]
    },
    {
        enunciado: "Você tem um projeto em grupo sobre folclore brasileiro para entregar na semana seguinte, e um membro do grupo decidiu usar uma ferramenta de geração automática de texto. O que você faz?",
        alternativas: [
            {
                texto: "Aceita o trabalho gerado automaticamente sem revisão, pois acredita que é uma forma eficiente de concluir o projeto.",
                afirmacao: "Você acabou confiando excessivamente na ferramenta automática, mas percebeu a importância da revisão e do envolvimento pessoal no trabalho."
            },
            {
                texto: "Revê o trabalho gerado, ajusta e adiciona suas próprias contribuições para garantir a autenticidade e o aprofundamento do projeto.",
                afirmacao: "Você entendeu que, apesar das ferramentas automáticas serem úteis, o trabalho deve refletir o conhecimento pessoal e a revisão crítica é essencial."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();