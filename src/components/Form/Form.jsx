import React from 'react'
import "./Form.css"
import Input from '../Input';

function Form() {

  

  return (
    <>
      <form className='form-body' >

        <Input
          label="First Name"
          type="text"
          name="name"
        />
        <Input
          label="Marks in AC"
          type="number"
          name="sub1"
        />
        
        <Input
          label="Marks in Law"
          type="number"
          name="sub2"
        />
        
        <Input
          label="Marks in Stat"
          type="number"
          name="sub3"
        />
        <button type="submit" className='submit-btn' >Submit</button>
      </form>
    </>
  )
}

export default Form;