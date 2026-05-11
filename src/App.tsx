import React, { useState, useCallback } from 'react';
import './styles/globals.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import TechSection from './components/TechSection';
import WhySection from './components/WhySection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import DevicesPage from './components/DevicesPage';

type Page = 'home' | 'devices';

const Divider: React.FC = () => <div className="section-divider" />;

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');
  const [modalOpen, setModalOpen] = useState(false);

  const goToDevices = () => {
    setPage('devices');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLink = useCallback(
    (sectionId: string) => {
      if (page === 'home') {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        setPage('home');
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
          });
        });
      }
    },
    [page]
  );

  return (
    <>
      {/*
        ONE single wrapper div that covers Navbar + main + Footer.
        When a modal opens, DevicesPage calls onModalChange(true)
        and we add the 'app-blurred' class here.
        Because this is a single non-positioned div, filter:blur
        applies uniformly to everything inside — no stacking context escapes.
      */}
      <div id="app-root" className={modalOpen ? 'app-blurred' : ''}>
        <Navbar onNavLink={handleNavLink} />

        {page === 'devices' ? (
          <main>
            <DevicesPage
              onBack={goHome}
              onModalChange={setModalOpen}
            />
            <ContactForm />
          </main>
        ) : (
          <main>
            <Hero onViewDevices={goToDevices} />
            <Divider />
            <AboutSection />
            <Divider />
            <FeaturesSection />
            <Divider />
            <TechSection />
            <Divider />
            <WhySection />
            <ContactForm />
          </main>
        )}

        <Footer />
      </div>

      {/* Portal target: the modal renders here, OUTSIDE #app-root, so it is never blurred */}
    </>
  );
};

export default App;