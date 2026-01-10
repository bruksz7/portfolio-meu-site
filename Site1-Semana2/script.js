const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');
const cores = ['#FF6B6B', '#6BCB77', '#4D96FF', '#FFD93D'];

botao.addEventListener('click', () => {
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.background = corAleatoria;

  mensagem.classList.add('animate');
  setTimeout(() => mensagem.classList.remove('animate'), 300);

  mensagem.textContent = "Você clicou no botão do Site 1!";
});
