import minhaFoto from '../../Images/assets/perfil-bruno.webp';

export default function Banner() {
  return <section className="hero pageContainer" aria-labelledby="hero-title">
    <div className="heroCopy">
      <h1 className="heroTitle" id="hero-title">
        <span className="heroLineClip"><span className="heroLine">Olá, eu sou</span></span>
        <span className="heroLineClip"><span className="heroLine">Bruno Olegário.</span></span>
      </h1>
      <p className="heroRole">Desenvolvedor que transforma necessidades reais em produtos digitais claros.</p>
    </div>
    <figure className="heroPortrait">
      <img className="portraitPhoto" src={minhaFoto} alt="Bruno Olegário diante da cidade ao entardecer" loading="eager" />
      <figcaption className="portraitIndex">São Paulo · Brasil</figcaption>
    </figure>
  </section>;
}
