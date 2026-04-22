import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, Code, Database, Bot, CheckCircle, ChevronRight, Mail, User, Phone, MessageSquare, Globe, GitBranch, Zap, Network } from 'lucide-react';
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
          <div className="logo"><Rocket className="accent-icon" /> MVP na Prática</div>
          <a href="#contato" className="btn btn-outline">Baixar o Guia Grátis</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero section">
        <div className="container hero-content animate-fade-in">
          
          <div className="tech-stack-badges">
             <span className="badge"><Bot size={14} className="accent-icon" /> I.A. Avançada</span>
             <span className="badge"><Code size={14} className="accent-icon" /> React Vite</span>
             <span className="badge"><Database size={14} className="accent-icon" /> Firebase (Google)</span>
             <span className="badge"><GitBranch size={14} className="accent-icon" /> GitHub</span>
             <span className="badge"><Globe size={14} className="accent-icon" /> Netlify</span>
          </div>

          <h1 className="hero-title">
            Do Zero a um <br />
            <span className="text-gradient">Produto Escalável</span>
          </h1>
          <p className="hero-subtitle">
            Entenda como construímos softwares modernos atuando lado a lado com agentes de Inteligência Artificial usando arquitetura Serverless. 
          </p>
          <div className="hero-cta">
            <a href="#contato" className="btn btn-primary">
              Desbloquear o Passo a Passo <ChevronRight size={20} style={{marginLeft: '8px'}} />
            </a>
          </div>
          <div className="hero-metrics">
            <div className="metric"><span className="text-gradient">Vite</span> Ultra Rápido</div>
            <div className="metric"><span className="text-gradient">100%</span> Nuvem Gratuita</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section bg-alt" id="servicos">
        <div className="container">
          <div className="section-header">
            <h2>Nossa <span className="text-gradient">Engenharia</span></h2>
            <p>Os pilares da construção de um projeto sustentável e de rápida entrega.</p>
          </div>
          
          <div className="services-grid">
            <div className="glass-card service-card">
              <div className="icon-wrapper"><Bot size={32} /></div>
              <h3>Programação em Pares com IA</h3>
              <p>Trabalho fluido onde AI elabora lógicas complexas e constrói telas em segundos, liderados por agentes como o Antigravity.</p>
            </div>
            
            <div className="glass-card service-card">
              <div className="icon-wrapper"><Network size={32} /></div>
              <h3>Arquitetura Cloud & Dados</h3>
              <p>Modelagem de banco de dados em tempo real utilizando Firebase Firestore diretamente do Navegador, sem servidores complexos.</p>
            </div>
            
            <div className="glass-card service-card">
              <div className="icon-wrapper"><Zap size={32} /></div>
              <h3>Deploy Contínuo e CI/CD</h3>
              <p>Integração entre GitHub e Netlify permitindo que toda alteração de código atualize instantaneamente a aplicação na Nuvem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact section" id="contato">
        <div className="container contact-container">
          <div className="contact-info">
            <h2>Libere seu Acesso <br/>ao <span className="text-gradient">Guia Completo</span></h2>
            <p>Preencha com seus dados abaixo para fazer o download imediato do nosso material PDF passo-a-passo.</p>
            
            <div className="contact-perks">
              <p><CheckCircle className="accent-icon" size={20} /> Metodologia Hands-on (Mão na Massa)</p>
              <p><CheckCircle className="accent-icon" size={20} /> Mentoria focada em Lógica Cloud</p>
              <p><CheckCircle className="accent-icon" size={20} /> Acesso Acelerado às Ferramentas</p>
            </div>
          </div>
          
          <div className="contact-form-wrapper glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="lead_name"><User size={16} /> Nome Completo</label>
                <input type="text" id="lead_name" name="lead_name" className="form-input" placeholder="Seu nome" required />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="lead_email"><Mail size={16} /> E-mail Principal</label>
                <input type="email" id="lead_email" name="lead_email" className="form-input" placeholder="seu@email.com" required />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="lead_phone"><Phone size={16} /> WhatsApp de Contato</label>
                <input type="tel" id="lead_phone" name="lead_phone" className="form-input" placeholder="(00) 00000-0000" required />
              </div>
              
              <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Verificando e Liberando...' : 'Baixar Agora (PDF)'}
              </button>
              <p className="form-sec-text">O seu contato estará seguro em nosso banco Firestore.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer bg-alt">
        <div className="container">
          <p>© 2026 MVP na Prática & Antigravity. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
