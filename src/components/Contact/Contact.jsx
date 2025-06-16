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

  const handleWhatsApp = () => {
    const phone = "5511999999999"; // Substitua pelo seu número
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para meu projeto.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
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
      <section id="contato" className="contact">
        <div className="contact-container">
          <div className="contact-grid">
            
            {/* Left Content */}
            <div className="contact-content">
              {/* Badge */}
              <div className="contact-badge">
                Contato
              </div>

              <h2 className="contact-title">
                Pronto para elevar
                <br />
                <span className="contact-title-muted">seu projeto?</span>
              </h2>

              <p className="contact-description">
                Preencha o formulário ao lado e receba uma proposta 
                personalizada. Ou se preferir, entre em contato diretamente 
                pelo WhatsApp para uma conversa mais rápida.
              </p>

              {/* Contact Info */}
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    📧
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-label">Email</h4>
                    <p className="contact-value">contato@kevbarroz.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    💬
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-label">WhatsApp</h4>
                    <p className="contact-value">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    ⏰
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-label">Horário</h4>
                    <p className="contact-value">Seg-Sex: 9h às 18h</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <button onClick={handleWhatsApp} className="whatsapp-btn">
                <span className="whatsapp-icon">📱</span>
                <span>Falar no WhatsApp</span>
              </button>
            </div>

            {/* Right - Contact Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form">
                <h3 className="form-title">
                  Solicitar Orçamento
                </h3>

                <form onSubmit={handleSubmit} className="form">
                  {/* Name */}
                  <div className="form-field">
                    <label className="form-label">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Digite seu nome"
                    />
                  </div>

                  {/* Email & Phone Row */}
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div className="form-field">
                      <label className="form-label">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="form-field">
                    <label className="form-label">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Nome da sua empresa (opcional)"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="form-field">
                    <label className="form-label">
                      Tipo de projeto *
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="">Selecione o tipo de projeto</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="form-field">
                    <label className="form-label">
                      Descreva seu projeto
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="form-textarea"
                      placeholder="Descreva brevemente seu projeto, objetivos e prazos..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="form-submit"
                  >
                    Enviar solicitação
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            
            {/* Brand */}
            <div className="footer-brand-section">
              <div className="footer-brand">
                KEVBARROZ
              </div>
              <p className="footer-brand-description">
                Especialista em Design para
                <br />
                lançamentos e infoprodutores
              </p>
              <p className="footer-credit">
                Desenvolvido por KevBarroz 💜
              </p>
            </div>

            {/* Pages */}
            <div className="footer-section">
              <h4 className="footer-title">
                Páginas
              </h4>
              <div className="footer-links">
                <a href="#home" className="footer-link">Home</a>
                <a href="#about" className="footer-link">Sobre</a>
                <a href="#portfolio" className="footer-link">Portfolio</a>
                <a href="#contato" className="footer-link">Contato</a>
              </div>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="footer-title">
                Serviços
              </h4>
              <div className="footer-links">
                <span className="footer-link">Identidade Visual</span>
                <span className="footer-link">Landing Pages</span>
                <span className="footer-link">Criativos</span>
                <span className="footer-link">Social Media</span>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4 className="footer-title">
                Contato
              </h4>
              <div className="footer-links">
                <span className="footer-link">contato@kevbarroz.com</span>
                <span className="footer-link">(11) 99999-9999</span>
                
                {/* Social Icons */}
                <div className="social-icons">
                  <span className="social-icon" title="Instagram">📷</span>
                  <span className="social-icon" title="Twitter">🐦</span>
                  <span className="social-icon" title="LinkedIn">💼</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 KevBarroz Design & Marketing
            </p>
            <div className="footer-legal">
              <button 
                className="footer-legal-link"
                onClick={() => alert('Termos & Condições - Em desenvolvimento')}
              >
                Termos & Condições
              </button>
              <button 
                className="footer-legal-link"
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