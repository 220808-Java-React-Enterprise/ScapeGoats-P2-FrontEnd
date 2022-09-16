import axios from "axios";

//Creating a connection constant to the api.
const InnerAxios = axios.create(
    {
        baseURL: "http://tarotcards-env-1.eba-sjeppasn.us-west-1.elasticbeanstalk.com/p2-scape-goats",
        headers: {"Content-type" : "application/json",
        }
    }
) 

export default InnerAxios;
