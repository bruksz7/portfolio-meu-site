const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');
const cores = ['#FFB347', '#FFCC33', '#FF7E5F', '#FF6F91'];

botao.addEventListener('click', () => {
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.background = corAleatoria;

  mensagem.classList.add('animate');
  setTimeout(() => mensagem.classList.remove('animate'), 300);

  mensagem.textContent = "Você clicou no botão do Site 2!";
});
