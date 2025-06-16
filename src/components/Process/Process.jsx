import React, { useState, useEffect, useRef } from 'react';
import './Process.css';

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const processRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = processRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Auto-progress through steps
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep(prev => prev >= 4 ? 1 : prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const steps = [
    {
      id: 1,
      icon: '🚀',
      title: 'Kickoff',
      subtitle: 'Etapa 1',
      duration: '1-2 dias',
      description: 'Tudo começa com uma conversa. Entendemos seu projeto, necessidades e referências para criar algo que realmente faça sentido para sua marca.',
      tasks: ['Briefing detalhado', 'Definição do escopo', 'Análise de referências', 'Cronograma do projeto'],
      deliverables: ['Documento de briefing', 'Cronograma detalhado'],
      tools: ['Zoom', 'Notion', 'Figma']
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Criação',
      subtitle: 'Etapa 2',
      duration: '3-7 dias',
      description: 'Colocamos a mão na massa e desenvolvemos todo o material visual. Cada detalhe é pensado para gerar o máximo impacto e conversão.',
      tasks: ['Design conceitual', 'Desenvolvimento visual', 'Prototipagem', 'Otimização para conversão'],
      deliverables: ['Layouts iniciais', 'Protótipos funcionais'],
      tools: ['Figma', 'Photoshop', 'Illustrator']
    },
    {
      id: 3,
      icon: '👁️',
      title: 'Revisão',
      subtitle: 'Etapa 3',
      duration: '1-3 dias',
      description: 'Apresentamos o resultado e fazemos os ajustes necessários. Seu feedback é essencial para chegarmos no resultado perfeito.',
      tasks: ['Apresentação do projeto', 'Coleta de feedback', 'Ajustes solicitados', 'Validação final'],
      deliverables: ['Apresentação completa', 'Versão revisada'],
      tools: ['Zoom', 'Figma', 'Loom']
    },
    {
      id: 4,
      icon: '📦',
      title: 'Entrega',
      subtitle: 'Etapa 4',
      duration: '1 dia',
      description: 'Projeto finalizado! Você recebe todos os arquivos organizados e prontos para implementar. Simples assim, sem complicação.',
      tasks: ['Arquivos finais', 'Organização de pastas', 'Documentação', 'Suporte pós-entrega'],
      deliverables: ['Arquivos organizados', 'Manual de uso', 'Suporte técnico'],
      tools: ['Drive', 'Zip', 'Notion']
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const totalDuration = steps.reduce((total, step) => {
    const maxDays = parseInt(step.duration.split('-').pop());
    return total + maxDays;
  }, 0);

  return (
    <section ref={processRef} className={`process ${isVisible ? 'process-visible' : ''}`}>
      <div className="process-container">

        {/* Header Section */}
        <div className="process-header">
          <div className="process-content">
            <div className="process-badge">
              Como Trabalhamos
            </div>

            <h2 className="process-title">
              Do briefing à entrega final,
              <br />
              <span className="process-title-muted">tudo no controle.</span>
            </h2>

            <p className="process-description">
              Trabalhamos de forma organizada e eficiente para garantir que cada 
              projeto saia com qualidade e no prazo certo. Veja como funciona nosso 
              processo:
            </p>

            {/* Process Stats */}
            <div className="process-stats">
              <div className="stat-item">
                <div className="stat-number">4</div>
                <div className="stat-label">Etapas</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{totalDuration}</div>
                <div className="stat-label">Dias máx.</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Transparência</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="process-visual">
            <div className="visual-container">
              
              {/* Timeline Circle */}
              <div className="timeline-circle">
                <div className="circle-progress">
                  <svg className="progress-ring" width="200" height="200">
                    <circle
                      className="progress-ring-background"
                      cx="100"
                      cy="100"
                      r="90"
                    />
                    <circle
                      className="progress-ring-progress"
                      cx="100"
                      cy="100"
                      r="90"
                      style={{
                        strokeDasharray: `${(activeStep / 4) * 565.48} 565.48`,
                        transform: 'rotate(-90deg)',
                        transformOrigin: '100px 100px'
                      }}
                    />
                  </svg>
                  
                  <div className="circle-content">
                    <div className="circle-step">Etapa</div>
                    <div className="circle-number">{activeStep}</div>
                    <div className="circle-title">{steps[activeStep - 1].title}</div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="floating-cards">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`floating-card floating-card-${index + 1} ${
                      activeStep === step.id ? 'floating-card-active' : ''
                    }`}
                  >
                    <div className="card-icon">{step.icon}</div>
                    <div className="card-title">{step.title}</div>
                  </div>
                ))}
              </div>

              {/* Background Decorations */}
              <div className="visual-decorations">
                <div className="decoration-dot decoration-dot-1"></div>
                <div className="decoration-dot decoration-dot-2"></div>
                <div className="decoration-dot decoration-dot-3"></div>
                <div className="decoration-line decoration-line-1"></div>
                <div className="decoration-line decoration-line-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="timeline-section">
          <div className="timeline-container">
            
            {/* Timeline Line */}
            <div className="timeline-line">
              <div 
                className="timeline-progress"
                style={{ width: `${(activeStep / 4) * 100}%` }}
              ></div>
            </div>

            {/* Steps */}
            <div className="timeline-steps">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`timeline-step ${activeStep >= step.id ? 'timeline-step-active' : ''}`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="step-marker">
                    <div className="marker-dot">
                      <span className="marker-icon">{step.icon}</span>
                    </div>
                    <div className="marker-number">{step.id}</div>
                  </div>

                  <div className="step-content">
                    <div className="step-meta">
                      <span className="step-subtitle">{step.subtitle}</span>
                      <span className="step-duration">{step.duration}</span>
                    </div>
                    
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>

                    {/* Expandable Details */}
                    <div className={`step-details ${activeStep === step.id ? 'step-details-open' : ''}`}>
                      
                      <div className="details-section">
                        <h4 className="details-title">O que fazemos:</h4>
                        <div className="details-list">
                          {step.tasks.map((task, index) => (
                            <div key={index} className="details-item">
                              <span className="details-check">✓</span>
                              <span className="details-text">{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="details-section">
                        <h4 className="details-title">Você recebe:</h4>
                        <div className="details-list">
                          {step.deliverables.map((deliverable, index) => (
                            <div key={index} className="details-item">
                              <span className="details-icon">📄</span>
                              <span className="details-text">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="details-section">
                        <h4 className="details-title">Ferramentas:</h4>
                        <div className="tools-list">
                          {step.tools.map((tool, index) => (
                            <span key={index} className="tool-tag">{tool}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="process-cta">
          <div className="cta-content">
            <h3 className="cta-title">
              Pronto para começar? <span className="cta-accent">Vamos dar vida ao seu projeto!</span>
            </h3>
            <p className="cta-description">
              Cada projeto é único, mas o processo é sempre o mesmo: organizado, 
              transparente e focado no seu sucesso.
            </p>
            <button onClick={scrollToContact} className="cta-button">
              <span>Começar meu projeto</span>
              <span className="cta-icon">🚀</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;