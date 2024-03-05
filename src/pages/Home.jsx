import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Home = () => {

    const handleSignOut = () => {
        signOut(auth).then(() => console.log("sign out")).catch((error) => console.log(error));
    }

    return (
        <div className='section'>
            <h2>private page</h2>
            <button onClick={handleSignOut}>sign out</button>
        </div>
    )
}

export default Home
