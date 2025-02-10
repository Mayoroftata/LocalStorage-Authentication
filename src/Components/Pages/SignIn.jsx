import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "react-toastify/ReactToastify.css";
import { ToastContainer,  toast } from "react-toastify";


const SignIn = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState('')
     const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
    

        if (userName=="" || password=="") {
            toast.warn('😔 Enter your details!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // transition: Bounce,
                });
        } else {
            // Retrieve users from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
    
        // Check if the entered credentials match any user
        const user = users.find(
          (user) => user.userName === userName && user.password === password
        );
        if (user) {
            toast.success('👍Login successful!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    // transition: Bounce,
                    });
            setUserName('');
            setPassword('');
            setTimeout(() => {
                navigate('/dashboard'); // Navigate to the login page after a delay
              }, 3000);
          } else {
            toast.warn('😔 Invalid username or password!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        // transition: Bounce,
                        });
          }
        }
        
    }
  return (
    <div>
        <section class="container">
            <div class="row">
                <div class="col d-none d-lg-block d-sm-none d-md-none"></div>
                <div class="col py-5">
                    <h3 class="text-center py-2">Account Log in</h3>
                    <div>
                        <form class="mb-3">
                            <label for="username or email" class="form-label">Username</label>
                            <input type="text" class="form-control py-3" onChange={(e)=>setUserName(e.target.value)} value={userName} required></input>

                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control py-3" onChange={(e)=>setPassword(e.target.value)} value={password} required></input>

                            <div class="">
                                <button type="button" class="btn btn-1 rounded-pill btn-primary w-100 fw-bold py-2" onClick={submit}>Log in</button>
                            </div>
                        </form>
                        
                        <div class="py-4 text-center">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                            <label class="form-check-label" for="defaultCheck1">
                            Keep me logged in
                            </label>
                        </div>
                        <div class="text-center text-dark anchor">
                            <p><a href="#" class="text-dark a-1">Forgotten password/ email</a></p>
                            <p>Don't have an account? <Link to="/signup" class="text-dark a-1">Sign up</Link></p>
                        </div>
                    </div>
                </div>
                <div class="col d-none d-lg-block d-sm-none d-md-none"></div>
            </div>
        </section>
        <ToastContainer/>
    </div>
  )
}

export default SignIn