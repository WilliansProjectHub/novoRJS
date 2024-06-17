import Botao from './botao'
import {useState} from 'react';

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return(
        <>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input type="email" placeholder="digite seu e-mail" onChange={(e) => setEmail(e.target.value)}></input>
                <button onClick={enviarEmail}>Enviar e-mail</button>
                {userEmail && (
                    <div>
                        <p>O seu e-mail é: {userEmail}</p>
                        <Botao event={limparEmail} text="Limpar"/>
                    </div>
                )}
            </form>
        </>
    )
}

export default Condicional