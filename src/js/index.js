//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//function Contador(props){

//    return (<div className="ContadorPrincipal">
//            <div className="relojito"></div>
//            <div className="Primercontador"></div>
//            <div className="Segundocontador"></div>
//            <div className="Tercercontador"></div>
//            <div className="Cuartocontador"></div> 
//            <div className="Quintocontador"></div>
//            </div>)
//}

let tiempo =  0;

setInterval ( ()=> {
    //return (<div className ="counter"> <h1>Hello World</h1></div>)
    
//render your react application
    ReactDOM.render(<Home segundos={tiempo} />, document.querySelector("#app"));
    tiempo++
    },1000)

