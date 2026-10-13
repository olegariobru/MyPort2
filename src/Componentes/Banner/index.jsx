import circuloColorido from '../../Images/assets/anel.png';
import minhaFoto from '../../Images/assets/eu2.png';

export default function Banner() {
  return <section className="hero pageContainer" aria-labelledby="hero-title">
    <div className="heroCopy">
      <p className="heroRole">Desenvolvedor</p>
      <h1 id="hero-title">Olá, eu sou <span>Bruno Olegário.</span></h1>
    </div>
    <div className="heroPortrait">
      <img className="portraitRing" src={circuloColorido} alt="" aria-hidden="true" />
      <img className="portraitPhoto" src={minhaFoto} alt="Bruno Olegário" fetchPriority="high" />
    </div>
  </section>;
}
