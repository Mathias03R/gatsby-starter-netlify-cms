import React, { useState, useEffect } from 'react';
import PersonDiv from '../components/PersonDiv';
import TopContainer from '../components/TopContainer';
import Header from '../components/Header';
import "./styles.css";

function Index() {

  // Estado para almacenar los datos cargados desde los archivos JSON
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    // Obtener la lista de archivos JSON en la carpeta src/jsons
    const context = require.context('../jsons', false, /\.json$/);
    const jsonData = context.keys().map((key) => {
      const jsonData = require(`../jsons/${key.replace('./', '')}`);
      return jsonData;
    });

    // Actualizar el estado con los datos cargados
    setPeopleData(jsonData);
  }, []);

  return (
    <div className="App">
      <TopContainer />
      <Header />
      <main>
        {peopleData.map((person, index) => (
          <PersonDiv
            key={index}
            img1={`${person.img1}`}
            img2={`${person.img2}`}
            name={person.name}
          />
        ))}
        <a id="button-facebook" href="https://www.facebook.com/profile.php?id=61550595601190">
          <img id="img-facebook" src="/img/Facebook.png" />
        </a>
      </main>
    </div>
  );
}

export default Index;
