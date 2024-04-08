const botaoMostrarMais = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
botaoMostrarMais.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});
function esconderBotao() {
    botaoMostrarMais.classList.add('remover');
}
function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
