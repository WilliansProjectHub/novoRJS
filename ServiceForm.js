import styles from '../project/ProjectForm'
import Input from '../form/Input'
import Submit from '../form/Submit'
import { useState } from 'react'

function ServiceForm({handleSubmit, BtnText, projectData}) {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({...service, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={submit}>
            <Input 
            text="Nome do serviço"
            type="text"
            name="name"
            placeholder="Insira o nome do serviço"
            handleOnChange={handleChange}
            />
            <Input 
            text="Custo do serviço"
            type="number"
            name="cost"
            placeholder="Insira o custo do serviço"
            handleOnChange={handleChange}
            />
            <Input 
            text="Descrição do serviço"
            type="text"
            name="desciption"
            placeholder="Insira a descrição do serviço"
            handleOnChange={handleChange}
            />
            <Submit text={BtnText}/>
        </form>
    )
}

export default ServiceForm