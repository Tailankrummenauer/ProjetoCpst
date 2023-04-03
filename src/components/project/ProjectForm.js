import style from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import { useEffect, useState } from 'react';

export default function ProjectForm({handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 
        },
        })
        .then((resp)=>resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err)=> console.log(err))
    },[])

    return (
        <form className={style.form}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insina o nome do projeto" />
            <Input type="number" text="Orçamento total" name="budget" placeholder="Insira o orçamento total" />
            <Select name="category_id" text="Selecione a categoria" options={categories}/>
            <SubmitButton text={btnText} />
        </form>

    )


}