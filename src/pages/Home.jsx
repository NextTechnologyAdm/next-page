import Hero from '../sections/heroSection';
import AboutUsSection from '../sections/aboutUsSection';
import SolutionSection from '../sections/solutionSection';
import ContactSection from '../sections/contactSection';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ButtonToTop from '../ui/ButtonToTop';

export default function Home(){
    return (
        <div>
            <ButtonToTop />
            <Header/>
            <Hero />
            <AboutUsSection />
            <SolutionSection />
            <ContactSection />
            <Footer/>
        </div>
    );
}