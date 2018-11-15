import React, { Component } from 'react';
import Buttons from './buttons.js';
import Screen from './screen.js';

class Calculator extends Component{
constructor(props){
	super(props);	
	this.state={
		selectedNumbers: '',	
		result: ''	
	}
	this.selectButton = (clickedButton)=>{
	 this.setState(prevState=>({
		result: '',
		selectedNumbers: prevState.selectedNumbers.concat(clickedButton)
	   }));
	};
}

	calculateOperations=(expressionToCalculate)=>{
		//let expressionToCalculateTrimmed = this.removeLastChar(expressionToCalculate)
	  this.setState({		
			result: eval(expressionToCalculate),			
			selectedNumbers: ''
			 });			 
	}

	// removeLastChar = (str)=>{
	// 	if(str.endsWith("+" || "-"|| "/" || "*")){
	// 			str = str.slice(0,-1);
	// 			return str
	// 	}
	// }
	
	cancel = ()=>{	
		this.setState({		
			selectedNumbers: '',	
		  result: ''
			 });		
	}	
	render(){
	  return(
		  <div className="flex flex--col flex--center">
				<Screen selectedNumbers={this.state.selectedNumbers} 
								result={this.state.result}
							  calculateOperations={this.calculateOperations}/>
				<Buttons selectButton={this.selectButton} 
								 selectedNumbers={this.state.selectedNumbers}
								 calculateOperations={this.calculateOperations}
								 cancel={this.cancel}/>
		  </div>
	  );    
	}}
export default Calculator;  