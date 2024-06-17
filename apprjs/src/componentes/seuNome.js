function SeuNome({setNome}) {
    return(
        <>
          <p>Digite seu nome:</p>
          <input type="text" placeholder="Qual o seu nome?" onChange={(e) => setNome(e.target.value)}></input>
        </>
    )
}

export default SeuNome