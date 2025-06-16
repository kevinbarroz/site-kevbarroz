import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" style={{
      padding: '8rem 0',
      background: '#000000',
      position: 'relative'
    }}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'}}>
          {/* Image placeholder */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
            borderRadius: '20px',
            aspectRatio: '4/3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <span style={{color: '#666', fontSize: '1rem'}}>Sua foto aqui</span>
          </div>

          {/* Content */}
          <div style={{textAlign: 'left'}}>
            {/* Badge */}
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              marginBottom: '2rem',
              fontSize: '0.8rem',
              color: '#ffffff',
              fontWeight: '600'
            }}>
              Sobre o KevBarroz
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
              color: '#ffffff'
            }}>
              Transformando
              <br />
              marcas e lançamentos
              <br />
              com <span style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #999999 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>design</span>.
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: '#cccccc',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              Sou Kevin Barroz, designer especialista em lançamentos digitais e 
              referência em Landing Pages. Meu foco sempre foi criar 
              designs que não só chamam atenção, mas geram conversões.
            </p>

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
              Conheça nosso trabalho 📱
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;