import { createSlice } from "@reduxjs/toolkit"
// import { Carwaledata } from "../Data/Carwaledata";
// import { LatestcartopcarData } from "../Data/Latestcartopcardata";
// import { Popularcarr } from "../Data/Popularcarr";
// import { Allbrand2 } from "../Data/Allbrand2";
// import { Fueltype } from "../Data/Fueltype";
import product from '../product.json'
const cardSlice=createSlice({
        name:"cart",
        initialState:{
            brand1:product.Allbrand1,
            brand2:product.Allbrand2,
            bodytype:product.Bodytype,
            carwaledata:product.Carwaledata,
            popularcar:product.Popularcarr,
            latestcartopcarData:product.LatestcartopcarData,
        },
        reducers:{
            handleBrand1:(state,action)=>{
                state.brand1=action.payload
            },
            handleBrand2:(state,action)=>{
                state.brand2=action.payload
            },
            handleBodytype:(state,action)=>{
                state.bodytype=action.payload
            },
            handleCarwaledata:(state,action)=>{
                state.carwaledata=action.payload
            },
            handlePoppularcar:(state,action)=>{
                state.popularcar=action.payload
            },
            handleLatestcartopcarData:(state,action)=>{
                state.latestcartopcarData=action.payload
            }
        }
})
export const {handleBrand1,handleBrand2,handleBodytype,handleCarwaledata,handlePoppularcar,handleLatestcartopcarData}=cardSlice.actions;
export default cardSlice.reducer