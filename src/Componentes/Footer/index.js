import styles from './Footer.module.css';
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className={styles.FooterDad}>
            <footer>
                <ul className={styles.socialMedias}>
                    <li><a href="https://api.whatsapp.com/send?phone=5511982883229" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp /></a></li>
                    <li><a href="https://github.com/olegariobru" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/https://www.linkedin.com/in/bolgarimacedo/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                </ul>
                <p className={styles.legal}>© 2024 Created by me</p>
            </footer>
        </div>
    );
}
