
import styles from './ProjectCard.module.css'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'


export default function ProjectCard({id, name, budget, category, handleRemove}){
    return(
        <div>
       <p>Nome do projeto: {name}</p>
       <p>{id}</p>
       <p>R$: {budget}</p>
       <p>Categoria do projeto: {category.name}</p>
       
       </div>
    )
}
