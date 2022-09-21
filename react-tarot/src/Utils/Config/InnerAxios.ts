import axios from "axios";

//Creating a connection constant to the api.
const InnerAxios = axios.create(
    {
        //Melissa base waiting for dto agreement. //baseURL: "http://tarotcards-env.eba-sjeppasn.us-west-1.elasticbeanstalk.com/p2-scape-goats",
        baseURL: "http://tarotcards-env.eba-sjeppasn.us-west-1.elasticbeanstalk.com/p2-scape-goats",
        headers: {"Content-type" : "application/json",
    
}
    }
) 



export default InnerAxios;
