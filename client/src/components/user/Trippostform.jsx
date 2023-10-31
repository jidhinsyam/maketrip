import React,{ useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


export default function Trippostform() {
 const navigate=useNavigate()
  const [input,setInput] = useState({ })
 
  const inputChange = (Event) => {
    const name = Event.target.name
    const value = Event.target.value
    setInput({ ...input, [name]: value })
  }
  const submit = (Event) => {
    Event.preventDefault()
    console.log(input);



    axios.post(`http://localhost:1000/make`,input).then((response)=>{
     
    console.log("res=======>",response);
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
  }).catch((err)=>{
    console.log(err);
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
                        <h4 className="mb-4 pb-3">Make a Trip</h4>
                        <div className="form-group">
                          <input
                            type="Date"
                            name="date"
                            onChange={inputChange}
                           
                            className="form-style"
                            placeholder="Date"
                            id="logemail"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group  mt-2">
                          <input
                            type="time"
                            
                            onChange={inputChange}
                            name="dpttime"
                            className="form-style"
                            placeholder="Dpt Time"
                            id="time"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group  mt-2">
                          <input
                            type="arrtime"
                            onChange={inputChange}
                            name="arrtime"
                            className="form-style"
                            placeholder="Assumed Arrival Time"
                            id="arrtime"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        
                        <div className="form-group  mt-2">
                          <input
                            type="from"
                            onChange={inputChange}
                            name="arrtime"
                            className="form-style"
                            placeholder="You are from"
                            id="arrtime"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group  mt-2">
                          <input
                            type="arrtime"
                            onChange={inputChange}
                            name="to"
                            className="form-style"
                            placeholder="To.."
                            id="arrtime"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group  mt-2">
                          <input
                            type="vehicle"
                            onChange={inputChange}
                            name="vehicle"
                            className="form-style"
                            placeholder="vehicle"
                            id="vehicle"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        
                       
                        
                        <p className="mb-0 mt-4 text-center">
                        <button
                className="btn mt-4"
                onClick={submit}
                type="submit"
                id="sendMessageButton"
              >
                POST
              </button>
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
