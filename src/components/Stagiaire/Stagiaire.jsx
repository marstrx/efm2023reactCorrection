import React from 'react'
import styles from './Stagiaire.module.css';
// quetion 7
function Stagiaire(props) {
    const stagiaires = props.stagiaires;
   
    
  return (
    <>
      {/* Q 7.2 */}
      {/* here im trying to use data from store instead of writing that again */}
     {
      stagiaires.map((stag,i)=>(
        <div key={i}>
          <img className={styles.container} src={stag.image} alt="" />
          <h3>{stag.nom}</h3>
        </div>
      ))
     }
    


    {/* Q 7.1 */}
    {/* <div >
        <img className={styles.container} src={stagiaires.image} alt="" />
        <h3>{stagiaires.nom}</h3>
    </div> */}
    </>
  )
}

export default Stagiaire