// import React, { useState } from 'react'
// import axios from 'axios'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';


// export default function Login() {


//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
    

//   const navigate = useNavigate()
// const [input, setInput] = useState({
//   email: "",
//   password: ""
// })



// const inputChange = (Event) => {
//   const name = Event.target.name
//   const value = Event.target.value
//   setInput({ ...input, [name]: value })
// }
// const validate = (values) => {
//   var error = {}
//   if (!values.name) {
//     error.email = "enter your email"
//   }
//   if (!values.name) {
//     error.password = "enter the password"
//   }
//   return error
// }
// const validation = (Event) => {
//   Event.preventDefault()


//   // const submit = (Event)=>{
//   // Event.preventDefault()
//   //  console.log(input);

//   setFormErrors(validate(input))
//   setIsSubmit(true)
//   console.log('hai', input);
//   axios.post('http://localhost:6000/login', input).then((response) => {
//     console.log("res=======>", response.data);
//     console.log(response.data.success);
//     console.log(response.data);
//     if (response.data.success == true) {
//       if (response.data.role == 0) {
//         navigate('/admin')
//       }
//       if (response.data.role == 1) {
//         if (response.data.status == 0) {
//           toast.error('waiting for admins approval', {
//             position: "top-center",
//             autoClose: 5000,
//              hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "colored",
//           });
//         } else {
//           console.log(response.data);
//           localStorage.setItem('loginId',response.data.login_id)
//           localStorage.setItem('userId',response.data.userId)
//           localStorage.setItem('role',response.data.role)
//           navigate('/Userhome')
//         }

//       }
      
      
//     }
//   }).catch((err) => {
//     console.log(err);
//     toast.error(err.response.data.message, {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//     });
    
    
    
//   }).catch((err) => {
//     console.log(err);
//   })
  
// }


//   return (
//     <>
//      <div className='container-fluid'>
//     <div className="container register">
//   <div className="row">
//     <div className="col-md-3 register-left">
//       <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
//       <h3>Welcome</h3>
//       <p>LOGIN NOW!!</p>
//       <input type="submit" name="" defaultValue="Login" />
//       <br />
//     </div>
//     <div className="col-md-9 register-right">
//        <div className="tab-content" id="myTabContent">
//         <div
//           className="tab-pane fade show active"
//           id="home"
//           role="tabpanel"
//           aria-labelledby="home-tab"
//         > <div style={{ position: "absolute", left: 730, top: 120 }}>
//           <h3 className="register-heading">Login Here</h3>
//           </div>
//           <div className="row register-form">
//             <div className="col-md-6">
//             <div style={{ position: "absolute", left: 700, top: 200 }}>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="email *"
//                   defaultValue=""
//                   name='email'
//                   onChange={inputChange}
//                 />
//               </div>
//               </div>
//               <div style={{ position: "absolute", left: 700, top: 270 }}>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Password *"
//                   defaultValue=""
//                   name='password'
//                   onChange={inputChange}
//                 />
//               </div>
//               </div>
//             </div>
//             <div style={{ position: "absolute", left: 280, top: 270 }}>
//             <div className="col-md-6">
            
             
              
               
//               <input
//                 type="submit"
//                 className="btnRegister"
//                 defaultValue="register"
//                 onClick={validation}
//               />
//             </div>
//           </div>
//           </div>
//         </div>
       
//       </div>
//     </div>
//   </div>
// </div>
// </div>

//     </>
//   )
// }
