import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

// Registrar o plugin é essencial para o ScrollTrigger funcionar
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });
    });

    return (
        <div id="about" className="relative z-20 min-h-screen w-screen py-20 bg-white">
            <div className="relative mb-8 flex flex-col items-center gap-5 px-5">
                <h2 className="font-general text-sm uppercase md:text-[15px] text-black">
                    Welcome to Tokyo-To
                </h2>

                <div className="mt-4 text-center text-4xl uppercase leading-[0.8] md:text-[5rem] font-zentry font-black text-black">
                    <b>T</b>he w<b>o</b>rld's largest <br /> graff<b>i</b>ti arch<b>I</b>ve
                </div>
            </div>

            {/* Container da Animação */}
            <div className="h-dvh w-screen flex items-center justify-center relative" id="clip">

                {/* Imagem que expande */}
                <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]">
                    <img
                        src="img/About-2.jpg"
                        alt="Background"
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>

                {/* TEXTO CORRIGIDO: Agora posicionado no fundo do container #clip */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-96 text-center px-5 md:max-w-[34rem] text-black z-30">
                    <p className="font-JetSet text-lg leading-relaxed">
                        Graffiti, inline skating, and rebel attitude. <br />
                        Jet Set Radio is the SEGA classic that turned urban art into a vibrant visual manifesto.
                    </p>
                    <p className="mt-4 font-JetSet uppercase italic text-black">
                        Tokyo-to is calling. Join the crew on PC & Consoles.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;