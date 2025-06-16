import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = aboutRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const stats = [
    { number: '150+', label: 'Projetos Entregues' },
    { number: '50+', label: 'Clientes Satisfeitos' },
    { number: '3+', label: 'Anos de Experiência' },
    { number: '24h', label: 'Tempo de Resposta' }
  ];

  return (
    <section id="about" ref={aboutRef} className={`about ${isVisible ? 'about-visible' : ''}`}>
      <div className="about-container">
        
        {/* Main Content Grid */}
        <div className="about-grid">
          
          {/* Left - Image/Visual */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <div className="about-image">
                <div className="image-placeholder">
                  <div className="image-icon">📸</div>
                  <span className="image-text">Sua foto aqui</span>
                </div>
                
                {/* Floating Card */}
                <div className="floating-card">
                  <div className="card-icon">🎨</div>
                  <div className="card-content">
                    <h4 className="card-title">Design Especialista</h4>
                    <p className="card-subtitle">Lançamentos Digitais</p>
                  </div>
                </div>
              </div>
              
              {/* Background Decorations */}
              <div className="visual-decoration">
                <div className="decoration-dot decoration-dot-1"></div>
                <div className="decoration-dot decoration-dot-2"></div>
                <div className="decoration-line decoration-line-1"></div>
                <div className="decoration-line decoration-line-2"></div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="about-content">
            {/* Badge */}
            <div className="about-badge">
              Sobre o KevBarroz
            </div>

            <h2 className="about-title">
              Transformando marcas e lançamentos
              <br />
              com <span className="about-title-gradient">design</span>.
            </h2>

            <p className="about-description">
              Sou Kevin Barroz, designer especialista em lançamentos digitais e 
              referência em Landing Pages. Meu foco sempre foi criar 
              designs que não só chamam atenção, <strong>mas geram conversões</strong>.
            </p>

            {/* Features List */}
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">✨</div>
                <span className="feature-text">Design orientado a conversão</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <span className="feature-text">Especialista em lançamentos</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <span className="feature-text">Foco em resultados mensuráveis</span>
              </div>
            </div>

            {/* CTA Button */}
            <button onClick={scrollToPortfolio} className="about-cta">
              <span className="cta-text">Conheça nosso trabalho</span>
              <span className="cta-icon">📱</span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;