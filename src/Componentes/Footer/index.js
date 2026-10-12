import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io5';
import styles from './Footer.module.css';

const socials = [
  { label: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=5511982883229', Icon: IoLogoWhatsapp },
  { label: 'GitHub', href: 'https://github.com/olegariobru', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bolgarimacedo/', Icon: FaLinkedin },
];
export default function Footer() {
  return <footer className={styles.siteFooter}>
    <div className={`${styles.footerInner} pageContainer`}>
      <p>© {new Date().getFullYear()} Bruno Olegário</p>
      <ul aria-label="Redes sociais">
        {socials.map(({ label, href, Icon }) => <li key={label}>
          <a href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon aria-hidden="true" /></a>
        </li>)}
      </ul>
    </div>
  </footer>;
}
