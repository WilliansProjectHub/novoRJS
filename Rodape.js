import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"
import styles from "./Rodape.module.css"

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <ul>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
            <p><span>Costs</span> &copy; 2024</p>
        </footer>
    )
}

export default Rodape