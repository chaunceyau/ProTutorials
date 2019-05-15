import firebase from 'firebase';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavigationBar: React.FC<any> = (props: any) => {

    const provider = new firebase.auth.GoogleAuthProvider()
    // const email = 'test@test.com', password = 'pass01'
    return (
        <Menu inverted color="red">
            <Menu.Item header>
                <Link to='/'>ProTutorials</Link>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item name='home' active={props.location.pathname === '/'} as={Link} to='/' />
                <Menu.Item name='about' active={props.location.pathname === '/about'} as={Link} to='/about' />
                <Menu.Item name='register' onClick={() => {
                    firebase.auth().signInWithPopup(provider).then(() => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        // var token = result.credential.accessToken;
                        // // The signed-in user info.
                        // var user = result.user;
                        // ...
                        console.log('wohoo')
                    }).catch(function (error) {
                        console.log('fuck', error)

                        // Handle Errors here.
                        // var errorCode = error.code;
                        // var errorMessage = error.message;
                        // The email of the user's account used.
                        // var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        // var credential = error.credential;
                        // ...
                    });
                }} icon="user circle" />
            </Menu.Menu>
        </Menu>
    )
}

export default withRouter(NavigationBar)