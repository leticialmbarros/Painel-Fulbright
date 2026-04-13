import { motion } from "motion/react";
import { 
  Banknote, 
  TrendingUp, 
  Send, 
  Scale, 
  BarChart3, 
  GraduationCap, 
  AlertTriangle, 
  Calendar, 
  List, 
  Briefcase, 
  Info, 
  CheckCircle2, 
  Clock 
} from "lucide-react";

const kpis = [
  {
    label: "Total recebido (previsto)",
    value: "R$ 320.400",
    sub: "1 parcela · NF/Fatura CV11194 · ago/2025",
    color: "before:bg-accent-green",
    icon: Banknote
  },
  {
    label: "Rendimentos aplicação financeira",
    value: "R$ 7.182,39",
    sub: "Ago/2025 → Mar/2026 · 8 meses acumulados",
    color: "before:bg-accent-gold",
    icon: TrendingUp
  },
  {
    label: "Total despesas realizadas",
    value: "R$ 95.770,83",
    sub: "Saídas previstas + provisão Mar/26 inclusa",
    color: "before:bg-accent-red",
    icon: Send
  },
  {
    label: "Saldo disponível (estimado)",
    value: "R$ 231.811,56",
    sub: "320.400 + 7.182,39 − 95.770,83",
    color: "before:bg-accent-blue",
    icon: Scale
  }
];

const rubrics = [
  { name: "Salários (Analista Projetos)", spent: "R$ 15.576", total: "R$ 82.699", pct: "18.8%", color: "bg-accent-blue" },
  { name: "Encargos Sociais", spent: "R$ 11.530,92", total: "R$ 24.429,96", pct: "47.2%", color: "bg-accent-blue" },
  { name: "Bolsa Auxílio (Pós-Doutorado)", spent: "R$ 48.000", total: "R$ 144.000", pct: "33.3%", color: "bg-accent-green" },
  { name: "Diárias (hospedagem palestrantes)", spent: "R$ 2.263,97", total: "R$ 6.400", pct: "35.4%", color: "bg-accent-gold" },
  { name: "Passagens/Translados", spent: "R$ 1.043,12", total: "R$ 10.000", pct: "10.4%", color: "bg-accent-gold" },
  { name: "Outros Serviços Terceiros PJ", spent: "R$ 17.356,82", total: "R$ 76.770,04", pct: "22.6%", color: "bg-accent-gold" },
  { name: "Marketing / Divulgação", spent: "R$ 0", total: "R$ 25.000", pct: "0%", color: "bg-accent-red" },
  { name: "Despesas c/ Locomoção", spent: "R$ 0", total: "R$ 800", pct: "0%", color: "bg-accent-red" },
];

const entries = [
  { date: "14/08/2025", type: "ENTRADA PREV.", typeColor: "bg-green-100 text-accent-green", rubric: "Geral", desc: "NF/Fatura CV11194 — Recebimento parcela única Fulbright (ago/2025)", value: "320.400,00", isPos: true },
  { date: "31/08/2025", type: "REND. APLIC.", typeColor: "bg-blue-100 text-accent-blue", rubric: "Rendimentos", desc: "Aplicação financeira ago/2025", value: "27,94", isPos: true },
  { date: "30/09/2025", type: "REND. APLIC.", typeColor: "bg-blue-100 text-accent-blue", rubric: "Rendimentos", desc: "Aplicação financeira set/2025", value: "296,41", isPos: true },
  { date: "31/10/2025", type: "REND. APLIC.", typeColor: "bg-blue-100 text-accent-blue", rubric: "Rendimentos", desc: "Aplicação financeira out/2025", value: "787,57", isPos: true },
  { date: "06/11/2025", type: "SAÍDA PREV.", typeColor: "bg-red-100 text-accent-red", rubric: "Diárias", desc: "Adiantamento — Camila Palhares Barbosa (palestrante colóquio)", value: "-400,00", isPos: false },
  { date: "06/11/2025", type: "SAÍDA PREV.", typeColor: "bg-red-100 text-accent-red", rubric: "Diárias", desc: "Adiantamento — Daniela Rosendo (palestrante colóquio)", value: "-1.600,00", isPos: false },
  { date: "17/11/2025", type: "DEVOLUÇÃO", typeColor: "bg-green-100 text-accent-green", rubric: "Diárias", desc: "Devolução parcial — Camila Palhares (PC 5131432)", value: "+400,00", isPos: true },
  { date: "26/11/2025", type: "DEVOLUÇÃO", typeColor: "bg-green-100 text-accent-green", rubric: "Diárias", desc: "Devolução parcial — Daniela Rosendo (PC 5137764)", value: "+9,43", isPos: true },
  { date: "30/11/2025", type: "REND. APLIC.", typeColor: "bg-blue-100 text-accent-blue", rubric: "Rendimentos", desc: "Aplicação financeira nov/2025", value: "1.150,77", isPos: true },
  { date: "09/12/2025", type: "SAÍDA PREV.", typeColor: "bg-red-100 text-accent-red", rubric: "Ressarcimento", desc: "Memo GP2716 — Salário nov/2025 (Letícia Lima Barros)", value: "-6.432,15", isPos: false, highlight: true },
  { date: "09/12/2025", type: "SAÍDA PREV.", typeColor: "bg-red-100 text-accent-red", rubric: "Serv. 3ºs PJ", desc: "Sonora Ltda — Tradução simultânea colóquio (NF 153 + impostos)", value: "-4.500,00", isPos: false, highlight: true },
  { date: "11/12/2025", type: "SAÍDA PREV.", typeColor: "bg-red-100 text-accent-red", rubric: "Serv. 3ºs PJ", desc: "Bar Intervalo 50 — Coffee-break colóquio (350 un.) NF 539", value: "-11.400,00", isPos: false, highlight: true },
  { date: "08/04/2026", type: "PROVISÃO", typeColor: "bg-amber-100 text-accent-gold", rubric: "Salários", desc: "PROVISÃO — Letícia Lima Barros — Salário + encargos mar/2026", value: "-6.891,59", isPos: false, isProv: true },
];

const balanceRubrics = [
  { name: "Salários — Analista de Projetos", budgeted: "82.699,08", realized: "15.576,00", balance: "67.123,08", pct: "18,8%", status: "Baixa exec.", statusColor: "bg-amber-100 text-accent-gold" },
  { name: "Encargos Sociais", budgeted: "24.429,96", realized: "11.530,92", balance: "12.899,04", pct: "47,2%", status: "OK", statusColor: "bg-blue-100 text-accent-blue" },
  { name: "Bolsa Auxílio — Pós-Doutorado", budgeted: "144.000,00", realized: "48.000,00", balance: "96.000,00", pct: "33,3%", status: "Em dia", statusColor: "bg-green-100 text-accent-green" },
  { name: "Diárias — Palestrantes", budgeted: "6.400,00", realized: "2.263,97", balance: "4.136,03", pct: "35,4%", status: "Disponível", statusColor: "bg-blue-100 text-accent-blue" },
  { name: "Passagens / Translados", budgeted: "10.000,00", realized: "1.043,12", balance: "8.956,88", pct: "10,4%", status: "Muito saldo", statusColor: "bg-red-100 text-accent-red" },
  { name: "Marketing / Divulgação", budgeted: "25.000,00", realized: "0,00", balance: "25.000,00", pct: "0%", status: "Sem exec.", statusColor: "bg-red-100 text-accent-red" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-sans selection:bg-accent-gold/30">
      
      {/* HEADER */}
      <header className="bg-surface border-b border-border px-8 py-5 flex items-start gap-5 sticky top-0 z-50 shadow-sm">
        <div className="bg-accent-gold text-black font-mono text-[11px] font-bold px-2.5 py-1 rounded mt-1 whitespace-nowrap">
          PROJ 2277
        </div>
        <div className="flex-grow">
          <h1 className="font-serif text-2xl text-text tracking-tight">Dashboard Financeiro — Fulbright Ano 1</h1>
          <p className="text-xs text-text-muted mt-1 font-medium">
            Coordenador: Eduardo Eizirik · Escola de Ciências da Saúde e da Vida · PUCRS · Financiador: Comissão Fulbright
          </p>
        </div>
        <div className="text-right font-mono text-[11px] text-text-muted">
          <div>Vigência</div>
          <strong className="text-accent-blue text-xs">10/06/2025 – 09/06/2026</strong>
          <div className="mt-1.5">Posição em</div>
          <strong className="text-accent-blue text-xs">09/04/2026</strong>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-7 space-y-6">
        
        {/* STATUS STRIP */}
        <div className="flex flex-wrap gap-2">
          {[
            { text: "10 meses decorridos de 12", color: "border-accent-gold text-accent-gold bg-accent-gold/10" },
            { text: "Saldo positivo disponível", color: "border-accent-green text-accent-green bg-accent-green/10" },
            { text: "1 provisão pendente (Mar/2026)", color: "border-accent-gold text-accent-gold bg-accent-gold/10" },
            { text: "Colóquio realizado (Nov/2025)", color: "border-accent-blue text-accent-blue bg-accent-blue/10" },
            { text: "Rubricas com saldo baixo – atenção", color: "border-accent-red text-accent-red bg-accent-red/10" },
          ].map((pill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border ${pill.color}`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-current" />
              {pill.text}
            </motion.div>
          ))}
        </div>

        {/* KPI GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className={`bg-surface border border-border rounded-xl p-5 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] ${kpi.color} hover:border-text-muted transition-colors group`}
            >
              <div className="absolute top-4 right-4 text-text-muted opacity-30 group-hover:opacity-50 transition-opacity">
                <kpi.icon size={20} />
              </div>
              <div className="text-[11px] text-text-muted uppercase tracking-widest font-semibold mb-2">{kpi.label}</div>
              <div className="font-mono text-2xl font-bold text-text tracking-tighter">{kpi.value}</div>
              <div className="text-[11px] text-text-muted mt-1.5 leading-tight">{kpi.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* SECTION LABEL */}
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-text-dim font-bold mt-8 mb-4 after:flex-1 after:h-[1px] after:bg-border">
          Execução orçamentária por rubrica
        </div>

        {/* GRID 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* RUBRICA BARS */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-surface border border-border rounded-xl overflow-hidden"
          >
            <div className="px-5 py-3.5 border-b border-border flex justify-between items-center bg-surface2/50">
              <div className="text-sm font-bold flex items-center gap-2">
                <BarChart3 size={14} className="text-text-muted" />
                Execução vs. Orçamento por Rubrica
              </div>
              <div className="font-mono text-[10px] text-text-dim bg-surface2 px-2 py-0.5 rounded">Plano de Trabalho</div>
            </div>
            <div className="p-5 space-y-4">
              {rubrics.map((rubric, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-text-muted font-medium">{rubric.name}</span>
                    <div className="font-mono text-[11px] flex gap-2.5">
                      <span className="text-text font-bold">{rubric.spent}</span>
                      <span className="text-text-dim">/ {rubric.total}</span>
                      <span className="font-bold" style={{ color: `var(--color-${rubric.color.split('-')[1]}-${rubric.color.split('-')[2]})` }}>{rubric.pct}</span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-surface2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: rubric.pct }}
                      transition={{ duration: 1, delay: 0.7 + (i * 0.1) }}
                      className={`h-full rounded-full ${rubric.color}`}
                    />
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50">
                {[
                  { label: "Recursos Humanos", color: "bg-accent-blue" },
                  { label: "Bolsas", color: "bg-accent-green" },
                  { label: "Desp. Correntes", color: "bg-accent-gold" },
                  { label: "Sem execução", color: "bg-accent-red" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px] text-text-muted">
                    <div className={`w-2 h-2 rounded-sm ${item.color}`} />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* COLOQUIO + ALERTS */}
          <div className="space-y-4">
            
            {/* COLOQUIO */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-surface border border-border rounded-xl overflow-hidden"
            >
              <div className="px-5 py-3.5 border-b border-border flex justify-between items-center bg-surface2/50">
                <div className="text-sm font-bold flex items-center gap-2">
                  <GraduationCap size={14} className="text-text-muted" />
                  Colóquio PUCRS – Nov/2025
                </div>
                <div className="font-mono text-[10px] text-text-dim bg-surface2 px-2 py-0.5 rounded">Environmental Ethics & Sustainability</div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { label: "Coffee-break", val: "R$ 11.400", sub: "350 un · NF 539", color: "border-accent-purple text-accent-purple" },
                    { label: "Tradução", val: "R$ 4.500", sub: "Sonora · NF 153", color: "border-accent-blue text-accent-blue" },
                    { label: "Refeições", val: "R$ 1.456,82", sub: "Eduardo · 11-14/11", color: "border-accent-gold text-accent-gold" },
                    { label: "Hospedagem", val: "R$ 2.263,97", sub: "Líquido após devol.", color: "border-accent-green text-accent-green" },
                    { label: "Passagem Aérea", val: "R$ 1.043,12", sub: "Daniela · Maringa", color: "border-accent-red text-accent-red" },
                    { label: "Total Evento", val: "R$ 20.663,91", sub: "Consolidado", color: "border-text-muted text-text" },
                  ].map((item, i) => (
                    <div key={i} className={`bg-surface2 rounded-lg p-3 border-l-[3px] ${item.color.split(' ')[0]}`}>
                      <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">{item.label}</div>
                      <div className={`font-mono text-sm font-bold ${item.color.split(' ')[1]}`}>{item.val}</div>
                      <div className="text-[9px] text-text-dim mt-1">{item.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ALERTS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-surface border border-border rounded-xl overflow-hidden"
            >
              <div className="px-5 py-3.5 border-b border-border flex justify-between items-center bg-surface2/50">
                <div className="text-sm font-bold flex items-center gap-2">
                  <AlertTriangle size={14} className="text-text-muted" />
                  Pontos de Atenção
                </div>
                <div className="font-mono text-[10px] text-text-dim bg-surface2 px-2 py-0.5 rounded">Diagnóstico</div>
              </div>
              <div className="p-4 space-y-2.5">
                {[
                  { type: "warn", icon: AlertTriangle, text: "<strong>Provisão Mar/2026 não paga:</strong> Salário R$ 3.960 + Encargos R$ 2.931,59 lançados como provisão. Aguardando efetivação do ressarcimento à PUCRS (Memo GP3130)." },
                  { type: "warn", icon: Banknote, text: "<strong>Passagem Timothy Finan:</strong> Hospedagem registrada em fev/2026 (R$ 673,40) mas sem passagem correspondente no razão. Verificar se custeio foi externo ou pendente." },
                  { type: "info", icon: Info, text: "<strong>Marketing/Divulgação (R$ 25.000):</strong> Rubrica com <strong>0% de execução</strong> e vigência até 09/06/2026. Planejar uso nos 2 meses restantes." },
                  { type: "ok", icon: CheckCircle2, text: "<strong>Rendimentos R$ 7.182,39:</strong> Gerados pela aplicação financeira do saldo. Devem constar na prestação de contas como entradas não previstas." },
                ].map((alert, i) => (
                  <div key={i} className={`flex gap-3 p-3 rounded-lg border text-xs ${
                    alert.type === 'warn' ? 'bg-accent-gold/5 border-accent-gold/20 text-accent-gold' :
                    alert.type === 'info' ? 'bg-accent-blue/5 border-accent-blue/20 text-accent-blue' :
                    'bg-accent-green/5 border-accent-green/20 text-accent-green'
                  }`}>
                    <alert.icon size={16} className="shrink-0 mt-0.5" />
                    <div className="text-text-muted leading-relaxed" dangerouslySetInnerHTML={{ __html: alert.text }} />
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* TIMELINE */}
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-text-dim font-bold mt-8 mb-4 after:flex-1 after:h-[1px] after:bg-border">
          Progresso temporal do projeto
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-surface border border-border rounded-xl overflow-hidden"
        >
          <div className="px-5 py-3.5 border-b border-border flex justify-between items-center bg-surface2/50">
            <div className="text-sm font-bold flex items-center gap-2">
              <Calendar size={14} className="text-text-muted" />
              Cronograma de Execução — 12 meses
            </div>
            <div className="font-mono text-[10px] text-text-dim bg-surface2 px-2 py-0.5 rounded">Jun/2025 → Jun/2026</div>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <div className="text-[11px] text-text-muted font-medium mb-1">Prazo decorrido do projeto</div>
              <div className="h-7 bg-surface2 rounded-lg relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "83.3%" }}
                  transition={{ duration: 1.2, delay: 1 }}
                  className="h-full bg-gradient-to-r from-accent-blue to-accent-green flex items-center px-3 text-[11px] font-bold text-white font-mono"
                >
                  83,3% (10/12 meses)
                </motion.div>
              </div>
              <div className="flex justify-between text-[10px] text-text-dim font-mono">
                <span>10/06/2025 Início</span>
                <span className="text-accent-blue font-bold">● 09/04/2026 Hoje</span>
                <span>09/06/2026 Encerramento</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-[11px] text-text-muted font-medium mb-1">Execução financeira (despesas / orçamento total)</div>
              <div className="h-7 bg-surface2 rounded-lg relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "29.9%" }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                  className="h-full bg-gradient-to-r from-accent-red to-accent-gold flex items-center px-3 text-[11px] font-bold text-white font-mono"
                >
                  29,9% do orçamento executado
                </motion.div>
              </div>
              <div className="flex justify-between text-[10px] text-text-dim font-mono">
                <span>R$ 0</span>
                <span className="text-accent-red font-bold">R$ 95.770,83 realizado</span>
                <span>R$ 320.400 recebido</span>
              </div>
            </div>
            <div className="p-4 bg-accent-gold/10 border border-accent-gold/20 rounded-lg text-xs text-text-muted leading-relaxed">
              <strong className="text-accent-gold">Alerta de ritmo de execução:</strong> Com 83% do prazo decorrido e apenas 30% do orçamento executado, o projeto está com execução financeira bem abaixo do esperado. Rubricas como Marketing (R$ 25K), Passagens (R$ 8,9K saldo), Locomoção e Serviços de Terceiros têm saldo disponível para mobilização antes do encerramento.
            </div>
          </div>
        </motion.div>

        {/* DETAILED TABLE */}
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-text-dim font-bold mt-8 mb-4 after:flex-1 after:h-[1px] after:bg-border">
          Lançamentos contábeis — Razão AGT
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-surface border border-border rounded-xl overflow-hidden"
        >
          <div className="px-5 py-3.5 border-b border-border flex justify-between items-center bg-surface2/50">
            <div className="text-sm font-bold flex items-center gap-2">
              <List size={14} className="text-text-muted" />
              Extrato Completo de Lançamentos
            </div>
            <div className="font-mono text-[10px] text-text-dim bg-surface2 px-2 py-0.5 rounded">47 registros · Dados: 09/04/2026</div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-surface2/30">
                  <th className="px-5 py-3 font-bold text-[10px] text-text-dim uppercase tracking-wider border-b border-border">Data</th>
                  <th className="px-5 py-3 font-bold text-[10px] text-text-dim uppercase tracking-wider border-b border-border">Tipo</th>
                  <th className="px-5 py-3 font-bold text-[10px] text-text-dim uppercase tracking-wider border-b border-border">Rubrica</th>
                  <th className="px-5 py-3 font-bold text-[10px] text-text-dim uppercase tracking-wider border-b border-border">Beneficiário / Descrição</th>
                  <th className="px-5 py-3 font-bold text-[10px] text-text-dim uppercase tracking-wider border-b border-border text-right">Valor (R$)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {entries.map((entry, i) => (
                  <tr key={i} className={`hover:bg-surface2/20 transition-colors ${entry.highlight ? 'bg-purple-50/20' : ''} ${entry.isProv ? 'bg-amber-50/20' : ''}`}>
                    <td className="px-5 py-3 font-mono text-[11px] whitespace-nowrap">{entry.date}</td>
                    <td className="px-5 py-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${entry.typeColor}`}>
                        {entry.type}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-text-muted font-medium">{entry.rubric}</td>
                    <td className="px-5 py-3 text-text-muted leading-tight">{entry.desc}</td>
                    <td className={`px-5 py-3 font-mono text-[11px] text-right font-bold ${entry.isPos ? 'text-accent-green' : entry.isProv ? 'text-accent-gold' : 'text-accent-red'}`}>
                      {entry.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* BALANCE TABLE */}
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-text-dim font-bold mt-8 mb-4 after:flex-1 after:h-[1px] after:bg-border">
          Saldo disponível por rubrica
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-surface border border-border rounded-xl overflow-hidden"
        >
          <div className="px-5 py-3.5 border-b border-border flex justify-between items-center bg-surface2/50">
            <div className="text-sm font-bold flex items-center gap-2">
              <Briefcase size={14} className="text-text-muted" />
              Saldo Restante por Rubrica (Orçado − Realizado)
            </div>
            <div className="font-mono text-[10px] text-text-dim bg-surface2 px-2 py-0.5 rounded">Posição 09/04/2026</div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-surface2/30">
                  <th className="px-5 py-3 font-bold text-[10px] text-text-dim uppercase tracking-wider border-b border-border">Rubrica</th>
                  <th className="px-5 py-3 font-bold text-[10px] text-text-dim uppercase tracking-wider border-b border-border text-right">Orçado (R$)</th>
                  <th className="px-5 py-3 font-bold text-[10px] text-text-dim uppercase tracking-wider border-b border-border text-right">Realizado (R$)</th>
                  <th className="px-5 py-3 font-bold text-[10px] text-text-dim uppercase tracking-wider border-b border-border text-right">Saldo (R$)</th>
                  <th className="px-5 py-3 font-bold text-[10px] text-text-dim uppercase tracking-wider border-b border-border text-right">% Exec.</th>
                  <th className="px-5 py-3 font-bold text-[10px] text-text-dim uppercase tracking-wider border-b border-border">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 text-text-muted">
                {balanceRubrics.map((rubric, i) => (
                  <tr key={i} className="hover:bg-surface2/20 transition-colors">
                    <td className="px-5 py-4 font-semibold text-text">{rubric.name}</td>
                    <td className="px-5 py-4 font-mono text-[11px] text-right">{rubric.budgeted}</td>
                    <td className="px-5 py-4 font-mono text-[11px] text-right text-accent-red">{rubric.realized}</td>
                    <td className="px-5 py-4 font-mono text-[11px] text-right text-accent-green font-bold">{rubric.balance}</td>
                    <td className="px-5 py-4 font-mono text-[11px] text-right">{rubric.pct}</td>
                    <td className="px-5 py-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${rubric.statusColor}`}>
                        {rubric.status}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="bg-surface2/50 font-bold text-text border-t-2 border-border">
                  <td className="px-5 py-4 uppercase tracking-wider">Total Orçado</td>
                  <td className="px-5 py-4 font-mono text-[11px] text-right">370.099,08</td>
                  <td className="px-5 py-4 font-mono text-[11px] text-right text-accent-red">95.770,83</td>
                  <td className="px-5 py-4 font-mono text-[11px] text-right text-accent-green">274.328,25</td>
                  <td className="px-5 py-4 font-mono text-[11px] text-right">25,9%</td>
                  <td className="px-5 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FOOTER */}
        <footer className="text-center py-12 border-t border-border mt-12 space-y-2">
          <p className="text-[11px] text-text-dim">
            Dashboard gerado em 09/04/2026 · Dados: Razão AGT Projeto 2277 · PUCRS — Gestão de Projetos de Pesquisa
          </p>
          <p className="text-[10px] text-text-dim uppercase tracking-[0.2em] font-medium">
            Fontes: PDI Termo de Abertura, Razão Contábil (09/04/2026), Relatorio AGT
          </p>
        </footer>

      </main>
    </div>
  );
}
