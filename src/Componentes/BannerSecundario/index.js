import styles from './BannerSecundario.module.css'
import circuloColorido from 'Images/assets/anel.png'
import minhaFoto from 'Images/assets/eu2.png'

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