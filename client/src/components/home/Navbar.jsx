import React from 'react'

export default function Navbar() {
  return (
    <> 
   <div className="w3-content" style={{ maxWidth: 500 }}>
 
  <header
    className="w3-panel w3-center w3-opacity"
    style={{ padding: "10px 10px" }}
  >
    <h1 className="w3-xlarge">SHARE A TRIP</h1>
    <h1>...</h1>
    <div className="w3-padding-32">
      <div className="w3-bar w3-border">
        <a href="#" className="w3-bar-item w3-button">
          Home
        </a>
        <a href="#" className="w3-bar-item w3-button w3-light-grey">
          About
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Contact
        </a>
        
      </div>
    
    </div>
  </header>
</div>



    </>
  )
}
