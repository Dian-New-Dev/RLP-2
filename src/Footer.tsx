import React from 'react';

const Footer: React.FC = () => {
    return (
        <div>
            <div className='flex p-4 text-sky-100 text-sm justify-around items-center'>
                <img className='w-20' src="src/assets/logo.png" alt="Logo da Motor City" />
                <a href="#">Termos e Condições</a>
                <a href="#">Política de Uso</a>
            </div>
            <p className='text-center text-gray-600 text-sm'>2024 - Todos os Direitos Reservados</p>
        </div>
                    
    );
};

export default Footer;