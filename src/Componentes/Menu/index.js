import MenuLink from '../MenuLink';
import styles from './Menu.module.css'


export default function Menu(){
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Inicio
                </MenuLink>

                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>
                
                <MenuLink to="/projetos">
                    Projetos
                </MenuLink>
            </nav>
        </header>
    )
}