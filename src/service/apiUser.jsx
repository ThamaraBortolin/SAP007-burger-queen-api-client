const baseURL = 'https://lab-api-bq.herokuapp.com';
const apiUser = `${baseURL}/users/`;
const apiAuth = `${baseURL}/auth/`
const headers = {'Content-Type': 'application/json'};


export const createUser = (values) =>{
    return fetch (apiUser,{
        method:"POST",
        headers,
        body: JSON.stringify({
            name: values.name,
            email: values.email,
            password: values.password,
            role: values.role,
            restaurant: "Thata's Burguer"
        })
    })
}

export const loginUser = (values) =>{
    return fetch(apiAuth,{
        method:"POST",
        headers,
        body:JSON.stringify({
            email:values.email,
            password:values.password
        })
    })
}

export const logOut = () => localStorage.removeItem('token')

export const getToken = () => localStorage.getItem('token')