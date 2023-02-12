import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { login } from './apiCalls'
const initialState = {
  data: [localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []],
  loading: 'idle',
  error: null,
}

export const getUsers = createAsyncThunk('users/getUsers', async (data) => {
    console.log(data)
    const response = await axios.post('http://13.126.158.22:3000/shoppers/login',data);
    // console.log(response);
  
  return response.data
})
// ============================================register start=====================================================================
export const registerUsers = createAsyncThunk('users/getUsers', async (data) => {
//   console.log(data)
//   const response = await axios.post('http://13.126.158.22:3000/shoppers/register',data);
//   console.log(response);
// return response.data
try {
  const response = await axios.post('http://13.126.158.22:3000/shoppers/register',data);
  // console.log(response);

return response.data
} catch (err) {
  // console.log(err.response.data)
  if (!err.response) {
    throw err
  }}
})
// ============================================lettest code=====================================================================


export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action,error) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
        error = "state.error;"
        console.log(error)
      }
    })

    builder.addCase(getUsers.fulfilled, (state, action,error) => {
      if(error){
        state.error = error;
        console.log(error)
      }
      if (state.loading === 'pending') {
        state.data = action.payload
        state.loading = 'idle'
        localStorage.setItem('user', JSON.stringify(state.data));
      }
    })

    builder.addCase(getUsers.rejected, (state, action,error) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        error = state.error ;
        console.log(error)
      }
    })
  },
})

export default usersSlice.reducer