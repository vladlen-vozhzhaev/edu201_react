import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Menu} from "./components/Menu";
import {PostList} from "./components/PostList";
import {Post} from "./components/Post";
import {AddPost} from "./components/AddPost";

function App() {
  return (
    <div className="container">
        <BrowserRouter>
            <Menu/>
            <Route exact path="/" render={()=><PostList/>} />
            <Route path="/addPost" render={()=><AddPost/>}/>
            <Route path="/post" render={()=><Post/>}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
