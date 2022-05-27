const baseURL = 'https://lab-api-bq.herokuapp.com';
const apiUser = `${baseURL}/users/`;
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
        }),
    })
}