import React from 'react';

const Formulario: React.FC = () => {
    return (
        <div className='z-10 p-20 bg-sky-100'>

            <h3 className='relative text-lg z-10 font-bold text-center mb-4'>PREENCHA PARA PARTICIPAR</h3>

            <div className='relative'>
                <form action="#" className='flex flex-col items-center gap-8 bg-teal-500 rounded-3xl p-20'>
                    <input type="text" name='name' className='w-full z-10 p-2 rounded-lg border border-gray-300' placeholder='Nome Completo' />
                    <input type="text" name='address' className='w-full z-10 p-2 rounded-lg border border-gray-300' placeholder='Endereço' />
                    <input type="text" name='email' className='w-full z-10 p-2 rounded-lg border border-gray-300' placeholder='E-mail' />
                    <textarea name="answer" id="answer" className='w-full z-10 p-2 rounded-lg border border-gray-300' placeholder='Qual a Rede de Concessionárias que mais cresce no Brasil?'></textarea>
                    <button className='bg-sky-800 z-10 rounded-full w-52 py-4 font-bold text-sky-100' type="submit">Enviar</button>
                </form>

                <img className='absolute w-32 top-[-40px] left-[-40px]' src="src/assets/svg/sun.svg" alt="Desenho de sol" />
                <img className='absolute w-32 bottom-0 left-10 z-10' src="src/assets/svg/cocktail.svg" alt="Desenho de bebida de verão" />
                <img className='absolute w-32 bottom-0 left-0' src="src/assets/svg/melancia.svg" alt="Desenho de melancia" />
                <img className='absolute z-0 rotate-image w-[600px] bottom-0 right-[-200px]' src="src/assets/svg/coqueiro.svg" alt="Imagem de coqueiro" />
            </div>



        </div>
    );
};

export default Formulario;