import React,{Fragment, useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import { getTotals } from '../redux/cartRedux';

import { Figure } from 'react-bootstrap';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar } from '@mui/material';


function Profile() {
    const cart = useSelector((state) => state.cart);
    const [user,setUser] = useState(false)
 
    const navigate =useNavigate();
    const rll = window.localStorage.getItem("user")
    const cll = window.localStorage.getItem("")
    const output = JSON.parse(rll)
    const [name,setName] = useState('');
    const [lastname,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [join,setJoin] = useState('');
    const dispatch = useDispatch();


    
  
   
    useEffect(() => {

        if(rll !== null){
          setUser(true)
          setName(output.firstname)
          setLastName(output.lastname)
          setEmail(output.email)
          setJoin(output.createdAt)
         
        }
    
      },[rll]) 
    
      useEffect(() => {
       
        dispatch(getTotals());
      }, [cart, dispatch]);
  return (
    <div>
         <Announcement/>
               <Navbar/>
               <div class="container container-fluid">
        <h2 class="mt-5 ml-5">My Profile</h2>
        <div class="row justify-content-around mt-5 user-info">
            <div style={{    background: "white"}} class="col-12 col-md-3">
                
                   
                    <Figure style={{    alignItems:"center"}} class='avatar avatar-profile'>
                   
                         </Figure>
                         <a href="#" id="edit_profile" class="btn  btn-block my-4">
                         <PersonIcon sx={{ fontSize: "250px" }} />
                            </a>
                <a href="#" id="edit_profile" class="btn btn-primary btn-block my-5">
                    Edit Profile
                </a>
            </div>
     
            <div class="col-12 col-md-5">
                 <h4>Full Name</h4>
                 <p>{name} {lastname}</p>
     
                 <h4>Email Address</h4>
                 <p>{email}</p>

                 <h4>Join Date</h4>
                 <p>{join}
        </p>

                 <a href="#" class="btn btn-danger btn-block mt-5">
                    My Orders
                </a>

                <a href="#" class="btn btn-primary btn-block mt-3">
                    Change Password
                </a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Profile