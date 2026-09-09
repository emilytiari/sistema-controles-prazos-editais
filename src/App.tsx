import { useMemo, useState } from "react";

type Status = "andamento" | "concluido" | "arquivado";
type View = "lista" | "novo" | "etapas";

type EtapaConfig = {
  id: number;
  nome: string;
  prazoDias: number;
  setor: string;
};

type Edital = {
  id: number;
  numero: string;
  disciplina: string;
  curso: string;
  data: string;
  carater: string;
  status: Status;
  etapaIndex: number;
  progresso: number;
};

const initialEtapas: EtapaConfig[] = [
  { id: 1, nome: "Publicação do edital", prazoDias: 2, setor: "Administração" },
  { id: 2, nome: "Período de inscrições", prazoDias: 10, setor: "Administração" },
  { id: 3, nome: "Análise documental", prazoDias: 5, setor: "Coordenação" },
  { id: 4, nome: "Prova didática", prazoDias: 7, setor: "Coordenação" },
  { id: 5, nome: "Classificação", prazoDias: 3, setor: "Administração" },
  { id: 6, nome: "Homologação", prazoDias: 3, setor: "Administração" },
];

const initialEditais: Edital[] = [
  { id: 1, numero: "014/2026", disciplina: "Banco de Dados", curso: "Gestão da Tecnologia da Informação", data: "2026-08-18", carater: "Determinado", status: "andamento", etapaIndex: 2, progresso: 50 },
  { id: 2, numero: "018/2026", disciplina: "Programação Web", curso: "Desenvolvimento de Software Multiplataforma", data: "2026-08-29", carater: "Indeterminado", status: "andamento", etapaIndex: 3, progresso: 67 },
  { id: 3, numero: "009/2026", disciplina: "Engenharia de Software", curso: "Gestão da Tecnologia da Informação", data: "2026-05-12", carater: "Determinado", status: "concluido", etapaIndex: 5, progresso: 100 },
  { id: 4, numero: "006/2026", disciplina: "Laboratório de Desenvolvimento", curso: "Desenvolvimento de Software Multiplataforma", data: "2026-04-03", carater: "Determinado", status: "arquivado", etapaIndex: 1, progresso: 20 },
];

const menuItems = [
  { id: "andamento", label: "EDITAIS EM ANDAMENTO", icon: "▣" },
  { id: "concluido", label: "EDITAIS CONCLUÍDOS", icon: "✓" },
  { id: "arquivado", label: "EDITAIS ARQUIVADOS", icon: "▤" },
];

const cursos = ["Gestão da Tecnologia da Informação", "Desenvolvimento de Software Multiplataforma"];
const disciplinas = ["Banco de Dados", "Engenharia de Software", "Programação Web", "Laboratório de Desenvolvimento", "Gestão de Projetos"];
const setores = ["Administração", "Coordenação", "Secretaria", "RH"];

function formatDate(value: string) {
  if (!value) return "—";
  const [y, m, d] = value.split("-");
  return `${d}/${m}/${y}`;
}

export default function App() {
  const [logged, setLogged] = useState(false);
  const [view, setView] = useState<View>("lista");
  const [active, setActive] = useState<Status>("andamento");
  const [editais, setEditais] = useState<Edital[]>(initialEditais);
  const [etapas, setEtapas] = useState<EtapaConfig[]>(initialEtapas);
  const [email, setEmail] = useState("demo@scpe.local");
  const [password, setPassword] = useState("demo123");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [novoEdital, setNovoEdital] = useState({ numero: "", disciplina: "", curso: "", data: "", carater: "Determinado" });
  const [novaEtapa, setNovaEtapa] = useState({ nome: "", prazoDias: "", setor: "Administração" });

  const filtered = useMemo(() => editais.filter((e) => e.status === active), [editais, active]);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return;
    setLogged(true);
  }

  function resetDemo() {
    setEditais(initialEditais);
    setEtapas(initialEtapas);
    setView("lista");
    setActive("andamento");
    setExpanded(null);
    setNovoEdital({ numero: "", disciplina: "", curso: "", data: "", carater: "Determinado" });
    setNovaEtapa({ nome: "", prazoDias: "", setor: "Administração" });
  }

  function logout() {
    resetDemo();
    setLogged(false);
  }

  function avancar(id: number) {
    setEditais((current) => current.map((e) => {
      if (e.id !== id || e.status !== "andamento") return e;
      const nextIndex = e.etapaIndex + 1;
      if (nextIndex >= etapas.length) return { ...e, etapaIndex: etapas.length - 1, progresso: 100, status: "concluido" };
      return { ...e, etapaIndex: nextIndex, progresso: Math.round(((nextIndex + 1) / etapas.length) * 100) };
    }));
  }

  function arquivar(id: number) {
    setEditais((current) => current.map((e) => e.id === id ? { ...e, status: "arquivado" } : e));
  }

  function criarEdital(e: React.FormEvent) {
    e.preventDefault();
    if (!novoEdital.numero || !novoEdital.disciplina || !novoEdital.curso || !novoEdital.data) return;
    const criado: Edital = {
      id: Date.now(),
      ...novoEdital,
      status: "andamento",
      etapaIndex: 0,
      progresso: etapas.length ? Math.round(100 / etapas.length) : 0,
    };
    setEditais((current) => [criado, ...current]);
    setNovoEdital({ numero: "", disciplina: "", curso: "", data: "", carater: "Determinado" });
    setActive("andamento");
    setView("lista");
  }

  function adicionarEtapa(e: React.FormEvent) {
    e.preventDefault();
    if (!novaEtapa.nome || !novaEtapa.prazoDias) return;
    setEtapas((current) => [...current, { id: Date.now(), nome: novaEtapa.nome, prazoDias: Number(novaEtapa.prazoDias), setor: novaEtapa.setor }]);
    setNovaEtapa({ nome: "", prazoDias: "", setor: "Administração" });
  }

  function removerEtapa(id: number) {
    setEtapas((current) => current.filter((e) => e.id !== id));
  }

  function moverEtapa(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= etapas.length) return;
    const copy = [...etapas];
    [copy[index], copy[target]] = [copy[target], copy[index]];
    setEtapas(copy);
  }

  if (!logged) {
    return (
      <div className="login-page">
        <div className="login-card original-login">
          <div className="login-logo">SCPE</div>
          <h1>Acesso ao Sistema</h1>
          <p className="login-subtitle">Sistema de Controle de Prazos de Editais</p>
          <div className="demo-banner">Versão demonstrativa para portfólio — nenhum dado real é utilizado.</div>
          <form onSubmit={login}>
            <label>Usuário</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            <label>Senha</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <button className="primary login-button" type="submit">Entrar</button>
          </form>
          <div className="credentials-box"><strong>Acesso de demonstração</strong><span>demo@scpe.local</span><span>demo123</span></div>
        </div>
      </div>
    );
  }

  const pageTitle = view === "novo" ? "Cadastrar Edital" : view === "etapas" ? "Configurar Etapas" : active === "andamento" ? "Editais em Andamento" : active === "concluido" ? "Editais Concluídos" : "Editais Arquivados";

  return (
    <div className="scpe-shell">
      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}
      <aside className={mobileOpen ? "sidebar sidebar-open" : "sidebar"}>
        <div className="sidebar-header"><h1>SCPE</h1><button className="mobile-close" onClick={() => setMobileOpen(false)}>×</button></div>
        <nav className="sidebar-nav">
          <div className="section-title">EDITAIS</div>
          {menuItems.map((item) => <button key={item.id} className={view === "lista" && active === item.id ? "sidebar-item active" : "sidebar-item"} onClick={() => { setView("lista"); setActive(item.id as Status); setMobileOpen(false); }}><span className="sidebar-icon">{item.icon}</span>{item.label}</button>)}
          <button className={view === "novo" ? "sidebar-item active" : "sidebar-item"} onClick={() => { setView("novo"); setMobileOpen(false); }}><span className="sidebar-icon">＋</span>CADASTRAR EDITAL</button>
          <button className={view === "etapas" ? "sidebar-item active" : "sidebar-item"} onClick={() => { setView("etapas"); setMobileOpen(false); }}><span className="sidebar-icon">⚙</span>CONFIGURAR ETAPAS</button>
          <div className="section-title">USUÁRIOS</div>
          <button className="sidebar-item" onClick={() => alert("Gestão de usuários pode ser adicionada na próxima versão da demo.")}><span className="sidebar-icon">◉</span>LISTAR USUÁRIOS</button>
          <div className="section-title">CURSO E DISCIPLINA</div>
          <button className="sidebar-item" onClick={() => alert("Cadastro de cursos e disciplinas pode ser adicionado na próxima versão.")}><span className="sidebar-icon">▱</span>CADASTRAR</button>
        </nav>
        <div className="sidebar-footer"><button onClick={logout}>Sair e apagar dados da sessão</button></div>
      </aside>

      <div className="main-column">
        <header className="topbar"><div className="topbar-left"><button className="mobile-menu" onClick={() => setMobileOpen(true)}>☰</button><h2>SCPE</h2></div><button className="profile-button" title="Perfil">●</button></header>
        <main className="dashboard-content">
          <div className="page-heading"><div><h1>{pageTitle}</h1><p>Ambiente demonstrativo com dados mantidos somente enquanto esta página estiver aberta.</p></div><div className="demo-chip">Sessão temporária</div></div>

          {view === "novo" && (
            <section className="form-panel">
              <form className="demo-form" onSubmit={criarEdital}>
                <div className="form-grid">
                  <label><span>Número do edital</span><input required placeholder="001/2026" value={novoEdital.numero} onChange={(e) => setNovoEdital({ ...novoEdital, numero: e.target.value })} /></label>
                  <label><span>Data de publicação</span><input required type="date" value={novoEdital.data} onChange={(e) => setNovoEdital({ ...novoEdital, data: e.target.value })} /></label>
                  <label><span>Curso</span><select required value={novoEdital.curso} onChange={(e) => setNovoEdital({ ...novoEdital, curso: e.target.value })}><option value="">Selecione</option>{cursos.map((c) => <option key={c}>{c}</option>)}</select></label>
                  <label><span>Disciplina</span><select required value={novoEdital.disciplina} onChange={(e) => setNovoEdital({ ...novoEdital, disciplina: e.target.value })}><option value="">Selecione</option>{disciplinas.map((d) => <option key={d}>{d}</option>)}</select></label>
                  <label><span>Caráter</span><select value={novoEdital.carater} onChange={(e) => setNovoEdital({ ...novoEdital, carater: e.target.value })}><option>Determinado</option><option>Indeterminado</option></select></label>
                </div>
                <div className="form-note">O novo edital iniciará automaticamente na primeira etapa configurada abaixo.</div>
                <div className="form-actions"><button type="button" className="outline-button" onClick={() => setView("lista")}>Cancelar</button><button className="primary" type="submit">Cadastrar edital</button></div>
              </form>
            </section>
          )}

          {view === "etapas" && (
            <div className="workflow-layout">
              <section className="form-panel">
                <h3>Adicionar etapa</h3>
                <form className="demo-form" onSubmit={adicionarEtapa}>
                  <label><span>Nome da etapa</span><input required value={novaEtapa.nome} onChange={(e) => setNovaEtapa({ ...novaEtapa, nome: e.target.value })} placeholder="Ex.: Entrevista" /></label>
                  <div className="form-grid two">
                    <label><span>Prazo em dias</span><input required min="1" type="number" value={novaEtapa.prazoDias} onChange={(e) => setNovaEtapa({ ...novaEtapa, prazoDias: e.target.value })} /></label>
                    <label><span>Setor responsável</span><select value={novaEtapa.setor} onChange={(e) => setNovaEtapa({ ...novaEtapa, setor: e.target.value })}>{setores.map((s) => <option key={s}>{s}</option>)}</select></label>
                  </div>
                  <div className="form-actions"><button className="primary" type="submit">Adicionar etapa</button></div>
                </form>
              </section>
              <section className="form-panel">
                <div className="panel-title-row"><div><h3>Fluxo configurado</h3><p>Altere a ordem para simular o fluxo real do processo.</p></div><span>{etapas.length} etapas</span></div>
                <div className="stage-list">
                  {etapas.map((etapa, index) => <div className="stage-item" key={etapa.id}><div className="stage-number">{index + 1}</div><div className="stage-info"><strong>{etapa.nome}</strong><span>{etapa.setor} · {etapa.prazoDias} dia(s)</span></div><div className="stage-actions"><button disabled={index === 0} onClick={() => moverEtapa(index, -1)}>↑</button><button disabled={index === etapas.length - 1} onClick={() => moverEtapa(index, 1)}>↓</button><button className="danger-link" onClick={() => removerEtapa(etapa.id)}>Excluir</button></div></div>)}
                </div>
              </section>
            </div>
          )}

          {view === "lista" && <>
            <section className="summary-grid"><div className="summary-card"><span>Em andamento</span><strong>{editais.filter((e) => e.status === "andamento").length}</strong></div><div className="summary-card"><span>Concluídos</span><strong>{editais.filter((e) => e.status === "concluido").length}</strong></div><div className="summary-card"><span>Arquivados</span><strong>{editais.filter((e) => e.status === "arquivado").length}</strong></div></section>
            <section className="editais-list">
              {filtered.map((edital) => {
                const etapaAtual = edital.status === "concluido" ? "Workflow concluído" : edital.status === "arquivado" ? "Arquivado" : etapas[edital.etapaIndex]?.nome || "Sem etapas configuradas";
                return <article className="edital-row" key={edital.id}>
                  <button className="edital-summary" onClick={() => setExpanded(expanded === edital.id ? null : edital.id)}><div className="edital-number-block"><span>Edital</span><strong>{edital.numero}</strong></div><div className="edital-main-info"><h3>{edital.disciplina}</h3><p>{edital.curso}</p></div><div className="edital-data"><span>Publicação</span><strong>{formatDate(edital.data)}</strong></div><div className="edital-data"><span>Etapa atual</span><strong>{etapaAtual}</strong></div><div className={`status-pill ${edital.status}`}>{edital.status}</div><div className="chevron">{expanded === edital.id ? "⌃" : "⌄"}</div></button>
                  {expanded === edital.id && <div className="edital-details"><div className="detail-grid"><div><span>Curso</span><strong>{edital.curso}</strong></div><div><span>Caráter</span><strong>{edital.carater}</strong></div><div><span>Etapas configuradas</span><strong>{etapas.length}</strong></div></div><div className="workflow-label"><span>Progresso do fluxo</span><strong>{edital.progresso}%</strong></div><div className="workflow-progress"><span style={{ width: `${edital.progresso}%` }} /></div>{edital.status === "andamento" && <div className="detail-actions"><button className="outline-button" onClick={() => arquivar(edital.id)}>Arquivar edital</button><button className="primary" onClick={() => avancar(edital.id)}>Avançar etapa</button></div>}</div>}
                </article>;
              })}
              {filtered.length === 0 && <div className="empty">Nenhum edital nesta categoria.</div>}
            </section>
          </>}
        </main>
      </div>
    </div>
  );
}
