import React from 'react'
import { Link } from 'react-router-dom'

const Signup = ()=>{
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
            <h2>Instagram</h2>
            <input type="text" placeholder="name"/>
            <input type="text" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <button className="btn waves-effect waves-light #29b6f6 light-blue darken-1">
                Signup
            </button>
            <h5>
                <Link to="/signin">Already have an account ?</Link>
            </h5>
            </div>
        </div>
    )
}

export default Signup