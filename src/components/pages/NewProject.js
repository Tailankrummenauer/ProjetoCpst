import style from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm';


function NewProject(){
    return(
        <diV className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"></ProjectForm>

        </diV>
    )
}

export default NewProject