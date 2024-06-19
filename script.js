const perguntas = [
{
enunciado: "Você acredita que a eutanásia deveria ser legalizada?",
alternativas: [
"Isso é assustador!",
"Isso é maravilhoso!"
]
},
{
enunciado: "O serviço militar obrigatório deveria ser instituído para todos os cidadãos?",
alternativas: [
"Sim, todos deveriam servir.",
"Não, deveria ser voluntário."
]
},
{
enunciado: "A privacidade online deve ser priorizada mesmo que comprometa a segurança nacional?",
alternativas: [
"Sim, a privacidade deve ser priorizada.",
"Não, a segurança nacional é mais importante."
]
},
{
enunciado: "ocê acha que o uso de animais em pesquisas científicas deve ser permitido?",
alternativas: [
"Sim, deve ser permitido",
"Não, deve ser proibido."
]

},
{
enunciado: "O voto deveria ser obrigatório para todos os cidadãos elegíveis?",
alternativas: [
"Não, o voto deveria ser opcional.",
"Sim, o voto deveria ser obrigatório."
]
}
];
let atual = 0;
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');
function mostraPergunta() {
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
alternativasContainer.innerHTML = '';
perguntaAtual.alternativas.forEach((alternativa, index) => {
const button = document.createElement('button');
button.textContent = alternativa;
button.addEventListener('click', () => {
atual++;
if (atual < perguntas.length) {
mostraPergunta();
} else {
caixaPerguntas.textContent = 'Você completou o questionário!';
alternativasContainer.innerHTML = '';
}
});
alternativasContainer.appendChild(button);
});
}
mostraPergunta();
