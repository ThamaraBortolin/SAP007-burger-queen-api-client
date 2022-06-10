import {getToken} from './apiUser.jsx'
const baseURL = 'https://lab-api-bq.herokuapp.com';
const apiProducts = `${baseURL}/products/`;
// const apiOrders = `${baseURL}/orders/`;

export const role = () => localStorage.getItem("role")

export const getProducts = () => {
    return fetch(apiProducts,{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': getToken(),
          },
    })
};
