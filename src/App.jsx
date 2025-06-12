import React from 'react'
import Stagiaire from './components/Stagiaire/Stagiaire';
import { useSelector } from 'react-redux';
import ListStagiaire from './components/Stagiaire/ListStagiaire';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import DetailStagiair from './components/Stagiaire/DetailStagiair';
import AddStagiare from './components/Stagiaire/AddStagiare';
import Headr from './components/Header/Header';
import StagaireApi from './components/Stagiaire/StagaireApi';

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
      <BrowserRouter>
      {/* Question 11 */}
      <Headr/>
      {/* // quetion 7 */}
      <Stagiaire stagiaires={stagiaires[0]}/>
      {/* Question 8 */}
        <Routes>
          <Route path='/' element={<ListStagiaire />}/>
          {/* // Question 9 */}
          <Route path='/StagiarDetails/:nom' element={<DetailStagiair/>}/>
          {/* Question 10 */}
          <Route path='/add' element={<AddStagiare/>}/>
        </Routes>
        {/* Question 13 */}
        <StagaireApi/>
      </BrowserRouter>
    </div>
  )
}

export default App