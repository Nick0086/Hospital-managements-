import React, {useId} from 'react'

function Input({ label, type = "text", name, value = "", changeHandler }) {

    let id = useId();

    console.log(inputRef)
    console.log(`${label} = id = ${id}`);

    return (
        <div className='input-group'>
            <label htmlFor={id} className='form-label' >{label} :</label>
            <input type={type} name={name}  id={id} className='form-input' onChange={changeHandler} value={value} required></input>
        </div>
    )
}

export default Input;