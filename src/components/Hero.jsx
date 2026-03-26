import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Button from './Button';
import { TiLocationArrow } from "react-icons/ti";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import Loader from './Loader';

import { ScrollTrigger} from 'gsap/all'

/* Para usar a biblioteca do gsap preciso importar:
    import gsap from 'gsap';
    import { useGSAP } from "@gsap/react";
*/

gsap.registerPlugin(ScrollTrigger)

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

    /* const [currentIndex, setCurrentIndex] = useState(1);
       const totalVideos = 5;
       const upcomingVideoIndex = (currentIndex % totalVideos) + 1; ]

        currentIndex: É o vídeo que você está vendo
        no fundo (background) agora.

        totalVideos = 5: Avisa ao código que você tem
        os arquivos do 1 ao 5

        upcomingVideoIndex: Essa é a mágica do Operador
        Modular (%).Se o currentIndex for 5, a conta
        fica: 5 % 5 (resto zero) + 1 = 1.
        Isso garante que o site nunca tente carregar um
        "video-6" que não existe; ele sempre volta para o 1.


   */


    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);

        /* Aqui está o segredo: O vídeo do meio não "cresce"
           fisicamente para virar o fundo. Na verdade, o que
           acontece é uma troca de papéis instantânea:

           1- O currentIndex muda para o valor do upcomingVideoIndex.
           2- O React reconstrói o componente.
           3- O vídeo que estava no Fundo (Background) muda o endereço
            (src) para o novo índice.
           */
    }
    useEffect(() => {
        setIsLoading(false);
    })

    useGSAP(() => {
        if(hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' });

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play(),
            })
            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut'

            })
        }

    }, {dependencies: [currentIndex], revertOnUpdate: true})

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(6% 48%, 100% 15%, 79% 100%, 3% 89%)',
            /*
            esse é o formato do clipPath do
            balão maior.
            */

        })
        gsap.from("#video-frame", {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,

                /*
                Esse gsap é responsavel pela transição
                do balão dechat menor para o maior.
                */
            }
        })
    })

    const getVideoSrc = (index) => `videos/jetsethero-${index}.mp4`;

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            {isLoading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-black">
                    {/* Mudei para bg-black para combinar com o estilo do novo loader neon */}

                    <Loader />

                </div>
            )}

            <div id="video-frame"
                 className="relative z-10 h-dvh w-screen
                 overflow-hidden rounded-lg color-jsr-bg"
            >

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


                <div>
                    <div className="mask-clip-path absolute-center absolute
                z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniVdClick}
                             className="origin-center scale-50 opacity-0
                    transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                            {/* mask-clip-path: Essa classe
                         (que eu defini no CSS) é o que dá o formato
                         especial (como um diamante ou hexágono) ao
                         vídeo do meio.

                         upcomingVideoIndex no src: Note que o vídeo que
                         aparece no meio não é o mesmo que está no fundo.
                         Ele já está mostrando o "próximo". É como um spoiler
                         do que vai acontecer se você clicar

                         hover:scale-100: Quando você passa o mouse,
                         ele aumenta de tamanho e fica visível, criando
                         o feedback visual de "clique aqui"

                        */
                            }
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
                        onLoadedData={handleVideoLoad}

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

                <h1 className="special-font hero-headingothercase absolute bottom-5 right-15 z-40 text-jsr-orange">
                    REALITY <b> IS </b> PUNK
                </h1>

                <div className="absolute left-0 top-0 z-40 size-full pointer-events-none">

                    <div className="mt-50 px-5 sm:px-10">
                        <div>
                        <h1 className="hero-headingincase absolute top-10 left-8 text-jsr-teal">Jet<b>Set</b>Radio
                        </h1>
                        <h1 className="hero-headingincase absolute top-10 text-jsr-yellow">Jet<b>Set</b>Radio
                        </h1>
                        </div>

                        <p className="absolute left-15 top-50 mb-1 max-w-112 font-JetSet text-white text-xl">
                            Ride on the Street <br /> Bring life to the city with its own art. </p>
                        {/* esse '<p>'(parágrafo) eu responsavel pelo texto
                   suporte do heading que é o 'JETSETRADIO' ambos estão
                   conectado em uma única div.
                */}
                        <div className="absolute left-13 top-70 pointer-events-auto">
                        <Button
                            id="watch-trailer"
                            title="Watch Trailer"
                            leftIcon={<TiLocationArrow />} //aqui é o q vai definir o 'icon' do botão.

                            containerClass="!bg-yellow-300 flex-center gap-1 pointer-events-auto" /*1- o container define a aparência do botão
                                                                       !bg-yellow-300: O símbolo ! (important)
                                                                        garante que essa cor ganhe de qualquer outra
                                                                        cor padrão que o componente tente aplicar.

                                                                        2- É uma classe utilitária (eu costumizei no meu index.css)
                                                                        que centraliza o ícone e o texto
                                                                        dentro do botão.

                                                                        3- gap-1: Cria um pequeno espaço entre o ícone da seta (TiLocationArrow)
                                                                        e o texto "Watch Trailer" para eles não ficarem grudados.
                                                                      */
                        />
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="special-font hero-headingothercase absolute bottom-5 right-15 z-0 text-black">
                REALITY<b> IS </b>PUNK
            </h1>

        </div>

    );
};
export default Hero