import axios from 'axios';
import  React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  

export default function Tripjoinform() {
  const navigate=useNavigate()
  var [date,setDate] = useState(new Date());
  useEffect(() => {
    var timer = setInterval(()=>setDate(new Date()), 1000 )
    return function cleanup() {
        clearInterval(timer)
    }

});
const[input,setInput] =useState({ })

const inputChange=(e)=>{
  const name=e.target.name
  const value=e.target.value
  setInput({...input,[name]:value})

}
const submit=(e)=>{
  e.preventDefault()
  console.log(input);

  axios.post("http://localhost:1000/join",input).then((response)=>{
    console.log('res========>',response);
    if(response.data.success===true){
      toast.success('Sucessfully added', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      navigate('/user')
    }
  }).catch((error)=>{
    console.log(error);
  })
}

  return (
    <>
    < ToastContainer/>
    <a href="https://front.codes/" className="logo" target="_blank">
      <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
    </a>
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>....</span>
                 
              </h6>
              
              <label htmlFor="reg-log" />
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Join a Trip</h4>
                        <div className="form-group">
                          <input
                            
                             value={date.toLocaleDateString()}
                            name="date"
                            className="form-style"
                            placeholder="Date"
                            id="logemail"
                            autoComplete="off"
                            onChange={inputChange}
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group  mt-2">
                          <input
                            
                             value={date.toLocaleTimeString()}
                            name="time"
                            className="form-style"
                            placeholder="time"
                            id="logemail"
                            autoComplete="off"
                            onChange={inputChange}
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group  mt-2">
                          <input
                            type="text"
                            name="from"
                            className="form-style"
                            placeholder="from"
                            id="from"
                            autoComplete="off"
                            onChange={inputChange}
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group  mt-2">
                          <input
                            type="text"
                            name="to"
                            className="form-style"
                            placeholder="to"
                            id="to"
                            autoComplete="off"
                            onChange={inputChange}
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        
                       
                        <button
                className="btn mt-4"
                onClick={submit}
                type="submit"
                id="sendMessageButton"
              >
                JOIN
              </button>
                        <p className="mb-0 mt-4 text-center">
                          <a href="#0" className="link">
                            Forgot your password?
                          </a>
                        </p>
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

