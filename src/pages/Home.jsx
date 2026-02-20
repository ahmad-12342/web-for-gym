
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import BMICalculator from '../components/BMICalculator';
import Pricing from '../components/Pricing';
import Schedule from '../components/Schedule';
import Gallery from '../components/Gallery';
import Bodybuilders from '../components/Bodybuilders';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactFooter from '../components/ContactFooter';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Programs />
            <Schedule />
            <BMICalculator />
            <Pricing />
            <Gallery />
            <Bodybuilders />
            <Testimonials />
            <FAQ />
            <ContactFooter />
            <Footer />
        </main>
    );
};

export default Home;
