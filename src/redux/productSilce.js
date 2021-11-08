import { createSlice } from "@reduxjs/toolkit";
import photo1 from '../images/products/photo1.png'
const initialState = {
    products:[
        {
            id:new Date(),
            title:"Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable ",
            price:29.45,
            photo:photo1,
            rating:4
        },
        {
            id:new Date(),
            title:"Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable ",
            price:55.43,
            photo:photo1,
            rating:5
        },
        {
            id:new Date(),
            title:"Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable ",
            price:65.54,
            photo:photo1,
            rating:3
        },
        {
            id:new Date(),
            title:"Roku Express 4K+ 2021 | Streaming Media Player HD/4K/HDR with Smooth Wireless Streaming and Roku Voice Remote with TV Controls, Includes Premium HDMI Cable ",
            price:88.33,
            photo:photo1,
            rating:2
        }
    ],
    productsPanier:[]
}

export const productSilce = createSlice({
    name:"product",
    initialState,
    reducers:{
        addProductToPanier : (state, actions) =>{
            state.productsPanier.push(actions.payload)
        },
        removeProductFromPanier : (state, actions) => {
            state.productsPanier = state.productsPanier.filter(row=>row.id != actions.payload.id)
        },
        sumTotalPrice : (state) =>{
            const total = 0
            state.productsPanier.map(
                row=>{
                    total = total + row.price
                }
            )
            return total
        }
        
    }
})

export const { addProductToPanier, removeProductFromPanier, sumTotalPrice } = productSilce.actions
export default productSilce.reducer