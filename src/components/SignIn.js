
import { Button } from '@mui/material'
import React from 'react'
import firebase from "firebase/compat/app";
import { auth } from "../firebase"

function SignIn() {
    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
  return (
    <div>
        <Button onClick={signInWithGoogle}>
            Sign In con Google
        </Button>
    </div>
  )
}

export default SignIn