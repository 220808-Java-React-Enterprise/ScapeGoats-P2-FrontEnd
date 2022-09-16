import axios from "axios";

//Creating a connection constant to the api.
const TAROT_API = axios.create(
    {
        baseURL: "https://rws-cards-api.herokuapp.com/api/v1/cards",
        headers: {"Content-type" : "application/json"}
    }
) 

export default TAROT_API;