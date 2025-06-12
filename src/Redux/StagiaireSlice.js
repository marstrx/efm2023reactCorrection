
// Quesion 6
import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    stagiaires:[
        {
            image:"https://img.freepik.com/free-vector/gradient-api-illustration_23-2149379182.jpg",
            nom :"Marouane",
            prenom :"Bachar",
            filier :"full stack dev"
        },
        // adding this to test Question 8
        {
            image:"https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/dossier/773/01-intro-773.jpg",
            nom :"Marstrx",
            prenom :"Bachar2",
            filier :"dector"
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