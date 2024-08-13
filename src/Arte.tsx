import React from 'react';

const Arte: React.FC = () => {
    return (
        <div className='w-full mt-[-400px] grid place-items-center'>
            <img className='w-full max-w-[900px]' src="src/assets/arte.png" alt="Arte gráfica de um carro na frente de  coqueiros e pranchas de surfe" />
        </div>

    );
};

export default Arte;



// <div className='relative  h-96 border w-full flex justify-end mr-[-20px]'>
// <img id="imagem-do-carro" className='absolute bottom-0 z-20 scale-x-[-1]' src="/src/assets/mazda.png" alt="Imagem do carro a ser sorteado" />

// <img className='absolute bottom-0 left-0 z-10 w-[100%] scale-y-[1.5]' src="src/assets/svg/blob.svg" alt="Desenho de folha" />
// <img className='absolute bottom-0 left-0 z-10 w-[100%] scale-y-[1.5] rotate-[25deg]' src="src/assets/svg/blob1.svg" alt="Desenho de folha" />
// <img className='absolute bottom-0 left-0 z-10 w-[100%] scale-y-[1.5] rotate-[50deg] ' src="src/assets/svg/blob2.svg" alt="Desenho de folha" />
// <img className='absolute bottom-0 left-0 z-10 w-[100%] scale-y-[1.5] rotate-[-25deg]' src="src/assets/svg/blob3.svg" alt="Desenho de folha" />
// <img className='absolute bottom-0 left-0 z-10 w-[100%] scale-y-[1.5] rotate-[-50deg]' src="src/assets/svg/blob4.svg" alt="Desenho de folha" />
// <img className='absolute left-[-80px] bottom-0 rotate-[270deg] scale-y-[1.8]' src="src/assets/svg/sand.svg" alt="Ilustraão de areai de praia" />
// <img className='absolute z-0 bottom-0 right-20' src="src/assets/svg/sky.svg" alt="Céu azul"/>
// <Folhas />
// </div>