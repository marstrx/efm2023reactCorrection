// Question 13

import React, { useEffect, useState } from 'react';

function StagaireApi() {
  const [theData, setTheData] = useState([]);
  const url = "http://www.ofppt.ma/api/stagiaires";

   

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setTheData(data.data)); 
  }, []);

  return (
    <>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>image</th>
            <th>nom</th>
            <th>prenom</th>
            <th>filier</th>
          </tr>
        </thead>
         <tbody>
            {theData.map((da) => (
              <tr key={da.id}>
                <td>{da.id}</td>
                <td>{da.nom}</td>
                <td>{da.prenom}</td>
                <td>{da.filier}</td>
                <td>
                  <img
                    src={da.image}
                    alt={da.nom}
                    width="50"
                    height="50"
                  />
                </td>
              </tr>
            ))}
          </tbody>
      </table>

      <p>the url not workin so no data </p>
    </>
  );

}

export default StagaireApi;
