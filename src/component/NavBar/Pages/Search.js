import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from "react";
import "./Search.css"
function Search() {
    const [search,setSearch]=useState();



    const formsubmit=()=>{
        
    }


    return (
        <div className="searchbody">
            <div className="layOut">
                <div className="content" >
                    <h1> Welcome to <br />our website </h1>
                    {/* <p>For movie <span>Lovers</span></p> */}
                    <p>Simple and quick description of movies by searching for the name of the movie</p>
                   
                   <InputGroup className="myinput mx-auto">
                        <Form.Control
                            placeholder="Search About film name ..."
                            value={search}
                            onChange={(e)=>{
                                setSearch(e.target.value);
                            }}
                            
                            // aria-label=""
                            // aria-describedby="basic-addon2"
                        />
                        <Button className='myBtn' id="button-addon2" type="submit" onClick={formsubmit}>
                            Search
                        </Button>
                    </InputGroup>
                </div>
                
            </div>

        </div>

    )
}
export default Search;