import React from "react";
import style from "./recipe.module.css"

function Recipe(props){
    return(
        <div className={style.recipe}>
            <h1 >{props.title}</h1>
            <p>{props.calories}</p>
            <img className={style.image} src={props.image} alt=""/>
            <ol>
                {props.ingredients.map(ingredient => (
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe