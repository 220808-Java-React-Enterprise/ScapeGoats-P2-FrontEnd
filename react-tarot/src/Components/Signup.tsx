import {useEffect} from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import InnerAxios from "../Utils/Config/InnerAxios";



const Signup = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Signup";
    });

    
    function submit(event : any) {
        event.preventDefault();
        InnerAxios.post('/users/signup', {
            //email : email,    Out for now maybe stretch.
            username : username,
            password : password
            

        }).then((resp) => {

            //WIP for getting the user ID.
            //var userId = resp.data;
            //console.log(userId);

            console.log(("Submited"));

        }).catch(error => {

            console.log(error.resoponse.data.message);

        })
    }

    //const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    /*function updateEmail (event : any) {
        setEmail(event.target.value);
    }*/
    function updateUsername (event : any) {
        setUsername(event?.target?.value ?? ''); //Playing around with optional chaining.
    }
    function updatePassword (event : any) {
        setPassword(event?.target?.value ?? '');
    }

    const handleSubmit = (event : any) => {
        event.preventDefault();
        console.log(username, password);
    }


    return (

        <div>

            {/* TODO: request user signup post uri from backend, and place in action prop. */}
           <div className="row-auto justify-content-center mb-5" >

                <h1 >Signup</h1>
                <br/>

                <form onSubmit={submit} name='Signup'>                   
                  
                    <div className="col-12 mb-3">
                        <label className="visually-hidden" htmlFor='username'>Username</label>
                        <input className="form-control" value={username} onChange={updateUsername} id='username' type='text' placeholder='Please enter a username.' required={true} tabIndex={2}/>
                    </div>
                    <div className="col-12 mb-3">
                        <label className='form-label' htmlFor='password'>Password</label>
                        <input className="form-control" value={password} onChange={updatePassword} id='password' type='password' placeholder='Please enter a password.' required={true} tabIndex={3}/>
                    
                    </div>
                
                    <div className="col-12 mb-3">
                        <br/>
                        <input className="form-control" id='signupSubmit' type='submit' value='Signup!' tabIndex={4} accessKey='enter'/>
                    </div>
                </form>
           </div>


        </div>

    )
}

export default Signup;