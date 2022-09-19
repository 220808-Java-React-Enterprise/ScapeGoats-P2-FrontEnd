
import React, { useEffect } from "react";
import "../Utils/CSS/ThreeFates.css"
import { useNavigate } from "react-router-dom";
import Category from "../Classes/Category";


const ThreeFates = () => {

    useEffect(() => {
        document.title = "Three Fates Draw";
        placeCard();
    });
    //const details = {"name_short":String, "name":String, "value":String, "value_int": Number, "type":String, "meaning_up":String, "meaning_rev":String, "desc":String }
    const navigate = useNavigate();

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

    //Tarot cards has two sets of meanings dependent on the orientaion of the card. This is to simulate that.
    function getOrientation() { return( ( Math.round(Math.random() * 100)) % 2 ); }


    function displayCardInfo( cards : any[], x : number, id : string ) {
        
            var c = cards[x];
            var card = document.getElementById(id);
            var meanings: string[] = c.meaning_up;

            let orientation: number = getOrientation();

            if( orientation == 0) { meanings = c.meaning_rev; }
            
            if(card != null) {
                card.innerHTML= '<h4>' + c.name + '</h4>\n' +
                                '<h6>' + c.type + '</h6>\n' +
                                '<p>' + meanings + '</p>';
                
            }
            //For testing
            //console.log(orientation);
            //console.log('\n' + c.meaning_rev);
    }

    function displayCardDescription() {
        
        var desc = document.getElementById('Description');
            
        if(desc != null) {
            if(localStorage.getItem('category') != null) { 
                const category = JSON.parse(localStorage.category);
                desc.innerHTML= '<h6>' + category.name + '</h6>\n' +
                                '<p>In the category of ' + category.name +
                                ' the first card tells ' + category.meanings[0] + 
                                ' The second card tells ' + category.meanings[1] + 
                                ' While the third and final card tells ' + category.meanings[2] + '</p>';
            }
        }

    }

    function displayCardFace() {

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
                    <div className="Card" id='C1'>Card 1</div>
                    <div className="Card" id='C2'> Card 2</div>
                    <div className="Card" id='C3'>Card 3</div>
                </div>
                <div className="Description" id="Description">Desc</div>
                <div className="Navigation" id="Navigation">
                    <input type='submit' value='Save Reading' />
                    <input type='submit' value='Return to Main' onClick={returnToMain}/>
                    <input type='submit' value='Seek Consultation'/>
                </div>
            </div>
        </div>
    )

}

export default ThreeFates;


