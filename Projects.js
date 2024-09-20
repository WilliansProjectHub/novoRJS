import Message from "../layouts/Message"
import {useLocation} from 'react-router-dom'
import Container from '../layouts/Container'
import LinkButton from "../layouts/LinkButton"
import styles from './Projects.module.css'
import ProjectCard from "../project/ProjectCard"
import { useState, useEffect } from "react"
import Loading from "../layouts/Loading"

function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/projects", {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, 1500)
    }, [])

    function removeProject(id) {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProjects(projects.filter((project) => project.id !== id))
                setProjectMessage("Projeto apagado")
            })
    }

    const location = useLocation()
    let message = ''
    if (location.state){
        message = location.state.message
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.tittle_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar novo projeto"></LinkButton>
            </div>
            {message && <Message msg={message} type="sucess"/>}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => <ProjectCard 
                    id={project.id}
                    nome={project.name}
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}
                    handleRemove={removeProject}
                    />
                )
                }
            </Container>
            {!removeLoading && <Loading/>}
            {removeLoading && projects.length === 0 && 
                <p>Não existem projetos</p>
            }
            {projectMessage && <Message msg={projectMessage} type="sucess"/>}
        </div>
    )
}

export default Projects