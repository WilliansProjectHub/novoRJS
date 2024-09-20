import Input from "../form/Input"
import styles from './ProjectForm.module.css'
import Select from "../form/Select"
import Submit from "../form/Submit"
import {useState} from 'react'
import { useEffect } from "react"

function ProjectForm({btnText, handleSubmit, projectData}) {


    const [project, setProject] = useState(projectData || {})
    const [categories,setCategories] = useState([])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
    }

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                 'Content-type' : "application.json"
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    },[])

    return(
        <form className={styles.form} onSubmit={submit}>
            <Input 
            type="text" 
            placeholder="Insira o nome do projeto" 
            text="Nome do projeto" 
            name="name" 
            handleOnChange={handleChange}
            value={project.name ? project.name : ''}
            />
            <Input 
            type="number" 
            placeholder="Insira o orçamento do projeto" 
            text="Orçamento do projeto" 
            name="budget" 
            handleOnChange={handleChange}
            value={project.budget ? project.budget : ''}
            />
            <Select 
            text="Selecione a categoria do projeto" 
            options={categories} 
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ''}
            />
            <Submit 
            text={btnText} 
            />
        </form>
    )
}

export default ProjectForm