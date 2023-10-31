import React from 'react'

export default function Adminnav() {
  return (
    < >
    <div className="w3-content" style={{ maxWidth: 700 }}>
 
 <header
   className="w3-panel w3-center w3-opacity"
   style={{ padding: "10px 10px" }}
 >
   <h1 className="w3-xlarge">SHARE A TRIP</h1>
   <h1>...</h1>
   <div className="w3-padding-32">
     <div className="w3-bar w3-border">
       <a href="#" className="w3-bar-item w3-button w3-light-grey">
         Home
       </a>
       <a href="/view users" className="w3-bar-item w3-button">
         Registerd Users
       </a>
       <a href="/Package" className="w3-bar-item w3-button">
         Add Packages
       </a>
       <a href="#" className="w3-bar-item w3-button  ">
         About
       </a>
       <a href="#" className="w3-bar-item w3-button">
         Contact
       </a>
       
     </div>
   
   </div>
 </header>
</div>

    
    
     </ >
  )
}
