import React, { useEffect,useState } from 'react'
import axios from 'axios'
export default function Viewusers() {

  const [user, setUser] = useState([])
console.log(user);
useEffect(() => {
  axios.get('http://localhost:1000/register/view-user').then((response) => {
      
      setUser(response.data.details)
  }).catch((err) => {
      console.log(err);
  })
}, [])

  return (
    < > 
     
     <div className="container-fluid">
     {user.map((data, key)=>( 
     <div className="card" style={{ width: "18rem" }}>
    <div className='row'>
  <img src="img.png" className="card-img-top" alt="..." />
 
  <div className="card-body">

    <h5 className="card-title">Name{data.name} </h5>
    <p className="card-text">
       {data.adress},{data.age}
    </p>
    <a href="#" className="btn btn-primary">
      contact
    </a>
    <a href="#" className="btn btn-primary">
      Update
    </a>
  </div>
 
</div>
</div>
  ))}
</div>

    </ >
  )
}
