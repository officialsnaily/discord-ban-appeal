import React, {Component} from 'react';
import PageNotFound from '../Images/readingtunic.png'
import {NavLink} from "react-router-dom";
class PageNotFoundError extends Component
{
    render()
    {
        return (
            <div>
                <img alt="404 tunic" src={PageNotFound}/>
                <h1 style={{textAlign: "center", color: "#000000"}}>404 Snaily Not Found!</h1>
                <h2>Go on! Slowly crawl back to where you came from..</h2>
                <NavLink to="/">
                    Go Home
                </NavLink>
            </div>
        );
    }
}

export default PageNotFoundError;
