import Hero from '../sections/heroSection';
import AboutUsSection from '../sections/aboutUsSection';
import SolutionSection from '../sections/solutionSection';
import Header from '../ui/Header';

export default function Home(){
    return (
        <div>
            <Header/>
            <Hero />
            <AboutUsSection />
            <SolutionSection />
        </div>
    );
}