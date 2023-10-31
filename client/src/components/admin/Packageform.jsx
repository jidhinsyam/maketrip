import React from 'react'

export default function Packageform() {
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
                        <h4 className="mb-4 pb-3">POST Packeges</h4>
                        <div className="form-group">
                          <input
                            type="text"
                            name="discription"
                            onChange={inputChange}
                           
                            className="form-style"
                            placeholder="Package discription"
                            id="logemail"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group  mt-2">
                          <input
                            type="date"
                            
                            onChange={inputChange}
                            name="date"
                            className="form-style"
                            placeholder="date"
                            id="date"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        <div className="form-group  mt-2">
                          <input
                            type="date"
                            onChange={inputChange}
                            name="sub date"
                            className="form-style"
                            placeholder="Last Submission Date"
                            id="date"
                            autoComplete="off"
                          />
                          <i className="input-icon uil uil-at" />
                        </div>
                        
                        <div className="form-group  mt-2">
                          <input
                            type="text"
                            onChange={inputChange}
                            name="price"
                            className="form-style"
                            placeholder="price per head"
                            id="price"
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
