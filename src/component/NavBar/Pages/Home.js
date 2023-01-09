
import Card from "./Card";
import Search from "./Search";
import React, { useEffect, useState } from 'react';
import"./Home.css";
import MyNavBar from "../MyNavBar";
let API_Key="&api_key=1afb99d9ce19e0c0f586dc673c4bb6cf";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_Key;
let url2=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_Key;
///discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22
// let url3=base_url+"/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc"+API_Key;

function Home(){
    const [movieData,setmovieData]=useState([]);
    const [movieData2,setmovieData2]=useState([]);
    // const [movieData3,setmovieData3]=useState([]);
    const [arr,setarr]=useState([]);
    const [search,setSearch]=useState("");
    const [url_set,setUrl]=useState(url);
    const [url_set2,setUrl2]=useState(url2);
    // const [url_set3,setUrl3]=useState(url3);
    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
            console.log(data.results);
            setmovieData(data.results);
        })
        fetch(url_set2).then(res2=>res2.json()).then(data2=>{
            console.log(data2.results);
            setmovieData2(data2.results);
        })
      

    },[url_set,url_set2])
    return(
        <div className="MyHome">
            <Search search={search} setSearch={setSearch} />
            <div className="container"> 
               {
                (movieData.length===0)?<p>"NotFound"</p>:movieData.map((res,pos)=>{
                    console.log(res.title.toLowerCase());
                    return(
                        res?.title?.toLowerCase().includes(search.toLowerCase()) || search.length===0?  <Card info={res} key={pos}/> :<div></div>      
                    )
                })
                
               }
               {
                (movieData2.length===0)?<p>"NotFound"</p>:movieData2.map((res,pos)=>{
                    console.log(res.title.toLowerCase());
                    return(
                        res?.title?.toLowerCase().includes(search.toLowerCase()) || search.length===0?  <Card info={res} key={pos}/> :<div></div>      
                    )
                })

               }
               
            </div>
        </div>
    )
}
export default Home;