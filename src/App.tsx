import { useMemo, useState } from "react";

type Status = "andamento" | "concluido" | "arquivado";

type Edital = {
  id: number;
  numero: string;
  disciplina: string;
  curso: string;
  data: string;
  carater: string;
  status: Status;
  etapa: string;
  progresso: number;
  prazo: string;
};

const initialEditais: Edital[] = [
  { id: 1, numero: "014/2026", disciplina: "Banco de Dados", curso: "Gestão da Tecnologia da Informação", data: "18/08/2026", carater: "Determinado", status: "andamento", etapa: "Análise documental", progresso: 38, prazo: "18/09/2026" },
  { id: 2, numero: "018/2026", disciplina: "Programação Web", curso: "Desenvolvimento de Software Multiplataforma", data: "29/08/2026", carater: "Indeterminado", status: "andamento", etapa: "Prova didática", progresso: 63, prazo: "22/09/2026" },
  { id: 3, numero: "009/2026", disciplina: "Engenharia de Software", curso: "Gestão da Tecnologia da Informação", data: "12/05/2026", carater: "Determinado", status: "concluido", etapa: "Workflow concluído", progresso: 100, prazo: "Concluído" },
  { id: 4, numero: "006/2026", disciplina: "Laboratório de Desenvolvimento", curso: "Desenvolvimento de Software Multiplataforma", data: "03/04/2026", carater: "Determinado", status: "arquivado", etapa: "Arquivado", progresso: 20, prazo: "Arquivado" },
];

const menuItems = [
  { id: "andamento", label: "EDITAIS EM ANDAMENTO", icon: "▣" },
  { id: "concluido", label: "EDITAIS CONCLUÍDOS", icon: "✓" },
  { id: "arquivado", label: "EDITAIS ARQUIVADOS", icon: "▤" },
];

export default function App() {
  const [logged, setLogged] = useState(false);
  const [active, setActive] = useState<Status>("andamento");
  const [editais, setEditais] = useState<Edital[]>(initialEditais);
  const [email, setEmail] = useState("demo@scpe.local");
  const [password, setPassword] = useState("demo123");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(() => editais.filter((e) => e.status === active), [editais, active]);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return;
    setLogged(true);
  }

  function avancar(id: number) {
    setEditais((current) => current.map((e) => {
      if (e.id !== id) return e;
      const novoProgresso = Math.min(100, e.progresso + 12);
      return {
        ...e,
        progresso: novoProgresso,
        etapa: novoProgresso >= 100 ? "Workflow concluído" : "Próxima etapa do fluxo",
        status: novoProgresso >= 100 ? "concluido" : e.status,
      };
    }));
  }

  function arquivar(id: number) {
    setEditais((current) => current.map((e) => e.id === id ? { ...e, status: "arquivado", etapa: "Arquivado" } : e));
  }

  if (!logged) {
    return (
      <div className="login-page">
        <div className="login-card original-login">
          <div className="login-logo">SCPE</div>
          <h1>Acesso ao Sistema</h1>
          <p className="login-subtitle">Sistema de Controle de Prazos de Editais</p>

          <div className="demo-banner">
            Versão demonstrativa para portfólio — nenhum dado real é utilizado.
          </div>

          <form onSubmit={login}>
            <label htmlFor="email">Usuário</label>
            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="nome@exemplo.com" />
            <label htmlFor="password">Senha</label>
            <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" />
            <button className="primary login-button" type="submit">Entrar</button>
          </form>

          <div className="login-divider"><span>ou</span></div>
          <div className="login-links">
            <button type="button">Criar nova conta</button>
            <button type="button">Esqueci minha senha</button>
          </div>

          <div className="credentials-box">
            <strong>Acesso de demonstração</strong>
            <span>demo@scpe.local</span>
            <span>demo123</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="scpe-shell">
      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}

      <aside className={mobileOpen ? "sidebar sidebar-open" : "sidebar"}>
        <div className="sidebar-header">
          <h1>SCPE</h1>
          <button className="mobile-close" onClick={() => setMobileOpen(false)}>×</button>
        </div>

        <nav className="sidebar-nav">
          <div className="section-title">EDITAIS</div>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={active === item.id ? "sidebar-item active" : "sidebar-item"}
              onClick={() => { setActive(item.id as Status); setMobileOpen(false); }}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}

          <button className="sidebar-item" onClick={() => alert("Cadastro simulado na versão de portfólio.")}><span className="sidebar-icon">＋</span>CADASTRAR EDITAL</button>
          <button className="sidebar-item" onClick={() => alert("Configuração de etapas simulada na versão de portfólio.")}><span className="sidebar-icon">⚙</span>CONFIGURAR ETAPAS</button>

          <div className="section-title">USUÁRIOS</div>
          <button className="sidebar-item" onClick={() => alert("Gestão de usuários simulada na versão de portfólio.")}><span className="sidebar-icon">◉</span>LISTAR USUÁRIOS</button>

          <div className="section-title">CURSO E DISCIPLINA</div>
          <button className="sidebar-item" onClick={() => alert("Cadastro de cursos e disciplinas simulado.")}><span className="sidebar-icon">▱</span>CADASTRAR</button>
        </nav>

        <div className="sidebar-footer">
          <button onClick={() => setLogged(false)}>Sair</button>
        </div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <div className="topbar-left">
            <button className="mobile-menu" onClick={() => setMobileOpen(true)}>☰</button>
            <h2>SCPE</h2>
          </div>
          <button className="profile-button" title="Perfil">●</button>
        </header>

        <main className="dashboard-content">
          <div className="page-heading">
            <div>
              <h1>{active === "andamento" ? "Editais em Andamento" : active === "concluido" ? "Editais Concluídos" : "Editais Arquivados"}</h1>
              <p>{active === "andamento" ? "Acompanhe o andamento e os prazos dos editais ativos" : active === "concluido" ? "Histórico de processos finalizados" : "Processos removidos do fluxo ativo"}</p>
            </div>
            <div className="demo-chip">Ambiente demonstrativo</div>
          </div>

          <section className="summary-grid">
            <div className="summary-card"><span>Em andamento</span><strong>{editais.filter((e) => e.status === "andamento").length}</strong></div>
            <div className="summary-card"><span>Concluídos</span><strong>{editais.filter((e) => e.status === "concluido").length}</strong></div>
            <div className="summary-card"><span>Arquivados</span><strong>{editais.filter((e) => e.status === "arquivado").length}</strong></div>
          </section>

          <section className="editais-list">
            {filtered.map((edital) => (
              <article className="edital-row" key={edital.id}>
                <button className="edital-summary" onClick={() => setExpanded(expanded === edital.id ? null : edital.id)}>
                  <div className="edital-number-block">
                    <span>Edital</span>
                    <strong>{edital.numero}</strong>
                  </div>
                  <div className="edital-main-info">
                    <h3>{edital.disciplina}</h3>
                    <p>{edital.curso}</p>
                  </div>
                  <div className="edital-data"><span>Publicação</span><strong>{edital.data}</strong></div>
                  <div className="edital-data"><span>Etapa atual</span><strong>{edital.etapa}</strong></div>
                  <div className={`status-pill ${edital.status}`}>{edital.status}</div>
                  <div className="chevron">{expanded === edital.id ? "⌃" : "⌄"}</div>
                </button>

                {expanded === edital.id && (
                  <div className="edital-details">
                    <div className="detail-grid">
                      <div><span>Curso</span><strong>{edital.curso}</strong></div>
                      <div><span>Caráter</span><strong>{edital.carater}</strong></div>
                      <div><span>Data limite</span><strong>{edital.prazo}</strong></div>
                    </div>

                    <div className="workflow-label"><span>Progresso do fluxo</span><strong>{edital.progresso}%</strong></div>
                    <div className="workflow-progress"><span style={{ width: `${edital.progresso}%` }} /></div>

                    {edital.status === "andamento" && (
                      <div className="detail-actions">
                        <button className="outline-button" onClick={() => arquivar(edital.id)}>Arquivar edital</button>
                        <button className="primary" onClick={() => avancar(edital.id)}>Avançar etapa</button>
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))}

            {filtered.length === 0 && <div className="empty">Nenhum edital nesta categoria.</div>}
          </section>
        </main>
      </div>
    </div>
  );
}
