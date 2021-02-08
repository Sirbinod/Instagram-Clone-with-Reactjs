import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
// import Home from "./Home";
import Post from "./Post";


const App = () =>{
    return(
        <>
         <div>
            <NavBar/>
            <div>
                <Switch>
                    <Route path="/"  component={Post}/>
                </Switch> 
                <Post/>
            </div>
        </div>
        </>
    );
};
export default App;