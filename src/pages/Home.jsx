
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import BMICalculator from '../components/BMICalculator';
import Bodybuilders from '../components/Bodybuilders';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Programs />
            <BMICalculator />
            <Bodybuilders />
            <Footer />
        </main>
    );
};

export default Home;
