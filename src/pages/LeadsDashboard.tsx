import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Search, Settings, LayoutDashboard } from 'lucide-react';
import './Dashboard.css';

// Interface for Firebase Firestore Lead
interface Lead {
  id: string;
  lead_name: string;
  lead_email: string;
  lead_phone: string;
  lead_message: string;
  createdAt: string;
}

const LeadsDashboard = () => {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Simulating Firebase Fetch
  useEffect(() => {
    // In production:
    // const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
    // onSnapshot(q, (snapshot) => {
    //   setLeads(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    // });
    
    // Mock data
    setLeads([
      { id: '1', lead_name: 'Carlos Silva', lead_email: 'carlos@empresa.com', lead_phone: '(11) 99999-1111', lead_message: 'Preciso de um novo site para meu e-commerce.', createdAt: '20/04/2026' },
      { id: '2', lead_name: 'Ana Souza', lead_email: 'ana@startup.io', lead_phone: '(21) 98888-2222', lead_message: 'Gostaria de um orçamento de UX Design.', createdAt: '19/04/2026' },
      { id: '3', lead_name: 'Marcos Paulo', lead_email: 'marcos@agencia.br', lead_phone: '(31) 97777-3333', lead_message: 'Campanha de marketing digital regional.', createdAt: '18/04/2026' }
    ]);
  }, []);

  const filteredLeads = leads.filter(lead => 
    lead.lead_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lead.lead_email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-layout">
      {/* Sidebar Privada */}
      <aside className="sidebar glass-card">
        <div className="sidebar-logo">
          <h2>Painel <span className="text-gradient">Admin</span></h2>
        </div>
        
        <nav className="sidebar-nav">
          <button className="nav-item active" onClick={() => navigate('/dashboard')}>
            <LayoutDashboard size={20} /> Leads Recebidos
          </button>
          <button className="nav-item" onClick={() => navigate('/profile')}>
            <Settings size={20} /> Configurar Perfil
          </button>
          <div className="spacer"></div>
          <button className="nav-item text-error" onClick={() => navigate('/')}>
            <LogOut size={20} /> Voltar ao Site
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Gestão de <span className="text-gradient">Leads</span></h1>
          
          <div className="search-bar">
            <Search size={20} className="text-muted" />
            <input 
              type="text" 
              placeholder="Buscar pelo nome ou e-mail..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </header>

        <section className="table-container glass-card animate-fade-in">
          <table className="leads-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Mensagem</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id}>
                  <td className="text-muted">{lead.createdAt}</td>
                  <td className="font-medium">{lead.lead_name}</td>
                  <td><a href={`mailto:${lead.lead_email}`} className="text-primary">{lead.lead_email}</a></td>
                  <td>{lead.lead_phone}</td>
                  <td className="message-cell">{lead.lead_message}</td>
                </tr>
              ))}
              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center text-muted" style={{padding: '2rem'}}>Nenhum lead encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default LeadsDashboard;
