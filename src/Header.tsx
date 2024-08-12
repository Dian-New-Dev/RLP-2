import React from 'react';

const Header: React.FC = () => {
    return (
        <div className='absolute flex items-center px-12 w-full top-0 left-0 text-sky-100'>
            <div className='w-1/4'>
                <img className='w-24' src="src/assets/logo.png" alt="Logo" />
            </div>
            <div className='w-3/4 flex gap-8 justify-end items-center'>
                <a className='hover:text-orange-300' href="#header">Início</a>
                <a className='hover:text-orange-300' href="#sobre">Sobre</a>
                <a className='hover:text-orange-300' href="#como">Como Participar</a>
                <a className='hover:text-sky-100' href="#formulario">
                    <button className='bg-orange-600 hover:bg-orange-700 p-2 rounded-full'>Increva-se</button>
                </a>
            </div>
        </div>
    );
};

export default Header;