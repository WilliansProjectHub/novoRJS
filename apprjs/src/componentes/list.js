import Item from './item';
import styles from './itens.module.css';

function List() {
    return(
        <>
            <h1>Minha lista de marcas</h1>
            <ul className={styles.itens}>
                <Item marca="Ferrari" datalancamento={1985}/>
                <Item marca="Lamborguini" datalancamento={1987}/>
                <Item marca="Fiat" datalancamento={1983}/>
                <Item marca="Renault" datalancamento={1984}/>
            </ul>
        </>
    )
}

export default List;