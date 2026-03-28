import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

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
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 flex flex-col items-center gap-5">
                <h2 className="font-JetSet text-sm uppercase md:text-[17px]">
                    Welcome to Tokyo-To
                </h2>


                    <AnimatedTitle title="<b>S</b>kate T<b>h</b>rough the w<b>o</b>rld's largest <br /> stree<b>t</b> <b>REB</b>ellion"
                    containerClass="mt-5 !text-black text-center"/>


                <div className="absolute bottom-[-80dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]">
                    <p className="text-black font-JetSet">
                        Tokyo-To unites every rebel from countless streets and districts, both digital and physical, into a unified Visual Manifesto.
                    </p>
                </div>

            </div>

            {/* Container da Animação */}
            <div className="h-dvh w-screen" id="clip">

                {/* Imagem que expande */}
                <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]">
                    <img
                        src="img/About-6.png"
                        alt="Background"
                        className="absolute left-0 top-0 size-full object-cover"
                    />


                </div>
            </div>
        </div>
    );
};

export default About;