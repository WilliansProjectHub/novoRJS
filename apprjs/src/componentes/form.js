import {useState} from 'react'

function Form() {
    function cadatro(e) {
            e.preventDefault()
            console.log('cadastro feito!')
            console.log(name)
            console.log(password)
    }

    const [name , setname] = useState();
    const [password , setpassword] = useState();
    
    
    return(
        <>
          <h1>Meu cadastro</h1>
          <form onSubmit={cadatro}>
            <div>
                <label htlFor="name">Nome: </label>
                <input type="text" id="name" name="name" placeholder="digite seu nome" onChange={(e) => setname(e.target.value)}></input>
            </div>
            <div>
                <label htlFor="password">Senha: </label>
                <input type="password" id="password" name="password" placeholder="digite sua senha" onChange={(e) => setpassword(e.target.value)}></input>
            </div>
            <div>
                <input type="submit" value="cadastrar"></input>
            </div>
          </form>
        </>
    )
}

export default Form