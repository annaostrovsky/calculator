import React from 'react';

const Screen = (props)=>{	
  return(
  <div className="calc__screen"> 
  {props.result ?
    <span>{props.result}</span> :
	<span>{props.selectedNumbers}</span>	
  }   
   </div>
  );
  }
  
  export default Screen;
  