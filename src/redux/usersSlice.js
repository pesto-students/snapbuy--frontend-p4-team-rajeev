
// =====================================   codding with y======================
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from "react-toastify";
import { red } from '@mui/material/colors'

const initialState = {
  msg:"",
  user:"",
  token:"",
  loading:false,
  error:""
}
export const getUsers = createAsyncThunk('users/getUsers', async (data) => {
  let alertShown = false;

  try {
    console.log(data)
    const res = await axios.post('http://13.126.158.22:3000/shoppers/login',data);
    if (res.data.accessToken) {
      localStorage.setItem("token", JSON.stringify(res.data.accessToken));
      localStorage.setItem("user", JSON.stringify(res.data));
      toast.success(`Welcome ${res.data.firstname} `,{position:"bottom-left"})
      
    }
  
    console.log(res);
    return res.data
  } catch (error) {
    console.error(error);
    if(!error.response.data){
      toast.info(`Welcome ${error.message} `,{position:"bottom-left"})
      // if (!alertShown) {
      //   window.alert(`An error has occurred: ${error.message}`);
      //   alertShown = true;
      // }
      throw error;
    }else{
      toast.info(`Welcome ${error.response.data} `,{position:"bottom-left"})
     
      throw error;
    }
  }
});

// export const getUsers = createAsyncThunk('users/getUsers', async (data) => {
//   console.log(data)
//   const res = await axios.post('http://13.126.158.22:3000/shoppers/login',data);
//   if (res.data.accessToken) {
//     localStorage.setItem("token", JSON.stringify(res.data.accessToken));
//     localStorage.setItem("user", JSON.stringify(res.data));
//   }
//   console.log(res);
 

// return res.data
// })
 export const registerUsers = createAsyncThunk('registeruser' ,async(data) =>{
  // const res = await fetch ("http://13.126.158.22:3000/shoppers/register",{
  //   method :"post",
  //   headers:{
  //     'content-type': "application/json,"
  //   },
  //   body:JSON.stringify(body)
  // })
  // return await  res.json();
  // console.log(data)
  const res = await axios.post('http://13.126.158.22:3000/shoppers/register',data);
  // if (res.data.accessToken) {
  //   localStorage.setItem("token", JSON.stringify(res.data.accessToken));
  //   localStorage.setItem("user", JSON.stringify(res.data));
  // }
  console.log(res);
 

return res.data
 })
const usersSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    addToken :(state ,action) =>{
      state.token= localStorage.getItem("token")
    },
    addUser :(state ,action) =>{
      state.token= localStorage.getItem("user")
    },
    logout :(state ,action) =>{
      state.token = null;
      localStorage.clear();
    }
  },
  extraReducers:{
    [getUsers.pending] : (state,action) =>{
      state.loading = true;


    },
    [getUsers.fulfilled] : (state,{payload:{error,msg,token,user}}) =>{
      state.loading = false;
      
      if(error){
        state.error= error;
      }else{
        // localStorage.setItem("user", JSON.stringify(state.data));
        state.msg = msg;
        state.token = token;
        state.user = user;

        // localStorage.setItem('msg',msg)
        // localStorage.setItem('user', JSON.stringify(user))
        // localStorage.setItem('token',token)
      }
    },
    [getUsers.rejected] : (state,action) =>{
      state.loading = true;
    },
     // ==========================signup==================================
     [registerUsers.pending] : (state,action) =>{
      state.loading = true;


    },
    [registerUsers.fulfilled] : (state,{payload:{error,msg}}) =>{
      state.loading = false;
      if(error){
        state.error= error
      }else{
        state.msg = msg
      }
    },
    [registerUsers.rejected] : (state,action) =>{
      state.loading = true;
    }
   
  },
   
    
})
export const {addUser,addToken,logout} = usersSlice.actions;
export default  usersSlice.reducer
