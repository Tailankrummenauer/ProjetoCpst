import styles from './Project.module.css'
import { useParams } from 'react-router-dom' // ----> usado para pegar o id do projeto via URL
import { useState, useEffect } from 'react'
import Loading from '../layout/Load'
import Container from '../layout/Container'


export default function Project() {
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false) //falso pra nao mostrar o formulário quando a página for carregada

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'appender': 'application/json',
            },
        }).then(resp => resp.json())
            .then((data) => {
                setProject(data)

            }).catch(err => console.log(err))
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    return (<>{project.name ? (
        <div className={styles.project_details}>
            <Container customClass="column">
                <div className={styles.details_container}>
                    <h1>{project.name}</h1>
                    <button className={styles.btn} onClick={toggleProjectForm}>
                        {!showProjectForm ? 'Editar Projeto' : 'Fechar'}</button>
                    {!showProjectForm ? (
                        <div className={styles.project_info}>
                            <p>
                                <span>Categoria:</span> {project.category.name}
                            </p>
                            <p>
                                <span>Total de orçamento:</span> R$ {project.budget}
                            </p>
                            <p>
                                <span>Total de utilizado:</span> R$ {project.cost}
                            </p>

                        </div>
                    ) : (
                        <div className={styles.project_info}>
                            <p>Project forms </p>
                        </div>
                    )}
                </div>
            </Container>
        </div>

    ) : (

        <Loading />
    )}

    </>
    )
}