import React from 'react';

const Buttons = (props)=>{
	return(
	  <div className="calc__numbers flex--wrap">
		  {Buttons.numberList.map((number, i)=>
		  <button key={i} onClick={()=>props.selectButton(number)}>{number}</button>
		  )}
		   {Buttons.operators.map((string, i)=>
		  <button key={i} onClick={()=>props.selectButton(string)}>{string}</button>
			)}
			 <button onClick={props.cancel}>C</button>
		  <button onClick={()=>props.calculateOperations(props.selectedNumbers)}>=</button>		
		 
	  </div>
	
	);
  };
  
  
  Buttons.numberList = [1,2,3,4,5,6,7,8,9,0,];
  Buttons.operators = ['+', '-', '*', '/',];

  export default Buttons;