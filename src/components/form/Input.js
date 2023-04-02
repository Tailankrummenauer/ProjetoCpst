import style from './Input.module.css';


export default function Input({ type, text, name, value, placeholder, handleOnChange }) {
    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </div>


    )
}