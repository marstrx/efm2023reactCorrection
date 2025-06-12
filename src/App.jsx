import React from 'react'
import Stagiaire from './components/Stagiaire/Stagiaire';
import { useSelector } from 'react-redux';

function App() {
  // quetion 7
  const stagiaires = useSelector(state=>
    state.stag.stagiaires
  );
  // const stagiaires =
  //       {
  //           image:"https://img.freepik.com/free-vector/gradient-api-illustration_23-2149379182.jpg",
  //           nom :"Marouane",
  //           prenom :"Bachar",
  //           filier :"full stack dev"
  //       }
    
  return (
    <div>
      {/* // quetion 7 */}
      <Stagiaire stagiaires={stagiaires}/>
    </div>
  )
}

export default App