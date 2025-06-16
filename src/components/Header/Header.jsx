import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    checkMobile();
    handleScroll();
    
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Previne scroll quando menu mobile está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo */}
          <div className="header-logo">
            <span className="logo-text">KEVBARROZ</span>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="desktop-nav">
              <button onClick={() => scrollToSection('home')} className="nav-link">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="nav-link">
                Sobre
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="nav-link">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('contato')} className="nav-link">
                Contato
              </button>
            </nav>
          )}

          {/* Desktop CTA Button */}
          {!isMobile && (
            <button 
              onClick={() => scrollToSection('contato')}
              className="header-cta"
            >
              Solicitar orçamento
            </button>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={toggleMobileMenu}
              className={`hamburger ${isMobileMenuOpen ? 'hamburger-active' : ''}`}
              aria-label="Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div className={`mobile-overlay ${isMobileMenuOpen ? 'mobile-overlay-open' : ''}`}>
          <div className="mobile-menu">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-close"
              aria-label="Fechar menu"
            >
              <span className="close-line"></span>
              <span className="close-line"></span>
            </button>

            {/* Menu Content */}
            <div className="mobile-menu-content">
              
              {/* Navigation Links */}
              <nav className="mobile-nav">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="mobile-nav-link"
                >
                  <span className="mobile-nav-number">01</span>
                  <span className="mobile-nav-text">Home</span>
                </button>
                
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="mobile-nav-link"
                >
                  <span className="mobile-nav-number">02</span>
                  <span className="mobile-nav-text">Sobre</span>
                </button>
                
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="mobile-nav-link"
                >
                  <span className="mobile-nav-number">03</span>
                  <span className="mobile-nav-text">Portfolio</span>
                </button>
                
                <button 
                  onClick={() => scrollToSection('contato')} 
                  className="mobile-nav-link"
                >
                  <span className="mobile-nav-number">04</span>
                  <span className="mobile-nav-text">Contato</span>
                </button>
              </nav>

              {/* Mobile CTA */}
              <div className="mobile-cta-section">
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="mobile-cta"
                >
                  Solicitar orçamento
                </button>
                
                {/* Contact Info */}
                <div className="mobile-contact">
                  <p className="mobile-contact-text">
                    Pronto para começar?
                  </p>
                  <a 
                    href="mailto:contato@kevbarroz.com"
                    className="mobile-contact-link"
                  >
                    contato@kevbarroz.com
                  </a>
                  <a 
                    href="tel:+5511999999999"
                    className="mobile-contact-link"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </div>

            </div>

            {/* Background Decoration */}
            <div className="mobile-decoration">
              <div className="decoration-circle decoration-circle-1"></div>
              <div className="decoration-circle decoration-circle-2"></div>
              <div className="decoration-line decoration-line-1"></div>
              <div className="decoration-line decoration-line-2"></div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Header;