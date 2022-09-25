import { MouseEvent, TouchEvent, KeyboardEvent, useEffect, useState } from "react";
import OuterAxios from "../Utils/Config/OuterAxios";
import { useNavigate } from "react-router-dom";
import Category from "../Classes/Category";
import '../Utils/CSS/Categories.css';



//CATEGORY objects
const cate_love = new Category( 'LOVE', 'Love', ['what you want.', 'what your partner wants.', 'where your relationship is going.'] );
const cate_future = new Category( 'FUTURE', 'future', ["your future's general direction.", "your future joy.", "your future sorrow."] );
const cate_horizons = new Category( 'HORIZONS', 'Horizons', ['where you are now.', 'where you could be.', 'how to get there.'] );
const cate_career = new Category( 'CAREER', 'Career', ["if your current career is your ideal career or not.", "the actions you must take to boost your career.", "where you are compared to your co-workers."] );
const cate_happiness = new Category( 'HAPPINESS', 'Happiness', ["your current happiness.", "what you can do to protect that happiness.", "what is threatening that happiness."] );
const cate_pets = new Category( 'PETS', 'Pets', ["how your pet feels about you.", "how your pet feels in general.", "what your pet wants from you."] );
//const cate_money = new Category( 'MONEY', 'Money', ["", "", ""] );
//const cate_name = new Category( 'ID', 'Name', ["", "", ""] );


const CategoryPannel = () => {
    
    useEffect(() => {
        document.title = "Choose a Category";
    }, []);

    //const [reading, setReading] = useState({});

    const navigate = useNavigate();
    var category: Category = cate_future;

    const setCategoryFuture = () => {
        category = cate_future;
        setSubTitle(category.getId())

    }
    const setCategoryLove = () => {
        category = cate_love;
        setSubTitle(category.getId())
    }
    const setCategoryHorizons = () => {
        category = cate_horizons;
        setSubTitle(category.getId())
    }
    const setCategoryCareer = () => {
        category = cate_career;
        setSubTitle(category.getId())
    }
    const setCategoryHappiness = () => {
        category = cate_happiness;
        setSubTitle(category.getId())
    }
    const setCategoryPets = () => {
        category = cate_pets;
        setSubTitle(category.getId())
    }

    function setSubTitle(cate: string) {
        let subTitle = document.getElementById('Cate-SubTitle')

        if(subTitle !== null) {
            subTitle.innerHTML = cate;
            showQuestionInput();
        }

        localStorage.setItem('category', JSON.stringify(category));
    }

    const showQuestionInput = (() => {
        let qInput = document.getElementById('Question-Div');
        if(qInput !== null) {
            qInput.hidden = false;
        }
    })

    function drawThree() {
        OuterAxios.get('/random?n=3').then(resp => {            
            
            localStorage.setItem('cardsDrawn', JSON.stringify(resp.data.cards));
            //localStorage.setItem('category', JSON.stringify(category));
            

        })
    }

    function divine(event : MouseEvent | KeyboardEvent | TouchEvent) {
        event.preventDefault();
        //drawThree();
        navigate('/Draw');
    }


    return(
        <div className="Pannel">

            <div className="Cate-Title">
                <h1>What Do You Want To Know About?</h1>
                <br/>
                <h3 id="Cate-SubTitle">Choose a Category.</h3>
            </div>
            <div className="Selection">
                <div className='Selection-Inner'>
                    <input className='Cate-Button' type={'submit'} value='Future' onClick={setCategoryFuture}/>
                    <input className='Cate-Button' type={'submit'} value='Love' onClick={setCategoryLove}/>
                    <input className='Cate-Button' type={'submit'} value='Horizons' onClick={setCategoryHorizons}/>
                    <input className='Cate-Button' type={'submit'} value='Career' onClick={setCategoryCareer}/>
                    <input className='Cate-Button' type={'submit'} value='Happiness' onClick={setCategoryHappiness}/>
                    <input className='Cate-Button' type={'submit'} value='Pets' onClick={setCategoryPets}/>
                </div>
            </div>


            <div id="Question-Div" hidden={true}>
                <h4>What do you want to know?</h4>
                <input className="Cate-Question" type={'text'} placeholder='Enter your query.' />
                <br/>
                <div className="Selection-Submit">
                        <input className='Cate-Button-Submit' type={'submit'} value='Divine' onMouseDown={drawThree} onClick={divine}/>
                </div>
            </div>
            
        </div>
    )
}

export default CategoryPannel;
