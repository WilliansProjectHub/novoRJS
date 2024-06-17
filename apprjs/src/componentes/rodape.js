function Rodape({nome, idade, profissao}) {
    return(
      <footer>
          <b><p>Olá meu camarada {nome}</p></b>
          <p>Sua idade é de: {idade}</p>
          <p>Sua profissão é: {profissao}</p>
      </footer>
    )
}

export default Rodape;