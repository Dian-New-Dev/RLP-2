import React, { useState, useEffect } from 'react';

const HeaderDesktop: React.FC = () => {

    const [rolouScroll, setRolouScroll] = useState(false);

    useEffect(() => {
        const seRolarScroll = () => {
            if (window.scrollY > 50) {
                setRolouScroll(true);
            } else {
                setRolouScroll(false)
            }
        }


        window.addEventListener('scroll', seRolarScroll);

        return () => {
            window.removeEventListener('scroll', seRolarScroll);
        };

    }, []);

    return (
        <div className='relative w-full'>
            <div className='z-50 fixed flex items-cente px-12 lg:px-28 2xl:px-48  w-full top-0 left-0 text-sky-100 pt-4'>

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

            <div className={`z-40 fixed flex items-center px-12 w-full top-0 left-0 text-sky-100 pt-4 transicao-opacidade h-24 ${rolouScroll ? 'nao-opaco' : 'opaco'}`}>
            </div>

        </div>
    );
};

export default HeaderDesktop;