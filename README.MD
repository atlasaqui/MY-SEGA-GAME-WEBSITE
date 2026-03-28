<div align="center">

# 🛹 ⚡ Jet Set Radio Reimagined ⚡ 🛹

  <img src="https://i.pinimg.com/1200x/96/35/6e/96356e164e7834a196dc8765e3d805c1.jpg" alt="Jet Set Radio Wallpaper" width="600px" style="border-radius: 15px; border: 4px solid #eadc00; box-shadow: 0px 10px 20px rgba(0,0,0,0.3);" />

---

## 💫 O que é Jet Set Radio?

</div>

Lançado originalmente para o SEGA Dreamcast, **Jet Set Radio** é um verdadeiro marco na história dos videogames. O jogo se destaca por sua estética urbana pioneira em *Cel-Shading*, apresentando uma arte altamente estilizada puxada para a cultura punk e do graffiti de Tokyo-To. Tudo isso é amarrado por uma trilha sonora maravilhosa e icônica que mistura Hip-Hop, Funk e Eletrônica.

<div align="center">

## 💬 Por que decidi fazer este projeto?

</div>

> 💭 **Nostalgia & Hiperfoco:** Este projeto nasceu de um momento de hiperfoco com jogos antigos. Decidi resgatar algo que fez parte de uma fase muito importante da minha vida quando eu era pequeno pra usar em estudo. 
> 
>  **O Objetivo:** Unir coisas que eu gosto, aprender e me divertir, mas aplicando um padrão de desenvolvimento totalmente profissional.

---

<div align="center">

## 🛠️ Tecnologias & Como Instalar

</div>

### 🕹️ Como rodar na sua máquina? (Guia para Rodar Localmente)
Siga o tutorial abaixo para carregar o seu spray e colocar o site para rodar!

---

1️⃣ Clonar o Repositório
Primeiro, você precisa trazer os arquivos do jogo para o seu computador. Abra o seu terminal e digite:

```bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

2️⃣ Entrar no Território
cd seu-repositorio

3️⃣ Carregar o Spray (Instalar Dependências)
npm install

4️⃣ Ligar a Rádio! (Iniciar Servidor)
npm run dev

---

<div style="background-color: #1a1a1a; border-radius: 10px; padding: 20px; margin-bottom: 20px; border: 1px solid #333;">
  <h3 style="color: #eadc00; margin-top: 0; font-family: sans-serif;">🎬 1. Seção Hero</h3>
  <p style="color: #cccccc; line-height: 1.6; font-family: sans-serif;">
    O coração dinâmico da página. O código do <strong>Hero</strong> gerencia um carrossel contínuo de 5 vídeos em looping através de cálculo modular (<code style="background-color: #2a2a2a; padding: 2px 5px; border-radius: 4px; color: #ff8a00;">currentIndex % totalVideos</code>).
  </p>
  <p style="color: #cccccc; line-height: 1.6; font-family: sans-serif;">
    Quando você clica na miniatura central, o <strong>React</strong> e o <strong>GSAP</strong> trabalham juntos: o vídeo do fundo é trocado instantaneamente enquanto uma animação de escala dá a ilusão de que a tela foi preenchida pelo novo clipe. Também conta com um efeito de máscara poligonal via CSS (<code style="background-color: #2a2a2a; padding: 2px 5px; border-radius: 4px; color: #ff8a00;">clipPath</code>) que se expande durante a rolagem da página por meio do <strong>ScrollTrigger</strong>.
  </p>
  <div align="center" style="margin-top: 15px; background-color: #111; padding: 15px; border-radius: 8px;">
    <span style="color: #888; font-style: italic; font-family: sans-serif;">📼 [Arraste e solte o vídeo demonstrativo da Seção Hero aqui]</span>
  </div>
</div>

<div style="background-color: #1a1a1a; border-radius: 10px; padding: 20px; border: 1px solid #333;">
  <h3 style="color: #eadc00; margin-top: 0; font-family: sans-serif;">🛹 2. Seção About</h3>
  <p style="color: #cccccc; line-height: 1.6; font-family: sans-serif;">
    Focada em imersão e narrativa visual. Esta seção utiliza fortemente o plugin <strong>ScrollTrigger</strong> do GSAP para criar um efeito de fixação de tela (<code style="background-color: #2a2a2a; padding: 2px 5px; border-radius: 4px; color: #ff8a00;">pin: true</code>).
  </p>
  <p style="color: #cccccc; line-height: 1.6; font-family: sans-serif;">
    Conforme o usuário rola a página, a tela trava e a imagem de Tokyo-To (que começa pequena e com bordas arredondadas no centro) vai se expandindo até preencher 100% da largura e altura do monitor. É nela também que inserimos o componente de títulos animados que quebra os textos e os joga na tela com rotação 3D.
  </p>
  <div align="center" style="margin-top: 15px; background-color: #111; padding: 15px; border-radius: 8px;">
    <span style="color: #888; font-style: italic; font-family: sans-serif;">📼 [Arraste e solte o vídeo demonstrativo da Seção About aqui]</span>
  </div>
</div>

---
