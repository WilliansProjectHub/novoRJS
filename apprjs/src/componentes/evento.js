import Botao from "./botao";

function Evento({numero}) {

    function meuEvento() {
        console.log('olaaaaaaaaaaaaaaaa')
    }

    function segundoEvento() {
        console.log('segundo evento')
    }

    return(
        <>
          <p>Clique no botão</p>
          <Botao event={meuEvento} text="Primeiro evento"/>
          <Botao event={segundoEvento} text="Segundo evento"/>
        </>
    )
}

export default Evento;