function OutraLista({itens}) {
    return(
        <>
          <h3>Lista de macros</h3>
          {itens.length > 0 ? ( 
            itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))): <b><p>Não há itens na lista</p></b>
          }
        </>
    )
}

export default OutraLista