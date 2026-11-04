import { useLanguage } from '../../language';
import minhaFoto from '../../Images/assets/perfil-bruno.webp';

export default function BannerSecundario() {
  const { t } = useLanguage();
  return <div className="imgBanner">
    <div className="imagens">
      <img className="minhaFoto" src={minhaFoto} alt={t("Retrato de Bruno Olegário")} loading="lazy" />
    </div>
  </div>;
}
