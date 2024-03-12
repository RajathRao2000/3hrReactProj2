

const Button =(props)=>{
    const {type,onClick,classes,label} = props

    return <button type={type} onClick={onClick} className={classes}>{label}</button>
}

export default Button