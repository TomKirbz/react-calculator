import React from 'react';
import logo from './logo.svg';
import './App.css';

let storedValue = null

class App extends React.Component {

 state = {
   value: '',
 }
 

  produceNumber = (val) => {
    let currentValue = this.state.value
    storedValue = currentValue += val
    this.setState({value: storedValue})
    console.log(storedValue)
  }

  // equals = () => {
  //   let newValue = this.state.value
  //   this.setState({value: newValue})
  // }

  clearValues = () => {
    let resetV = this.state.value
    resetV = ''
    this.setState({value: resetV})
  }

  // addButton = () => { 
  //     store = this.state.value
  //     let newValue = store
  //     this.setState({value: newValue})
  //     console.log("add")
  // }

  render() {
  return (
    <div>
      <div className="calc-body">
      <h1 className="value-box" placeholder="0"> {this.state.value} </h1>
      <div className="button-body row1">
        <div className="clear-value" onClick={this.clearValues}>clear</div>
        <div className="func">÷</div>
      </div>
      <div className="button-body row2">
      <div className="num" onClick={()=> this.produceNumber(7)}>7</div>
      <div className="num" onClick={()=> this.produceNumber(8)}>8</div>
      <div className="num" onClick={()=> this.produceNumber(9)}>9</div>
      <div className="func">-</div>
      </div>
      <div className="button-body row3">
      <div className="num" onClick={()=> this.produceNumber(4)}>4</div>
      <div className="num" onClick={()=> this.produceNumber(5)}>5</div>
      <div className="num" onClick={()=> this.produceNumber(6)}>6</div>
      <div className="func" onClick={()=> this.addButton()}>+</div>
      </div>
      <div className="button-body row4">
      <div className="num" onClick={()=> this.produceNumber(1)}>1</div>
      <div className="num" onClick={()=> this.produceNumber(2)}>2</div>
      <div className="num" onClick={()=> this.produceNumber(3)}>3</div>
      <div className="func" onClick={()=> this.produceNumber()}>x</div>
      </div>
      <div className="button-body row5">
      <div className="num-0" onClick={()=> this.produceNumber(0)}>0</div>
      <div className="func">=</div>
      </div>

      </div>
    </div>
  );
}
}



/* <button className="my-button" onClick = {this.incrementValue}> Increment </button>
      <button className="my-button" onClick = {this.decrementValue}> decrement </button> */


export default App;
