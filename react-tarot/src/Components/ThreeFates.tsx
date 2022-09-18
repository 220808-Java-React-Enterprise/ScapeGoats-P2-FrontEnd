
import React, { useEffect } from "react";
import "../Utils/CSS/ThreeFates.css"
import { useNavigate } from "react-router-dom";


const ThreeFates = () => {

    //const details = {"name_short":String, "name":String, "value":String, "value_int": Number, "type":String, "meaning_up":String, "meaning_rev":String, "desc":String }
    const navigate = useNavigate();

    var categ;
   
    function setCategLove() {
        categ = 'love';
    }

    function placeCard(  ) {
        

        if(localStorage.getItem('cardsDrawn') != null) {
            let cards = JSON.parse(localStorage.cardsDrawn);
            //console.log(cards[0].name);

            displayCardInfo( cards, 0, 'C1');
            displayCardInfo( cards, 1, 'C2');
            displayCardInfo( cards, 2, 'C3');

            displayCardDescription();
        }
        else {
            alert('No cards have been drawn, just how did you get here!');
            navigate('/');
        }

    }

    function displayCardInfo( cards : any[], x : number, id : string ) {
        
            var c = cards[x];
            var card = document.getElementById(id);
            
            if(card != null) {
                card.innerHTML= '<h4>' + c.name + '</h4>\n' +
                                '<h6>' + c.type + '</h6>\n' +
                                '<p>' + c.meaning_up + '</p>';
                
            }
    }

    function displayCardDescription( ) {
        
        var desc = document.getElementById('Description');
            
        if(desc != null) {
            desc.innerHTML= '';
        }
    }

    const returnToMain = () => {
        navigate('/');
    }
    


    return(
        <div>
            <div className="Main">
                <div className="Title">Your Three Fates Reading</div>
                <div className="Sub-Title">Subtitle</div>
                <div className="Card-Div">
                    <div className="Card" id='C1' onMouseDown={placeCard}>Card 1</div>
                    <div className="Card" id='C2'> Card 2</div>
                    <div className="Card" id='C3'>Card 3</div>
                </div>
                <div className="Description">Desc</div>
                <div className="Navigation">
                    <input type='submit' value='Save Reading' />
                    <input type='submit' value='Return to Main' onClick={returnToMain}/>
                    <input type='submit' value='Seek Consultation'/>
                </div>
            </div>
        </div>
    )

}

export default ThreeFates;


