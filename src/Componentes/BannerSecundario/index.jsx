import minhaFoto from '../../Images/assets/perfil-bruno.webp';

export default function BannerSecundario() {
  return <div className="imgBanner">
    <div className="imagens">
      <img className="minhaFoto" src={minhaFoto} alt="Retrato de Bruno Olegário" loading="lazy" />
    </div>
  </div>;
}
