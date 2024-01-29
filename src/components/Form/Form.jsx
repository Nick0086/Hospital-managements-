import React, { useState } from 'react'
import "./Form.css"
import Input from '../Input';
import axios from 'axios';


function Form() {

    const data = {
        name: "",
        email: "",
        address: "",
        password: "",
    }
    const [userData, setUserData] = useState(data);

    const userdataHandler = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })

    }

    const dataHandler = async (e) => {
        e.preventDefault();
        console.log("userData", userData)

        await axios.post("http://localhost:4000/",userData)
            .then(function (response) {
                console.log("response", response);
            })
            .catch(function (error) {
                console.log("error", error);
            })
    }

    return (
        <>
            <form className='form-body'  onSubmit={dataHandler} >

                <Input
                    label="Name"
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={userdataHandler}
                />
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={userdataHandler}
                />

                <Input
                    label="Address"
                    type="text"
                    name="address"
                    value={userData.address}
                    onChange={userdataHandler}
                />

                <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={userdataHandler}
                />
                <button type="submit" className='submit-btn' >Submit</button>
            </form>
        </>
    )
}

export default Form;