import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: '80px'
    }}>
      <div style={{maxWidth: '1200px', padding: '0 2rem'}}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          padding: '0.5rem 1.2rem',
          borderRadius: '50px',
          marginBottom: '2rem'
        }}>
          <span style={{color: '#ffffff', fontWeight: '700', fontSize: '0.9rem'}}>KEVBARROZ</span>
          <span style={{color: '#999999', fontSize: '0.8rem'}}>Design para lançamentos</span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '800',
          lineHeight: '1.1',
          marginBottom: '1.5rem',
          color: '#ffffff'
        }}>
          Seu projeto merece<br />
          um <span style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #999999 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>design único</span>.
        </h1>

        {/* Description */}
        <p style={{
          fontSize: '1.1rem',
          color: '#cccccc',
          lineHeight: '1.6',
          marginBottom: '2.5rem'
        }}>
          Aqui no KevBarroz, criamos sites, landing pages, identidades visuais,<br />
          criativos, materiais para redes sociais e tudo o que você precisa<br />
          para um lançamento visualmente impecável.
        </p>

        {/* Buttons */}
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <button style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
            color: '#000000',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Solicitar um orçamento
          </button>
          <button style={{
            background: 'rgba(255,255,255,0.1)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '1rem 2rem',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Ver portfólio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;