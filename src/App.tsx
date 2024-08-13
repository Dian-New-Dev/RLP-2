import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Sobre from './Sobre';
import Como from './Como';
import Formulario from './Formulario';
import Footer from './Footer';

const App: React.FC = () => {
    return (
        <div className='relative w-full gradient-hero z-20'>
            <Header />

            <Hero />

            <Sobre />

            <Como />

            <Formulario />

            <Footer />
        </div>
    );
};

export default App;