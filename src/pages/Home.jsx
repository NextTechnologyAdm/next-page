import Hero from '../sections/HeroSection';
import AboutUsSection from '../sections/AboutUsSection';
import SolutionSection from '../sections/SolutionSection';
import ContactSection from '../sections/ContactSection';
import ProjectsSection from '../sections/projectsSection';
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
            <ProjectsSection />
            <ContactSection />
            <Footer/>
        </div>
    );
}