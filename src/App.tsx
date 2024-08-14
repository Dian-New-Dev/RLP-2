import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Sobre from './Sobre';
import Como from './Como';
import Formulario from './Formulario';
import Footer from './Footer';

const App: React.FC = () => {
    return (
        <div className='grid place-items-center gradient-hero'>
            <div className='relative w-full max-w-[1440px] z-20 overflow-hidden'>
                <Header />

                <Hero />

                <Sobre />

                <Como />

                <Formulario />

                <Footer />
            </div>
        </div>
    );
};

export default App;