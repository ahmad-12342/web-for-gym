
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Bodybuilders from '../components/Bodybuilders';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Programs />
            <Bodybuilders />
            <Footer />
        </main>
    );
};

export default Home;
