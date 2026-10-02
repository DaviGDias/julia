import { ArrowDownRight } from 'lucide-react';

const portrait = 'https://horizons-cdn.hostinger.com/6c9b7b40-a9ba-4dee-90b4-70a43c2125df/a84065a4b99049d7f9a4936789333c9b.png';

export function About() {
  return <section id="sobre" className="about section-pad"><div className="shell about-grid">
    <div className="about-image-wrap"><div className="about-image"><img src={portrait} alt="Retrato da Dra. Julia Zambonato" width="1080" height="1350" loading="lazy" /></div><span className="image-caption">DRA. JULIA ZAMBONATO <span>01 / 03</span></span></div>
    <div className="about-copy"><div className="section-kicker"><span>01</span><span>SOBRE MIM</span></div><h2>Prazer, sou a<br /><em>Dra. Julia.</em></h2><div className="fine-rule" /><p className="lead">Acredito em uma ginecologia que começa pela escuta e enxerga cada mulher em sua singularidade.</p><p>Sou médica formada pela Universidade Católica de Pelotas (UCPel), especialista em Ginecologia e Obstetrícia pelo HMIPV, em Porto Alegre, e pós-graduada em Reprodução Assistida pelo Instituto Gera, em São Paulo.</p><p>A ginecologia sempre esteve próxima da minha história familiar. Durante a graduação, essa influência ganhou um significado ainda maior; no estágio da especialidade, reconheci minha vocação para cuidar da saúde da mulher em suas diferentes fases.</p><p>Em cada atendimento, busco unir conhecimento, acolhimento e uma visão integral da paciente, considerando sua saúde física, emocional e os diferentes contextos que fazem parte da sua vida.</p><a className="text-link" href="#atuacao">Conheça minha atuação <ArrowDownRight size={18} /></a></div>
  </div></section>;
}
