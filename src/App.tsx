import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Todolist} from "./components/Todolist/Todolist";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className={"app_wrapper"}>
            <Header/>
            <Todolist/>
            <Footer/>
        </div>
    );
}

export default App;
