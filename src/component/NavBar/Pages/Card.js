import React from "react";
// import myImg from "../../../../public/image/background.jpg"
import "./Card.css"
function Card(movie){
    console.log(movie.info);
    let img_path="https://image.tmdb.org/t/p/w500"
    return(
       <div className="Movie">
            <img src={img_path+movie.info.poster_path} className="cardImg" alt="movie"/>
            <div className="AboutMovie"> 
            <div className="Box">
                <h4 className="title"> {movie.info.title}</h4>
                <p className="MovieRate"> {movie.info.vote_average}</p>
            </div>
            <div className="overView"> 
                <h1>Describe</h1>
                <p>{movie.info.overview}</p>
            </div>

            </div>
       </div>
    )
}
export default Card;