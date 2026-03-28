import React from 'react'

const Button = ({ title, id , rightIcon, leftIcon, containerClass }) => {
    return (
        <button id={id} className={`group relative z-10 w-fit
        cursor-pointer overflow-hidden rounded-full bg-violet-58
        px-7 py-3 text-black ${containerClass}`}>

            {/* group: Essa classe no Tailwind.
                Ela permite que eu anime elementos dentro
                do botão quando eu passo o mouse no botão
                (ex: fazer o ícone se mover quando der hover no botão).

                relative z-10: Garante que o botão fique na camada
                correta acima do vídeo de fundo.
                No caso como ele esta no z-10(ele está no décimo
                andar da camada. Um exemplo: o video do background
                está no andar z-20 logo ele está acima, dito isso ele
                tem prioridade ao do andar z-10.)

                w-fit: Faz com que o botão tenha apenas a largura
                 necessária para o texto, em vez de ocupar a tela
                 inteira.

             */}
            {leftIcon}

            <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">

                <div>
                    {title}
                </div>
            </span>
            {rightIcon}
        </button>
    )
}
export default Button
