import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, Settings, Image as ImageIcon, Save } from 'lucide-react';
import './Dashboard.css';

const ProfileConfig = () => {
  const navigate = useNavigate();
  const [coverUrl, setCoverUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // Cloudinary Upload Simulation
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    // In production, upload to Cloudinary:
    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('upload_preset', 'your_preset');
    // fetch('https://api.cloudinary.com/v1_1/your_cloud/image/upload', { method: 'POST', body: formData })
    //   .then(res => res.json())
    //   .then(data => setCoverUrl(data.secure_url));

    // Mock upload delay
    setTimeout(() => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverUrl(reader.result as string);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }, 1500);
  };

  const handleSaveProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Perfil atualizado com sucesso!');
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar Privada */}
      <aside className="sidebar glass-card">
        <div className="sidebar-logo">
          <h2>Painel <span className="text-gradient">Admin</span></h2>
        </div>
        
        <nav className="sidebar-nav">
          <button className="nav-item" onClick={() => navigate('/dashboard')}>
            <LayoutDashboard size={20} /> Leads Recebidos
          </button>
          <button className="nav-item active" onClick={() => navigate('/profile')}>
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
          <h1>Meu <span className="text-gradient">Perfil</span></h1>
        </header>

        <section className="glass-card animate-fade-in" style={{ padding: '3rem' }}>
          <form className="profile-form" onSubmit={handleSaveProfile}>
            
            <div className="form-group">
              <label className="form-label">Foto de Capa (Cloudinary)</label>
              <label htmlFor="cloudinary_upload" className="cover-upload-area">
                {coverUrl && <div className="cover-preview" style={{ backgroundImage: `url(${coverUrl})` }}></div>}
                <div className="upload-content" style={{ opacity: coverUrl ? 0 : 1, transition: 'opacity 0.3s' }}>
                  <ImageIcon size={48} className="text-muted" />
                  <span>{isUploading ? 'Enviando...' : 'Clique para alterar a capa'}</span>
                </div>
                <input 
                  type="file" 
                  id="cloudinary_upload" 
                  accept="image/*" 
                  style={{ display: 'none' }} 
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="admin_name">Nome de Exibição</label>
              <input type="text" id="admin_name" className="form-input" defaultValue="NextLevel Services" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="admin_email">E-mail de Contato Principal</label>
              <input type="email" id="admin_email" className="form-input" defaultValue="contato@nextlevel.com" required />
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '200px' }}>
              <Save size={20} style={{ marginRight: '8px' }} /> Salvar Alterações
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ProfileConfig;
