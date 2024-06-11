import Image from 'next/image';
import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import Capital from './_components/Capital';
import Vision from './_components/Vision';
import Investors from './_components/Investors';
import Investment from './_components/Investment';
import Footer from './_components/Footer';
import Testimonial from './_components/Testimonial';

export default function Home() {
    return (
        <main className="">
            <Navbar />
            <Hero />
            <Capital />
            <Vision />
            <Investors />
            <Investment />
            <Testimonial />
            <Footer />
        </main>
    );
}
