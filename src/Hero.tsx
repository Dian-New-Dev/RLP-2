import React from 'react';
import Arte from './Arte'

const Hero: React.FC = () => {
    return (
        <div id="hero-outer" className='w-full h-screen min-h-[750px] overflow-hidden md:pt-32 lg:pt-32 xl:pt-32 2xl:pt-64'>
            <div className='md:flex items-center p-4 md:px-16 xl:px-48 2xl:px-48 md:pt-40 w-full h-screen'>

                <Arte />



                <div id="hero-text" className='z-10 w-full md:w-[60%] md:ml-[-200px] pb-[900px] h-full text-sky-100 flex flex-col md:items-end gap-2 md:gap-8 text-center md:text-right'>
                    <h1 className='text-3xl md:text-5xl 2xl:text-7xl font-bold'>Já pensou, você de Mazda?</h1>
                    <h2 className='w-full xl:[75%]'>Neste verão, a Motor City coloca um dos carros mais desejados de 2024 a sorteio. Não fique fora dessa, quem sabe você é o sortudo da vez?</h2>
                    <div className='flex flex-col items-center md:items-end gap-4'>
                        <button className='bg-blue-900 hover:bg-blue-950 rounded-full w-52 py-4 font-bold'>Quero Participar!</button>
                        <button className='bg-blue-600 hover:bg-blue-700 rounded-full w-52 py-4 font-bold'>Quero Saber Mais</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;