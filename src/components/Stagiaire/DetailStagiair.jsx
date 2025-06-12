// Question 9

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DetailStagiair() {
    const {nom} = useParams();
    const stagiaires = useSelector(state=>
        state.stag.stagiaires
    );
    const thatOneStagiar =stagiaires.find(s=> s.nom === nom);
  return (
    <>
    <img src={thatOneStagiar.image} alt="" />
    <h1>{thatOneStagiar.nom}</h1>
    <h1>{thatOneStagiar.prenom}</h1>
    <h1>{thatOneStagiar.filier}</h1>

    </>
  )
}

export default DetailStagiair