import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Download, Lock, Unlock, MessageCircle } from 'lucide-react';

const SuccessPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim().toLowerCase() === 'mvpescalavel2026') {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  // Link mágico do WhatsApp
  const whatsappLink = "https://wa.me/5551985506856?text=Opa!%20Acabei%20de%20me%20cadastrar%20no%20site%20e%20gostaria%20de%20solicitar%20a%20senha%20para%20desbloquear%20o%20material.";

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <div className="glass-card animate-fade-in" style={{ maxWidth: '500px', width: '100%' }}>
        <CheckCircle size={64} style={{ color: 'var(--success)', margin: '0 auto 1.5rem auto' }} />
        <h1 style={{ marginBottom: '1rem' }}>Falta <span className="text-gradient">Pouco!</span></h1>
        
        {!isUnlocked ? (
          <div className="animate-fade-in">
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
              Seus dados foram confirmados. Para liberar o seu download agora mesmo, por favor insira a senha secreta no campo abaixo:
            </p>
            
            <form onSubmit={handleUnlock} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.4rem', borderRadius: '50px', border: error ? '1px solid var(--error)' : '1px solid var(--border)' }}>
                <Lock size={20} className="text-muted" style={{ marginLeft: '15px' }} />
                <input 
                  type="text" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite a senha..." 
                  style={{ background: 'transparent', border: 'none', color: 'white', flex: 1, padding: '0.6rem', outline: 'none' }}
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Acessar</button>
              </div>
              {error && <span style={{ color: 'var(--error)', fontSize: '0.85rem', marginTop: '0.8rem', display: 'block', fontWeight: 500 }}>⚠️ Senha incorreta. Tente novamente!</span>}
            </form>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '16px', marginBottom: '2rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>Não tem a senha?</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '8px', borderColor: '#25D366', color: '#25D366' }}>
                <MessageCircle size={18} /> Solicite via Whats para 51985506856
              </a>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <Unlock size={48} style={{ color: 'var(--primary)', margin: '0 auto 1.5rem auto' }} />
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Senha validada! Maravilha tê-lo conosco nesta jornada. O seu material está engatilhado abaixo:
            </p>
            <a 
              href="/Curso_MVP_Escalavel_cronologico.pdf" 
              download="Passo_a_Passo_MVP_Escalavel.pdf"
              className="btn btn-primary w-full" 
              style={{ marginBottom: '1rem', padding: '1rem', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <Download size={22} style={{ marginRight: '8px' }} /> Fazer Download do Guia (PDF)
            </a>
          </div>
        )}

        <button className="btn btn-outline w-full" style={{ border: 'none', marginTop: '0.5rem' }} onClick={() => navigate('/')}>
          <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Voltar para o Site Inicial
        </button>

      </div>
    </div>
  );
};

export default SuccessPage;
