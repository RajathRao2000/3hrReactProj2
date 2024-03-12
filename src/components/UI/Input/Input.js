
import styles from "./Input.module.css"

const Input=(props)=>{
    const {type,classes,label,id}=props

    return(
        <>
        <label htmlFor={id}>{label}</label>
        <input id={id} className={`${classes} ${styles.input}`} type={type}/>
        </>
    )

}

export default Input