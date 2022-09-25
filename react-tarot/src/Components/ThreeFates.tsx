
import { useEffect, useState } from "react";
import "../Utils/CSS/ThreeFates.css"
import { useNavigate } from "react-router-dom";
import InnerAxios from "../Utils/Config/InnerAxios";
import User from "../Classes/User";


const ThreeFates = () => {
    
    var cards:any;
    var category:any = JSON.parse(localStorage.category);
    var description:string ;
    //const USER = new User(localStorage.user.id, localStorage.user.username, localStorage.user.role);

    const [counter, setCounter] = useState(2);

    useEffect(() => {
        document.title = "Three Fates Draw";
    
        //Tarot cards has two sets of meanings dependent on the orientaion of the card. This is to simulate that.
        
        cards = JSON.parse(localStorage.cardsDrawn);
        
        description = 'In the category of ' + category.name +
            ' the first card shows ' + category.meanings[0] + 
            ' The second card shows ' + category.meanings[1] + 
            ' While the third and final card shows ' + category.meanings[2];
            
            
            //For testing console.log(counter);

        if(counter !== 0) { setCounter((counter) => counter - 1); }
    
    }, [counter]);
    
    const navigate = useNavigate();
    
    //File name for card display
    const IMAGEBASE = '../Resources/Images/Cards/';
    var cardBack = 'cd-back-ghost.jpg';

    let flag_CardsPlaced: boolean = false;
    
    function placeCard(  ) {

        if(!flag_CardsPlaced) {

            if(cards!= null) {    

                displayCardInfo( cards, 0, 'C1');
                displayCardInfo( cards, 1, 'C2');
                displayCardInfo( cards, 2, 'C3');

                displayCardDescription();

                flag_CardsPlaced = true;

            }
            else {
                alert('No cards have been drawn, how did you get here!');
                navigate('/');
            }

        }

    }

    function getOrientation() { 
        let orientaion:boolean = 0 === Math.round(Math.random() * 100) % 2 ;
        return( orientaion ) 
    }

    let setCardOrientation = ((orientaion: boolean, id: string) => {
        let card = document.getElementById(id);
        if(card !== null ) {
            if(!orientaion){ card.style.transform = 'rotate(180deg)'; }
            else{ card.style.transform = 'rotate(0deg)'; }
            
        }
    })

    function displayCardInfo( cards : any[], x : number, id : string ) {
        
            var c = cards[x];
            var card = document.getElementById(id);
            var meanings: string[] = c.meaning_up;
            var orientaion = getOrientation();

            if( !orientaion ) { meanings = c.meaning_rev; }
            
            displayCardFace( c.name_short + '.jpg', 'Img' + id, c.name, orientaion);

            if(card != null) { 
                card.innerHTML= '<h4>' + c.name + '</h4>\n' +
                                '<h5>' + c.type + '</h5>\n' +
                                '<p>' + meanings + '</p>';

                
                
            }

    }

    function displayCardFace(imageFile: string, id: string, altText: string, orientaion: any) {

        let place: HTMLImageElement = document.getElementById(id) as HTMLImageElement;
        if(place != null) { 
            place.src = IMAGEBASE + imageFile;
            place.alt = altText;
            setCardOrientation(orientaion, id);

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
    

    const getUserId = (() => {
        let userId = localStorage?.user ?? "8dab77eb-2689-4b89-bc39-aa104095ec61";
        if( userId !== null && userId !== undefined) {
        return( userId )
        }
        else{
        console.error("404: userId not found in local storage.");
        return( "" )
        
        }
    })

    function saveReading(event: any) {
        event.preventDefault();

        InnerAxios.post('/readings', {
            user_id : getUserId(),
            card1 : cards[0].name, 
            card2 : cards[1].name, 
            card3 : cards[2].name, 
            description : description, 
            category : category.id
    
        }).then(() => {
            alert('Reading saved!\nYou can view it in your reading history. (^u^)');
            navigate('/MainPage');
            
        }).catch( error => {
            alert(error?.response?.data?.message ?? 'Oops! Something went wrong. (>u>\')');
            console.log(error.response.data.message);
        
        })

    }

    const returnToMain = () => {
        navigate('/MainPage');
    }

    const getConsultants = () => {
        //Current is random placeholder pyhic page.
        
    }


    return(
        <div >
            <div className="Main">
                <div className="Title">Your Three Fates Reading</div>
                <div className="Sub-Title">{category.id}</div>
                <div className="Card-Div" onClick={placeCard}>
                    <div id="Card-Image">
                        <span className="Card-Info" id='C1'>1st Card</span>
                        <div id='Card-Image-Single'>
                            <img id="ImgC1" className='Img-Cards' src={require('../Resources/Images/Cards/' + cardBack)} alt='This is a card.'/>
                        </div>
                    </div>
                    <div id="Card-Image">
                        <span className="Card-Info" id='C2'>2nd Card</span>
                        <div id='Card-Image-Single'>
                            <img id='ImgC2' className='Img-Cards' src={require('../Resources/Images/Cards/' + cardBack)} alt='This is a card.'/>
                        </div>
                    </div>
                    <div id="Card-Image">
                        <span className="Card-Info" id='C3'>3rd Card</span>
                        <div id='Card-Image-Single'>
                            <img id='ImgC3' className='Img-Cards' src={require('../Resources/Images/Cards/' + cardBack)} alt='This is a card.'/>
                        </div>
                    </div>
                </div>
                <div className="Description" id="Description">The past is irriversable, but choice lies in the present, so the future is up to you.
                    <br/>Just as the meanings of the cards are set, but the meaning of the reading is up to you to interpret.
                </div>
                <div className="Navigation" id="Navigation">
                    <input type='submit' value='Save Reading' onClick={saveReading}/>
                    <input type='submit' value='Return to Main' onClick={returnToMain}/>
                    <a href="https://www.psychicsource.com/phone-psychic-readings?imc=334730&tfn=1.855.502.3000&msclkid=b43b39588e1612b53fee5a68d78652b2&utm_source=bing&utm_medium=cpc&utm_campaign=s_sea_nb_general_psychic_psychic-source_multi_d_c-us_p_lead_bi_en_txt_bing-search-desktop_&utm_term=psychic&utm_content=psychic____multi_txt_general_psychic_">
                        <input type='submit' value='Seek Consultation' onClick={getConsultants}/>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default ThreeFates;


