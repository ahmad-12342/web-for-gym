
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import BMICalculator from '../components/BMICalculator';
import Pricing from '../components/Pricing';
import Bodybuilders from '../components/Bodybuilders';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Programs />
            <BMICalculator />
            <Pricing />
            <Bodybuilders />
            <Testimonials />
            <Footer />
        </main>
    );
};

export default Home;
