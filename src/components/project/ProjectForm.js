import style from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import { useEffect, useState } from 'react';

export default function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    /*metodo que envia os dados para o formuladrio para o bd a partir do project*/
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }
    /*metodo que serve para mudar o valor em tempo real do que vem do input do objeto para depois ser enviado para o bd*/
    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        })
    }

    return (
        <form onSubmit={submit} className={style.form}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insina o nome do projeto" handleOnChange={handleChange} value={project.name ? project.name : ''} />
            <Input type="number" text="Orçamento total" name="budget" placeholder="Insira o orçamento total" handleOnChange={handleChange} value={project.budget ? project.budget : ''} />
            <Select name="category_id" text="Selecione a categoria" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ''} />
            <SubmitButton text={btnText} />
        </form>

    )


}