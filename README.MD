<div align="center">

# 🛹 ⚡ Jet Set Radio Reimagined ⚡ 🛹

<img src="https://i.pinimg.com/1200x/96/35/6e/96356e164e7834a196dc8765e3d805c1.jpg" alt="Jet Set Radio Wallpaper" width="600px" style="border-radius: 15px; border: 4px solid #eadc00; box-shadow: 0px 10px 20px rgba(0,0,0,0.3);" />

[![Licença](https://img.shields.io/github/license/seu-usuario/seu-repositorio?style=for-the-badge&color=eadc00)](LICENSE)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)

---

### "Understand the concept of love!" 🎧

**Jet Set Radio Reimagined** é um tributo moderno ao clássico do SEGA Dreamcast. 
Unindo a estética urbana do *Cel-Shading* e a cultura do graffiti com tecnologias de ponta do desenvolvimento web.

</div>

## 💫 O que é Jet Set Radio?

Lançado originalmente para o SEGA Dreamcast, o jogo é um marco visual. Ele apresenta uma Tokyo-To estilizada, trilha sonora icônica (Hip-Hop, Funk, Eletrônica) e uma jogabilidade focada em expressão e rebeldia artística.

## 💬 Por que este projeto?

> 💭 **Nostalgia & Hiperfoco:** Este projeto nasceu do desejo de resgatar uma estética que definiu minha infância, transformando essa paixão em um estudo de caso técnico de alto nível.
> 
> 🎯 **O Objetivo:** Unir design disruptivo com padrões de desenvolvimento profissionais e animações complexas.

---

## 🛠️ Tecnologias Utilizadas

| Ferramenta | Função |
| :--- | :--- |
| **React.js** | Core da aplicação e gerenciamento de estados. |
| **GSAP + ScrollTrigger** | Orquestração de animações de scroll e timeline. |
| **Tailwind CSS** | Estilização rápida e responsiva. |
| **Framer Motion** | Transições de componentes e micro-interações. |

---

## 🕹️ Guia de Instalação (Local)

Siga os passos abaixo para carregar seu spray e rodar a rádio na sua máquina:

### 1️⃣ Clonar o Repositório
```bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

cd seu-repositorio

npm install

npm run dev

🎬 1. Seção Hero

💡 O coração dinâmico da página

O código do Hero gerencia um carrossel contínuo de 5 vídeos em looping através de cálculo modular (currentIndex % totalVideos).

Quando você clica na miniatura central, o React e o GSAP trabalham juntos: o vídeo do fundo é trocado instantaneamente enquanto uma animação de escala dá a ilusão de que a tela foi preenchida pelo novo clipe.

Também conta com um efeito de máscara poligonal via CSS (clip-path) que se expande durante a rolagem da página por meio do ScrollTrigger.

<div align="center">

📼 Espaço para o Vídeo Demonstrativo da Seção Hero
(Arraste e solte o seu arquivo de vídeo aqui para gerar o player)

</div>
🛹 2. Seção About

💡 Focada em imersão e narrativa visual

Esta seção utiliza fortemente o plugin ScrollTrigger do GSAP para criar um efeito de fixação de tela (pin: true).

Conforme o usuário rola a página, a tela trava e a imagem de Tokyo-To (que começa pequena e com bordas arredondadas no centro) vai se expandindo até preencher 100% da largura e altura do monitor.

É nela também que inserimos o componente de títulos animados que quebra os textos e os joga na tela com rotação 3D.

<div align="center">

📼 Espaço para o Vídeo Demonstrativo da Seção About
(Arraste e solte o seu arquivo de vídeo aqui para gerar o player)

</div> ```


