import React from "react";
import OuterAxios from "../Utils/Config/OuterAxios";
import { useNavigate } from "react-router-dom";

const CategoryPannel = () => {

    const navigate = useNavigate();
    function drawThree() {
        OuterAxios.get('/random?n=3').then(resp => {
            localStorage.setItem('cardsDrawn', JSON.stringify(resp.data.cards));
        })
    }

    function divine(event : any) {
        event.preventDefault();
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
                    <input type={'submit'} value='cate1' />
                    <input type={'submit'} value='cate2' />
                    <input type={'submit'} value='cate3' />
                    <input type={'submit'} value='cate4' />
                </form>
            </div>

            <div className="Submit">
                    <input type={'submit'} value='Divine!' onMouseOver={drawThree} onMouseDown={divine}/>
            </div>

        </div>
    )
}

export default CategoryPannel;
