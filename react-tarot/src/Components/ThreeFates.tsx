
import { useEffect, useState } from "react";
import "../Utils/CSS/ThreeFates.css"
import { useNavigate } from "react-router-dom";
import InnerAxios from "../Utils/Config/InnerAxios";


const ThreeFates = () => {
    
    var orientation:boolean; 
    var cards:any;
    var category:any  = JSON.parse(localStorage.category);
    var description:string ;

    const [counter, setCounter] = useState(2);

    useEffect(() => {
        document.title = "Three Fates Draw";
    
        //Tarot cards has two sets of meanings dependent on the orientaion of the card. This is to simulate that.
        orientation = 0 == Math.round(Math.random() * 100) % 2 ;
        cards = JSON.parse(localStorage.cardsDrawn);
        
        description = 'In the category of ' + category.name +
            ' the first card tells ' + category.meanings[0] + 
            ' The second card tells ' + category.meanings[1] + 
            ' While the third and final card tells ' + category.meanings[2];
            
            
            //For testing console.log(counter);

        if(counter != 0) { setCounter((counter) => counter - 1); }
    
    }, [counter]);
    
    const navigate = useNavigate();
    
    //File name for card display
    const IMAGEBASE = '../Resources/Images/Cards/';
    var cardBack = 'cd-back-ghost.jpg';

    
    function placeCard(  ) {

        if(cards!= null) {    

            displayCardInfo( cards, 0, 'C1');
            displayCardInfo( cards, 1, 'C2');
            displayCardInfo( cards, 2, 'C3');

            displayCardDescription();

        }
        else {
            alert('No cards have been drawn, how did you get here!');
            navigate('/');
        }

    }


    function displayCardInfo( cards : any[], x : number, id : string ) {
        
            var c = cards[x];
            var card = document.getElementById(id);
            var meanings: string[] = c.meaning_up;

            if( !orientation ) { meanings = c.meaning_rev; }
            
            displayCardFace( c.name_short + '.jpg', 'Img' + id, c.name);

            if(card != null) { 
                card.innerHTML= '<h4>' + c.name + '</h4>\n' +
                                '<h6>' + c.type + '</h6>\n' +
                                '<p>' + meanings + '</p>';

                
                
            }

    }

    function displayCardFace(imageFile: string, id: string, altText: string) {

        let place: HTMLImageElement = document.getElementById(id) as HTMLImageElement;
        if(place != null) { 
            place.src = IMAGEBASE + imageFile;
            place.alt = altText;

        }

    }

    function displayCardDescription() {
        
        var desc = document.getElementById('Description');
            
        if(desc != null) {
            if(category != null) { 
                desc.innerHTML= '<h6>' + category.name + '</h6>\n' +
                                '<p>' + description + '</p>';
            }
        }

    }

    const saveReading = (event: any) => {
        event.preventDefault();
        let card1 = JSON.stringify(cards[0]);
        let card2 = JSON.stringify(cards[1]);
        let card3 = JSON.stringify(cards[2]);
        //console.log( description);

        InnerAxios.post('/Readings', {
            user_id: "6cf487f7-009d-46c5-8b6f-051d98fee547",
            card1: 'card', //cards[0].name_short,
            card2: 'card', //cards[1].name_short,
            card3: 'card', //cards[2].name_short,
            description: 'This is a reading', //description,
            category: 'LOVE'//category.id
    
        }).then(() => {
            alert('Reading saved!\nYou can view it in your reading history. (^u^)');
            navigate('/MainPage');
            
        }).catch( error => {
            alert(error?.response?.data?.message ?? 'Oops! Something went wrong. (>u>\')');
        
        })

    }

    const returnToMain = () => {
        navigate('/');
    }


    return(
        <div onClick={placeCard}>
            <div className="Main">
                <div className="Title">Your Three Fates Reading</div>
                <div className="Sub-Title">Subtitle</div>
                <div className="Card-Div">
                    <div id="Card-Image">
                        <div id='Card-Image-Single'>
                            <img id="ImgC1" className='Img-Cards' src={require('../Resources/Images/Cards/' + cardBack)} alt='This is a card.'/>
                        </div>
                        <span className="Card-IInfo" id='C1'>Card 1</span>
                    </div>
                    <div id="Card-Image">
                        <div id='Card-Image-Single'>
                            <img id='ImgC2' className='Img-Cards' src={require('../Resources/Images/Cards/' + cardBack)} alt='This is a card.'/>
                        </div>
                        <span className="Card-IInfo" id='C2'>Card 2</span>
                    </div>
                    <div id="Card-Image">
                        <div id='Card-Image-Single'>
                            <img id='ImgC3' className='Img-Cards' src={require('../Resources/Images/Cards/' + cardBack)} alt='This is a card.'/>
                        </div>
                        <span className="Card-IInfo" id='C3'>Card 3</span>
                    </div>
                </div>
                <div className="Description" id="Description">Desc</div>
                <div className="Navigation" id="Navigation">
                    <input type='submit' value='Save Reading' onClick={saveReading}/>
                    <input type='submit' value='Return to Main' onClick={returnToMain}/>
                    <input type='submit' value='Seek Consultation'/>
                </div>
            </div>
        </div>
    )

}

export default ThreeFates;


