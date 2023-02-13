
import { mobile } from "../responsive";
import "bootstrap/dist/css/bootstrap.min.css"
import "react-credit-cards/es/styles-compiled.css";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUsers } from "../redux/usersSlice";
import { useEffect, useState } from "react";
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    url("https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3466/a3398e03c058d99fb2b7837167cdbc26/no-dimensions-1x1-ratio.svg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: block;
  width:30%;
  margin: auto;
  background: #fefefe;
  box-shadow: 0px 14px 80px rgb(34 35 58 / 20%);
  padding: 25px 30px;
  border-radius: 15px;
  transition: all 0.3s;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  background-color: #fff;
  min-width: 32%;
  border: 1px solid #ced4da;
  margin: 20px 10px 0px 0px;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:active {
    border: 1px solid red;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px 20px;
  background-color: #FF055F;
  color: white;
  cursor: pointer;
  border-radius: 0.375rem;
`;

const MobileNumber = styled.div`
  flex: 1;
  background-color: #fff;
  min-width: 50%;
  border: 1px solid #ced4da;
  margin: 20px 10px 0px 0px;
  padding: 0.375rem 0.75rem;
  border-radius
`
const select =styled.select`
flex: 1;
  background-color: #fff;
  min-width: 32%;
  border: 1px solid #ced4da;
  margin: 20px 10px 0px 0px;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:active {
    border: 1px solid red;
  }
`
const linkStyle = {
   
  textDecoration: "none",
  color:"white"
  

};

const Register = () => {
  const sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("");
  const dispatch = useDispatch();
 
  const rll = window.localStorage.getItem("user")
  const cll = window.localStorage.getItem("")
  const output = JSON.parse(rll)
  const navigate = useNavigate()
  
let initialValues={}
const apicall=(e)=>{
  e.preventDefault();
  initialValues= {
    "firstname": "bunty",
    "lastname": "paswan",
    "mobilenumber": 7666827893,
    "age": 20,
    "gender": "male",
    "email" : "bunty@gmail.com",
    "password" : "bunty",
    "address" : {
        "country" : "India",
        "State": "maharashtra",
        "city" : "thane",
        "street": "House no5, Shankar Nagar, Amrabati",
        "zip": 444602
      }
  }
  dispatch(registerUsers(initialValues))
 
 }
 useEffect(() =>{
  if(rll !== cll){
    navigate('/')
  }

  
})

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="mobile no" />
          <Input placeholder="age" />
          {/* <DropDownListComponent id="ddlelement" dataSource={sportsData} placeholder="Select a game" floatLabelType="auto"/>); */}
          
          <Input placeholder="last name" />
          <Input placeholder="mobile no" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="country" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={apicall}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
