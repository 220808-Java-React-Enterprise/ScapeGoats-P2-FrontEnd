/*Program Name: Reality Escape Cards
Project team: Escape Goats
Componet name: Signup.js
Programmer: Delane Green
Created: 09/13/2022
Last modified: 09/13/2022
*/
import React from "react";
import {useEffect} from "react";
import {useForm} from "react";


const Signup = () => {

    //TODO: const {register, handleSubmit, error} = useForm();
    //TODO: const onSubmit = (data) => { console.log(data); };


    useEffect(() => {
        document.title = "Signup";
    }, []
    );

    return (

        <div>
            <h1 align='center'>Signup</h1>
            <br/>

            {/* TODO: request user signup post uri from backend, and place in action prop. */}
            <form class="row row-cols-lg-auto g-3 align-items-center" action='scratchpad.txt' method='post' name='Signup' align='center'>
                <view></view>
                <div class="col-12">
                    <label class="visually-hidden" for='email'>Email</label>
                    <input class="form-control" id='email' type='email' placeholder='Please enter a valid email.' required='required' tabindex={1}/>
                </div>
                <div class="col-12">
                    <label class="visually-hidden" for='username'>Username</label>
                    <input class="form-control" id='username' type='text' placeholder='Please enter a username.' required='required' tabindex={2}/>
                </div>
                <div class="col-12">
                    <label for='password'>Password</label>
                    <input class="form-control" id='password' type='password' placeholder='Please enter a password.' required='required' tabindex={3}/>
                 
                </div>
               
                <div class="col-12">
                     <br/>
                    <input class="form-control" id='signupSubmit' type='submit' value='Signup!' tabIndex={4} accessKey='enter'/>
                </div>
            </form>


        </div>

    )
}

export default Signup;