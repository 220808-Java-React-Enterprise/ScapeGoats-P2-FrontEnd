import {useEffect} from "react";
import { useState } from "react";
import TAROT_API from "../Utils/Config/OutterAxios";
import { useNavigation } from "react-router-dom"; 
import SCAPE_GOATS_API from "../Utils/Config/InnerAxios";



const Signup = () => {

    useEffect(() => {
        document.title = "Signup";
    }, []
    );

    
    function submit(event : any) {
        event.preventDefault();
        SCAPE_GOATS_API.post('/users/signup', {
            email : email,
            username : username,
            password : password
            

        }).then(() => {

            console.log(("Submited"));

        }).catch(error => {

            console.log(error.resoponse.data.message);

        })
    }

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function updateEmail (event : any) {
        setEmail(event.target.value);
    }
    function updateUsername (event : any) {
        setUsername(event.target.value);
    }
    function updatePassword (event : any) {
        setPassword(event.target.value);
    }

    const handleSubmit = (event : any) => {
        event.preventDefault();
        console.log(username, email, password);
    }


    return (

        <div>

            {/* TODO: request user signup post uri from backend, and place in action prop. */}
           <div className="row-auto justify-content-center mb-5" >

                <h1 >Signup</h1>
                <br/>

                <form onSubmit={submit} name='Signup'>
                   
                    <div className="col-12 mb-3">
                        <label className="visually-hidden" htmlFor='email'>Email</label>
                        <input className="form-control" value={email} onChange={updateEmail} id='email' type='email' placeholder='Please enter a valid email.' required={true} tabIndex={1}/>
                    </div>
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