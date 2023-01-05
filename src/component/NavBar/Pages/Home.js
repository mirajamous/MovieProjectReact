
import Card from "./Card";
import Search from "./Search";
import React, { useEffect, useState } from 'react';
import"./Home.css";
let API_Key="&api_key=1afb99d9ce19e0c0f586dc673c4bb6cf";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_Key;

function Home(){
    const [movieData,setmovieData]=useState([]);
    const [url_set,setUrl]=useState(url);
    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            console.log(data.results);
            setmovieData(data.results);
        })

    },[url_set])
    return(
        <div className="MyHome">
            <Search />
            <div className="container"> 
               {
                (movieData.length==0)?<p>"NotFound"</p>:movieData.map((res,pos)=>{
                    return(
                        <Card info={res} key={pos}/>
                    )
                })
               }
                  
            </div>
        </div>
    )
}
export default Home;