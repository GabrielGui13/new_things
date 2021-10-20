const data = [
    { qtn: 1, text: "Eu me considero uma pessoa criativa" },
    { qtn: 2, text: "Estou envolvido em trabalhos criativos regularmente" },
    {
        qtn: 3,
        text: "Ideias criativas simplesmente me ocorrem, sem nem mesmo pensar nelas",
    },
    {
        qtn: 4,
        text: "Normalmente espero por um lampejo de inspiração antes de começar a trabalhar",
    },
    {
        qtn: 5,
        text: "Eu descreveria meu estilo de criatividade como errático ou não sistemático",
    },
    {
        qtn: 6,
        text: "Tive insights, cujas fontes não sou capaz de explicar ou entender",
    },
    {
        qtn: 7,
        text: "Acredito em processos inconscientes que facilitam meu trabalho criativo",
    },
    {
        qtn: 8,
        text: "No meu trabalho, muitas vezes há longos intervalos durante os quais não tenho motivação",
    },
    {
        qtn: 9,
        text: "Tenho sido capaz de usar muitas idéias para trabalhos criativos que surgiram em meus sonhos",
    },
    { qtn: 10, text: "Devo ser emocionado para ser criativo" },
    {
        qtn: 11,
        text: "Eu tenho que estar no humor ou sentimento certo para fazer um trabalho criativo",
    },
    {
        qtn: 12,
        text: "Quando eu tenho uma nova ideia, fico totalmente absorvido por ela até que a persiga completamente",
    },
    {
        qtn: 13,
        text: "Sinto que novas ideias me dominam e me guiam até a conclusão quase que automaticamente",
    },
    {
        qtn: 14,
        text: "Eu acredito que criatividade vem de trabalho duro e persistência",
    },
    {
        qtn: 15,
        text: "Eu acredito que a criatividade vem de um planejamento cuidadoso e premeditação",
    },
    { qtn: 16, text: "Eu pratico ser criativo" },
    { qtn: 17, text: "Minha criatividade vem da autodisciplina" },
    { qtn: 18, text: "Atribuo minha criatividade à inspiração divina" },
    {
        qtn: 19,
        text: "Tenho tendência a perder a noção do tempo quando estou envolvido no trabalho criativo",
    },
    {
        qtn: 20,
        text: "Eu mantenho uma caneta / bloco de notas / gravador à mão para registrar novas ideias à medida que ocorrem",
    },
    { qtn: 21, text: "Costumo deixar minha mente vagar para ter novas ideias" },
    {
        qtn: 22,
        text: "Eu normalmente crio novas ideias modificando sistematicamente (substituindo, reorganizando, elaborando, etc) uma ideia existente",
    },
    {
        qtn: 23,
        text: "Eu normalmente crio novas ideias combinando ideias existentes",
    },
    {
        qtn: 24,
        text: "Quando examino produtos existentes, geralmente os avalio criticamente para ver como posso melhorá-los",
    },
    { qtn: 25, text: "Frequentemente volto a ideias que rejeitei antes" },
    {
        qtn: 26,
        text: "Estou sempre pensando (fantasiando) sobre como fazer as coisas do dia a dia de maneira diferente",
    },
    {
        qtn: 27,
        text: "Eu normalmente modifico uma ideia existente apenas superficialmente, um passo de cada vez",
    },
    {
        qtn: 28,
        text: "Rejeito ou ignoro deliberadamente ideias convencionais ou já aceitas para apresentar novas ideias",
    },
    {
        qtn: 29,
        text: "Costumo procurar novas ideias fora do meu campo e tento aplicá-las ao meu",
    },
    { qtn: 30, text: "Costumo trabalhar em muitas ideias simultaneamente" },
    {
        qtn: 31,
        text: "Costumo usar a técnica de brainstorming para ter novas ideias",
    },
    {
        qtn: 32,
        text: "Tenho mantido um caderno / diário de novas ideias que gostaria de seguir algum dia",
    },
    {
        qtn: 33,
        text: "Quando estou gerando novas ideias, não tende a avaliá-las até que eu tenha gerado muitas ideias",
    },
    {
        qtn: 34,
        text: "Eu faço muitas experiências (tentativa e erro) para chegar a uma nova ideia viável",
    },
    {
        qtn: 35,
        text: "Quando fico preso, tendo a deixar a ideia por um tempo, faço outra coisa, antes de voltar a trabalhar nisso",
    },
    { qtn: 36, text: "Faço caminhadas para ter novas ideias" },
    { qtn: 37, text: "Eu leio muito para ter novas ideias" },
    {
        qtn: 38,
        text: "Quando tenho uma ideia nova, costumo discuti-la com alguém para determinar seu potencial de sucesso",
    },
    {
        qtn: 39,
        text: "Quando tenho problemas, eu consulto ou converso com outras pessoas sobre como proceder",
    },
    { qtn: 40, text: "Fico no meu melhor criativo quando trabalho sozinho" },
    {
        qtn: 41,
        text: "Estou no meu melhor criativo quando trabalho com outra pessoa",
    },
    { qtn: 42, text: "Eu sou mais criativo quando trabalho em grupo" },
    { qtn: 43, text: "Tenho segredo sobre minhas novas ideias" },
    {
        qtn: 44,
        text: "Eu normalmente mostro meus produtos criativos para outras pessoas",
    },
    {
        qtn: 45,
        text: "Eu me isolei fisicamente de outras pessoas quando estou trabalhando em ideias criativas",
    },
    {
        qtn: 46,
        text: "Isole-me fisicamente de outras pessoas para ter novas ideias",
    },
    {
        qtn: 47,
        text: "Por muito tempo, tenho frequentemente estimulado ideias ruins ou impraticáveis",
    },
    {
        qtn: 48,
        text: "Normalmente tenho muitas ideias viáveis ​​e impraticáveis",
    },
    { qtn: 49, text: "Eu trabalho mais criativamente quando tenho prazos" },
    {
        qtn: 50,
        text: "Se eu não tenho um produto criativo concreto (visível) para mostrar (por exemplo, composição escrita, obra de arte ou música, etc.), então acho que falhei",
    },
    {
        qtn: 51,
        text: "Gosto do processo de criação de novas ideias, independentemente de levarem a um produto final ou não",
    },
    {
        qtn: 52,
        text: "Quando concluo um produto criativo, não consigo iniciar um novo projeto por muito tempo",
    },
    {
        qtn: 53,
        text: "Acho que um produto final que não é facilmente observável através dos sentidos pode emergir em um ato criativo",
    },
    {
        qtn: 54,
        text: "Separei um determinado lugar (ou lugares) para o trabalho criativo",
    },
    {
        qtn: 55,
        text: "Separei um determinado tempo (ou horários) para o trabalho criativo",
    },
    {
        qtn: 56,
        text: "Tenho um lugar (ou lugares) específico onde faço a maior parte do meu pensamento criativo",
    },
    {
        qtn: 57,
        text: "Tenho um determinado momento (ou horários) durante o dia quando faço meu pensamento criativo",
    },
    {
        qtn: 58,
        text: "Costumo fumar (cigarro, cachimbo, charuto) antes de começar o trabalho criativo",
    },
    {
        qtn: 59,
        text: "Eu tendo a beber chá / café / outras bebidas com cafeína antes de começar o trabalho criativo",
    },
    {
        qtn: 60,
        text: "Tenho tendência a fumar com frequência quando estou envolvido em trabalhos criativos",
    },
    {
        qtn: 61,
        text: "Costumo beber muito chá / café / outras bebidas com cafeína quando estou envolvido em trabalhos criativos",
    },
    {
        qtn: 62,
        text: "Normalmente fumo depois de ter trabalhado em minhas ideias criativas por um determinado período de tempo",
    },
    {
        qtn: 63,
        text: "Normalmente bebo chá / café / outras bebidas com cafeína depois de ter trabalhado em minhas idéias criativas por um determinado período de tempo",
    },
    {
        qtn: 64,
        text: "Eu me recompenso de alguma forma depois de ter trabalhado em minhas ideias criativas por um determinado período de tempo",
    },
    {
        qtn: 65,
        text: "Costumo fazer meu trabalho criativo em um lugar tranquilo",
    },
    {
        qtn: 66,
        text: "Normalmente tenho música de fundo quando estou envolvido em um trabalho criativo",
    },
    {
        qtn: 67,
        text: "Eu uso álcool para entrar no clima para o trabalho criativo",
    },
    {
        qtn: 68,
        text: "Eu uso substâncias que alteram a mente (além do álcool) para entrar em um estado de espírito criativo",
    },
    { qtn: 69, text: "Normalmente começo meu trabalho criativo com papel" },
    {
        qtn: 70,
        text: "Eu normalmente medito antes de começar meu trabalho criativo",
    },
    {
        qtn: 71,
        text: "Costumo fazer um lanche quando estou envolvido em um trabalho criativo",
    },
    {
        qtn: 72,
        text: "Eu tenho uma ferramenta favorita (uma certa caneta / cavalete / boné pensativo, etc) sem a qual eu teria dificuldade para me concentrar quando estou envolvido em um trabalho criativo",
    },
    {
        qtn: 73,
        text: " Tenho um amuleto ou uma roupa favorita que uso quando estou envolvido em um trabalho criativo",
    },
    {
        qtn: 74,
        text: "Costumo usar muito meu sentido visual no meu trabalho criativo",
    },
    {
        qtn: 75,
        text: "Costumo usar muito meu sentido de audição em meu trabalho criativo",
    },
    {
        qtn: 76,
        text: "Costumo usar muito meu sentido do tato em meu trabalho criativo",
    },
    {
        qtn: 77,
        text: "Tenho tendência a usar muito o meu sentido do paladar no meu trabalho criativo",
    },
    { qtn: 78, text: "Costumo usar muito meu olfato no meu trabalho criativo" },
];

function createQuestion(text, qtn) {
    let quiz = document.quiz;

    let fst = document.createElement("fieldset");
    let lbl = document.createElement("label");
    let lblText = document.createTextNode(qtn + ") " + text);
    lbl.appendChild(lblText);
    fst.appendChild(lbl);

    let inputDiv = document.createElement("div");
    inputDiv.className = "inputDiv";

    for (let i = 0; i < 5; i++) {
        let inputLabel = document.createElement("label");
        inputLabel.className = "inputLabel";

        let ipt = document.createElement("input");
        ipt.setAttribute("type", "radio");
        ipt.setAttribute("name", "q" + qtn);
        //ipt.setAttribute("required", "")
        ipt.value = `${i + 1}`;

        let spn = document.createElement("span");
        spn.className = "checkmark";

        inputLabel.appendChild(ipt);
        inputLabel.appendChild(spn);
        inputDiv.appendChild(inputLabel);
    }

    fst.appendChild(inputDiv);

    quiz.insertBefore(fst, quiz.enviar);
}

for (let q of data) {
    createQuestion(q.text, q.qtn);
}

function reverterValor(num) {
    let returnVal = 0;

    switch (num) {
        case 1:
            returnVal = 5;
            break;
        case 2:
            returnVal = 4;
            break;
        case 3:
            returnVal = 3;
            break;
        case 4:
            returnVal = 2;
            break;
        case 5:
            returnVal = 1;
            break;
    }

    return returnVal;
}

function onQuizSubmit(e) {
    e.preventDefault();
    let quiz = document.quiz;

    let result = [];

    for (let i = 0; i < data.length; i++) {
        if (isNaN(parseInt(quiz[`q${i + 1}`].value))) result.push(0);
        else result.push(parseInt(quiz[`q${i + 1}`].value));
    }

    console.log(result);

    let cr1 = document.querySelector("span[name='cri1v']");
    let cr2 = document.querySelector("span[name='cri2v']");
    let cr3 = document.querySelector("span[name='cri3v']");
    let cr4 = document.querySelector("span[name='cri4v']");
    let cr5 = document.querySelector("span[name='cri5v']");
    let cr6 = document.querySelector("span[name='cri6v']");
    let cr7 = document.querySelector("span[name='cri7v']"); 
    let cr8 = document.querySelector("span[name='cri8v']");

    let sum = 0

    // Criterio 1
    for (let i = 1; i <= 2; i++) {
        sum += reverterValor(result[i - 1])
    }

    cr1.textContent = (sum / 2).toFixed(2);

    //Criterio 2
    sum = 0
    for (let i = 3; i <= 19; i++) {
        if (i === 14 || i === 15 || i === 16 || i === 17) sum += result[i - 1]
        else sum += reverterValor(result[i - 1])
    }

    cr2.textContent = (sum / 17).toFixed(2)

    //Criterio 3
    sum = 0
    for (let i = 20; i <= 37; i++) {
        sum += reverterValor(result[i - 1]);
    }

    cr3.textContent = (sum / 18).toFixed(2)

    //Criterio 4
    sum = 0
    for (let i = 38; i <= 46; i++) {
        if (i === 40 || i === 43 || i === 45 || i === 46) sum += result[i - 1];
        else sum += reverterValor(result[i - 1]);
    }

    cr4.textContent = (sum / 9).toFixed(2);

    //Criterio 5
    sum = 0;
    for (let i = 47; i <= 53; i++) {
        if (i === 47 || i === 48 || i === 51 || i === 53) sum += result[i - 1];
        else sum += reverterValor(result[i - 1]);
    }

    cr5.textContent = (sum / 7).toFixed(2);

    //Criterio 6
    sum = 0;
    for (let i = 54; i <= 71; i++) {
        sum += reverterValor(result[i - 1]);
    }

    cr6.textContent = (sum / 18).toFixed(2);

    //Criterio 7
    sum = 0;
    for (let i = 72; i <= 73; i++) {
        sum += reverterValor(result[i - 1]);
    }

    cr7.textContent = (sum / 2).toFixed(2);

    //Criterio 8
    sum = 0;
    for (let i = 74; i <= 78; i++) {
        sum += reverterValor(result[i - 1]);
    }

    cr8.textContent = (sum / 5).toFixed(2);

    //Tirar o display none
    document.querySelector("div[class='result']").style.display = "flex";
}

quiz.addEventListener("submit", onQuizSubmit);

document.querySelector("button[name='reiniciar']").addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("div[class='result']").style.display = "none";
    quiz.reset();
})
