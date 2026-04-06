import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  useEffect(() => {
    document.title = 'EVOX LLC - Business Automation Agency | Miami, FL';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Transform your business with intelligent automation. EVOX LLC specializes in workflow automation, AI chatbots, and custom integrations in Miami, Florida.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content =
        'Transform your business with intelligent automation. EVOX LLC specializes in workflow automation, AI chatbots, and custom integrations in Miami, Florida.';
      document.head.appendChild(meta);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    scrollToSection('contact');
  };

  const scrollToCaseStudies = () => {
    scrollToSection('case-studies');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero onCTAClick={scrollToContact} onStoriesClick={scrollToCaseStudies} />
      <Services />
      <CaseStudies />
      <WhyChooseUs />
      <HowItWorks />
      <CTASection onBookClick={scrollToContact} onMessageClick={scrollToContact} />
      <ContactForm />
      <Footer onNavigate={scrollToSection} />
      <FloatingCTA onClick={scrollToContact} />
    </div>
  );
}

export default App;
