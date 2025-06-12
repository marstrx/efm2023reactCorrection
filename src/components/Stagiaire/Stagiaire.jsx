import React from 'react'
import styles from './Stagiaire.module.css';
// quetion 7
function Stagiaire(props) {
    const stagiaires = props.stagiaires;
    console.log(stagiaires);
    
  return (
    <>
    <div >
        <img className={styles.container} src={stagiaires.image} alt="" />
        <h3>{stagiaires.nom}</h3>
    </div>
    </>
  )
}

export default Stagiaire