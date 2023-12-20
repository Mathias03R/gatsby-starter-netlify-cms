import PersonDiv from '../components/PersonDiv';
import TopContainer from '../components/TopContainer';
import Header from '../components/Header';
import React from 'react';
import data from "../people.json";
import "./styles.css"

function Index() {
    const ruta_imagenes = "/images/";

    return (
    <div className="App">

        <TopContainer/>
        <Header/>
        <main>
        {data.map((person, index) => (
        <PersonDiv key={index} img1={`${ruta_imagenes}${person.img1}`} img2={`${ruta_imagenes}${person.img2}`} name={person.name} />
        ))}
        <a id="button-facebook" href="https://www.facebook.com/profile.php?id=61550595601190">
            <img id="img-facebook" src="/images/Facebook.png"/> 
        </a>
        </main>
    </div>
    );
}


export default Index;