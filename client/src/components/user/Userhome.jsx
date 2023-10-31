import React, {useEffect} from 'react'
import {  useNavigate } from 'react-router-dom'
export default function Userhome() {
  const navigate = useNavigate()
  const logout=()=>{
    localStorage.removeItem('userId')
    localStorage.removeItem('loginId')
    localStorage.removeItem('role')
    navigate('/')
  }
 useEffect(()=>{
  const userId=localStorage.getItem('userId')
  if(userId==null){
    navigate('/')
  }
 
 },[])
  return (
    < >
      <div className="w3-content" style={{ maxWidth: 1010 }}>

        <header
          className="w3-panel w3-center w3-opacity"
          // style={{ padding: "100px 100px" }}
        >
          <h1 className="w3-xlarge"><b/>SHARE A TRIP</h1>
          <h1>...</h1>
          <div className="w3-padding-32">
            <div className="w3-bar w3-border">
              <a href="/" className="w3-bar-item w3-button w3-light-gray">
                Home
              </a>
              <a href="#" className="w3-bar-item w3-button   ">
                Admin Packages
              </a>
              <a href="#" className="w3-bar-item w3-button  ">
                Sended Requests
              </a>
              <a href="#" className="w3-bar-item w3-button   ">
                Accepted Requests
              </a>
              <a href="#" className="w3-bar-item w3-button  ">
                Join Requests
              </a>
              <a href="#" className="w3-bar-item w3-button ">
                About
              </a>
              <a href="#" className="w3-bar-item w3-button  ">
                Contact
              </a>
              
            </div>
            <a onClick={logout} class="btn btn-primary">
                Logout
              </a>
            
          </div>
        </header>
      </div>

    </ >
  )
}
