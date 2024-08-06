import React from 'react';

const Header: React.FC = () => {
    return (
        <div className='absolute flex items-center px-12 w-full top-0 left-0'>
            <div className='w-1/4'>
                <img className='w-24' src="src/assets/logo.png" alt="Logo" />
            </div>
            <div className='w-3/4 flex gap-8 justify-end'>
                <a href="#header">Início</a>
                <a href="#sobre">Sobre</a>
                <a href="#como">Como Participar</a>
                <a href="#formulario">
                    <button>Increva-se</button>
                </a>
            </div>
        </div>
    );
};

export default Header;