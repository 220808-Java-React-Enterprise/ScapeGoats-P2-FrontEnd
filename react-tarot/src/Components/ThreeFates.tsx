import { json } from "node:stream/consumers";
import React, { useEffect } from "react";
import "../Utils/CSS/ThreeFates.css"
import OuterAxios from "../Utils/Config/OuterAxios";


const ThreeFates = () => {

    //const details = {"name_short":String, "name":String, "value":String, "value_int": Number, "type":String, "meaning_up":String, "meaning_rev":String, "desc":String }

   
    function placeCard() {
        var cards: JSON[] =[];

        if(localStorage.getItem('cardsDrawn') != null) {
            let cards = JSON.parse(localStorage.cardsDrawn);
            console.log(cards[0].name);
            displayCardInfo( cards, 0, 'C1');
        }
        else {
            let cards = {"name_short":String, "name":String, "value":String, "value_int": Number, "type":String, "meaning_up":String, "meaning_rev":String, "desc":String }

        }

    }

    function displayCardInfo( cards : any[], x : number, id : string ) {
        
            var card = document.getElementById(id);
            
            if(card != null) {
                var c = cards[x];
                card.innerHTML= c.name + '\n';
            }
    }
    


    return(
        <div>
            <div className="Main">
                <div className="Title">Your Three Fates Reading</div>
                <div className="Sub-Title">Subtitle</div>
                <div className="Card-Div">
                    <div className="Card" id='C1' onMouseDown={placeCard}>
                        <h3 id='cardName'>Card 1</h3>
                        <h5 id='cardType'>Type</h5>
                        <p id='cardMeaning'>Meaning</p>
                        
                    </div>
                    <div className="Card" id='C2'> Card 2</div>
                    <div className="Card" id='C3'>Card 3</div>
                </div>
                <div className="Description">Desc</div>
                <div className="Navigation">
                    <input type='submit' value='Save Reading' />
                    <input type='submit' value='Return to Main'/>
                    <input type='submit' value='Seek Consultation'/>
                </div>
            </div>
        </div>
    )

}

export default ThreeFates;


