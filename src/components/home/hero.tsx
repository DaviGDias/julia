import { ArrowUpRight, CalendarDays } from 'lucide-react';

const logo = 'https://horizons-cdn.hostinger.com/6c9b7b40-a9ba-4dee-90b4-70a43c2125df/2c75941c0c4c8fcf10eed5fb7ca565d1.png';
const mark = 'https://horizons-cdn.hostinger.com/6c9b7b40-a9ba-4dee-90b4-70a43c2125df/ba5e0d931efbba4079689de4478ebdf9.png';

export function Hero() {
  return <section id="inicio" className="hero">
    <header className="site-header shell">
      <a href="#inicio" className="brand" aria-label="Clínica da Mulher — início"><img src={logo} alt="Clínica da Mulher — Dra. Julia Zambonato" width="1000" height="1000" /></a>
      <nav aria-label="Navegação principal" className="main-nav"><a href="#sobre">Sobre mim</a><a href="#atuacao">Atuação</a><a href="#clinica">A clínica</a></nav>
      <a className="header-cta" href="#contato">Agendar consulta <ArrowUpRight size={16} /></a>
    </header>
    <div className="hero-content shell">
      <div className="hero-eyebrow"><span className="eyebrow-line" /> GINECOLOGIA & OBSTETRÍCIA EM PELOTAS</div>
      <h1>Um cuidado que<br /> acolhe <em>todas as fases</em><br /> da sua vida.</h1>
      <p>Ciência, escuta e sensibilidade para cuidar de você de forma inteira — em uma história de dedicação à saúde da mulher que atravessa gerações.</p>
      <a href="#contato" className="button button-light"><CalendarDays size={18} strokeWidth={1.7} /> Agende sua consulta <ArrowUpRight size={17} className="button-arrow" /></a>
      <div className="hero-bottom"><span>DRA. JULIA ZAMBONATO</span><span>CLÍNICA DA MULHER · PELOTAS / RS</span></div>
    </div>
    <div className="hero-decor" aria-hidden="true"><img src={mark} alt="" width="1024" height="1024" /></div>
  </section>;
}
