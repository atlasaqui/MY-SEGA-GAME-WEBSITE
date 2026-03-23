import React from 'react'
import { useState, useRef } from 'react';


const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 5;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }


    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    /* O Que upcomingVideoIndex faz: ele tenta dividir:
      0 % 4 = 0 + 1 => 1
      1 % 4 = 1 + 1 => 2
      2 % 4 = 2 + 1 => 3
      3 % 4 = 3 + 1 => 4
      4 % 4 = 4 + 1 => 1

      NO CASO quando finalizar o "Modular Operator"
      o resto será zero e então irá começar de novo
      começando o loop com '1'.

      */

    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);
    }

    const getVideoSrc = (index) => `videos/jetsethero-${index}.mp4`;

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div id="video-frame" className="relative z-10 h-dvh w-screen
        overflow-hidden rounded-lg color-jsr-bg">

                {/* Classe Tailwind */} {/* Classe CSS */}

                {/* relative */}    {/* position: relative; */}

                {/*Diz ao navegador: "Eu sou a base".
                 Se você colocar um ícone ou botão
                 "absoluto" dentro dela, ele vai se
                 mover em relação aos limites dessa
                 div, e não da página inteira. */}

                {/* h-dvh */}    {/* height: 100dvh; */}

                {/* Dynamic Viewport Height.
                 Resolve o problema clássico
                 do celular onde a barra do
                 navegador cobre o fundo do site.
                 Ela encolhe e cresce conforme
                 as barras do browser aparecem. */}

                {/* w-screen */}    {/* width: 100vw; */}

                {/* Viewport Width. Garante
                 que a div ocupe exatamente
                 100% da largura da janela
                 do usuário, independente
                 do tamanho do conteúdo interno. */}

                {/* overflow-x-hidden */}    {/* overflow-x: hidden; */}

                {/* É o "seguro anti-bug".
                 Se algum elemento interno
                 for um pouco maior que a
                 tela (por erro ou animação),
                 ela esconde a sobra, impedindo
                 que o usuário consiga "puxar"
                 o site para o lado. */}

                {/* z-10 */}    {/* z-index: 10; */}

                {/* Define a "camada" de profundidade.
                 É como colocar uma folha de papel em
                 cima da outra; o 10 garante que ele
                 fique acima de elementos com z-index
                 menor. */}

                {/* rounded-lg */}    {/* border-radius: 0.5rem; */}

                {/* Deixa as quinas da div
                 arredondadas (8px). */}

                {/* color-jsr-bg */}    {/* background-color: var(--jsr-color); */}

                {/* Aplica a cor de fundo
                personalizada do projeto. */}

                <div className="mask-clip-path absolute-center absolute
                z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div onClick={handleMiniVdClick}
                         className="origin-center scale-50 opacity-0
                    transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                        <video
                            ref ={nextVideoRef}
                            src={getVideoSrc
                            (upcomingVideoIndex)}
                            loop
                            muted
                            id="current-video"
                            className="size-64 origin-center scale-150 object-cover object-center"
                            onLoadedData={handleVideoLoad}

                        />
                    </div>
                </div>
                <video
                    ref={nextVideoRef}
                    src={getVideoSrc(currentIndex + 1)}
                    loop
                    muted
                    id="next-video"
                    className="absolute-center invisible absolute z-20
                size-64 object-cover object-center"
                    onLoadedData={handleVideoLoad

                    }

                />
                <video
                    src={getVideoSrc(currentIndex === totalVideos - 1
                        ? 1 : currentIndex)}
                    autoPlay
                    loop
                    muted
                    className="absolute left-0 top-0 size-full
                    object-cover object-center"
                    onLoadedData={handleVideoLoad}
                />
            </div>
            <div>


            </div>
        </div>

    )
}
export default Hero
