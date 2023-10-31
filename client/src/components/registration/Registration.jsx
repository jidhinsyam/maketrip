import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
export default function Registration() {
const navigate = useNavigate()
  const [input,setInput] = useState({ })
  const [user,setUser] = useState({ })

  const inputchange = (e)=>{
    const name = e.target.name        
    const value = e.target.value
    setInput({...input,[name]:value})
  }

  const inputchange1 = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setUser({...user,[name]:value})
  }


  const validates = (e)=>{
   
    e.preventDefault();
    console.log(input);
    
    axios.post('http://localhost:1000/register/userreg',input)
    .then((response)=>{console.log("res====>",response.data.data);
    if(response.data.success===true)
    {
      toast.success('Sucessfully Registerd', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    }

    }).catch((err)=>{
      console.log(err);
    })


  }
  const validate = (e)=>{
   
    e.preventDefault();
    console.log(input);
    
    axios.post('http://localhost:1000/login/login',user)
    .then((response)=>{console.log("res====>",response.data);
    if(response.data.success===true)
    if (response.data.userRole == 3) {
      navigate('/admin')
    }
    {
      if (response.data.userRole == 1) {
      toast.success('Sucessfully logind', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
            localStorage.setItem('loginId',response.data.loginId)
            localStorage.setItem('userId',response.data.userId)
            localStorage.setItem('role',response.data.userRole)
            navigate('/user')
    }
  }

    }).catch((err)=>{
      console.log(err); 
    })

  
  }
  
  return (
    <>
    <ToastContainer/>
    <a href="https://front.codes/" className="logo" target="_blank">
      <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
    </a>
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log" />
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="form-group">
                          <input
                            type="email"
                           
                            className="form-style"
                            placeholder="Your Email"
                            id="logemail"
                            autoComplete="off"
                            name='email'
                            onChange={inputchange1}
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            
                            className="form-style"
                            placeholder="Your Password"
                            id="logpass"
                            autoComplete="off"
                            name='password'
                            onChange={inputchange1}
                          />
                          <i className="input-icon uil uil-lock-alt" />
                        </div>
                        <a href="#" className="btn mt-4" onClick={validate}>
                          submit
                        </a>
                        <p className="mb-0 mt-4 text-center" >
                          <a href="#0" className="link">
                            Forgot your password?
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Sign Up</h4>
                        <div className="form-group">
                        
                          <input
                            type="text"
                           
                            className="form-style"
                            placeholder="Your Full Name"
                            id="logname"
                            autoComplete="off"
                            name='name'
                            onChange={inputchange}
                          />
                          <i className="input-icon uil uil-user" />
                        </div>
                        <div className="form-group mt-2">
                        
                          <input
                            type="text"
                            
                            className="form-style"
                            placeholder="Your Adress"
                            id="logname"
                            autoComplete="off"
                            name="adress"
                            onChange={inputchange}
                          />
                          <i className="input-icon uil uil-user" />
                        </div>
                        <div className="form-group mt-2 ">
                        
                          <input
                            type="text"
                            
                            className="form-style"
                            placeholder="Contact number"
                            id="logname"
                            autoComplete="off"
                            name="contact"
                            onChange={inputchange}
                          />
                          <i className="input-icon uil uil-user" />
                        </div>
                        <div className="form-group mt-2">
                         
                          <input
                            type="text"
                            
                            className="form-style"
                            placeholder="Age"
                            id="logname"
                            autoComplete="off"
                            name="age"
                            onChange={inputchange}
                          />
                          <i className="input-icon uil uil-user" />
                        </div>

                        <div className="form-group mt-2">
                        
                          <input
                            type="email"
                            
                            className="form-style"
                            placeholder="Your Email"
                          
                            autoComplete="off"
                            name="email"
                            onChange={inputchange}
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group mt-2">
                         
                          <input
                            type="password"
                             
                            className="form-style"
                            placeholder="Your Password"
                            id="logpass"
                            autoComplete="off"
                            name="password"
                            onChange={inputchange}
                          />
                          <i className="input-icon uil uil-lock-alt" />
                        </div>
                        <a href="#" className="btn mt-4" onClick={validates}>
                          submit
                        
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  

  
  )
}
