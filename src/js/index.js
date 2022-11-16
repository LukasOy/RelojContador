//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

function Contador(props){

    return (<div className="ContadorPrincipal">
            <div className="relojito" ><i class="fa-solid fa-clock"></i></div>
            <div className="Primercontador"></div>
            <div className="Segundocontador"></div>
            <div className="Tercercontador"></div>
            <div className="Cuartocontador"></div> 
            <div className="Quintocontador"></div>
            </div>)
}

let tiempo =  0;

setInterval(function numeroscontados(props){
    return (<div className ="counter"> <h1>Hello World</h1></div>)
    tiempo++
},500)

//render your react application
ReactDOM.render(<Contador />, document.querySelector("#app"));


