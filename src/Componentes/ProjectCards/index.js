import styles from './projectCard.module.css'
import fotoProjeto from 'Images/projetos/arkitetura.png'
import fotoProjeto2 from 'Images/projetos/olguser.png'

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
                <img src={fotoProjeto} alt="Imagem do Projeto" className={styles.imagem} />
                <h2 className={styles.titulo}>Arktetura</h2>
                
                <p className={styles.subtitulo}>Projeto elaborado para uma empresa de arquitetura e urbanismo</p>
                <button className={styles.botao}>Ver mais</button>
                
            </div>
            <div className={styles.card}>
                <img src={fotoProjeto2} alt="Imagem do Projeto" className={styles.imagem} />
                <h2 className={styles.titulo}>OlgUsers</h2>
                
                <p className={styles.subtitulo}>IntraNET com sistema de login robusto e completo (Em desenvolvimento)</p>
                <button className={styles.botao}>Ver mais</button>
                
            </div>

        </div>
   
        </div>
    
    )
}
