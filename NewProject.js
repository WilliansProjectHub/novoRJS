import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import { useNavigate } from 'react-router-dom'

function NewProject() {

    const Navigate = useNavigate()


    function createPost(project) {
        project.any = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method : "POST",
            headers: {
                "Content-type": "application.json",
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            const state = { message: "Projeto criado com sucesso!" };
            Navigate("/projects", {state});
            
        })
        .catch((err) => console.log(err))
    }

    return (
        
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject