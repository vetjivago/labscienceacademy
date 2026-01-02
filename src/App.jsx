import './App.css'
import logo from './assets/logo.png'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Lab Science Academy - Logo" className="logo-img" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#proposito">Propósito</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <button className="btn-primary" onClick={() => window.open('https://hotmart.com', '_blank')}>
          Área do Aluno
        </button>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Ciência com Rigor,<br />Ética e Tecnologia.</h1>
          <p>
            Capacitamos profissionais que atuam com animais de laboratório através de formação prática e tecnologicamente orientada.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Ver Cursos (LSA)</button>
            <button className="btn-secondary">Nossa Missão</button>
          </div>
        </div>
      </section>

      <section id="proposito" className="features">
        <h2 className="section-title">Pilares da LSA</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚖️</div>
            <h3>Ética Aplicada</h3>
            <p>
              A ética não é apenas discurso, é prática operacional. Ensinamos como aplicar as normas no dia a dia do laboratório.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Rigor com Clareza</h3>
            <p>
              Ciência sólida e baseada em evidências, apresentada de forma objetiva e acessível para todos os níveis profissionais.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>Tecnologia com Propósito</h3>
            <p>
              Integramos IA e novas tecnologias para elevar a qualidade da pesquisa e o bem-estar animal.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <img src={logo} alt="LSA" style={{ height: '40px', marginBottom: '1rem', filter: 'brightness(0) invert(1)' }} />
        <p>&copy; {new Date().getFullYear()} Lab Science Academy. Todos os direitos reservados.</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Ciência Animal • Ética • Tecnologia
        </p>
      </footer>
    </div>
  )
}

export default App
