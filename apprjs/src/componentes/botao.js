import styles from './botao.module.css'

function Botao({event, text}) {
    return(
        <button onClick={event} className={styles.botaopadrao}>{text}</button>
    )
}

export default Botao