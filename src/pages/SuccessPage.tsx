import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <div className="glass-card animate-fade-in" style={{ maxWidth: '500px', width: '100%' }}>
        <CheckCircle size={64} style={{ color: 'var(--success)', margin: '0 auto 1.5rem auto' }} />
        <h1 style={{ marginBottom: '1rem' }}>Mensagem <span className="text-gradient">Enviada!</span></h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Obrigado pelo seu contato. Nossa equipe revisará suas informações e retornará em breve com uma proposta exclusiva para o seu projeto.
        </p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          <ArrowLeft size={20} style={{ marginRight: '8px' }} /> Voltar para o início
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
