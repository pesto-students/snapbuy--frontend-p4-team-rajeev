
import { mobile } from "../responsive";
import "bootstrap/dist/css/bootstrap.min.css"
import "react-credit-cards/es/styles-compiled.css";
import styled from "styled-components";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from "react";

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


const MobileVerification = () => {
    const [OTP, setOTP] = useState("");
  return (
    <Container>
      <Wrapper>
        <Title>Verify Mobile Number</Title>
        <Form>
        <Agreement>
        An OTP has been sent to your entered Mobile Number
          </Agreement>
       <OtpInput><OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} secure /></OtpInput> 
       <OtpInput><ResendOTP onResendClick={() => console.log("Resend clicked")} /></OtpInput>
          <Button>Submit</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default MobileVerification