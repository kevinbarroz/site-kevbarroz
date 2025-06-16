import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🎨',
      title: 'Identidade Visual Completa',
      subtitle: 'Uma marca forte e profissional.',
      description: 'Logo, paleta de cores, tipografia e manual da marca para garantir um posicionamento consistente e marcante.',
      tags: ['Logo', 'Paleta', 'Manual']
    },
    {
      id: 2,
      icon: '🌐',
      title: 'Sites e Landing Pages',
      subtitle: 'Design otimizado para conversão',
      description: 'Criamos páginas personalizadas, responsivas e rápidas, feitas para capturar leads e vender mais.',
      tags: ['Landing Page', 'Sites', 'Responsivo']
    },
    {
      id: 3,
      icon: '🎯',
      title: 'Criativos para Tráfego Pago',
      subtitle: 'Anúncios que chamam atenção e vendem.',
      description: 'Criativos para Facebook, Instagram e Google Ads, otimizados para alta performance.',
      tags: ['Facebook Ads', 'Google Ads']
    },
    {
      id: 4,
      icon: '📱',
      title: 'Materiais para Redes Sociais',
      subtitle: 'Conteúdo visual pronto para engajar.',
      description: 'Posts e stories customizados para manter sua marca profissional e alinhada nas redes.',
      tags: ['Posts', 'Stories', 'Templates']
    },
    {
      id: 5,
      icon: '📊',
      title: 'Apresentações Profissionais',
      subtitle: 'Slides impactantes e bem estruturados.',
      description: 'Materiais visuais para webinários, reuniões e lançamentos, feitos para impressionar.',
      tags: ['Slides', 'Webinários']
    },
    {
      id: 6,
      icon: '⚡',
      title: 'Entrega rápida e sem complicação',
      subtitle: 'Tudo pronto para usar, no prazo certo.',
      description: 'Você recebe os arquivos organizados, prontos para serem implementados sem dor de cabeça.',
      tags: ['Arquivos', 'Organizados', 'Prontos']
    }
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#000000',
      textAlign: 'center'
    }}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
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
          O que você recebe
        </div>

        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: '800',
          lineHeight: '1.2',
          marginBottom: '1.5rem',
          color: '#ffffff'
        }}>
          Tudo o que seu projeto
          <br />
          <span style={{color: '#888888'}}>precisa, sem enrolação.</span>
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: '#cccccc',
          lineHeight: '1.6',
          marginBottom: '3rem',
          maxWidth: '700px',
          margin: '0 auto 3rem auto'
        }}>
          Seu projeto precisa de um visual que passe credibilidade e gere 
          resultado. Aqui na KevBarroz, entregamos design de alto nível, pronto para 
          ser usado no seu negócio. Confira o que está incluso:
        </p>

        <button style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
          color: '#000000',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '12px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          marginBottom: '4rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          Solicite um orçamento
          <span>💬</span>
        </button>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          {services.map((service) => (
            <div key={service.id} style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'left',
              position: 'relative'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '1.5rem'
              }}>
                {service.icon}
              </div>
              
              <h3 style={{
                color: '#ffffff',
                fontSize: '1.4rem',
                fontWeight: '700',
                marginBottom: '0.5rem'
              }}>
                {service.title}
              </h3>
              
              <p style={{
                color: '#888888',
                fontSize: '0.95rem',
                lineHeight: '1.5',
                marginBottom: '1.5rem'
              }}>
                {service.subtitle}
              </p>

              <div style={{marginBottom: '1.5rem'}}>
                <p style={{
                  color: '#cccccc',
                  fontSize: '0.9rem',
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>
              </div>

              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                {service.tags.map((tag, index) => (
                  <span key={index} style={{
                    background: 'rgba(255,255,255,0.1)',
                    color: '#ccc',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;