import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from "react";
import "./Search.css"
import Card from './Card';
function Search({search,setSearch}) {
    // const [search,setSearch]=useState();
    // const handleKeyPress = (event) => {
    //     if(event.key === 'Enter'){
    //       console.log(search +" from Enter");
    //       setSearch("");     
    //     }
    //   }
    const formsubmit=()=>{
        console.log(search+" from button");
        setSearch("");
    }
    return (
        <div className="searchbody">
            <div className="layOut">
                <div className="content" >
                    <h1> Welcome to <br /> OurMovie</h1>
                    <p>Simple and quick description of movies by searching for the name of the movie</p>
                   
                   <InputGroup className="myinput mx-auto">
                        <Form.Control
                            placeholder="Search About film name ..."
                            value={search}
                            // onKeyPress={handleKeyPress}
                            onChange={(e)=>{
                                setSearch(e.target.value);
                            }} 
                        />
                        <Button className='myBtn' id="button-addon2" type="submit" onClick={formsubmit}>
                            Reset
                        </Button>
                    </InputGroup>
                </div>
                {/* <Card pro={search} /> */}
            </div>
           
        </div>

    )
}
export default Search;