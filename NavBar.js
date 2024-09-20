import {Link} from "react-router-dom";
import Container from './Container'
import styles from './NavBar.module.css'


function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container customClass="end" >
                <ul className={styles.list}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Company">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/newproject">Novo projeto</Link>
                    </li>
                    <li>
                        <Link to="/Projects">Projetos</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
        
    )
}

export default NavBar