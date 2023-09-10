import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  TotalAmount:number,
  isloding:boolean,
  error:any
}

export const FetchData=createAsyncThunk( 

  "cart/fetchdata",
  async(userid:string)=>{
    const res=await fetch(`/api/${userid}`)

    if(!res.ok){
      console.log('Error')
    }
    const data=await res.json()
    return data
  }
)
const initialState: initialState = {
  items:[],
  quantity:0,
  TotalAmount:0,
  isloding:false,
  error:null,

}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addProduct(state:initialState, action:PayloadAction<Products>) {
// const exsititem=action.payload._id 
      state.items.push(action.payload)
      state.quantity=state.quantity+action.payload.quantity
      state.TotalAmount += action.payload.quantity * action.payload.price;

    },



  },
  extraReducers(builder){
    builder.addCase(FetchData.pending,(state)=>{
      state.isloding=true
    })

    builder.addCase(FetchData.fulfilled,(state,action)=>{

      const{TotalAmount,quantity,items}=action.payload
      state.items=items
      state.TotalAmount=TotalAmount,
      state.quantity=quantity
      state.isloding=false
    })
builder.addCase(FetchData.rejected,(state,action)=>{
  state.isloding=false,
  state.error=action.error

    })
  }
});

// console.log(`cartSlice`,cartSlice)
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;