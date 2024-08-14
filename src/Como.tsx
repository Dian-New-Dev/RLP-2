import React from 'react';

const Como: React.FC = () => {
    return (
        <div className='flex z-20 bg-blue-300  relative p-4 mt-20 md:mt-[-1px] pt-20 md:pt-20 xl:pt-64 md:p-12 text-center md:text-left'>
            <div className='relative z-10 flex flex-col gap-8 text-gray-700 '>
                <div className='flex gap-4 mt-10'>
                    <div className='flex flex-col gap-4 text-sky-100 px-0 lg:px-8 xl:px-16 '>
                        <h3 className='text-lg font-bold text-sky-100'>COMO PARTICIPAR?</h3>
                        <p className='text-sm lg:text-lg'>Mais fácil, só bicicleta de rodinha: basta preencher seus dados no formulário abaixo e aguardar o e-mail de confirmação. O e-mail conterá seu número de sorteio, com o qual você estará concorrendo ao prêmio.</p>
                    </div>
                    <div className='flex flex-col gap-4 text-sky-100 px-0 lg:px-8 xl:px-16'>
                        <h3 className='text-lg font-bold text-sky-100'>COMO DESCUBRO QUEM GANHOU?</h3>
                        <p className='text-sm lg:text-lg'>Faremos uma live, no dia 28/11, às 19h. Não deixe de conferir nosso show de ofertas, nossas brincadeiras e uma demonstração ao vivo do Mazda sendo conduzido pelo piloto de Rally, Giacov Gianone. </p>
                    </div>
                </div>
                <div className='grid place-items-center'>
                    <button className='bg-orange-300 rounded-full w-52 py-4 font-bold text-sky-100'>Página da Live</button>
                </div>

                
                    
            </div>

            <img className='absolute w-full scale-y-125 sm:scale-y-75 md:scale-y-50 xl:scale-y-[0.35] top-[100px] sm:top-[-100px]  md:top-[-230px] xl:top-[-230px] left-0 z-0' src="src/assets/svg/bg4.svg" alt="blob de pano de fundo" />

            <div className='absolute w-[100%] sm:w-[70%] right-[-100px] top-[-75px] md:top-[-250px]'>
                <img className='w-full' src="src/assets/mazda2.png" alt="Imagem de um Mazda" />
            </div>
        </div>
    );
};

export default Como;