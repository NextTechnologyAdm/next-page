import Hero from '../sections/heroSection';
import AboutUsSection from '../sections/aboutUsSection';

export default function Home(){
    return (
        <div className='bg-[cetacean_blue] min-h-screen'>
            <Hero />
            <AboutUsSection />
        </div>
    );
}