import {useEffect} from "react";
import { useState } from "react";


const Signup = () => {



    useEffect(() => {
        document.title = "Signup";
    }, []
    );


    return (

        <div>

            {/* TODO: request user signup post uri from backend, and place in action prop. */}
           <div className="row-auto justify-content-center mb-5" >

                <h1 >Signup</h1>
                <br/>

                <form name='Signup'>
                   
                    <div className="col-12 mb-3">
                        <label className="visually-hidden" htmlFor='email'>Email</label>
                        <input className="form-control" id='email' type='email' placeholder='Please enter a valid email.' required={true} tabIndex={1}/>
                    </div>
                    <div className="col-12 mb-3">
                        <label className="visually-hidden" htmlFor='username'>Username</label>
                        <input className="form-control" id='username' type='text' placeholder='Please enter a username.' required={true} tabIndex={2}/>
                    </div>
                    <div className="col-12 mb-3">
                        <label className='form-label' htmlFor='password'>Password</label>
                        <input className="form-control" id='password' type='password' placeholder='Please enter a password.' required={true} tabIndex={3}/>
                    
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