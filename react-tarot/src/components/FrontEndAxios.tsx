import axios from "axios"
const FrontEndAxios = axios.create({
    baseURL : "https://rws-cards-api.herokuapp.com/api/v1/cards",
    headers : {
        "Content-type" :"application/json"
    }
})
export default FrontEndAxios;