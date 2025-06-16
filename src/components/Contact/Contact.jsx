import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com seu backend/API
    console.log('Form data:', formData);
    alert('Mensagem enviada! Entraremos em contato em breve.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      project: '',
      message: ''
    });
  };

  const projectTypes = [
    'Identidade Visual',
    'Landing Page',
    'Site Completo',
    'Criativos para Tráfego',
    'Materiais para Redes Sociais',
    'Apresentação Profissional',
    'Outro'
  ];

  return (
    <>
      {/* Contact Section */}
      <section id="contato" style={{
        padding: '8rem 0',
        background: '#000000'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start'}}>
            {/* Left Content */}
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
                Contato
              </div>

              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '800',
                lineHeight: '1.2',
                marginBottom: '1.5rem',
                color: '#ffffff'
              }}>
                Pronto para elevar
                <br />
                <span style={{color: '#888888'}}>seu projeto?</span>
              </h2>

              <p style={{
                fontSize: '1.1rem',
                color: '#cccccc',
                lineHeight: '1.7',
                marginBottom: '2rem'
              }}>
                Preencha o formulário ao lado e receba uma proposta 
                personalizada. Ou se preferir, entre em contato diretamente 
                pelo WhatsApp para uma conversa mais rápida.
              </p>

              {/* Contact Info */}
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem'}}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}>
                    📧
                  </div>
                  <div>
                    <p style={{color: '#ffffff', fontSize: '0.9rem', margin: 0, fontWeight: '600'}}>
                      Email
                    </p>
                    <p style={{color: '#cccccc', fontSize: '0.9rem', margin: 0}}>
                      contato@kevbarroz.com
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}>
                    💬
                  </div>
                  <div>
                    <p style={{color: '#ffffff', fontSize: '0.9rem', margin: 0, fontWeight: '600'}}>
                      WhatsApp
                    </p>
                    <p style={{color: '#cccccc', fontSize: '0.9rem', margin: 0}}>
                      (11) 99999-9999
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <button style={{
                background: 'linear-gradient(135deg, #25D366 0%, #20BA5A 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'transform 0.3s ease'
              }}>
                <span>📱</span>
                Falar no WhatsApp
              </button>
            </div>

            {/* Right - Contact Form */}
            <div style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <h3 style={{
                color: '#ffffff',
                fontSize: '1.4rem',
                fontWeight: '700',
                marginBottom: '1.5rem'
              }}>
                Solicitar Orçamento
              </h3>

              <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.2rem'}}>
                {/* Name */}
                <div>
                  <label style={{
                    display: 'block',
                    color: '#cccccc',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem',
                    fontWeight: '500'
                  }}>
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                    placeholder="Digite seu nome"
                  />
                </div>

                {/* Email & Phone */}
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                  <div>
                    <label style={{
                      display: 'block',
                      color: '#cccccc',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem',
                      fontWeight: '500'
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '0.9rem'
                      }}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      color: '#cccccc',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem',
                      fontWeight: '500'
                    }}>
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.875rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontSize: '0.9rem'
                      }}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label style={{
                    display: 'block',
                    color: '#cccccc',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem',
                    fontWeight: '500'
                  }}>
                    Empresa/Projeto
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                    placeholder="Nome da sua empresa"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label style={{
                    display: 'block',
                    color: '#cccccc',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem',
                    fontWeight: '500'
                  }}>
                    Tipo de projeto *
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.9rem'
                    }}
                  >
                    <option value="">Selecione o tipo de projeto</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type} style={{background: '#1a1a1a'}}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={{
                    display: 'block',
                    color: '#cccccc',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem',
                    fontWeight: '500'
                  }}>
                    Conte mais sobre seu projeto
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      resize: 'vertical'
                    }}
                    placeholder="Descreva brevemente seu projeto, objetivos e prazos..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                    color: '#000000',
                    border: 'none',
                    padding: '1rem',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    marginTop: '0.5rem',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  Enviar solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '4rem 0 2rem 0',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem'}}>
            {/* Brand */}
            <div>
              <div style={{
                fontSize: '1.8rem',
                fontWeight: '800',
                color: '#ffffff',
                marginBottom: '1rem'
              }}>
                KEVBARROZ
              </div>
              <p style={{
                color: '#888888',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                maxWidth: '300px'
              }}>
                Especialista em Design para
                <br />
                lançamentos e infoprodutores
              </p>
              <p style={{
                color: '#666666',
                fontSize: '0.8rem',
                margin: 0
              }}>
                Desenvolvido por KevBarroz 💜
              </p>
            </div>

            {/* Pages */}
            <div>
              <h4 style={{
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                Páginas
              </h4>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <a href="#home" style={{color: '#888888', textDecoration: 'none', fontSize: '0.9rem'}}>
                  Home
                </a>
                <a href="#about" style={{color: '#888888', textDecoration: 'none', fontSize: '0.9rem'}}>
                  Sobre
                </a>
                <a href="#portfolio" style={{color: '#888888', textDecoration: 'none', fontSize: '0.9rem'}}>
                  Portfolio
                </a>
                <a href="#contato" style={{color: '#888888', textDecoration: 'none', fontSize: '0.9rem'}}>
                  Contato
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 style={{
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                Serviços
              </h4>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <span style={{color: '#888888', fontSize: '0.9rem'}}>Identidade Visual</span>
                <span style={{color: '#888888', fontSize: '0.9rem'}}>Landing Pages</span>
                <span style={{color: '#888888', fontSize: '0.9rem'}}>Criativos</span>
                <span style={{color: '#888888', fontSize: '0.9rem'}}>Social Media</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                Contato
              </h4>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <span style={{color: '#888888', fontSize: '0.9rem'}}>contato@kevbarroz.com</span>
                <span style={{color: '#888888', fontSize: '0.9rem'}}>(11) 99999-9999</span>
                <div style={{display: 'flex', gap: '0.5rem', marginTop: '0.5rem'}}>
                  <span style={{fontSize: '1.2rem'}}>📷</span>
                  <span style={{fontSize: '1.2rem'}}>🐦</span>
                  <span style={{fontSize: '1.2rem'}}>💼</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <p style={{
              color: '#666666',
              fontSize: '0.85rem',
              margin: 0
            }}>
              © 2025 KevBarroz Design & Marketing
            </p>
            <div style={{display: 'flex', gap: '2rem'}}>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#666666',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
                onClick={() => alert('Termos & Condições - Em desenvolvimento')}
              >
                Termos & Condição de Uso
              </button>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#666666',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
                onClick={() => alert('Políticas de Privacidade - Em desenvolvimento')}
              >
                Políticas de Privacidade
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;