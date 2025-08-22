import Hero from '../sections/heroSection';
import AboutUsSection from '../sections/aboutUsSection';

export default function Home(){
    return (
        <div>
            <Hero />
            <AboutUsSection />
            <p>Welcome to our homepage!</p>
        </div>
    );
}