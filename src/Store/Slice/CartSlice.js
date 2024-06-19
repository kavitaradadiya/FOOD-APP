import { createSlice, current } from "@reduxjs/toolkit"

const items = localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem("cartItems")) : []
const totalQuantity = localStorage.getItem("totalQuantity") !== null ? JSON.parse(localStorage.getItem("totalQuantity")) : 0
const totalAmount = localStorage.getItem("totalAmount") !== null ? JSON.parse(localStorage.getItem("totalAmount")) : 0


const setItem = (items,totalQuantity, totalAmount) => {
    localStorage.setItem("cartItems", JSON.stringify(items))
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity))
    localStorage.setItem("totalAmount", JSON.stringify(totalAmount))
}

const  initialState ={
    cartItems :items,
    totalQuantity :totalQuantity,
    totalAmount:totalAmount
}

const cartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addItem(state, action){
            // console.log(action.payload);
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            console.log(current(state.cartItems));
            state.totalQuantity++;

            if(!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01 : newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalprice: newItem.price
                })
            }else{
                existingItem.quantity++;
                existingItem.totalprice = Number(existingItem.totalprice) + Number(newItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total, item) =>
                total + Number(item.price) * Number(item.quantity),0)

                setItem (
                    state.cartItems.map((item)=>item),
                    state.totalQuantity,
                    state.totalAmount
                )
            // console.log(current(state.cartItems));
            // return state
        },
        removeItem(state,action){
             // console.log(action.payload);
             const newItem = action.payload;
             const existingItem = state.cartItems.find(item => item.id === newItem.id)
             console.log(current(state.cartItems));
             state.totalQuantity--;
 
             if(existingItem.quantity === 1){
                state.cartItems = state.cartItems.filter(item => item.id !== newItem.id)
             }else{
                 existingItem.quantity--;
                 existingItem.totalprice = Number(existingItem.totalprice) - Number(newItem.price)
             }
             state.totalAmount = state.cartItems.reduce((total, item) =>
                total + Number(item.price) * Number(item.quantity),0)

                setItem (
                    state.cartItems.map((item)=>item),
                    state.totalQuantity,
                    state.totalAmount
                )
        },
        deleteItem(state,action){
            const newItem = action.payload;
             const existingItem = state.cartItems.find(item => item.id === newItem.id)
            
            if(existingItem){
                state.cartItems = state.cartItems.filter(item => item.id !== newItem.id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
                
            }

            state.totalAmount = state.cartItems.reduce((total, item) =>
                total + Number(item.price) * Number(item.quantity),0)

                setItem (
                    state.cartItems.map((item)=>item),
                    state.totalQuantity,
                    state.totalAmount
                )
        }
    }
})

export const cartAction = cartSlice.actions
export default cartSlice