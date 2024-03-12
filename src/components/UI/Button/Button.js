
import styles from "./Button.module.css"
const Button =(props)=>{
    const {type,onClick,classes,label,status} = props

    return <button type={type} onClick={onClick} className={`${classes} ${styles.button}`} disabled={status}>{label}</button>
}

export default Button