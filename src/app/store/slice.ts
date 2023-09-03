import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Image as IIMAGE } from "sanity";
export interface Products{
  _id:string
image:string,
price:number,
name:string
category:string
quantity:number,
totalprice:number,

Type:string
size:string
} 

interface initialState{
  items:Products[],
  quantity:number,
  TotalAmount:number
}
const initialState: initialState = {
  items:[],
  quantity:0,
  TotalAmount:0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state:initialState, action:PayloadAction<Products>) {

      state.items.push(action.payload)

      state.quantity=state.quantity+action.payload.quantity
      state.TotalAmount += action.payload.quantity * action.payload.price;

    },



  },
});

// console.log(`cartSlice`,cartSlice)
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;