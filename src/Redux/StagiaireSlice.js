
// Quesion 6
import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    stagiaires:[
        {
            image:"https://img.freepik.com/free-vector/gradient-api-illustration_23-2149379182.jpg",
            nom :"Marouane",
            prenom :"Bachar",
            filier :"full stack dev"
        }
    ]
}

const stagiaireSlice = createSlice({
    name :"stagiares",
    initialState,
    reducers:{
        AjouterStagiare:(state,action)=>{
            state.stagiaires.push({
                ...action.payload,
            })
        }
    }
})

export const {AjouterStagiare} = stagiaireSlice.actions;
export default stagiaireSlice.reducer ;