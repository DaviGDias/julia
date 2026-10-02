import { ArrowUpRight, MessageCircle } from 'lucide-react';

const whatsapp = 'https://wa.me/555391029646?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20J%C3%BAlia%20Zambonato.';
const logo = '/logo-cropped.png';

export function Contact() {
  return (
    <>
      <section id="contato" className="contact section-pad">
        <div className="shell contact-inner">
          <div className="section-kicker">
            <span>04</span>
            <span>VAMOS CONVERSAR</span>
          </div>
          <h2>
            Seu cuidado começa<br />
            <em>com uma conversa.</em>
          </h2>
          <p>
            Será um prazer receber você. Entre em contato para saber mais sobre os atendimentos e agendar sua consulta.
          </p>
          <a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={19} strokeWidth={1.7} /> Agendar pelo WhatsApp <ArrowUpRight size={17} className="button-arrow" />
          </a>
          <small>
            Ao entrar em contato, evite compartilhar informações sensíveis de saúde por mensagem. Questões clínicas são tratadas durante a consulta.
          </small>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-top">
          <a href="#inicio" className="footer-logo" aria-label="Voltar ao início">
            <img
              src={logo}
              width="866"
              height="204"
              alt="Clínica da Mulher — Dra. Júlia Zambonato"
              loading="lazy"
            />
          </a>
          <div>
            <span>EXPLORE</span>
            <a href="#sobre">Sobre mim</a>
            <a href="#atuacao">Atuação</a>
            <a href="#clinica">A clínica</a>
          </div>
          <div>
            <span>CONTATO</span>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp <ArrowUpRight size={14} />
            </a>
            <a href="https://www.instagram.com/drajuliazambonato" target="_blank" rel="noopener noreferrer">
              Instagram <ArrowUpRight size={14} />
            </a>
            <p>Pelotas, Rio Grande do Sul</p>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 Clínica da Mulher. Todos os direitos reservados.</span>
          <span>Feito para cuidar de você.</span>
        </div>
      </footer>
    </>
  );
}
