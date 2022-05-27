
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {createUser} from '../../service/api.jsx';


const RegisterValid = () => {
    
    const initialValue = {
        name: '',
        email:'',
        password:'',
        checkPassword:'',
        role:'',
    }
    
    const [values, setValues] = useState({initialValue});
    
    const [msgErro, setMsgErro] = useState('');

    const navigate = useNavigate();
    
    const onChange = (e) =>{


        const {name, value} = e.target;
        
        setValues({...values,[name]: value});
        
    }
    
    
    const onSubmit = (e) =>{
        e.preventDefault()
        setMsgErro('')
        if(values.password !== values.checkPassword){
            setMsgErro('As senhas não coincidem')
        }else if(!/\S+@\S+\.\S+/.test(values.email)){
            setMsgErro('Email inválido')
        }else{
            createUser(values)
            .then((res) =>{
                switch (res.status){
                    case 200:
                        console.log('conseguiu')
                        return res.json();
                        case 403:
                            setMsgErro('Email já cadastrado')
                            break
                            default:
                                setMsgErro('Algo deu errado')
                            }
                            
                        })
                        .then((data) => {
                            console.log(data)
                            if(data.role === "hall"){
                                navigate('/hall');
                            }
                        })
                    }
                }
                return {onChange, onSubmit, msgErro};
            }
            
            
            export default RegisterValid;