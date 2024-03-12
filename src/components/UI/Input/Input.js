

const Input=(props)=>{
    const {type,classes,label,id}=props

    return(
        <>
        <label htmlFor={id}>{label}</label>
        <input id={id} className={classes} type={type}/>
        </>
    )

}

export default Input