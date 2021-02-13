import React from 'react'
import "./Login.css";

import {Button} from "@material-ui/core";
import {auth,provider} from "../../firebase";
import { actionTypes } from '../../reducer';
import {useStateValue} from "../../StateProvider";
function Login() {
    const [state, dispatch]= useStateValue();

    const signIn = () =>{
        
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        })
        .catch((error)=> alert(error.message));

    };
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://th.bing.com/th/id/R8e1e25f0151e2c319edb2aa01690e425?rik=3cw5V3mRdqONtg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2016%2f11%2fFacebook-Logo-Meaning.jpg&ehk=FgCeZkf1OpID4t2mYFq2yRNkztI%2bRdJPC4oKPmv7KeY%3d&risl=&pid=ImgRaw" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;
