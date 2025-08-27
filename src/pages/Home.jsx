import Hero from '../sections/heroSection';
import AboutUsSection from '../sections/aboutUsSection';
import SolutionSection from '../sections/solutionSection';
import ContactSection from '../sections/contactSection';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

export default function Home(){
    return (
        <div>
            <Header/>
            <Hero />
            <AboutUsSection />
            <SolutionSection />
            <ContactSection />
            <Footer/>
        </div>
    );
}