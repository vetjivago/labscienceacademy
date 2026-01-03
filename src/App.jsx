import { useState, useEffect } from 'react';
import './index.css';
import logo from './assets/logo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Scroll Animation Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.course-card, .benefit-card, .audience-card, .pricing-card');
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const smoothScroll = (e, id) => {
    e.preventDefault();
    if (id === '#') return;
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
        <div className="container">
          <nav className="nav">
            <a href="#" className="nav-logo" onClick={(e) => smoothScroll(e, '#hero')}>
              <img src={logo} alt="Lab Science Academy" style={{ height: '45px', width: 'auto' }} />
            </a>
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
              <a href="#sobre" className="nav-link" onClick={(e) => smoothScroll(e, '#sobre')}>Sobre</a>
              <a href="#cursos" className="nav-link" onClick={(e) => smoothScroll(e, '#cursos')}>Cursos</a>
              <a href="#beneficios" className="nav-link" onClick={(e) => smoothScroll(e, '#beneficios')}>Benefícios</a>
              <a href="#planos" className="nav-link" onClick={(e) => smoothScroll(e, '#planos')}>Planos</a>
              <a href="#faq" className="nav-link" onClick={(e) => smoothScroll(e, '#faq')}>FAQ</a>
              <a href="#" className="btn btn-primary nav-cta">Começar Agora</a>
            </div>
            <button className="nav-toggle" id="navToggle" aria-label="Menu" onClick={toggleMenu}>
              <span></span><span></span><span></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                Plataforma de Formação Científica
              </div>
              <h1 className="hero-title">Capacitação em <span className="highlight">Ciência Animal</span> com Ética, Clareza e Tecnologia</h1>
              <p className="hero-description">Formação prática e comparativa em ciência de animais de laboratório que integra ética, conformidade regulatória e tecnologia para aplicação imediata no mundo real.</p>
              <div className="hero-buttons">
                <a href="#" className="btn btn-primary">Comece Grátis com LSA-00 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
                <a href="#cursos" className="btn btn-outline-light" onClick={(e) => smoothScroll(e, '#cursos')}>Ver Todos os Cursos</a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat"><span className="hero-stat-number">4+</span><span className="hero-stat-label">Módulos Especializados</span></div>
                <div className="hero-stat"><span className="hero-stat-number">3Rs</span><span className="hero-stat-label">Replace, Reduce, Refine</span></div>
                <div className="hero-stat"><span className="hero-stat-number">100%</span><span className="hero-stat-label">Aplicação Prática</span></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <div className="hero-image">
                  <div className="hero-card">
                    <div className="hero-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
                    <h4>Curso Introdutório Gratuito</h4>
                    <p>LSA-00: IA em Pesquisa Científica — sua porta de entrada para a ciência moderna.</p>
                    <div className="hero-card-features">
                      <div className="hero-card-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg><span>Certificado incluso</span></div>
                      <div className="hero-card-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg><span>Acesso imediato</span></div>
                      <div className="hero-card-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg><span>Conteúdo atualizado</span></div>
                    </div>
                  </div>
                </div>
                <div className="floating-element floating-element-1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg><span>CONCEA</span></div>
                <div className="floating-element floating-element-2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg><span>Ética Aplicada</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about section" id="sobre">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="about-image-main">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="50" cy="30" r="15" /><rect x="45" y="15" width="10" height="12" /><path d="M30 65 L50 85 L70 65" /><path d="M35 55 Q50 70 65 55" /><ellipse cx="80" cy="75" rx="12" ry="8" /></svg>
                <h3>Lab Science Academy</h3>
                <p>Transformando diretrizes em execução prática</p>
              </div>
              <div className="about-badge"><strong>LSA</strong><span>Desde 2026</span></div>
            </div>
            <div className="about-text">
              <div className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}><span>Sobre a Academia</span></div>
              <h2>Elevando o Padrão da Ciência com Animais de Laboratório</h2>
              <p>A Lab Science Academy existe para elevar o padrão da ciência com animais de laboratório por meio de formação aplicada, ética e tecnologicamente orientada.</p>
              <p>Atuamos na interseção entre ciência rigorosa, bem-estar animal, conformidade regulatória e inovação tecnológica — especialmente IA. Nossa missão é transformar diretrizes abstratas em execução prática.</p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
                  <div><h4>Ética Aplicada</h4><p>Ética como prática operacional</p></div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
                  <div><h4>Rigor com Clareza</h4><p>Ciência sólida e objetiva</p></div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg></div>
                  <div><h4>Conformidade Funcional</h4><p>Normas em execução prática</p></div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
                  <div><h4>Tecnologia com Propósito</h4><p>IA a serviço da qualidade</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="courses section" id="cursos">
        <div className="container">
          <div className="section-title">
            <span>Nossos Cursos</span>
            <h2>Trilha de Formação Especializada</h2>
            <p>Cursos modulares e progressivos para sua capacitação completa em ciência de animais de laboratório.</p>
          </div>
          <div className="courses-grid">
            <div className="course-card">
              <div className="course-card-header">
                <span className="course-badge">Gratuito</span>
                <h3>LSA-00: IA em Pesquisa Científica</h3>
                <p>Sua porta de entrada para a ciência moderna</p>
              </div>
              <div className="course-card-body">
                <div className="course-meta">
                  <div className="course-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg><span>3-4 horas</span></div>
                  <div className="course-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg><span>4 módulos</span></div>
                </div>
                <div className="course-topics">
                  <h4>O que você vai aprender:</h4>
                  <ul>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>História e evolução da IA</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Aplicações em análise de dados</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>IA e os 3Rs</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Desafios éticos</li>
                  </ul>
                </div>
                <div className="course-card-footer">
                  <div className="course-price"><span className="current">Grátis</span></div>
                  <a href="#" className="btn btn-primary">Acessar Agora</a>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="course-card-header">
                <span className="course-badge premium">Premium</span>
                <h3>LSA-01: Fundamentos e Ética</h3>
                <p>Base sólida em pesquisa animal</p>
              </div>
              <div className="course-card-body">
                <div className="course-meta">
                  <div className="course-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg><span>6+ horas</span></div>
                  <div className="course-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg><span>6 aulas</span></div>
                </div>
                <div className="course-topics">
                  <h4>O que você vai aprender:</h4>
                  <ul>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>História da experimentação animal</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Princípios dos 3Rs na prática</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Ética e responsabilidade</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Protocolos CEUA</li>
                  </ul>
                </div>
                <div className="course-card-footer">
                  <div className="course-price"><span className="current">R$ 49,90</span><span class="period">/mês</span></div>
                  <a href="#" className="btn btn-secondary">Saiba Mais</a>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="course-card-header">
                <span className="course-badge premium">Premium</span>
                <h3>LSA-02: Legislação e Normas</h3>
                <p>Conformidade regulatória global</p>
              </div>
              <div className="course-card-body">
                <div className="course-meta">
                  <div className="course-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg><span>8+ horas</span></div>
                  <div className="course-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg><span>8 aulas</span></div>
                </div>
                <div className="course-topics">
                  <h4>O que você vai aprender:</h4>
                  <ul>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Lei Arouca e CONCEA</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Normas europeias e americanas</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Funcionamento das CEUAs</li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Análise comparativa</li>
                  </ul>
                </div>
                <div className="course-card-footer">
                  <div className="course-price"><span className="current">R$ 49,90</span><span class="period">/mês</span></div>
                  <a href="#" className="btn btn-secondary">Saiba Mais</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits section" id="beneficios">
        <div className="container">
          <div className="section-title">
            <span>Por que escolher a LSA?</span>
            <h2>Diferenciais da Nossa Formação</h2>
            <p>Oferecemos uma experiência de aprendizado única, focada em resultados práticos e aplicação imediata.</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg></div>
              <h3>Conteúdo Baseado em Evidências</h3>
              <p>Todo material é fundamentado em literatura científica atualizada e melhores práticas reconhecidas internacionalmente.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg></div>
              <h3>Abrangência Internacional</h3>
              <p>Cobertura das normas do Brasil, União Europeia e Estados Unidos para uma visão global da regulamentação.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg></div>
              <h3>Tecnologia Integrada</h3>
              <p>Aplicações práticas de IA e ferramentas tecnológicas para otimizar sua pesquisa e garantir qualidade.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg></div>
              <h3>Aplicação Prática</h3>
              <p>Fluxos, checklists e mapas práticos para aplicação imediata no seu ambiente de trabalho.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg></div>
              <h3>Comunidade Ativa</h3>
              <p>Acesso a uma comunidade de profissionais comprometidos com a excelência científica e o bem-estar animal.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" /></svg></div>
              <h3>Certificação Reconhecida</h3>
              <p>Certificados de conclusão para comprovar sua capacitação e valorizar seu currículo profissional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="audience section" id="publico">
        <div className="container">
          <div className="section-title">
            <span>Para quem é?</span>
            <h2>Público-Alvo</h2>
            <p>Nossos cursos são desenvolvidos para profissionais comprometidos com a excelência científica.</p>
          </div>
          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></div>
              <h4>Pesquisadores</h4>
              <p>Cientistas em todas as áreas biomédicas</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg></div>
              <h4>Pós-graduandos</h4>
              <p>Mestrandos e doutorandos</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg></div>
              <h4>Técnicos de Biotério</h4>
              <p>Profissionais de manejo animal</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /></svg></div>
              <h4>Médicos-veterinários</h4>
              <p>Veterinários de animais de laboratório</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
              <h4>Membros de CEUA</h4>
              <p>Comissões de ética no uso de animais</p>
            </div>
            <div className="audience-card">
              <div className="audience-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1" /><path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" /></svg></div>
              <h4>Instituições</h4>
              <p>Ensino, pesquisa e biotérios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing section" id="planos">
        <div className="container">
          <div className="section-title">
            <span>Investimento</span>
            <h2>Planos de Assinatura</h2>
            <p>Escolha o plano que melhor se adapta às suas necessidades de aprendizado.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Mensal</h3>
              <div className="pricing-amount"><span className="currency">R$</span><span className="value">49,90</span><span class="period">por mês</span></div>
              <ul className="pricing-features">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Acesso a todos os cursos</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Materiais complementares</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Certificados de conclusão</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Acesso à comunidade</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Atualizações de conteúdo</li>
              </ul>
              <a href="#" className="btn btn-secondary">Assinar Mensal</a>
            </div>
            <div className="pricing-card featured">
              <h3>Anual</h3>
              <div className="pricing-amount"><span className="currency">R$</span><span className="value">499</span><span class="period">por ano (economia de R$ 100)</span></div>
              <ul className="pricing-features">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Tudo do plano mensal</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>2 meses grátis</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Acesso prioritário a novos cursos</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Webinars exclusivos</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Suporte prioritário</li>
              </ul>
              <a href="#" className="btn btn-primary">Assinar Anual</a>
            </div>
            <div className="pricing-card">
              <h3>Vitalício</h3>
              <div className="pricing-amount"><span className="currency">R$</span><span className="value">800</span><span class="period">pagamento único</span></div>
              <ul className="pricing-features">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Tudo do plano anual</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Acesso vitalício</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Todos os cursos futuros</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Mentoria em grupo</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>Badge de Membro Fundador</li>
              </ul>
              <a href="#" className="btn btn-secondary">Assinar Vitalício</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para Elevar o Padrão da Sua Pesquisa?</h2>
            <p>Comece gratuitamente com o LSA-00 e descubra como a IA está transformando a ciência de animais de laboratório. Sua jornada para a excelência científica começa aqui.</p>
            <div className="cta-buttons">
              <a href="#" className="btn btn-primary">Começar Grátis Agora <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></a>
              <a href="#cursos" className="btn btn-outline-light" onClick={(e) => smoothScroll(e, '#cursos')}>Ver Planos Premium</a>
            </div>
            <div className="hotmart-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>Pagamento seguro via Hotmart</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section" id="faq">
        <div className="container">
          <div className="section-title">
            <span>Dúvidas Frequentes</span>
            <h2>Perguntas Frequentes</h2>
            <p>Encontre respostas para as perguntas mais comuns sobre a Lab Science Academy.</p>
          </div>
          <div className="faq-grid">
            {[
              { q: 'O curso LSA-00 é realmente gratuito?', a: 'Sim! O LSA-00: IA em Pesquisa Científica é completamente gratuito e serve como porta de entrada para nossa plataforma. Você terá acesso a todos os 4 módulos, materiais complementares e certificado de conclusão sem nenhum custo.' },
              { q: 'Recebo certificado ao concluir os cursos?', a: 'Sim! Todos os cursos da Lab Science Academy oferecem certificado de conclusão digital, que pode ser utilizado para comprovar sua capacitação e enriquecer seu currículo profissional.' },
              { q: 'Os cursos são reconhecidos pelo CONCEA?', a: 'Os cursos da LSA são desenvolvidos com base nas diretrizes do CONCEA e nas melhores práticas internacionais. Embora sejam cursos de capacitação complementar, o conteúdo está alinhado às exigências regulatórias brasileiras.' },
              { q: 'Posso cancelar minha assinatura a qualquer momento?', a: 'Sim! Você pode cancelar sua assinatura a qualquer momento diretamente pela plataforma Hotmart. Não há multas ou taxas de cancelamento. O acesso permanece ativo até o final do período já pago.' },
              { q: 'Quanto tempo tenho para completar os cursos?', a: 'Todos os cursos são self-paced (no seu próprio ritmo). Enquanto sua assinatura estiver ativa, você terá acesso ilimitado ao conteúdo e poderá revisitar as aulas quantas vezes quiser.' },
              { q: 'Como funciona o pagamento pela Hotmart?', a: 'A Hotmart é uma plataforma segura de pagamentos digitais. Você pode pagar com cartão de crédito (parcelado em até 12x), boleto bancário, Pix ou PayPal. Após a confirmação do pagamento, o acesso é liberado imediatamente.' }
            ].map((item, index) => (
              <div className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={index}>
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  {item.q}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                <div className="faq-answer"><div className="faq-answer-inner"><p>{item.a}</p></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logo} alt="Lab Science Academy" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
              </div>
              <p>Elevando o padrão da ciência com animais de laboratório por meio de formação aplicada, ética e tecnologicamente orientada.</p>
              <div className="footer-social">
                <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" /><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" /></svg></a>
                <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg></a>
                <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><path d="M17.5 6.5h.01" /></svg></a>
                <a href="#" aria-label="Twitter/X"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l11.733 16h4.267l-11.733-16z" /><path d="M4 20l6.4-6.4M13.6 10.4L20 4" /></svg></a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Cursos</h4>
              <ul>
                <li><a href="#">LSA-00: IA em Pesquisa</a></li>
                <li><a href="#">LSA-01: Fundamentos e Ética</a></li>
                <li><a href="#">LSA-02: Legislação e Normas</a></li>
                <li><a href="#">LSA-03: Dor e Bem-estar</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Recursos</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Guia 3Rs Gratuito</a></li>
                <li><a href="#">Comunidade</a></li>
                <li><a href="#">Webinars</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Suporte</h4>
              <ul>
                <li><a href="#faq" onClick={(e) => smoothScroll(e, '#faq')}>Perguntas Frequentes</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Área do Aluno</a></li>
                <li><a href="#">Hotmart</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Lab Science Academy. Todos os direitos reservados.</p>
            <div className="footer-bottom-links">
              <a href="#">Termos de Uso</a>
              <a href="#">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
