import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu() {
  return <header className={styles.siteHeader}>
    <nav className={styles.navigation} aria-label="Navegação principal">
      <NavLink to="/" end>Início</NavLink>
      <NavLink to="/projetos">Projetos</NavLink>
      <NavLink to="/sobre-mim">Sobre mim</NavLink>
    </nav>
  </header>;
}
