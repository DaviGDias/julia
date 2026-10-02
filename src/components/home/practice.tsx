import { ArrowUpRight } from 'lucide-react';

const roles = [
  { number: '01', title: 'Consultório', text: 'Atendimento ginecológico e obstétrico com atenção individualizada em cada etapa da vida.' },
  { number: '02', title: 'Ensino & formação', text: 'Professora do Núcleo de Ginecologia da UCPel e médica e preceptora da UFPel pela Ebserh.' },
  { number: '03', title: 'Maternidade & cirurgia', text: 'Plantonista na maternidade do Hospital São Francisco de Paula e integrante do Serviço de Videocirurgia Ginecológica de Pelotas.' },
];

export function Practice() {
  return <section id="atuacao" className="practice section-pad"><div className="shell"><div className="section-kicker"><span>02</span><span>MINHA ATUAÇÃO</span></div><div className="practice-heading"><h2>Conhecimento que<br /><em>se transforma em cuidado.</em></h2><p>Uma trajetória que une consultório, ensino e prática hospitalar para oferecer um olhar amplo e atualizado.</p></div><div className="roles">{roles.map(role => <div className="role" key={role.number}><span className="role-number">{role.number}</span><h3>{role.title}</h3><p>{role.text}</p><ArrowUpRight size={20} strokeWidth={1.3} aria-hidden="true" /></div>)}</div></div></section>;
}
