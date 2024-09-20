import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Loading from '../layouts/Loading'
import Container from '../layouts/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layouts/Message'
import ServiceForm from '../service/ServiceForm'
import {parse, v4 as uuidv4} from 'uuid'

function Project() {

    const {id} = useParams()
    
    const [project, setProject]  = useState([])

    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)

    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
            })
        }, 1500)
    }, [id])

    function createService(project) {

        const lastService = project.services[project.services.length - 1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.any

        const newCost = parseFloat(project.any) + parseFloat(lastServiceCost)

        if (newCost > parseFloat(project.budget)) {
            setMessage("Orçamento ultrapassado")
            setType("error")
            project.services.pop()
            return false
        }
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }


    function editPost(project) {

        setMessage('')

        if (project.budget < project.any) {
            setMessage('')
            setMessage('O orçamento não pode ser menor que o custo do projeto')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto atualizado')
            setType('sucess')
        })
    }

    return(
        <>
            {project.name ? 
            <div className={styles.project_details}>
                <Container customClass="column">
                    {message && <Message type={type} msg={message}/>}
                    <div className={styles.details_project}>
                        <h1>{project.name}</h1>
                        <button onClick={toggleProjectForm} className={styles.btn}>
                            {!showProjectForm ? 'Editar projeto' :  'Fechar projeto'}
                        </button>
                        {!showProjectForm ? (
                            <div>
                                <p>
                                    <span>Categoria: </span> {project.category.name}
                                </p>
                                <p>
                                    <span>Total de orçamento: </span> R${project.budget}
                                </p>
                                <p>
                                    <span>Total utilizado: </span> R${project.any}
                                </p>
                            </div>
                        ) : (
                            <div>
                                <ProjectForm handleSubmit={editPost} btnText='Concluir edição' projectData={project}/>
                            </div>
                        )}
                    </div>
                </Container>
                <div>
                    <h2>Adicione um serviço</h2>
                    <button onClick={toggleServiceForm} className={styles.btn}>
                            {!showServiceForm ? 'Adicionar serviço' :  'Fechar projeto'}
                    </button>
                    <div>
                        {showServiceForm &&
                            <ServiceForm
                                BtnText="Adicionar serviço"
                                handleSubmit={createService}
                                projectData={project}
                            />
                        }
                    </div>
                    <h2>Serviços: </h2>
                    <Container customClass="start">
                        <p>Itens dos serviços</p>
                    </Container>
                </div>
            </div> 
            : <Loading/> }
        </>
    )
}

export default Project