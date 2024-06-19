import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice/CartSlice";
import CartSliceUi from "./Slice/CartSliceUI";
 const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: CartSliceUi.reducer
    }
 })
 export default store