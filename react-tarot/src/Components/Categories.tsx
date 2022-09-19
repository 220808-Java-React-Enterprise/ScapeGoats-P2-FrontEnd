import React, { MouseEvent, TouchEvent, KeyboardEvent, useEffect } from "react";
import OuterAxios from "../Utils/Config/OuterAxios";
import { useNavigate } from "react-router-dom";
import Category from "../Classes/Category";



//CATEGORY objects
const cate_love = new Category( 'Love', ['What you want.', 'What your partner wants.', 'Where your relationship is going.'] );
const cate_life = new Category( 'Life', ["your past.", "your present.", "your future."] );
const cate_goals = new Category( 'Goals', ['Where you are now.', 'Where you want to be.', 'How to get there.'] );
//let cate_name = new Category( 'Name', ["", "", ""] );

const CategoryPannel = () => {
    
    useEffect(() => {
        document.title = "Choose a Category";
    });

    const navigate = useNavigate();
    var category: Category = cate_life;

    const setCategoryLife = () => {
        category = cate_life;
    }
    const setCategoryLove = () => {
        category = cate_love;
    }
    const setCategoryGoals = () => {
        category = cate_goals;
    }

    function drawThree() {
        OuterAxios.get('/random?n=3').then(resp => {
            localStorage.setItem('cardsDrawn', JSON.stringify(resp.data.cards));
            localStorage.setItem('category', JSON.stringify(category));

        })
    }

    function divine(event : MouseEvent | KeyboardEvent | TouchEvent) {
        event.preventDefault();
        //drawThree();
        navigate('/draw');
    }

    return(
        <div className="Pannel">

            <div className="Title">
                <h1>Categories</h1>
                <h3>Choose a Category!</h3>
            </div>
            <div className="Selection">
                <form>
                    <input type={'submit'} value='Life' onClick={setCategoryLife}/>
                    <input type={'submit'} value='Love' onClick={setCategoryLove}/>
                    <input type={'submit'} value='Goals' onClick={setCategoryGoals}/>
                </form>
            </div>

            <div className="Submit">
                    <input type={'submit'} value='Divine!' onMouseDown={drawThree} onClick={divine}/>
            </div>

        </div>
    )
}

export default CategoryPannel;
