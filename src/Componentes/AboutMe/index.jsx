import { useLanguage } from '../../language';
import styles from './About.module.css';

export default function AboutMe() {
  const { t } = useLanguage();
  return <div className={styles.aboutCopy}>
    <p className="eyebrow">{t("Sobre mim")}</p>
    <h2 className="sectionHeading">{t("Tecnologia perto das pessoas e do negócio.")}</h2>
    <p>{t("Sou Bruno Macedo Olegário, profissional de Tecnologia da Informação com experiência em suporte técnico, infraestrutura, governança de TI e desenvolvimento web.")}</p>
    <p>{t("Minha vivência com suporte e atendimento ao usuário me ajuda a criar soluções que consideram as necessidades reais de quem utiliza a tecnologia. Gosto de investigar problemas, simplificar processos e transformar ideias em aplicações úteis.")}</p>
    <p>{t("Atualmente, desenvolvo projetos com React, JavaScript, Node.js, Firebase e PostgreSQL. Estou aberto a novos desafios, parcerias e oportunidades.")}</p>
  </div>;
}
