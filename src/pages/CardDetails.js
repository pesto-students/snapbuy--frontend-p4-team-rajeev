import React from 'react'
import ReactDOM from "react-dom";
import CardForm from "../Components/CardForm";
import "react-credit-cards/es/styles-compiled.css";
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';

import "bootstrap/dist/css/bootstrap.min.css"
import "./CardDetails.css"

const CardDetails = () => {
  return (
    <div>
        <Announcement/>
        <Navbar />
    <div className="card-form-container">
        
    <CardForm />
  </div>
    </div>
    
  )
}

export default CardDetails