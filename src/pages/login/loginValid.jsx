import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../service/apiUser.jsx'


const LoginValid = () => {

    const initialValue = {
        email: '',
        password: '',
    }

    const [values, setValues] = useState({ initialValue });

    const [msgErro, setMsgErro] = useState('');

    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;

        setValues({ ...values, [name]: value });
    }


    const onSubmit = (e) => {
        e.preventDefault();
        loginUser(values)
            .then((res) => {
                switch (res.status) {
                    case 200:
                        console.log('conseguiu');
                        return res.json();
                    case 400:
                        setMsgErro('Email ou senha inválidos')
                        break
                    default:
                        setMsgErro('Ops! Tente novamente mais tarde.')
                }
            })
            .then((data) => {
                console.log(data)
                localStorage.setItem('token', data.token)
                localStorage.setItem('role', data.role)
                navigate('/main')
            })
    }

    return { onChange, onSubmit, msgErro }
}

export default LoginValid;