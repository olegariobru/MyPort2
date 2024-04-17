import styles from 'Componentes/Banner/Banner.module.css';
import circuloColorido from 'Images/assets/circulo_colorido.png';
import minhaFoto from 'Images/EJRW52oWoAEuR09.jpg';

export default function Banner(){
    return(
        <div className={styles.fundoBanner}>  
            <div className={styles.banner}>
                   <div className={styles.apresentacao}>
                        <h1 className={styles.titulo}>Olá, eu sou o Bruno Olegário!</h1>
                        <p className={styles.paragrafo}>Desenvolvedor front-end</p>
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