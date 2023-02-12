import styled from '@emotion/styled/macro';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToProduct } from '../redux/cartRedux';

const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
transition:all 0.3s ease;
cursor:pointer;
`
const Container = styled.div`
flex:1;
margin:5px;
min-widht:280px;
height:350px;

display:flex;

align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;


&:hover ${Info}{
    opacity: 1;
  }
`


const Circle = styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:white;
position:absolute;`

const Image = styled.img`
height:75%;
z-index:2;`



const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.5 ease;


&:hover{
    background-color:#e9f5f5;
    transform:scale(1.1);
}
`
const Product = ({item}) => {
  const dispatch = useDispatch();
  const handleAddTOCart = (item) =>{
    dispatch(
      addToProduct(item)
      
    );
  }
  return (
    <Container>
        <Circle />
        <Image src={item.image}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined onClick={()=>handleAddTOCart(item)} />
            </Icon>
          
            <Link to={`/product/${item._id}`}>
            <Icon>
          <SearchOutlined />
          </Icon>
          </Link>
          
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>


    </Container>
  )
}

export default Product