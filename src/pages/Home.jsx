import Hero from '../sections/heroSection';
import AboutUsSection from '../sections/aboutUsSection';
import SolutionSection from '../sections/solutionSection';
import ContactSection from '../sections/contactSection';
import ProjectsSection from '../sections/ProjectsSection';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ButtonToTop from '../ui/ButtonToTop';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);



export default function Home(){
    const smootherRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Crea la instancia de ScrollSmoother
        if (smootherRef.current && contentRef.current) {
            ScrollSmoother.create({
                wrapper: smootherRef.current,
                content: contentRef.current,
                smooth: 1, // Puedes ajustar este valor (1 es un buen punto de partida)
                effects: true // Habilita efectos de paralaje
            });
        }

        // Limpieza: importante para evitar fugas de memoria
        return () => {
            ScrollSmoother.get()?.kill();
        };
    }, []);

    return (
        <>
            <ButtonToTop />
            <Header />
            <div ref={smootherRef} className="smooth-wrapper overflow-x-hidden">
                <div ref={contentRef} className="smooth-content">
                <Hero />
                <AboutUsSection />
                <SolutionSection />
                <ProjectsSection />
                <ContactSection />
                <Footer />
            </div>
        </div>
        </>
    );
}