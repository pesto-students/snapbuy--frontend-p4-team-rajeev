
import { mobile } from "../responsive";
import "bootstrap/dist/css/bootstrap.min.css"
import "react-credit-cards/es/styles-compiled.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
width: 450px;
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
  min-width: 100%;
  border: 1px solid #ced4da;
  margin: 20px 10px 0px 0px;
  padding: .375rem 0.75rem;
  border-radius: 0.375rem;
  appearance: none;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:Active {
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
const linkStyle = {
   
  textDecoration: "none",
  color:"white"
  

};

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button><Link to="/MobileVerification" style={linkStyle}>CREATE</Link></Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
