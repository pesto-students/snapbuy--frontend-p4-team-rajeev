import { Add, Remove } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { mobile } from "../responsive";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { addToProduct, clearCart, decreaseCart, getTotals, removeFromCart } from "../redux/cartRedux";
import { useEffect } from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`

  flex: 3;
`;

const Product = styled.div`
  display: flex;
  
  padding: 10px;

  
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`

  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 150px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
   
    dispatch(getTotals());
  }, [cart, dispatch]);
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handledecreaseCart= (product) => {
    dispatch(decreaseCart(product));
  };
  const handleIncreseCart= (product) => {
    dispatch(addToProduct(product));
    
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        {cart.cartItems.length === 0 ? (
          <>
         
          
          {/* <Link to={'/'}><TopButton style={{backgroundColor:"red"}}>START SHOPPING</TopButton></Link> */}
          <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        flexDirection: 'column'
      }} >
 <h2>Your cart is currently empty</h2>
 <Link to={'/'}><button>Start Shipping <ArrowRightAltIcon /></button></Link>
     
         </div>
         
         
       
          </>
        ) : (
          <>
          <Title>YOUR BAG</Title>
        <Top>
         <Link to={'/'}> <TopButton>CONTINUE SHOPPING</TopButton></Link>
          {/* <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts> */}
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
        <Info>
            {cart.cartItems?.map((product) => (
              <Product key ={product._id}>
                <ProductDetail>
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                     
                    </ProductSize>
                    <ProductSize>
                      <b>Price:</b> {product.price}
                     
                    </ProductSize>
                    <button onClick={(cartItem) => handleRemoveFromCart(product)} style={{width:'100px'}}>REMOVE</button>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add  onClick={(cartItem) => handleIncreseCart(product)} style={{backgroundColor:"rgb(177,177,177)",borderRadius:"20px"}} />
                    <ProductAmount>{product.cartQuantity}</ProductAmount>
                    <Remove onClick={(cartItem) => handledecreaseCart(product)} style={{backgroundColor:"rgb(177,177,177)",borderRadius:"20px"}} />
                  </ProductAmountContainer>
                  <ProductPrice>
                  Total : RS. {product.price * product.cartQuantity
}
                  </ProductPrice>
                </PriceDetail>
                
              </Product>
              
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice> RS. {cart.cartTotalAmount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>RS. 50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>RS. 50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>RS. {cart.cartTotalAmount}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
        <button onClick={() => handleClearCart()} style={{width:'100px'}}>Clear Cart</button>
          </>
        )}
        
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;