import React from 'react';

const Arte: React.FC = () => {
    return (
        <div className='z-0 w-full md:w-[80%] md:mt-[-500px] xl:mt-[-600px] 2xl:mt-[-700px] grid place-items-center'>
            <img className='z-0 w-full max-w-[500px] md:max-w-[900px]' src={"./assets/images/arte.png"} alt="Arte gráfica de um carro na frente de  coqueiros e pranchas de surfe" />
        </div>

    );
};

export default Arte;