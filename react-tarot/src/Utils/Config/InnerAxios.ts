import axios from "axios";

//Creating a connection constant to the api.
const SCAPE_GOATS_API = axios.create(
    {
        baseURL: "http://tarotcards-env-1.eba-sjeppasn.us-west-1.elasticbeanstalk.com/p2-scape-goats",
        headers: {"Content-type" : "application/json",
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Methods" : "DELETE, POST, GET, OPTIONS"
        }
    }
) 

export default SCAPE_GOATS_API;