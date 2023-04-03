import style from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm';
import { useHistory } from 'react-router-dom'


function NewProject() {
    const history = useHistory()

    function createPost(project) {
        //inicializando costs and services

        project.cost = 0
        project.services = []

        fetch("http:/localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //redirect
            })

            .catch((error) => console.log(error))
    }

    return (
        <div className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"></ProjectForm>

        </div>
    )
}

export default NewProject