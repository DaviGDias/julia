import { Instagram, ArrowUpRight, Sparkles, HeartHandshake, Stethoscope } from 'lucide-react';

const instagramUrl = 'https://www.instagram.com/drajuliazambonato';
const instagramHandle = '@drajuliazambonato';

const topics = [
  {
    icon: Stethoscope,
    tag: 'ORIENTAÇÕES PRÁTICAS',
    title: 'Dúvidas do Consultório',
    description: 'Conteúdos didáticos e descomplicados respondendo às perguntas mais frequentes sobre saúde da mulher.',
  },
  {
    icon: Sparkles,
    tag: 'EDUCAÇÃO EM SAÚDE',
    title: 'Prevenção & Exames',
    description: 'Informações confiáveis e baseadas em evidência sobre exames periódicos, contracepção e bem-estar.',
  },
  {
    icon: HeartHandshake,
    tag: 'PRÉ-NATAL & PARTO',
    title: 'Gestação Descomplicada',
    description: 'Orientações claras para acompanhar famílias com segurança, acolhimento e ciência em cada fase.',
  },
];

export function InstagramSection() {
  return (
    <section id="instagram" className="instagram-section">
      <div className="shell instagram-inner">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-kicker"
          aria-label="Perfil no Instagram"
        >
          <Instagram size={15} />
          <span>CONTEÚDO INFORMATIVO NO INSTAGRAM</span>
        </a>

        <div className="instagram-heading">
          <h2>
            Conteúdo informativo e orientações sobre<br />
            <em>saúde da mulher no Instagram.</em>
          </h2>
        </div>

        <p className="instagram-description">
          Acesse posts, vídeos e conteúdos educativos com informações claras sobre ginecologia, obstetrícia, prevenção e cuidados para cada fase da sua vida.
        </p>

        <div className="instagram-cards">
          {topics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <a
                key={index}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-card"
              >
                <div className="instagram-card-top">
                  <span className="instagram-card-tag">{topic.tag}</span>
                  <IconComponent size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </div>
                <div className="instagram-card-link">
                  <span>Acessar conteúdo</span>
                  <ArrowUpRight size={14} />
                </div>
              </a>
            );
          })}
        </div>

        <div className="instagram-action">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-button"
          >
            <Instagram size={18} strokeWidth={1.8} />
            <span>Acompanhar conteúdos em {instagramHandle}</span>
            <ArrowUpRight size={16} />
          </a>
          <span className="instagram-handle">Publicações informativas, orientações médicas e esclarecimento de dúvidas</span>
        </div>
      </div>
    </section>
  );
}
