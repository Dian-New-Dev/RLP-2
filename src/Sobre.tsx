import React from 'react';

const Sobre: React.FC = () => {
    return (
        <div id='B' className='relative z-10 w-full'>
            <div className='relative w-full z-10 flex mt-[-150px] md:mt-[-250px] justify-center text-center lg:text-left lg:justify-between'>
                <div className='relative z-10 flex flex-col md:flex-row bg-red-500/0 w-[70%] rounded-br-[300px] md:p-12 gap-8'>
                    <div className='z-10 w-full md:w-1/2 flex flex-col items-center md:items-start gap-4 '>
                        <h3 className='text-lg font-bold text-sky-100'>MAZDA? DE GRAÇA? SÓ NA MOTORCITY!</h3>
                        <p className='text-sky-100'>A fim de comemorar o aniversário de 30 anos da rede de concessionárias que mais cresce no Brasil, a Motor City decidiu presentear você! E para fazer essa festa, escolhemos sortear um dos modelos mais cobiçados do mundo no momento. O aniversário é nosso, mas o presente é todo seu!</p>
                        <button className='bg-orange-500 hover:bg-blue-950 rounded-full w-52 py-4 font-bold text-sky-100'>Ver o Mazda em Ação</button>
                    </div>
                    <div className='z-10 w-full md:w-1/2 flex flex-col items-center md:items-start gap-4 mb-4 md:mb-80 lg:mb-40  '>
                        <h3 className='text-lg font-bold text-sky-100'>UM FESTIVAL DE PRESENTES</h3>
                        <p className='text-sky-100'>O sorteio é nossa forma de agradecer ao carinho e colaboração de nosso clientes, mas não é nosso único presente. Durante o nosso mês de comemorações, estaremos oferecendo ofertas incríveis. Confira nosso preços, converse com nossos atendentes e conquiste seu direito de dirigir.</p>
                        <button className='z-40 bg-orange-500 hover:bg-blue-950 rounded-full w-52 py-4 font-bold text-sky-100'>Ir para Página da Motor City</button>    
                    </div>
                </div>
                <div id='svgggg' className="custom-shape-divider-bottom-1723485188 z-0 hidden md:block">
                    <svg className='' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>



            </div>


        </div>
    );
};

export default Sobre;

