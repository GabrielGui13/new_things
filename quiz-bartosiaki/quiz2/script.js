const data = [
    {
        letter: "A",
        desc: "Artes Visuais (pintura, escultura)",
        name: "artes",
        questions: [
            {
                value: 0,
                desc: "Não tenho formação ou talento reconhecido nesta área.",
            },
            {
                value: 1,
                desc: "Tive aulas nesta área.",
            },
            {
                value: 2,
                desc: "As pessoas comentaram sobre o meu talento nesta área.",
            },
            {
                value: 3,
                desc: "Eu ganhei um prêmio ou prêmios em uma mostra de arte com júri.",
            },
            {
                value: 4,
                desc: "Tive uma exibição do meu trabalho em uma galeria.",
            },
            {
                value: 5,
                desc: "Eu vendi uma parte do meu trabalho.",
            },
            {
                value: 6,
                desc: "Meu trabalho foi criticado em publicações locais. *",
                multiply: true,
            },
            {
                value: 7,
                desc: "Meu trabalho foi criticado em publicações nacionais.",
            },
        ],
    },
    {
        letter: "B",
        desc: "Música",
        name: "musica",
        questions: [
            {
                value: 0,
                desc: "Não tenho formação ou talento reconhecido nesta área.",
            },
            {
                value: 1,
                desc: "Toco um ou mais instrumentos musicais com proficiência.",
            },
            {
                value: 2,
                desc: "Toquei com uma orquestra ou banda reconhecida.",
            },
            {
                value: 3,
                desc: "Compus uma peça musical original.",
            },
            {
                value: 4,
                desc: "Meu talento musical foi criticado em uma publicação local.",
            },
            {
                value: 5,
                desc: "Minha composição foi gravada.",
            },
            {
                value: 6,
                desc: "As gravações da minha composição foram vendidas publicamente. *",
                multiply: true,
            },
            {
                value: 7,
                desc: "Minhas composições foram criticadas em uma publicação nacional.",
            },
        ],
    },
    {
        letter: "C",
        desc: "Dança",
        name: "danca",
        questions: [
            {
                value: 0,
                desc: "Não tenho formação ou talento reconhecido nesta área.",
            },
            {
                value: 1,
                desc: "Eu dancei com uma companhia de dança reconhecida.",
            },
            {
                value: 2,
                desc: "Coreografei um número de dança original.",
            },
            {
                value: 3,
                desc: "Minha coreografia foi executada publicamente.",
            },
            {
                value: 4,
                desc: "Minhas habilidades de dança foram criticadas em uma publicação local.",
            },
            {
                value: 5,
                desc: "Eu coreografei dança profissionalmente.",
            },
            {
                value: 6,
                desc: "Minha coreografia foi reconhecida por uma publicação local. *",
                multiply: true,
            },
            {
                value: 7,
                desc: "Minha coreografia foi reconhecida por uma publicação nacional.",
            },
        ],
    },
    {
        letter: "D",
        desc: "Projeto arquitetônico",
        name: "arquitetura",
        questions: [
            {
                value: 0,
                desc: "Não tenho formação ou talento reconhecido nesta área.",
            },
            {
                value: 1,
                desc: "Eu projetei uma estrutura original.",
            },
            {
                value: 2,
                desc: "Uma estrutura projetada por mim foi construída.",
            },
            {
                value: 3,
                desc: "Vendi um projeto arquitetônico original.",
            },
            {
                value: 4,
                desc: "Uma estrutura que projetei e vendi foi construída profissionalmente.",
            },
            {
                value: 5,
                desc: "Meu projeto arquitetônico ganhou um prêmio ou prêmios.",
            },
            {
                value: 6,
                desc: "Meu projeto arquitetônico foi reconhecido em uma publicação local. *",
                multiply: true,
            },
            {
                value: 7,
                desc: "Meu projeto arquitetônico foi reconhecido em uma publicação nacional.",
            },
        ],
    },
    {
        letter: "E",
        desc: "Escrita Criativa",
        name: "escrita",
        questions: [
            {
                value: 0,
                desc: "Não tenho formação ou talento reconhecido nesta área.",
            },
            {
                value: 1,
                desc: "Escrevi uma obra curta original (poema ou conto).",
            },
            {
                value: 2,
                desc: "Meu trabalho ganhou um prêmio ou prêmio.",
            },
            {
                value: 3,
                desc: "Escrevi uma obra longa original (épico, romance ou peça).",
            },
            {
                value: 4,
                desc: "Vendi meu trabalho para um editor.",
            },
            {
                value: 5,
                desc: "Meu trabalho foi impresso e vendido publicamente.",
            },
            {
                value: 6,
                desc: "Meu trabalho foi revisado em publicações locais. *",
                multiply: true,
            },
            {
                value: 7,
                desc: "Meu trabalho foi revisado em publicações nacionais.",
            },
        ],
    },
    {
        letter: "F",
        desc: "Humor",
        name: "humor",
        questions: [
            {
                value: 0,
                desc: "Não tenho talento reconhecido nesta área.",
            },
            {
                value: 1,
                desc: "Muitas vezes as pessoas comentam sobre meu senso de humor original.",
            },
            {
                value: 2,
                desc: "Eu criei piadas que agora são repetidas regularmente por outras pessoas.",
            },
            {
                value: 3,
                desc: "Eu escrevi piadas para outras pessoas.",
            },
            {
                value: 4,
                desc: "Escrevi uma piada ou desenho animado que foi publicado.",
            },
            {
                value: 5,
                desc: "Já trabalhei como comediante profissional.",
            },
            {
                value: 6,
                desc: "Eu trabalhei como escritor profissional de comédias.",
            },
            {
                value: 7,
                desc: "Meu humor foi reconhecido em uma publicação nacional.",
            },
        ],
    },
    {
        letter: "G",
        desc: "Invenções",
        name: "invencoes",
        questions: [
            {
                value: 0,
                desc: "Não tenho talento reconhecido nesta área.",
            },
            {
                value: 1,
                desc: "Eu regularmente encontro novos usos para objetos domésticos.",
            },
            {
                value: 2,
                desc: "Esbocei uma invenção e trabalhei em suas falhas de design.",
            },
            {
                value: 3,
                desc: "Criei um software original para um computador.",
            },
            {
                value: 4,
                desc: "Eu construí um protótipo de uma de minhas invenções projetadas.",
            },
            {
                value: 5,
                desc: "Eu vendi uma de minhas invenções para pessoas que conheço. *",
                multiply: true,
            },
            {
                value: 6,
                desc: "Recebi a patente de uma de minhas invenções. *",
                multiply: true,
            },
            {
                value: 7,
                desc: "Vendi uma de minhas invenções para uma empresa de manufatura.",
            },
        ],
    },
    {
        letter: "H",
        desc: "Descoberta Científica",
        name: "ciencia",
        questions: [
            {
                value: 0,
                desc: "Não tenho treinamento ou habilidade reconhecida neste campo.",
            },
            {
                value: 1,
                desc: "Freqüentemente penso em maneiras de resolver os problemas científicos.",
            },
            {
                value: 2,
                desc: "Ganhei um prêmio em uma feira de ciências ou outra competição local.",
            },
            {
                value: 3,
                desc: "Recebi uma bolsa com base no meu trabalho em ciências ou medicina.",
            },
            {
                value: 4,
                desc: "Fui autor ou co-autor de um estudo publicado em uma revista científica. *",
                multiply: true,
            },
            {
                value: 5,
                desc: "Eu ganhei um prêmio nacional no campo da ciência ou medicina. *",
                multiply: true,
            },
            {
                value: 6,
                desc: "Recebi uma bolsa para continuar meu trabalho em ciências ou medicina.",
            },
            {
                value: 7,
                desc: "Meu trabalho foi citado por outros cientistas em publicações nacionais.",
            },
        ],
    },
    {
        letter: "I",
        desc: "Teatro e Cinema",
        name: "teatro-cinema",
        questions: [
            {
                value: 0,
                desc: "Não tenho treinamento ou habilidade reconhecida neste campo.",
            },
            {
                value: 1,
                desc: "Já fiz teatro ou cinema.",
            },
            {
                value: 2,
                desc: "Minhas habilidades de atuação foram reconhecidas em uma publicação local.",
            },
            {
                value: 3,
                desc: "Eu dirigi ou produzi uma produção de teatro ou filme.",
            },
            {
                value: 4,
                desc: "Eu ganhei um prêmio ou prêmio por atuar em teatro ou filme.",
            },
            {
                value: 5,
                desc: "Fui pago para atuar no teatro ou no cinema.",
            },
            {
                value: 6,
                desc: "Fui pago para dirigir uma produção de teatro ou filme. *",
                multiply: true,
            },
            {
                value: 7,
                desc: "Meu trabalho teatral foi reconhecido em uma publicação nacional.",
            },
        ],
    },
    {
        letter: "J",
        desc: "Culinária",
        name: "culinaria",
        questions: [
            {
                value: 0,
                desc: "Não tenho formação ou experiência na área.",
            },
            {
                value: 1,
                desc: "Costumo experimentar receitas.",
            },
            {
                value: 2,
                desc: "Minhas receitas foram publicadas em um cozinheiro local.",
            },
            {
                value: 3,
                desc: "Minhas receitas foram usadas em restaurantes ou outros locais públicos.",
            },
            {
                value: 4,
                desc: "Pediram-me para preparar comida para celebridades ou dignitários.",
            },
            {
                value: 5,
                desc: "Minhas receitas ganharam um prêmio ou prêmio.",
            },
            {
                value: 6,
                desc: "Eu me formei em artes culinárias. *",
                multiply: true,
            },
            {
                value: 7,
                desc: "Minhas receitas foram publicadas nacionalmente.",
            },
        ],
    },
];

let quiz = document.querySelector("form");

function createQuestion(letter, desc, name, questions) {
    //criar div principal e colocar o titulo
    let mainDiv = document.createElement("div");
    mainDiv.className = `Q${letter}`;

    let pDesc = document.createElement("p");
    pDesc.textContent = `${letter}. ${desc}`;
    mainDiv.appendChild(pDesc);

    //criar inputs
    for (let q of questions) {
        let ipt = document.createElement("input");
        ipt.setAttribute("type", "checkbox");
        ipt.setAttribute("name", name);
        ipt.setAttribute("id", name + q.value);
        ipt.value = q.value;

        let lbl = document.createElement("label");
        lbl.setAttribute("for", name + q.value);
        lbl.textContent = " " + q.desc;

        if (q.multiply) {
            ipt.setAttribute("data-multiply", "");
            let multiplyInput = document.createElement("input");
            multiplyInput.setAttribute("type", "text");
            multiplyInput.setAttribute("name", `multiply-${name + q.value}`);
            multiplyInput.setAttribute(
                "placeholder",
                "Quantas vezes isso aconteceu?",
            );
            multiplyInput.setAttribute("style", "display:none");
            multiplyInput.className = "hidden-input";
            multiplyInput.defaultValue = 1;

            mainDiv.appendChild(ipt);
            mainDiv.appendChild(lbl);
            mainDiv.appendChild(document.createElement("br"));
            mainDiv.appendChild(multiplyInput);
        } else {
            mainDiv.appendChild(ipt);
            mainDiv.appendChild(lbl);
            mainDiv.appendChild(document.createElement("br"));
        }
    }

    mainDiv.appendChild(document.createElement("br"));

    document
        .querySelector("div[class='insert-questions']")
        .appendChild(mainDiv);
}

//adicionar questoes
for (let area of data) {
    createQuestion(area.letter, area.desc, area.name, area.questions);
}

//hidden input das tags multiply
let multiplies = document.querySelectorAll("[data-multiply]");

for (let multiply of multiplies) {
    multiply.addEventListener("click", () => {
        let multiplyValueInput = document.querySelector(
            `input[name='multiply-${multiply.name + multiply.value}']`,
        );

        if (multiply.checked) {
            multiplyValueInput.style.display = "block";
        } else {
            multiplyValueInput.style.display = "none";
        }
    });
}

function handleQuizSubmit(e) {
    e.preventDefault();

    let areasEscolhidas = [
        ...document.querySelectorAll('input[type="checkbox"]'),
    ].filter((el) => el.checked && el.name !== "areas");

    for (let area of areasEscolhidas) {
        if (area.hasAttribute("data-multiply")) {
            let m = document.querySelector(`input[name="multiply-${area.name + area.value}"]`).value || 1
            area.value *= m
        }
    }

    console.log(areasEscolhidas)

    //soma total
    let total = areasEscolhidas
        .map((el) => parseInt(el.value))
        .reduce((sum, el) => sum + el, 0);

    //resultado

    let dominio = document.querySelector('span[name="dominio"]');
    let info = document.querySelector('p[name="info"]');

    if (total >= 0 && total <= 5) {
        dominio.textContent = "Realização Criativa Inicial";
        info.textContent =
            "29,19% da população. 0% estão abaixo de você em realizações criativas.";
    } else if (total >= 6 && total <= 11) {
        dominio.textContent = "Novo criativo";
        info.textContent =
            "23,92% da população. 29,19% estão abaixo de você em realizações criativas.";
    } else if (total >= 12 && total <= 16) {
        dominio.textContent = "Fazedor";
        info.textContent =
            "17,94% da população. 53,11% estão abaixo de você em realizações criativas.";
    } else if (total >= 17 && total <= 22) {
        dominio.textContent = "Criativo";
        info.textContent =
            "8,97% da população. 71,05% estão abaixo de você em realizações criativas.";
    } else if (total >= 23 && total <= 27) {
        dominio.textContent = "Inovador";
        info.textContent =
            "5,98% da população. 80,02% estão abaixo de você em realizações criativas.";
    } else if (total >= 28 && total <= 32) {
        dominio.textContent = "Originador";
        info.textContent =
            "4,55% da população. 86,00% estão abaixo de você em realizações criativas.";
    } else if (total >= 33 && total <= 38) {
        dominio.textContent = "Hefestiano";
        info.textContent =
            "2,99% da população. 90,55% estão abaixo de você em realizações criativas.";
    } else if (total >= 39 && total <= 43) {
        dominio.textContent = "Da Vinciano";
        info.textContent =
            "3,59% da população. 93,54% estão abaixo de você em realizações criativas.";
    } else if (total >= 44 && total <= 47) {
        dominio.textContent = "Teslano";
        info.textContent =
            "1,2% da população. 97,13% estão abaixo de você em realizações criativas.";
    } else if (total >= 49 && total <= 58) {
        dominio.textContent = "Blakeano";
        info.textContent =
            "1,2% da população. 98,33% estão abaixo de você em realizações criativas.";
    } else if (total > 59) {
        dominio.textContent = "Prometêico";
        info.textContent =
            "0,48% da população. 99,52% estão abaixo de você em termos de realização criativa.";
    }

    document.querySelector('span[name="total"]').textContent = total;

    document.querySelector('div[class="result"]').style.display = 'block';
    document.querySelector('button[name="reiniciar"]').style.display = "block";
}

document
    .querySelector("button[name='reiniciar']")
    .addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("div[class='result']").style.display = "none";
        document.querySelector('button[name="reiniciar"]').style.display = "none";
        quiz.reset();
    });

quiz.addEventListener("submit", handleQuizSubmit);
