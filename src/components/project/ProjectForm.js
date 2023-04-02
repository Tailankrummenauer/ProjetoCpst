import style from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

export default function ProjectForm({btnText}) {
    return (
        <form className={style.form}>
            <Input  type="text" text="Nome do projeto" name="name" placeholder="Insina o nome do projeto"/>
            <Input  type="number" text="Orçamento total" name="budget" placeholder="Insira o orçamento total"/>
            <Select name="category_id" text="Selecione a categoria"/>
            <SubmitButton text={btnText}/>
        </form> 
  
   )


}