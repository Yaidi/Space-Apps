import React from 'react';
import {useHistory} from 'react-router-dom';
import firebase from 'firebase';

function authSocialMedia (provider){
    const providers = {
 google: new firebase.auth.GoogleAuthProvider(),
 facebook:new firebase.auth.FacebookAuthProvider(),
    }
    return firebase.auth().signInWithPopup(providers[provider])
}
const Auth = () =>{
  let history= useHistory();
    function goo (e) {
        e.preventDefault();
        authSocialMedia('google').then( () =>{
            history.push('/Home')
            }
            )
    }
    return(
        <div>
   <p>O inicia sesión con</p>
    <img src={'hi'} className="google" alt="googleLogin" onClick={goo}/>
        </div>
    )
}
export default Auth