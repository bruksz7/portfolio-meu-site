const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');
const cores = ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9'];

botao.addEventListener('click', () => {
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.background = corAleatoria;

  mensagem.classList.add('animate');
  setTimeout(() => mensagem.classList.remove('animate'), 300);

  mensagem.textContent = "Você clicou no botão do Site 3!";
});
