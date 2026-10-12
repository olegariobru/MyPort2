import circuloColorido from '../../Images/assets/anel.png';
import minhaFoto from '../../Images/assets/eu2.png';

export default function BannerSecundario() {
  return <div className="imgBanner">
    <div className="imagens">
      <img className="circuloColorido" src={circuloColorido} alt="" aria-hidden="true" />
      <img className="minhaFoto" src={minhaFoto} alt="Retrato de Bruno Olegário" loading="lazy" />
    </div>
  </div>;
}
