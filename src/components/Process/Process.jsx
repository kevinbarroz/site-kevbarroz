import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: '🚀',
      title: 'Kickoff',
      subtitle: 'Etapa 1',
      description: 'Tudo começa com uma conversa. Entendemos seu projeto, necessidades e referências para criar algo que realmente faça sentido para sua marca.',
      tags: ['Briefing detalhado', 'Definição do escopo do projeto']
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Criação',
      subtitle: 'Etapa 2',
      description: 'Colocamos a mão na massa e desenvolvemos todo o material visual. Cada detalhe é pensado para gerar o máximo impacto e conversão.',
      tags: ['Design conceitual', 'Desenvolvimento visual']
    },
    {
      id: 3,
      icon: '👁️',
      title: 'Revisão',
      subtitle: 'Etapa 3',
      description: 'Apresentamos o resultado e fazemos os ajustes necessários. Seu feedback é essencial para chegarmos no resultado perfeito.',
      tags: ['Apresentação', 'Ajustes', 'Feedback']
    },
    {
      id: 4,
      icon: '📦',
      title: 'Entrega',
      subtitle: 'Etapa 4',
      description: 'Projeto finalizado! Você recebe todos os arquivos organizados e prontos para implementar. Simples assim, sem complicação.',
      tags: ['Arquivos finais', 'Organizados', 'Prontos para usar']
    }
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#111111',
      position: 'relative'
    }}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem'}}>
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
              Como Trabalhamos
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
              color: '#ffffff'
            }}>
              Do briefing à entrega final,
              <br />
              <span style={{color: '#888888'}}>tudo no controle.</span>
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: '#cccccc',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              Trabalhamos de forma organizada e eficiente para garantir que cada 
              projeto saia com qualidade e no prazo certo. Veja como funciona nosso 
              processo:
            </p>
          </div>

          {/* Visual Element */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
            borderRadius: '20px',
            aspectRatio: '4/3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Phone mockup */}
            <div style={{
              width: '200px',
              height: '360px',
              background: '#000000',
              borderRadius: '25px',
              border: '3px solid #333',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '150px',
                height: '300px',
                background: 'linear-gradient(45deg, #222 0%, #444 50%, #666 100%)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#888',
                fontSize: '0.8rem',
                textAlign: 'center'
              }}>
                Processo
                <br />
                Organizado
              </div>
            </div>
            
            {/* Decorative elements */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '60px',
              height: '60px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '50%'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '30px',
              width: '80px',
              height: '80px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '50%'
            }}></div>
          </div>
        </div>

        {/* Process Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {steps.map((step) => (
            <div key={step.id} style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'left',
              position: 'relative'
            }}>
              {/* Step number */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '2.5rem',
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                color: '#000000',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '1.1rem'
              }}>
                {step.id}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
                marginTop: '1rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>
                  {step.icon}
                </div>
                
                <div>
                  <h3 style={{
                    color: '#ffffff',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    marginBottom: '0.3rem'
                  }}>
                    {step.title}
                  </h3>
                  <span style={{
                    color: '#888888',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {step.subtitle}
                  </span>
                </div>
              </div>

              <p style={{
                color: '#cccccc',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {step.description}
              </p>

              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                {step.tags.map((tag, index) => (
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

export default Process;