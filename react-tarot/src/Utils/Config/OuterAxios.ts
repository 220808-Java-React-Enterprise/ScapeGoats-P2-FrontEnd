import axios from "axios"
const OuterAxios = axios.create({
    baseURL : "https://rws-cards-api.herokuapp.com/api/v1/cards",
    headers : {
        "Content-type" :"application/json"
    }
})
export default OuterAxios;
