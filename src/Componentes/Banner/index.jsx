import { useLanguage } from '../../language';
import minhaFoto from '../../Images/assets/perfil-bruno.webp';

export default function Banner() {
  const { t } = useLanguage();
  return <section className="hero pageContainer" aria-labelledby="hero-title">
    <div className="heroCopy">
      <h1 className="heroTitle" id="hero-title">
        <span className="heroLineClip"><span className="heroLine">{t("Olá, eu sou")}</span></span>
        <span className="heroLineClip"><span className="heroLine">Bruno Olegário.</span></span>
      </h1>
      <p className="heroRole">{t("Desenvolvedor")}</p>
    </div>
    <figure className="heroPortrait">
      <img className="portraitPhoto" src={minhaFoto} alt={t("Bruno Olegário diante da cidade ao entardecer")} loading="eager" />
    </figure>
  </section>;
}
