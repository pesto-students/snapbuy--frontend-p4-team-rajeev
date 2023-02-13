import { NoEncryption, Search } from '@mui/icons-material'
import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../redux/cartRedux';
// import Login from '../pages/Login';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

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
    margin-bottom: 10px;
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
    margin-bottom: 10px;
    border: 1px solid Black;
    
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
    color:"white"
    
  
  };
  const linkStyleBtnReg = {
    
    textDecoration: "none",
    color:"White"
    
  
  };

function Navbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const [user,setUser] = useState(false)
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const navigate =useNavigate();
  const rll = window.localStorage.getItem("user")
  const cll = window.localStorage.getItem("")
  const output = JSON.parse(rll)
  const [sudo,setSudo] = useState('');
  const [pageURL, setPageURL] = useState(window.location.href);
  const [isDropdownOpend , setDropdownOpen ] = useState(false);
  const [list , setList] = useState([1,2,3])
  const dispatch = useDispatch();

  
  const toggle3 = () => {
    setDropdownOpen3(!dropdownOpen3);
  };

  const onMouseEnter = () => {
    setDropdownOpen1(true);
  };

  const onMouseLeave = () => {
    setDropdownOpen1(false);
  };
  
  useEffect(() => {

    if(rll !== cll){
      setUser(true)
      setSudo(output.firstname)
    }

  },[rll,cll]) 

  useEffect(() => {
   
    dispatch(getTotals());
  }, [cart, dispatch]);

  // ============= drop down code start=====================
  const toggleDropDown = () => setDropdownOpen(!isDropdownOpend)

  const DropDownlist = () =>  list.map(el => <div>{el}</div>);


  // ==========code end============






  const handleRemove = () =>{
    localStorage.removeItem('token')
    localStorage.clear();
    if(pageURL === 'http://localhost:3000/'){
      window.location.reload(false);
    }else{
      navigate('/')
    }
    
    
    }
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
            
        {user ? <>
          <Dropdown
        className="d-inline"
        isOpen={dropdownOpen3}
        toggle={toggle3}
        style={{width:"30%" ,border:'none',padding: '0px',marginBottom:"10px"}}
      >
        <DropdownToggle><AccountCircleIcon />  {sudo}</DropdownToggle>
        <DropdownMenu>
        <Link to="/profile" style={{textDecoration:"none"}}><DropdownItem >Profile</DropdownItem></Link>
        <Link to="/cart" style={{textDecoration:"none"}}><DropdownItem>Cart</DropdownItem></Link>
        <Link to="/order" style={{textDecoration:"none"}}><DropdownItem>Orders</DropdownItem></Link>
          <DropdownItem onClick={handleRemove}>Log OUT</DropdownItem>
        </DropdownMenu>
      </Dropdown>
         {/* <p><AccountCircleIcon />  {sudo} </p> <MenuItems1 onClick={handleRemove}>LOG OUT</MenuItems1> */}
         </> : (<>
              <MenuItems1><Link to="/Login" style={linkStyleBtnLog}>LOG IN</Link></MenuItems1>
              <MenuItems1><Link to="/Register" style={linkStyleBtnReg}>REGISTER</Link></MenuItems1>
              </> )
            
            }
            <Link to="/cart">
            <MenuItems>
            <Badge badgeContent={cartTotalQuantity} color="secondary">
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