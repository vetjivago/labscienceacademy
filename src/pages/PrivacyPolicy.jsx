import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import logo from '../assets/logo.png';

function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page">
            {/* Simple Header */}
            <header className="header" style={{ position: 'sticky', top: 0, backgroundColor: 'var(--navy)', padding: '1rem 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" className="nav-logo">
                        <img src={logo} alt="Lab Science Academy" style={{ height: '40px', width: 'auto' }} />
                    </Link>
                    <Link to="/" className="btn btn-outline-light" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        Voltar para Home
                    </Link>
                </div>
            </header>

            <main className="container" style={{ padding: '4rem 1rem', maxWidth: '900px' }}>
                <h1 style={{ marginBottom: '2rem', color: 'var(--navy)' }}>Política de Privacidade</h1>

                <div className="privacy-content" style={{ lineHeight: '1.8', color: 'var(--cinza-medio)' }}>
                    <p><strong>Última atualização: Janeiro de 2026</strong></p>

                    <p>A Lab Science Academy ("nós", "nosso" ou "nos") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site labscienceacademy.com.</p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--azul-escuro)' }}>1. Coleta de Dados</h3>
                    <p>Nós coletamos informações que você nos fornece diretamente, como quando você se inscreve em nossa newsletter, cria uma conta, ou entra em contato conosco. As informações podem incluir seu nome, endereço de e-mail, e outros dados de contato.</p>
                    <p>Também coletamos dados automaticamente quando você navega em nosso site, como seu endereço IP, tipo de navegador, e páginas visitadas, utilizando cookies e tecnologias semelhantes para melhorar sua experiência.</p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--azul-escuro)' }}>2. Uso das Informações</h3>
                    <p>Utilizamos suas informações para:</p>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Fornecer, operar e manter nosso site e cursos;</li>
                        <li>Melhorar, personalizar e expandir nossos serviços;</li>
                        <li>Entender e analisar como você usa nosso site;</li>
                        <li>Desenvolver novos produtos, serviços e funcionalidades;</li>
                        <li>Comunicar com você, seja diretamente ou através de um de nossos parceiros, inclusive para atendimento ao cliente e fins de marketing;</li>
                        <li>Processar suas transações (via Hotmart);</li>
                        <li>Cumprir obrigações legais.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--azul-escuro)' }}>3. Compartilhamento de Dados</h3>
                    <p>Não vendemos suas informações pessoais. Podemos compartilhar seus dados com prestadores de serviços terceirizados que nos ajudam a operar nosso negócio (como a Hotmart para pagamentos), desde que esses terceiros concordem em manter essas informações confidenciais.</p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--azul-escuro)' }}>4. Segurança de Dados</h3>
                    <p>Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso, alteração, divulgação ou destruição não autorizados. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro.</p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--azul-escuro)' }}>5. Seus Direitos (LGPD)</h3>
                    <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:</p>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Acessar seus dados pessoais;</li>
                        <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                        <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                        <li>Solicitar a portabilidade dos dados a outro fornecedor de serviço;</li>
                        <li>Revogar seu consentimento a qualquer momento.</li>
                    </ul>
                    <p>Para exercer esses direitos, entre em contato conosco através de nossos canais de atendimento.</p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--azul-escuro)' }}>6. Cookies</h3>
                    <p>Utilizamos cookies para melhorar o desempenho e a sua experiência como usuário no nosso site. Você pode configurar seu navegador para recusar todos ou alguns cookies, mas isso pode afetar a funcionalidade do site.</p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--azul-escuro)' }}>7. Alterações nesta Política</h3>
                    <p>Podemos atualizar nossa Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para quaisquer alterações. As alterações entram em vigor imediatamente após serem publicadas nesta página.</p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--azul-escuro)' }}>8. Contato</h3>
                    <p>Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: contato@labscienceacademy.com.</p>
                </div>
            </main>

            {/* Simplified Footer */}
            <footer className="footer" style={{ padding: '2rem 0', marginTop: 'auto' }}>
                <div className="container">
                    <p style={{ textAlign: 'center', color: 'var(--branco)', opacity: 0.7 }}>
                        © 2026 Lab Science Academy. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default PrivacyPolicy;
