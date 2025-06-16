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
      question: "Como funciona o processo de criação na KevBarroz?",
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
    <section style={{
      padding: '8rem 0',
      background: '#111111'
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
              Dúvidas
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
              color: '#ffffff'
            }}>
              Tem dúvida? <span style={{color: '#888888'}}>aqui<br />estão as respostas.</span>
            </h2>

            <p style={{
              fontSize: '1.1rem',
              color: '#cccccc',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              Se ainda restou alguma dúvida sobre como trabalhamos ou o 
              que você recebe ao contratar a KevBarroz, aqui estão as 
              respostas.
            </p>
          </div>

          {/* Right - FAQ Items */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            {faqs.map((faq) => (
              <div key={faq.id} style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                {/* Question */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span style={{flex: 1, paddingRight: '1rem'}}>
                    {faq.question}
                  </span>
                  <span style={{
                    fontSize: '1.2rem',
                    transform: openItem === faq.id ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: '#cccccc'
                  }}>
                    +
                  </span>
                </button>

                {/* Answer */}
                <div style={{
                  maxHeight: openItem === faq.id ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                  background: 'rgba(0,0,0,0.3)'
                }}>
                  <div style={{
                    padding: '0 1.5rem 1.5rem 1.5rem',
                    color: '#cccccc',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
          borderRadius: '20px',
          padding: '3rem',
          textAlign: 'center',
          marginTop: '4rem',
          border: '1px solid rgba(255,255,255,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background decoration */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>

          {/* Badge */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            marginBottom: '1.5rem',
            fontSize: '0.8rem',
            color: '#ffffff',
            fontWeight: '600'
          }}>
            NOVIDADE - Clube KevBarroz
          </div>

          <h3 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: '800',
            lineHeight: '1.2',
            marginBottom: '1rem',
            color: '#ffffff'
          }}>
            Trabalhar com a gente tem
            <br />
            mais vantagem.
          </h3>

          <p style={{
            fontSize: '1rem',
            color: '#cccccc',
            lineHeight: '1.6',
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem auto'
          }}>
            Nosso programa de benefícios: a cada projeto, você recebe 10% de 
            cashback para usar em novos serviços dentro de 2 meses. Fechou com 
            a KevBarroz? O valor já fica disponível para o próximo projeto.
          </p>

          <button style={{
            background: 'rgba(255,255,255,0.1)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '1rem 2rem',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            Quero meu cashback
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;