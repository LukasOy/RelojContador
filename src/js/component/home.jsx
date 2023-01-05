import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({segundos}) => {
	let string = segundos.toString()
	let unidad = string[string.length -1]
	let decena = string[string.length -2]
	let centena = string[string.length -3]
	let dmil = string[string.length -4]

	
	function stopCounter() {
		// aquí debes poner el código para detener el contador
	  }
	return (
		
		<div className="Reloj1">
			<img src="https://pbs.twimg.com/media/CDfNmCAUUAE_4fO.jpg" alt="estas muerto.com"></img>
		<div className="text-center">
			<button className="btn btn-danger" >¿Cuanto Falta? </button>
			<button className="btn btn-danger" > {dmil==undefined? "0":centena} </button>
			<button className="btn btn-danger" > {centena==undefined? "0":centena} </button>
			<button className="btn btn-danger" > {decena==undefined? "0":decena} </button>
			<button className="btn btn-danger" > {unidad} </button>
			<button className="btn btn-danger" onClick={stopCounter}>ESTAP</button>
		</div>
		</div>
	);
};


export default Home;

 
 
