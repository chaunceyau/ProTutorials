import firebase from 'firebase';
import * as React from 'react';
export interface IProps {
}

export default class Sport extends React.Component<IProps, any> {
    render() {
        var provider = new firebase.auth.EmailAuthProvider()


        return (
            <div>
                hmm, a sport :)
                <button onClick={() => { firebase.auth().signInWithPopup(provider).then(() => { }).catch(err => console.log(err)) }}>Sign in</button>
            </div>
        );
    }
}
