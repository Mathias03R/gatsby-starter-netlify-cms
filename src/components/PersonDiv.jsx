import React, { useState } from "react";

function PersonDiv({img1, img2, name}){

    const [time, setTime] = useState("2023");
    const [foto, setFoto] = useState(img1);

    const changerActions = () => {
        if (time === "2023") {
        setTime("1963")
        setFoto(img2)
        } else if (time === "1963") {
        setTime("2023")
        setFoto(img1)
        }
    };

    return (
        <div className="person-div">
            <div class="img-container">
                <img src={foto} alt={name} className="person-img" draggable="false"/>
                <button id="changer" onClick={changerActions}>{time}</button>
            </div>
            <p className="person-name">{name}</p>
        </div>
    );
}
export default PersonDiv;