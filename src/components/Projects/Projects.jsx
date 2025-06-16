import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Landing Page - Lançamento Digital",
      description: "Projeto que converteu +R$ 2M em vendas",
      tags: ["Landing Page", "Criativos"]
    },
    {
      id: 2,
      title: "Identidade Visual Completa", 
      description: "Marca que se destacou no mercado",
      tags: ["Identidade", "Branding"]
    },
    {
      id: 3,
      title: "Materiais para Redes Sociais",
      description: "Engajamento que gerou resultados", 
      tags: ["Social Media", "Criativos"]
    }
  ];

  return (
    <section style={{
      padding: '8rem 0',
      background: '#111111',
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
          Nossos Projetos
        </div>

        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: '800',
          lineHeight: '1.2',
          marginBottom: '1.5rem',
          color: '#ffffff'
        }}>
          Projetos que elevaram
          <br />
          <span style={{color: '#888888'}}>grandes lançamentos.</span>
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: '#cccccc',
          lineHeight: '1.6',
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          Cada projeto que criamos tem um objetivo: destacar e vender. Veja 
          alguns dos materiais visuais que ajudaram infoprodutores e grandes 
          lançamentos a performar melhor.
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
          marginBottom: '4rem'
        }}>
          Ver portfólio completo
        </button>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          {projects.map((project) => (
            <div key={project.id} style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                aspectRatio: '16/10',
                background: 'linear-gradient(45deg, #333 0%, #444 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                fontSize: '0.9rem'
              }}>
                Projeto {project.id}
              </div>
              <div style={{padding: '1.5rem', textAlign: 'left'}}>
                <h3 style={{color: '#ffffff', fontSize: '1.2rem', marginBottom: '0.5rem'}}>
                  {project.title}
                </h3>
                <p style={{color: '#888', fontSize: '0.9rem', marginBottom: '1rem'}}>
                  {project.description}
                </p>
                <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                  {project.tags.map((tag, index) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;