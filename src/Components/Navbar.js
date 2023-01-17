import { NoEncryption, Search } from '@mui/icons-material'
import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Login from '../pages/Login';

const Container = styled.div`
height:60px;
${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
display:flex;
align-items:center;
flex:1
`
const Center = styled.div`
flex:1;

text-align:center;
`
const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
aligh-items:center;
${mobile({ flex: 2, justifyContent: "center" })}


`
const Language = styled.span`
font-size:14px;
cursor:pointer;
${mobile({ display: "none" })}

`
const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Input = styled.input`
border:none;
${mobile({ width: "50px" })}
`
const Logo = styled.h1`
font-weight:bold;
${mobile({ fontSize: "24px" })}
`

const MenuItems = styled.div`
 font-size:14px;
 cursor:pointer;
 margin-left:25px;
 ${mobile({ fontSize: "12px", marginLeft: "10px" })}
 `
 const MenuItems1 = styled.div`
 background: black;
    font-size: 14px;
    cursor: pointer;
    margin-left: 23px;
    border: 1px solid Black;
    padding: 7px 20px;
    display: flex;
    align-items: center;
    border-radius:5px;
    
    color: white;
 ${mobile({ fontSize: "12px", marginLeft: "10px" })}
 `
 const MenuItems2 = styled.div`
 
    font-size: 14px;
    cursor: pointer;
    margin-left: 23px;
    border: 1px solid Black;
    padding: 7px 20px;
    display: flex;
    align-items: center;
    border-radius:5px;
    
   
 ${mobile({ fontSize: "12px", marginLeft: "10px" })}
 `
 const linkStyle = {
   
    textDecoration: "none",
    
  
  };
  const linkStyleBtnLog = {
    
    textDecoration: "none",
    color:"black"
    
  
  };
  const linkStyleBtnReg = {
    
    textDecoration: "none",
    color:"White"
    
  
  };

function Navbar() {
  const quantity = useSelector(state=>state.cart.quantity)
 
    
  return (
    <Container>
        <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input />
                <Search style={{color:'grey',fontSize:16}} />
            </SearchContainer>
        </Left>
        <Center>
            <Logo><Link to="/" style={linkStyle}>SnapBuy.</Link></Logo>
        </Center>
        <Right>
            
            <MenuItems2><Link to="/Login" style={linkStyleBtnLog}>LOG IN</Link></MenuItems2>
            <MenuItems1><Link to="/Register" style={linkStyleBtnReg}>REGISTER</Link></MenuItems1>
            <Link to="/cart">
            <MenuItems>
            <Badge badgeContent={quantity} color="secondary">
            <ShoppingCartIcon />
      </Badge>
            
            </MenuItems>
            </Link>
        </Right>
        </Wrapper>
       
        
    </Container>
  )
}

export default Navbar