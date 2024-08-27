import React from 'react';

const Formulario: React.FC = () => {
    return (
        <div id='D' className='z-10 mt-[-1px] p-0 xl:p-32 pt-16 md:pt-0 lg:pt-16 md:p-20 bg-blue-300'>

            <h3 className='relative text-lg z-40 font-bold text-center mb-4'>PREENCHA PARA PARTICIPAR</h3>

            <div className='relative'>
                <form action="#" className='flex flex-col items-center gap-8 bg-teal-500 md:rounded-3xl p-8 md:p-20'>
                    <input type="text" name='name' className='w-full z-10 p-2 rounded-lg border border-gray-300' placeholder='Nome Completo' />
                    <input type="text" name='address' className='w-full z-10 p-2 rounded-lg border border-gray-300' placeholder='Endereço' />
                    <input type="text" name='email' className='w-full z-10 p-2 rounded-lg border border-gray-300' placeholder='E-mail' />
                    <textarea name="answer" id="answer" className='w-full z-10 p-2 rounded-lg border border-gray-300' placeholder='Qual a Rede de Concessionárias que mais cresce no Brasil?'></textarea>
                    <button className='bg-sky-800 z-20 rounded-full w-52 py-4 font-bold text-sky-100 hover:bg-sky-900' type="submit">Enviar</button>
                </form>

                <img className='absolute w-20 md:w-32 top-0 md:top-[-40px] left-0 md:left-[-40px]' src={"./assets/images/svg/sun.svg"} alt="Desenho de sol" />
                <img className='absolute w-20 md:w-32 bottom-0 left-10 z-10' src={"./assets/images/svg/cocktail.svg"} alt="Desenho de bebida de verão" />
                <img className='absolute w-20 md:w-32 bottom-0 left-0' src={"./assets/images/svg/melancia.svg"} alt="Desenho de melancia" />
                <img className='absolute z-0 rotate-image w-[600px] sm:w-[500px] md:w-[600px] bottom-0 right-[-100px] md:right-[-200px]' src={"./assets/images/svg/coqueiro.svg"} alt="Imagem de coqueiro" />
            </div>



        </div>
    );
};

export default Formulario;