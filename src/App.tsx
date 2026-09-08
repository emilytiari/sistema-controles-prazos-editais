import { useMemo, useState } from "react";

type Status = "andamento" | "concluido" | "arquivado";

type Edital = {
  id: number;
  numero: string;
  disciplina: string;
  curso: string;
  data: string;
  status: Status;
  etapa: string;
  progresso: number;
};

const initialEditais: Edital[] = [
  { id: 1, numero: "014/2026", disciplina: "Banco de Dados", curso: "Gestão da Tecnologia da Informação", data: "18/08/2026", status: "andamento", etapa: "Análise documental", progresso: 38 },
  { id: 2, numero: "018/2026", disciplina: "Programação Web", curso: "Desenvolvimento de Software Multiplataforma", data: "29/08/2026", status: "andamento", etapa: "Prova didática", progresso: 63 },
  { id: 3, numero: "009/2026", disciplina: "Engenharia de Software", curso: "Gestão da Tecnologia da Informação", data: "12/05/2026", status: "concluido", etapa: "Encerrado", progresso: 100 },
  { id: 4, numero: "006/2026", disciplina: "Laboratório de Desenvolvimento", curso: "Desenvolvimento de Software Multiplataforma", data: "03/04/2026", status: "arquivado", etapa: "Arquivado", progresso: 20 },
];

const tabs: { id: Status; label: string }[] = [
  { id: "andamento", label: "Em andamento" },
  { id: "concluido", label: "Concluídos" },
  { id: "arquivado", label: "Arquivados" },
];

export default function App() {
  const [logged, setLogged] = useState(false);
  const [active, setActive] = useState<Status>("andamento");
  const [editais, setEditais] = useState<Edital[]>(initialEditais);
  const [email, setEmail] = useState("demo@scpe.local");
  const [password, setPassword] = useState("demo123");

  const filtered = useMemo(() => editais.filter((e) => e.status === active), [editais, active]);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return;
    setLogged(true);
  }

  function avancar(id: number) {
    setEditais((current) => current.map((e) => e.id === id ? {
      ...e,
      progresso: Math.min(100, e.progresso + 12),
      etapa: e.progresso >= 88 ? "Encerrado" : "Próxima etapa",
      status: e.progresso >= 88 ? "concluido" : e.status,
    } : e));
  }

  function arquivar(id: number) {
    setEditais((current) => current.map((e) => e.id === id ? { ...e, status: "arquivado", etapa: "Arquivado" } : e));
  }

  if (!logged) {
    return (
      <div className="login-page">
        <div className="login-card">
          <div className="brand-mark">SCPE</div>
          <h1>Sistema de Controle de Prazos de Editais</h1>
          <p className="muted">Versão demonstrativa para portfólio. Nenhum dado real é utilizado.</p>
          <form onSubmit={login}>
            <label>E-mail</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            <label>Senha</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <button className="primary" type="submit">Entrar na demonstração</button>
          </form>
          <div className="demo-note">Credenciais de demonstração já preenchidas.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">SCPE</div>
        <div className="sidebar-section">EDITAIS</div>
        {tabs.map((tab) => (
          <button key={tab.id} className={active === tab.id ? "nav active" : "nav"} onClick={() => setActive(tab.id)}>
            {tab.label}
          </button>
        ))}
        <div className="sidebar-section">GESTÃO</div>
        <button className="nav">Cadastrar edital</button>
        <button className="nav">Configurar etapas</button>
        <button className="nav">Usuários</button>
        <button className="nav">Cursos e disciplinas</button>
        <div className="spacer" />
        <button className="nav" onClick={() => setLogged(false)}>Sair</button>
      </aside>

      <main className="content">
        <header className="topbar">
          <div>
            <h2>Painel de editais</h2>
            <p className="muted">Acompanhamento demonstrativo de prazos e etapas</p>
          </div>
          <div className="user-chip">Felipe Demo · Administração</div>
        </header>

        <section className="stats-grid">
          <div className="stat-card"><span>Em andamento</span><strong>{editais.filter((e) => e.status === "andamento").length}</strong></div>
          <div className="stat-card"><span>Concluídos</span><strong>{editais.filter((e) => e.status === "concluido").length}</strong></div>
          <div className="stat-card"><span>Arquivados</span><strong>{editais.filter((e) => e.status === "arquivado").length}</strong></div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <div>
              <h3>{tabs.find((t) => t.id === active)?.label}</h3>
              <p className="muted">Dados fictícios usados apenas para demonstração.</p>
            </div>
            <button className="primary" onClick={() => alert("Cadastro simulado na versão de portfólio.")}>Novo edital</button>
          </div>

          <div className="cards">
            {filtered.map((edital) => (
              <article className="edital-card" key={edital.id}>
                <div className="edital-head">
                  <div>
                    <span className="eyebrow">Edital {edital.numero}</span>
                    <h4>{edital.disciplina}</h4>
                    <p className="muted">{edital.curso}</p>
                  </div>
                  <span className={`badge ${edital.status}`}>{edital.status}</span>
                </div>
                <div className="meta-grid">
                  <div><span>Publicação</span><strong>{edital.data}</strong></div>
                  <div><span>Etapa atual</span><strong>{edital.etapa}</strong></div>
                </div>
                <div className="progress"><span style={{ width: `${edital.progresso}%` }} /></div>
                <div className="progress-label">{edital.progresso}% do fluxo demonstrativo</div>
                {edital.status === "andamento" && (
                  <div className="actions">
                    <button className="secondary" onClick={() => arquivar(edital.id)}>Arquivar</button>
                    <button className="primary" onClick={() => avancar(edital.id)}>Avançar etapa</button>
                  </div>
                )}
              </article>
            ))}
            {filtered.length === 0 && <div className="empty">Nenhum edital nesta categoria.</div>}
          </div>
        </section>
      </main>
    </div>
  );
}
