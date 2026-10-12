import './inicio.css';

export default function Inicio() {
  return <section className="contactBand" aria-labelledby="contact-title">
    <div className="pageContainer contactInner">
      <div>
        <p className="eyebrow">Vamos conversar?</p>
        <h2 id="contact-title">Tem um desafio em mente?</h2>
      </div>
      <a className="button buttonPrimary" href="mailto:b_olgr@icloud.com">Entre em contato <span aria-hidden="true">↗</span></a>
    </div>
  </section>;
}
