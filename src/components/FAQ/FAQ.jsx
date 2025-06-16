import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Como funciona o processo de criação na KevBarroz?",
      answer: "Nosso processo é dividido em 4 etapas principais: Kickoff (onde entendemos seu projeto), Criação (desenvolvimento do material visual), Revisão (apresentação e ajustes) e Entrega (arquivos finais organizados). Todo o processo é transparente e você acompanha cada etapa."
    },
    {
      id: 2,
      question: "Quais materiais visuais vocês criam?",
      answer: "Criamos identidade visual completa, sites e landing pages, criativos para tráfego pago, materiais para redes sociais, apresentações profissionais e muito mais. Tudo personalizado para seu negócio e otimizado para conversão."
    },
    {
      id: 3,
      question: "Quanto tempo leva para entregar um projeto?",
      answer: "O prazo varia conforme a complexidade do projeto. Projetos simples como criativos para redes sociais podem ficar prontos em 3-5 dias úteis. Projetos maiores como identidade visual completa ou landing pages podem levar de 7 a 15 dias úteis. Sempre definimos prazos claros no briefing."
    },
    {
      id: 4,
      question: "Como é feito o acompanhamento do projeto?",
      answer: "Trabalhamos de forma 100% online. Após o briefing inicial, desenvolvemos todo o material e apresentamos digitalmente. Você recebe todos os arquivos organizados e prontos para implementar, além de suporte para eventuais dúvidas sobre implementação."
    },
    {
      id: 5,
      question: "Posso pedir ajustes depois da entrega?",
      answer: "Sim! Incluímos uma rodada de revisões no processo. Durante a apresentação do projeto, você pode solicitar ajustes para garantir que o resultado final esteja exatamente como você imaginou. Nosso objetivo é sua satisfação total com o projeto."
    },
    {
      id: 6,
      question: "Como faço para contratar um projeto com a KevBarroz?",
      answer: "É muito simples! Clique no botão 'Solicitar orçamento' em qualquer lugar do site ou entre em contato pelo WhatsApp. Faremos um briefing para entender seu projeto e apresentaremos uma proposta personalizada com valores e prazos."
    }
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        
        {/* FAQ Content Grid */}
        <div className="faq-content-grid">
          
          {/* Left Content */}
          <div className="faq-content">
            {/* Badge */}
            <div className="faq-badge">
              Dúvidas
            </div>

            <h2 className="faq-title">
              Tem dúvida? <span className="faq-title-muted">aqui<br />estão as respostas.</span>
            </h2>

            <p className="faq-description">
              Se ainda restou alguma dúvida sobre como trabalhamos ou o 
              que você recebe ao contratar a KevBarroz, aqui estão as 
              respostas.
            </p>
          </div>

          {/* Right FAQ List */}
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} className={`faq-item ${openItem === faq.id ? 'faq-item-open' : ''}`}>
                
                {/* Question Button */}
                <button 
                  onClick={() => toggleItem(faq.id)}
                  className="faq-question"
                  aria-expanded={openItem === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon">
                    {openItem === faq.id ? '−' : '+'}
                  </span>
                </button>

                {/* Answer */}
                <div 
                  id={`faq-answer-${faq.id}`}
                  className="faq-answer"
                  aria-hidden={openItem !== faq.id}
                >
                  <div className="faq-answer-content">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="faq-cta-section">
          {/* Background decoration */}
          <div className="faq-cta-decoration"></div>

          {/* Badge */}
          <div className="faq-cta-badge">
            NOVIDADE - Clube KevBarroz
          </div>

          <h3 className="faq-cta-title">
            Trabalhar com a gente tem
            <br />
            mais vantagem.
          </h3>

          <p className="faq-cta-description">
            Nosso programa de benefícios: a cada projeto, você recebe 10% de 
            cashback para usar em novos serviços dentro de 2 meses. Fechou com 
            a KevBarroz? O valor já fica disponível para o próximo projeto.
          </p>

          <button className="faq-cta-button">
            Quero meu cashback
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;