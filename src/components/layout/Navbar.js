import { Link } from 'react-router-dom'

import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'


function Navbar() {
    return (
        <nav className={`${styles.navbar}`}>
            <Container>
                <Link to="/"><img src={logo} alt="Imagem logo" /></Link>
                <ul className={styles.list}>
                    <li className={styles.itens}><Link to="/">Home</Link></li>
                    <li className={styles.itens}><Link to="/projects">Projetos</Link></li>
                    <li className={styles.itens}> <Link to="/company">Empresa</Link></li>
                    <li className={styles.itens}><Link to="/contact">Contato</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;