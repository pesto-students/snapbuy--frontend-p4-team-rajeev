
import { mobile } from "../responsive";
import "bootstrap/dist/css/bootstrap.min.css"
import "react-credit-cards/es/styles-compiled.css";
import styled from "styled-components";



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
height:60vh;
margin: auto;
background: #fefefe;
box-shadow: 0px 14px 80px rgb(34 35 58 / 20%);
padding: 25px 30px;
border-radius: 15px;
transition: all 0.3s;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
display:flex;
justify-content:center;
align-items:center;
  font-size: 20px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;



const Agreement = styled.span`
display:flex;
justify-content:center;
align-items:center;
  font-size: 12px;
  width: 100%;
  

`;
const OtpInput=styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 100%;
margin:40px 10px;
`
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px 20px;
  background-color: #FF055F;
  color: white;
  cursor: pointer;
  border-radius: 0.375rem;
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

const ForgotPass = () => {
  return (
    <Container>
    <Wrapper>
      <Form>
  
     <OtpInput>
      <Title>Verify With Email</Title></OtpInput> 
     <OtpInput> <Input placeholder="email" /></OtpInput>
        <Button>Submit</Button>
      </Form>
    </Wrapper>
  </Container>
  )
}

export default ForgotPass