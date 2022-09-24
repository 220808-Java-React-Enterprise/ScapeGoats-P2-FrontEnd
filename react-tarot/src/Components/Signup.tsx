import {useEffect} from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import InnerAxios from "../Utils/Config/InnerAxios";



const Signup = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Signup";
    });

    //const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    function submit(event : any) {
        event.preventDefault();
        InnerAxios.post('/users/signup', {
            //email : email,    Out for now maybe stretch.
            username : username,
            password : password
            

        }).then((resp) => {

            //ForTesting --> console.log(("Submited\nUser id: " + resp.data));
            //alert('Welcome!');
            alert('Signup successful!')
            navigate('/Login');

        }).catch(error => {

            console.log(error?.resoponse?.data?.message ?? 'No error message found.');
            alert(error?.resoponse?.data?.message ?? 'Username must be between 3 and 15 charaters.\nPassword must be at least 8 charaters and contain at least one; upper case letter, lower case letter, number, and a symbol.\nPlease try again!');

        })

        //resetting username and password.
        setUsername('');
        setPassword('');
    }


    /*Removed to match backend dto
    function updateEmail (event : any) {
        setEmail(event.target.value);
    }*/
    function updateUsername (event : any) {
        setUsername(event?.target?.value ?? ''); //Playing around with optional chaining.
    }
    function updatePassword (event : any) {
        setPassword(event?.target?.value ?? '');
    }

    return (

        <div className="Signup" id="Signup-Div-Master">

           <div className="Signup" id="Signup-Div-Main">

                <h1 >Signup</h1>
                <br/>

                <form className="Signup" id="Signup-Form" onSubmit={submit} name='Signup'>                   
                  
                    <div className="Signup-Div-Inner">
                        <label className="Signup-Label" htmlFor='username'>Username</label>
                        <input className="Signup-Input" value={username} onChange={updateUsername} id='username' type='text' placeholder='Please enter a username.' required={true} tabIndex={2}/>
                    </div>
                    <div className="Signup-Div-Inner">
                        <label className='Signup-Label' htmlFor='password'>Password</label>
                        <input className="Signup-Input" value={password} onChange={updatePassword} id='password' type='password' placeholder='Please enter a password.' required={true} tabIndex={3}/>
                    
                    </div>
                
                    <div className="Signup-Div-Inner">
                        <br/>
                        <input className="Signup-Button" id='signupSubmit' type='submit' value='Signup!' tabIndex={4} accessKey='enter'/>
                    </div>
                </form>
           </div>


        </div>

    )
}

export default Signup;