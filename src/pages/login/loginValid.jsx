import { useState } from 'react';

const LoginValid = () =>{

    const initialValue = {
        email:'',
        password:'',
    }

    const [values, setValues] = useState({initialValue});


    function onChange(e){
        const {name, value} = e.target;

        setValues({...values, [name]: value});
    }

    function onSubmit(e){
        e.preventDefault();
    }

    return {onChange, onSubmit}
}

export default LoginValid;