import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Download } from 'lucide-react';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <div className="glass-card animate-fade-in" style={{ maxWidth: '500px', width: '100%' }}>
        <CheckCircle size={64} style={{ color: 'var(--success)', margin: '0 auto 1.5rem auto' }} />
        <h1 style={{ marginBottom: '1rem' }}>Tudo <span className="text-gradient">Pronto!</span></h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          O seu registro foi confirmado no sistema. Como prometido, o seu material está totalmente liberado para download no botão abaixo.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button className="btn btn-primary" onClick={() => alert('O download do PDF começará em breve (Aguardando arquivo)')}>
            <Download size={20} style={{ marginRight: '8px' }} /> Fazer Download do PDF
          </button>
          
          <button className="btn btn-outline" style={{ border: 'none' }} onClick={() => navigate('/')}>
            <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Voltar para o Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
