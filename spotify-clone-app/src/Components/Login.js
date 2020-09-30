import React from 'react'
import '../Style/Login.css'
import { accessUrl } from "../spotify";

const Login = () => {
    return (
        <div className="login">
            <img src="#" alt=""/>
            <a href={ accessUrl }>Login with Spotify</a>
        </div>
    )
}

export default Login
