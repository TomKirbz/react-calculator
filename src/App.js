import React from 'react';
import './App.css';

class App extends React.Component {
 state = {
   value: 0,
   calcFunction: "",
   storedValue: null
 }

  produceNumber = (val) => {
    if (this.state.value === 0) {
    let currentValue = val
    this.setState({value: currentValue})
    } else if (this.state.value !== 0) {
    let input = val
    let newValue = this.state.value.toString() + input
    this.setState({value: parseInt(newValue)})
    }
  }

  equals = () => {
    if (this.state.calcFunction === "+") {
      let currentValue = this.state.value 
      let newValue = this.state.storedValue + currentValue
      this.setState({value: newValue})

    } else if (this.state.calcFunction === "/") {
      let currentValue = this.state.value 
      let newValue = this.state.storedValue/ currentValue
      this.setState({value: newValue})

    } else if (this.state.calcFunction === "-") {
      let currentValue = this.state.value 
      let newValue = this.state.storedValue - currentValue
      this.setState({value: newValue})

    } else if (this.state.calcFunction === "x") {
      let currentValue = this.state.value 
      let newValue = this.state.storedValue * currentValue
      this.setState({value: newValue})
    } 
    
  }

  clearValues = () => {
    this.setState({value: 0, calcFunction: "", storedValue: null})
  }

  functionButton = (func) => { 
      let current = this.state.value
      this.setState({storedValue: current})
      this.setState({value: '', calcFunction: func})
  }

  backtick = () => {
    let currentValue = this.state.value
    if (currentValue !== 0) {
      currentValue = currentValue.toString();
      let newValue = currentValue.substring(0, currentValue.length -1);
      this.setState({value: parseInt(newValue)})
      } else if (currentValue === 0){
        this.setState({value: 0})
      }
  }

  render() {
  return (
    <div>
      <div className="calc-body">
      <h1 className="value-box" placeholder="0"> {this.state.value.toString()} </h1>
      <div className="button-body row1">
        <div className="clear-value" onClick={this.clearValues}>Clear</div>
        <div className="func backtick" onClick={this.backtick}>←</div>
        <div className="func" onClick={()=> this.functionButton("/")}>÷</div>
      </div>
      <div className="button-body row2">
      <div className="num" onClick={()=> this.produceNumber(7)}>7</div>
      <div className="num" onClick={()=> this.produceNumber(8)}>8</div>
      <div className="num" onClick={()=> this.produceNumber(9)}>9</div>
      <div className="func" onClick={()=> this.functionButton("-")}>-</div>
      </div>
      <div className="button-body row3">
      <div className="num" onClick={()=> this.produceNumber(4)}>4</div>
      <div className="num" onClick={()=> this.produceNumber(5)}>5</div>
      <div className="num" onClick={()=> this.produceNumber(6)}>6</div>
      <div className="func" onClick={()=> this.functionButton("+")}>+</div>
      </div>
      <div className="button-body row4">
      <div className="num" onClick={()=> this.produceNumber(1)}>1</div>
      <div className="num" onClick={()=> this.produceNumber(2)}>2</div>
      <div className="num" onClick={()=> this.produceNumber(3)}>3</div>
      <div className="func" onClick={()=> this.functionButton("x")}>x</div>
      </div>
      <div className="button-body row5">
      <div className="num zero" onClick={()=> this.produceNumber(0)}>0</div>
      <div className="func" onClick={this.equals}>=</div>
      </div>
      </div>
    </div>
  );
}
}

export default App;
