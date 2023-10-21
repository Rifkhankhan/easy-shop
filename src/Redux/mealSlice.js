import { createSlice } from "@reduxjs/toolkit";


const mealSlice = createSlice({
    name:'meal',
    initialState:{
        meals:[],
        change:false,
        fruit:{}
    },
    reducers:{
        replaceMeals(state,action){
            state.meals = action.payload
        },
        addFruit(state,action){
            const newItem = action.payload
            state.FruitsCount++;

            state.fruits.push({
                id:newItem.id,
                name:newItem.name,
                area:newItem.area,
                owner:newItem.owner,
                address:newItem.area,
                images:newItem.images
            })
        },
        getFruit(state,action){
            state.fruit ={...action.payload}
        },
        removeFruit(state,action){
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id) 
            state.change = true

            if(state.totalQuantity > 0){

                if(existingItem.quantity === 1)
                {
                    state.items = state.items.filter(item => item.id !== id)
                }
                else if(existingItem.quantity > 1)
                {
                    existingItem.quantity--
                    existingItem.totalPrice = existingItem.totalPrice - existingItem.price
                }
                state.totalQuantity--;
            }
              
        },

    }
})


export const mealActions = mealSlice.actions
export default mealSlice.reducer
