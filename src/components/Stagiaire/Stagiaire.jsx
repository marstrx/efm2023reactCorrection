import React from 'react'
import styles from './Stagiaire.module.css';
// quetion 7
function Stagiaire(props) {
    const stagiaires = props.stagiaires;
   
    
  return (
    <>
      {/* Q 7.2 */}
      {/* here im trying to use data from store instead of writing that again */}
     
    
    <div>
      <img className={styles.container} src={stagiaires.image} alt="" />
      <h3>{stagiaires.nom}</h3>
    </div>

    {/* Q 7.1 */}
    {/* <div >
        <img className={styles.container} src={stagiaires.image} alt="" />
        <h3>{stagiaires.nom}</h3>
    </div> */}
    </>
  )
}

export default Stagiaire