import firebase from 'firebase';
import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';


firebase.initializeApp({
    apiKey: "AIzaSyD8GONvjBGih8C5ZXMnidRlBfWk8oSsE4w",
    authDomain: "protutorials-prod.firebaseapp.com",
    databaseURL: "https://protutorials-prod.firebaseio.com",
    projectId: "protutorials-prod",
    storageBucket: "protutorials-prod.appspot.com",
    messagingSenderId: "196856567642",
    appId: "1:196856567642:web:8910069f047405f3"
})

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
};

class SignInScreen extends React.Component {
    render() {
        return (
            <div>
                <h1>My App</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    }
}

export default SignInScreen