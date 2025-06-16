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
    <section className="services">
      <div className="services-container">
        {/* Badge */}
        <div className="services-badge">
          O que você recebe
        </div>

        <h2 className="services-title">
          Tudo o que seu projeto
          <br />
          <span className="services-title-muted">precisa, sem enrolação.</span>
        </h2>

        <p className="services-description">
          Seu projeto precisa de um visual que passe credibilidade e gere 
          resultado. Aqui na KevBarroz, entregamos design de alto nível, pronto para 
          ser usado no seu negócio. Confira o que está incluso:
        </p>

        <button className="services-cta">
          <span>Solicite um orçamento</span>
          <span className="services-cta-icon">💬</span>
        </button>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              
              <h3 className="service-title">
                {service.title}
              </h3>
              
              <p className="service-subtitle">
                {service.subtitle}
              </p>
              
              <p className="service-description">
                {service.description}
              </p>

              <div className="service-tags">
                {service.tags.map((tag, index) => (
                  <span key={index} className="service-tag">
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