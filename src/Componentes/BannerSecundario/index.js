import styles from './BannerSecundario.module.css'
import circuloColorido from 'Images/assets/circulo_colorido.png'
import minhaFoto from 'Images/EJRW52oWoAEuR09.jpg'

export default function BannerSecundario(){
    return(
        <div className={styles.imgBanner}>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt='imagem de teste'/>
                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Bruno"/>
            </div>    
        </div>
    )
}