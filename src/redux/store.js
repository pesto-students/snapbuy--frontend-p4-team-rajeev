import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import usersReducer from './usersSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
        users: usersReducer,
        user: userReducer,
    }
})