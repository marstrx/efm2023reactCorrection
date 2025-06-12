// Question 10

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AjouterStagiare } from '../../Redux/StagiaireSlice';

export default function AddStagiare() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [image ,setImage] = useState("");
    const [nom ,setNom] = useState("");
    const [prenom ,setPrenom] = useState("");
    const [filier ,setFilier] = useState("");

    const AjouterNewStagiare =(e)=>{
        e.preventDefault();
        dispatch(AjouterStagiare({
            image,
            nom,
            prenom,
            filier
        }))
        navigate("/ListStagiaire")
    }
    
  return (
    <>
    <form onSubmit={AjouterNewStagiare}>
        <input onChange={(e)=>setImage(e.target.value)} value={image} type="text" placeholder='image'/>
        <br />
        <input onChange={(e)=>setNom(e.target.value)} value={nom} type="text" placeholder='nom'/>
        <br />
        <input onChange={(e)=>setPrenom(e.target.value)} value={prenom} type="text" placeholder='prenom'/>
        <br />
        <input onChange={(e)=>setFilier(e.target.value)} value={filier} type="text" placeholder='filier'/>
        <br />
        <button type='submit'>Ajouter</button>
    </form>
    </>
  )
}
