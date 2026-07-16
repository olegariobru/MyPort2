import styles from 'Componentes/Banner/Banner.module.css';
import circuloColorido from 'Images/assets/anel.png';
import minhaFoto from 'Images/assets/eu2.png';

export default function Banner(){
    return(
        <div className={styles.fundoBanner}>  
            <div className={styles.banner}>
                   <div className={styles.apresentacao}>
                        <h1 className={styles.titulo}>Olá, eu sou o Bruno Olegário!</h1>
                        <p className={styles.paragrafo}>Desenvolvedor Full Stack</p>
                   </div>

                   <div className={styles.imagens}>
                        <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt='imagem de teste'/>
                        <img className={styles.minhaFoto} src={minhaFoto} alt="Foto do Bruno"/>
                   </div>

                <div className={styles.button}>
                     <button className={styles.button01}>Download CV</button>
                </div>
            </div>  
        </div>
    )
}