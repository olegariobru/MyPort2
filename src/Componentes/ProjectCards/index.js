import styles from './projectCard.module.css'

export default function ProjetosCard(){
    return(
        <div>
            <div className={styles.textoBanner}>
                <h2>
                    Meus projetos
                </h2>
            </div>       
        <div className={styles.cards}>
            <div className={styles.card}>
                <img src="caminho-da-imagem.jpg" alt="Imagem do Projeto" className={styles.imagem} />
                <h2 className={styles.titulo}>Titulo do projeto</h2>
                
                <p className={styles.subtitulo}>Descrição do projeto</p>
                <button className={styles.botao}>Ver mais</button>
            </div>
        </div>
   
        </div>
    
    )
}
