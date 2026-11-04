import { useLanguage } from '../../language';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io5';
import styles from './Footer.module.css';

const socials = [
  { label: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=5511982883229', Icon: IoLogoWhatsapp },
  { label: 'GitHub', href: 'https://github.com/olegariobru', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bolgarimacedo/', Icon: FaLinkedin },
];
export default function Footer({ showContact = false }) {
  const { t } = useLanguage();
  return <footer className={styles.siteFooter}>
    {showContact && <section className={styles.contactSection} aria-labelledby="footer-contact-title">
      <div className={`${styles.contactInner} pageContainer`}>
        <div className={styles.contactCopy}>
          <p className={styles.contactNote}>{t("Ideia aberta. Próximo capítulo.")}</p>
          <h2 id="footer-contact-title">{t("O próximo")}<br />{t("começo.")}</h2>
        </div>
        <a className={styles.contactAddress} href="mailto:b_olgr@icloud.com"><span>{t("Escreva para Bruno")}</span><strong>b_olgr@icloud.com <span aria-hidden="true">↗</span></strong></a>
      </div>
    </section>}
    <div className={`${styles.footerInner} pageContainer`}>
      <p>© {new Date().getFullYear()} Bruno Olegário</p>
      <ul className={styles.socialLinks} aria-label={t("Redes sociais")}>
        {socials.map(({ label, href, Icon }) => <li key={label}>
          <a href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon aria-hidden="true" /></a>
        </li>)}
      </ul>
    </div>
  </footer>;
}
