import React from 'react';
import Arte from './Arte'

const Hero: React.FC = () => {
    return (
        <div id="hero-outer" className='w-full h-screen overflow-hidden pt-12'>
            <div className='flex items-center  p-10 pt-40 w-full h-screen'>

                <Arte />



                <div className='w-[45%] pb-[900px] h-full text-sky-100 flex flex-col gap-8 text-right'>
                    <h1 className='text-6xl w-[400px] ml-[-125px] font-bold'>Já pensou, você de Mazda?</h1>
                    <h2>Neste verão, a Motor City coloca um dos carros mais desejados de 2024 a sorteio. Não fique fora dessa, quem sabe você é o sortudo da vez?</h2>
                    <div className='flex flex-col items-center gap-4'>
                        <button className='bg-blue-900 hover:bg-blue-950 rounded-full w-52 py-4 font-bold'>Quero Participar!</button>
                        <button className='bg-blue-600 hover:bg-blue-700 rounded-full w-52 py-4 font-bold'>Quero Saber Mais</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;