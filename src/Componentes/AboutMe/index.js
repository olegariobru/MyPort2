import styles from './About.module.css'

export default function BannerAbout(){
    return (
       <div className={styles.CorpoBanner}> 
                
                <div className={styles.textoBanner}>
                    <h2>
                        Sobre mim
                    </h2>
                </div>
                
                <div className={styles.SobreMe}> 
                    <p className={styles.sobreText}>
                        Olá! Sou Bruno Macedo Olegário, profissional de Tecnologia da Informação com experiência em suporte técnico, infraestrutura, governança de TI e desenvolvimento web.
                        Atualmente, atuo desenvolvendo soluções web modernas utilizando tecnologias como React, JavaScript, Node.js, Firebase e PostgreSQL. Minha experiência anterior em suporte e atendimento ao usuário me proporcionou uma visão prática da tecnologia, permitindo criar aplicações que equilibram desempenho, usabilidade e necessidades reais do negócio.
                        Tenho perfil analítico, gosto de resolver problemas e estou sempre buscando aprimorar meus conhecimentos por meio de novos desafios e projetos. Acredito que a tecnologia deve simplificar processos, gerar resultados e oferecer uma experiência positiva para quem a utiliza.
                        Neste portfólio você encontrará alguns dos projetos que desenvolvi e as tecnologias com as quais trabalho. Estou sempre aberto a novas oportunidades, parcerias e desafios profissionais.
                    </p>
                </div>
        </div>
       

    )
}