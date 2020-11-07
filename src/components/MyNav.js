import React from 'react'
import { Link } from 'react-router-dom'


function MyNav(props) {
    return (
        <div>
        <Link to="/">SoundBirds Logo</Link>


        {
                        props.loggedInUser ? (
                            <button onClick={props.onLogout}>Logout</button>
                        ) : (
                            <>
                            <Link to="/signin"><button>Sign In</button></Link>
                            <Link to="/signup"><button>Sign Up</button></Link>
                            </>
                        )
                    }
        </div>
    )
}


export default MyNav;