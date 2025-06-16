import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Darley",
      position: "CEO",
      company: "Limp Cred",
      avatar: "👨‍💼",
      rating: 5,
      text: "Quando contratei a KevBarroz, eu só queria um design bonito para meu lançamento. Mas recebi muito mais do que isso. A atenção aos detalhes, o entendimento do meu produto e a forma como tudo foi pensado fez meu faturamento explodir. Foi a primeira vez que senti que minha marca estava realmente no nível que eu sempre quis. Obrigado pelo trabalho impecável!"
    },
    {
      id: 2,
      name: "Mariam Mosman",
      position: "Infoprodutora",
      company: "Minhas Versões",
      avatar: "👩‍💼",
      rating: 5,
      text: "Confesso que no começo fiquei com medo de investir, mas depois da entrega vi que foi a melhor decisão que fiz pro meu negócio. O design da minha LP e dos meus criativos ficou surreal, parecia coisa de outro nível. E não foi só estética, foi estratégia."
    },
    {
      id: 3,
      name: "Samuel Andrade",
      position: "CEO",
      company: "Anest Copilot",
      avatar: "👨‍💼",
      rating: 5,
      text: "O atendimento de vocês é simplesmente impecável! Dá pra sentir o cuidado em cada detalhe, e isso faz toda a diferença. Além do trabalho ser incrível, a paciência e a disponibilidade de vocês tornam tudo mais leve e tranquilo. Me senti realmente acompanhado do início ao fim. Obrigado por esse nível de entrega!"
    }
  ];

  const clients = [
    { name: "XCLUB+", logo: "🎯" },
    { name: "ALBIS", logo: "🏢" },
    { name: "Carol Cantelli", logo: "💼" },
    { name: "KeyX", logo: "🔑" }
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
          Testimonial
        </div>

        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: '800',
          lineHeight: '1.2',
          marginBottom: '1.5rem',
          color: '#ffffff'
        }}>
          Quem já trabalhou com a gente
          <br />
          <span style={{color: '#888888'}}>sabe a diferença que faz.</span>
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: '#cccccc',
          lineHeight: '1.6',
          marginBottom: '4rem',
          maxWidth: '600px',
          margin: '0 auto 4rem auto'
        }}>
          Nada melhor do que ouvir de quem já passou por aqui. Veja o que 
          nossos clientes dizem sobre os projetos que entregamos.
        </p>

        {/* Clients Logos */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
          marginBottom: '4rem',
          padding: '2rem 0',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          {clients.map((client, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#666666',
              fontSize: '1rem',
              fontWeight: '700',
              opacity: 0.8,
              transition: 'opacity 0.3s ease'
            }}>
              <span style={{fontSize: '1.5rem'}}>{client.logo}</span>
              <span>{client.name}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'left',
              position: 'relative'
            }}>
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>
                  {testimonial.avatar}
                </div>
                
                <div style={{flex: 1}}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '0.5rem'
                  }}>
                    <div>
                      <h4 style={{
                        color: '#ffffff',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        marginBottom: '0.2rem'
                      }}>
                        {testimonial.name}
                      </h4>
                      <p style={{
                        color: '#888888',
                        fontSize: '0.9rem',
                        margin: 0
                      }}>
                        {testimonial.position} • {testimonial.company}
                      </p>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}>
                      <span style={{color: '#666', fontSize: '0.8rem'}}>📷</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div style={{
                display: 'flex',
                gap: '2px',
                marginBottom: '1.5rem'
              }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{color: '#ffffff', fontSize: '1.1rem'}}>★</span>
                ))}
              </div>

              {/* Text */}
              <p style={{
                color: '#cccccc',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                margin: 0
              }}>
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
          color: '#000000',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '12px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          Solicite um orçamento
          <span>💬</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;