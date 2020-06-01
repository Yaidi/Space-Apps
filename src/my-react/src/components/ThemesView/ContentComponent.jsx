import React from 'react';
import '../../styles/ThemeView.css';
const Content = () => {

    function changeClass (e) {
        alert(`you clicked the ${e.target.id} button`);
    };

    return(
        <div className={"item3"}>
            <div className={"contentInfo"}>
                <h2>Pic some topics you are interested in.</h2>
                <p>
                This will connect you with<br/> people with same interests as you.
                </p>
            </div>
            <div className={"contentButtons"}>
                <button 
                id="movies"
                className={"btn"}
                onClick={changeClass}>
                Movies
                </button>
                <button 
                id="Gardening"
                className={"btn"}
                onClick={changeClass}>
                Gardening
                </button>
                <button 
                id="Painting"
                className={"btn"}
                onClick={changeClass}>
                    Painting
                </button>
                <button
                id="Chess" 
                className={"btn"}
                onClick={changeClass}>
                    Chess
                </button>
                <button 
                id="Instruments"
                className={"btn"}
                onClick={changeClass}>
                    Instruments
                </button>
                <button 
                id="Cooking"
                className={"btn"}
                onClick={changeClass}>
                    Cooking
                </button>
                <button 
                id="Poetry"
                className={"btn"}
                onClick={changeClass}>
                Poetry
                </button>
                <button 
                id="Games"
                className={"btn"}
                onClick={changeClass}>
                    Games
                </button>
                <button 
                id="languages"
                className={"btn"}
                onClick={changeClass}>
                    Languages
                </button>
                <button 
                id="Fitness"
                className={"btn"}
                onClick={changeClass}>
                    Fitness
                </button>
                <button
                id="Photography"
                className={"btn"}
                onClick={changeClass}>
                    Photograpy
                </button>
                <button
                id="Pets"
                className={"btn"}
                onClick={changeClass}>
                    Pets
                </button>
                <button
                id="Health"
                className={"btn"}
                onClick={changeClass}>
                    Health
                </button>
                <button
                id="DIY"
                className={"btn"}
                onClick={changeClass}>
                    DIY
                </button>
                <button
                id="Embroidery"
                className={"btn"}
                onClick={changeClass}>
                    Embroidery
                </button>
                <button
                id="Sports"
                className={"btn"}
                onClick={changeClass}>
                    Sports
                </button>
                <button
                id="Crafting"
                className={"btn"}
                onClick={changeClass}>
                    Crafting
                </button>
            </div>
            <div className={"contentSelected"}>
                <button 
                id="selectedThemes" 
                className={"btn"}>
                I'm ready to Go!
                </button>
            </div>
        </div>
    );
}

export default Content;