import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Code, Smartphone, Palette, CheckCircle, ChevronRight, Mail, User, Phone, MessageSquare } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      
      await addDoc(collection(db, 'leads'), { 
        ...data, 
        createdAt: serverTimestamp() 
      });
      
      setIsSubmitting(false);
      navigate('/success');
    } catch (error) {
      console.error("Erro ao salvar lead no banco de dados: ", error);
      setIsSubmitting(false);
      alert("Ocorreu um erro ao enviar a mensagem. Tente novamente ou revise as regras do Firebase.");
    }
  };

  return (
    <div className="landing-wrapper">
      {/* Navbar Minimalist */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo"><Rocket className="accent-icon" /> NextLevel Services</div>
          <a href="#contato" className="btn btn-outline">Solicitar Orçamento</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero section">
        <div className="container hero-content animate-fade-in">
          <h1 className="hero-title">
            Transformando Visitantes em <br />
            <span className="text-gradient">Potenciais Clientes</span>
          </h1>
          <p className="hero-subtitle">
            Criação de interfaces de alta conversão, design premium e estratégias de
            marketing digital voltadas para resultados reais.
          </p>
          <div className="hero-cta">
            <a href="#contato" className="btn btn-primary">
              Iniciar Meu Projeto <ChevronRight size={20} style={{marginLeft: '8px'}} />
            </a>
          </div>
          <div className="hero-metrics">
            <div className="metric"><span className="text-gradient">+150</span> Projetos Entregues</div>
            <div className="metric"><span className="text-gradient">98%</span> Satisfação</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section bg-alt" id="servicos">
        <div className="container">
          <div className="section-header">
            <h2>Nossos <span className="text-gradient">Serviços</span></h2>
            <p>Soluções completas para posicionar sua marca no topo.</p>
          </div>
          
          <div className="services-grid">
            <div className="glass-card service-card">
              <div className="icon-wrapper"><Palette size={32} /></div>
              <h3>UX/UI Design</h3>
              <p>Interfaces bonitas, responsivas e focadas na experiência do usuário para maximizar a retenção.</p>
            </div>
            
            <div className="glass-card service-card">
              <div className="icon-wrapper"><Code size={32} /></div>
              <h3>Desenvolvimento Web</h3>
              <p>Sites rápidos e otimizados usando as tecnologias mais modernas do mercado (React, Next.js, Node).</p>
            </div>
            
            <div className="glass-card service-card">
              <div className="icon-wrapper"><Smartphone size={32} /></div>
              <h3>Marketing Digital</h3>
              <p>Estratégias de alto impacto para atrair tráfego qualificado e converter em vendas previsíveis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio section">
        <div className="container">
          <div className="section-header">
            <h2>Trabalhos <span className="text-gradient">Realizados</span></h2>
            <p>O impacto do nosso design no mundo real.</p>
          </div>
          
          <div className="portfolio-grid">
            {/* Using placeholders - ideally generate_image would create these */}
            <div className="portfolio-item glass-card">
              <div className="portfolio-img bg-gradient-1"></div>
              <h4>E-Commerce de Moda</h4>
              <p className="text-muted">Aumento de 40% na conversão</p>
            </div>
            <div className="portfolio-item glass-card">
              <div className="portfolio-img bg-gradient-2"></div>
              <h4>App SaaS Inovador</h4>
              <p className="text-muted">Mais de 10k downloads semanais</p>
            </div>
            <div className="portfolio-item glass-card">
              <div className="portfolio-img bg-gradient-3"></div>
              <h4>Plataforma Educacional</h4>
              <p className="text-muted">Engajamento de alunos triplicado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact section bg-alt" id="contato">
        <div className="container contact-container">
          <div className="contact-info">
            <h2>Pronto para escalar <br/>o seu <span className="text-gradient">Negócio?</span></h2>
            <p>Deixe seus dados e entraremos em contato rapidamente com uma proposta personalizada.</p>
            
            <div className="contact-perks">
              <p><CheckCircle className="accent-icon" size={20} /> Orçamento sem compromisso</p>
              <p><CheckCircle className="accent-icon" size={20} /> Análise gratuita da sua presença atual</p>
              <p><CheckCircle className="accent-icon" size={20} /> Atendimento premium</p>
            </div>
          </div>
          
          <div className="contact-form-wrapper glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="lead_name"><User size={16} /> Nome Completo</label>
                <input type="text" id="lead_name" name="lead_name" className="form-input" placeholder="Seu nome" required />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="lead_email"><Mail size={16} /> E-mail Profissional</label>
                <input type="email" id="lead_email" name="lead_email" className="form-input" placeholder="seu@email.com" required />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="lead_phone"><Phone size={16} /> Telefone / WhatsApp</label>
                <input type="tel" id="lead_phone" name="lead_phone" className="form-input" placeholder="(00) 00000-0000" required />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="lead_message"><MessageSquare size={16} /> Como podemos ajudar?</label>
                <textarea id="lead_message" name="lead_message" className="form-input" placeholder="Descreva brevemente seu projeto..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Solicitar Orçamento'}
              </button>
              <p className="form-sec-text">Seus dados estão seguros conosco.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 NextLevel Services. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
