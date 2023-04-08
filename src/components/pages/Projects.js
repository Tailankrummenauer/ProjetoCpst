import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../layout/Message";
import styles from './Projects.module.css'
import Container from "../layout/Container"
import Loading from "../layout/Load";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";

export default function Projects() {
    const [Projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState("")


    const location = useLocation();
    let message = "";
    if (location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            },
        }).then(resp => resp.json())
            .then(data => {
                setProjects(data)
                setRemoveLoading(true)
            }).catch(err => console.log(err))
    }, [])


    function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    }).then(resp => resp.json())
    .then(data =>{
        setProjects(Projects.filter((project)=> project.id!== id))
        setProjectMessage("Projeto removido com sucesso!")
    })
    .catch(err => console.log(err))

    }

    return (
        <div className={styles.project_container}>
            <div className={styles.tittle_container}>
                <h1>Meus projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message msg={message} type="success" />}
            {projectMessage && <Message msg={projectMessage} type="success" />}
            <Container customClass="start">
                {Projects.length > 0 &&
                    Projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category}
                            handleRemove={removeProject} />
                    ))}
                {!removeLoading && <Loading />}
                {removeLoading && Projects.length === 0 && (<p>Não há projetos cadastrados!</p>)}

            </Container>
        </div>

    );
}