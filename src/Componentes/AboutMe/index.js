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
                    Olá! Meu nome é Bruno Macedo Olegário, e sou um entusiasta da tecnologia apaixonado por criar soluções inovadoras e intuitivas no mundo da web. Com uma base sólida em service desk, infraestrutura e governança de TI, embarquei em uma jornada empolgante para explorar o universo do desenvolvimento front-end.    
                    Ao longo dos meus nove meses como desenvolvedor, mergulhei de cabeça em linguagens como HTML, CSS e JavaScript, refinando minhas habilidades para construir interfaces web responsivas e atraentes. Estou sempre em busca de aprender e dominar novas tecnologias, frameworks e bibliotecas, como React e Angular, para melhorar continuamente minhas habilidades e entregar produtos de alta qualidade.     
                    Minha experiência em atendimento a clientes, tanto via telefone quanto presencialmente, me deu uma compreensão profunda das necessidades do usuário final e a importância de uma comunicação clara e eficaz. Estou comprometido em fornecer experiências excepcionais aos usuários, garantindo que cada interação seja positiva e satisfatória.    
                    Estou animado para continuar minha jornada, contribuindo para projetos inovadores e colaborando com equipes talentosas para impulsionar o sucesso do produto. Estou sempre aberto a novas oportunidades de aprendizado e desafios que me permitam crescer pessoal e profissionalmente.    
                    Se você está interessado em saber mais sobre mim ou em colaborar em projetos empolgantes, não hesite em entrar em contato. Estou sempre disponível para uma conversa!
                    </p>
                </div>
        </div>
       

    )
}