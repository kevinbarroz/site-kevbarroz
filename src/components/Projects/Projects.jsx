import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = projectsRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Landing Page - Lançamento Digital",
      description: "Projeto que converteu +R$ 2M em vendas",
      category: "landing-page",
      tags: ["Landing Page", "Conversão", "E-commerce"],
      image: "project-1.jpg",
      results: {
        conversion: "15.2%",
        revenue: "R$ 2M+",
        traffic: "250k visitas"
      },
      year: "2024",
      client: "TechLaunch",
      tools: ["Figma", "Webflow", "Analytics"]
    },
    {
      id: 2,
      title: "Identidade Visual Completa", 
      description: "Marca que se destacou no mercado",
      category: "branding",
      tags: ["Identidade", "Branding", "Logo"],
      image: "project-2.jpg",
      results: {
        recognition: "87%",
        engagement: "+340%",
        reach: "1.2M pessoas"
      },
      year: "2024",
      client: "InnovateBrand",
      tools: ["Illustrator", "Photoshop", "Figma"]
    },
    {
      id: 3,
      title: "Materiais para Redes Sociais",
      description: "Engajamento que gerou resultados", 
      category: "social-media",
      tags: ["Social Media", "Criativos", "Instagram"],
      image: "project-3.jpg",
      results: {
        engagement: "+280%",
        followers: "+45k",
        reach: "2.1M impressões"
      },
      year: "2024",
      client: "SocialGrowth",
      tools: ["Photoshop", "After Effects", "Canva"]
    },
    {
      id: 4,
      title: "E-commerce Redesign",
      description: "Interface que dobrou as vendas online",
      category: "ecommerce",
      tags: ["E-commerce", "UX/UI", "Vendas"],
      image: "project-4.jpg",
      results: {
        sales: "+120%",
        conversion: "8.7%",
        cart: "-35% abandono"
      },
      year: "2023",
      client: "ShopMax",
      tools: ["Figma", "Shopify", "Hotjar"]
    },
    {
      id: 5,
      title: "App Mobile Design",
      description: "Design que conquistou 100k downloads",
      category: "mobile",
      tags: ["Mobile", "App", "UI Design"],
      image: "project-5.jpg",
      results: {
        downloads: "100k+",
        rating: "4.8 estrelas",
        retention: "78%"
      },
      year: "2023",
      client: "AppVenture",
      tools: ["Figma", "Principle", "Zeplin"]
    },
    {
      id: 6,
      title: "Criativos para Tráfego Pago",
      description: "Campanhas que reduziram 60% o CPM",
      category: "ads",
      tags: ["Facebook Ads", "Google Ads", "Performance"],
      image: "project-6.jpg",
      results: {
        cpm: "-60%",
        ctr: "12.3%",
        roas: "4.2x"
      },
      year: "2023",
      client: "AdPerformance",
      tools: ["Photoshop", "Video", "Analytics"]
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos os Projetos', count: projects.length },
    { id: 'landing-page', label: 'Landing Pages', count: projects.filter(p => p.category === 'landing-page').length },
    { id: 'branding', label: 'Branding', count: projects.filter(p => p.category === 'branding').length },
    { id: 'social-media', label: 'Social Media', count: projects.filter(p => p.category === 'social-media').length },
    { id: 'ecommerce', label: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ads', label: 'Tráfego Pago', count: projects.filter(p => p.category === 'ads').length }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

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

  return (
    <>
      <section id="portfolio" ref={projectsRef} className={`projects ${isVisible ? 'projects-visible' : ''}`}>
        <div className="projects-container">
          
          {/* Header */}
          <div className="projects-header">
            <div className="projects-badge">
              Nossos Projetos
            </div>

            <h2 className="projects-title">
              Projetos que elevaram
              <br />
              <span className="projects-title-muted">grandes lançamentos.</span>
            </h2>

            <p className="projects-description">
              Cada projeto que criamos tem um objetivo: destacar e vender. Veja 
              alguns dos materiais visuais que ajudaram infoprodutores e grandes 
              lançamentos a performar melhor.
            </p>
          </div>

          {/* Filters */}
          <div className="projects-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`filter-btn ${activeFilter === filter.id ? 'filter-btn-active' : ''}`}
              >
                <span className="filter-label">{filter.label}</span>
                <span className="filter-count">({filter.count})</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(project)}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <div className="placeholder-icon">🖼️</div>
                    <span className="placeholder-text">{project.title}</span>
                  </div>
                  
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <button className="view-btn">
                        <span className="view-icon">👁️</span>
                        <span>Ver projeto</span>
                      </button>
                      <div className="project-category">
                        {filters.find(f => f.id === project.category)?.label || project.category}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className="project-client">{project.client}</span>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-results">
                    {Object.entries(project.results).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="result-item">
                        <span className="result-value">{value}</span>
                        <span className="result-label">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="projects-cta">
            <h3 className="cta-title">
              Gostou do que viu? <span className="cta-title-accent">Vamos criar algo incrível juntos!</span>
            </h3>
            <p className="cta-description">
              Cada projeto é único e desenvolvido especialmente para suas necessidades e objetivos.
            </p>
            <button onClick={scrollToContact} className="cta-button">
              <span>Solicitar orçamento</span>
              <span className="cta-button-icon">🚀</span>
            </button>
          </div>

        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button onClick={closeModal} className="modal-close">
              <span className="close-line"></span>
              <span className="close-line"></span>
            </button>

            <div className="modal-header">
              <div className="modal-image">
                <div className="modal-placeholder">
                  <div className="placeholder-icon">🖼️</div>
                  <span>{selectedProject.title}</span>
                </div>
              </div>
              
              <div className="modal-info">
                <div className="modal-meta">
                  <span className="modal-year">{selectedProject.year}</span>
                  <span className="modal-client">{selectedProject.client}</span>
                  <span className="modal-category">
                    {filters.find(f => f.id === selectedProject.category)?.label}
                  </span>
                </div>
                
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.description}</p>
                
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="modal-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4 className="section-title">Resultados Alcançados</h4>
                <div className="results-grid">
                  {Object.entries(selectedProject.results).map(([key, value]) => (
                    <div key={key} className="result-card">
                      <div className="result-value-large">{value}</div>
                      <div className="result-label-large">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4 className="section-title">Ferramentas Utilizadas</h4>
                <div className="tools-list">
                  {selectedProject.tools.map((tool, index) => (
                    <span key={index} className="tool-item">{tool}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button onClick={scrollToContact} className="modal-cta">
                Quero um projeto assim
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Projects;