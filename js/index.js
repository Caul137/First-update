const botões = document.querySelectorAll('.botão')

const personagens = document.querySelectorAll(".personagem")


botões.forEach((botão, indice) => {
        botão.addEventListener("click", () => {
            console.log("clicou no botão", botão);

             desselecionarBotão();

        botão.classList.add("selecionado");

            desselecionarPersonagem();

        personagens[indice].classList.add("selecionado");
        

    })
})

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");

    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotão() {
    const botãoSelecionado = document.querySelector(".botão.selecionado");
    botãoSelecionado.classList.remove("selecionado");
}
