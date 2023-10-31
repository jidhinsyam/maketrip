import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
export default function Viewpost() {
  const [make, setMake] = useState([])
    console.log ();
    const{post}=useParams()
    useEffect(() => {
       const makeId=localStorage.getItem('userId')
       console.log(makeId);
      axios.get(`http://localhost:1000/make/view-post/${make}`).then((response)=> {
           console.log("response====>", response);
           setMake(response.data.details)
      }).catch((err) => {
          console.log(err);
      })
  }, [])

  

  return (
    < > 
    
     <div className="container-fluid">
      
   
     {make.map((data, key)=>( 
     <div className="card row" style={{ width: "18rem " }}>
    
  <img src="vvv.png" className="card-img-top" alt="..." />
 
  <div className="card-body">

    <h5 className="card-title">{data.from}  {data.userId}</h5>
    <p className="card-text">
       {data.to},{data.date}
    </p>
    <a href="#" className="btn btn-primary">
      view profile
    </a>
    <a href="/join" className="btn btn-primary">
      join
    </a>
  </div>
 </div>
 ))} 
</div>
 
   
    
    </ >
  )
}
