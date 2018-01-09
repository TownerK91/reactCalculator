import React from "react";
import PropTypes from 'prop-types';


//<Math> is the other component. 

class Math extends React.Component{
	render(){
	//creating a 'let' var called Value to use in the switch statement
	//let value is going to change which is why it is best practice to use let 
		let value;

		switch (this.props.operator) {
      		case "+":
        		value = this.props.num1 + this.props.num2;
        		break;
      		case "-":
        		value = this.props.num1 - this.props.num2;
        		break;
      		case "*":
        		value = this.props.num1 * this.props.num2;
       			break;
      		case "/":
        		value = this.props.num1 / this.props.num2;
        		break;
      		default:
        		value = NaN;
    	}

    	return <span style={{ fontSize: 30 }}>{value}</span>;
	}
}

Math.propTypes = {
	num1: PropTypes.number,
	num2: PropTypes.number,
	Operator: PropTypes.string
}


export default Math;