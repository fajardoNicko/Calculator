import { useState } from 'react';
import './App.css';
function App() {
  const[display, setMydisplay] = useState("");

  function handleClick(val) {

    if (display === "Error") {
      setMydisplay(val);
    } else {
      setMydisplay(display + val);
    }
  }

  function clearDisplay() {
    setMydisplay("");
  }
  function toggleSign() {
    if (display.charAt(0) === "-") {
      setMydisplay(display.substring(1));
    } else {
      setMydisplay("-" + display);
    }
  }
  function handlePercent() {
    const num = parseFloat(display);
    if (!isNaN(num)) {
      const percentValue = num / 100;
      setMydisplay(percentValue.toString());
    }
  }

  function handleEqual() {
    setMydisplay("");
    const charArray = display.split("");
    let operator;
    let result;
    let indexOfOperator;
    let firstNum;
    let secondNum;
    if (charArray.includes("+")) {
        operator = "+";
        indexOfOperator = charArray.indexOf("+");

        if (indexOfOperator !== -1) {
          const left = charArray.slice(0, indexOfOperator);
          const right = charArray.slice(indexOfOperator + 1);

          firstNum = parseFloat(left.join(""));
          secondNum = parseFloat(right.join(""));
        }
      result = firstNum + secondNum;
      setMydisplay(result.toString());
    }
    else if  (charArray.includes("-")) {
      operator = "-";
      indexOfOperator = charArray.indexOf('-');

      if (indexOfOperator !== -1) {
        const left = charArray.slice(0, indexOfOperator);
        const right = charArray.slice(indexOfOperator + 1);

        firstNum = parseFloat(left.join(""));
        secondNum = parseFloat(right.join(""));
    }
    result = firstNum - secondNum;
    setMydisplay(result.toString());

  }
  else if (charArray.includes("×")) {
    operator = "×";
    indexOfOperator = charArray.indexOf('×');

    if (indexOfOperator !== -1) {
      const left = charArray.slice(0, indexOfOperator);
      const right = charArray.slice(indexOfOperator + 1);

      firstNum = parseFloat(left.join(""));
      secondNum = parseFloat(right.join(""));
    }
    result = firstNum * secondNum;
    setMydisplay(result.toString());
  }
  else if (charArray.includes("÷")) {
    operator = "÷";
    indexOfOperator = charArray.indexOf('÷');

    if (indexOfOperator !== -1) {
      const left = charArray.slice(0, indexOfOperator);
      const right = charArray.slice(indexOfOperator + 1);

      firstNum = parseFloat(left.join(""));
      secondNum = parseFloat(right.join(""));
    }
    result = firstNum / secondNum;
    setMydisplay(result.toString());
  }
  else {
    setMydisplay("Error");
  }
  if (!["+", "-", "×", "÷"].some(op => charArray.includes(op))) {
    setMydisplay(display);
    return;
  }
}
  return (
    <>
      <div className="app">
      <div className="container">
      <input type = "text" value = {display} className = "textarea" />
      <div className="firstRow">
        <button onClick = {() => handleClick("1")}> 1 </button>
        <button onClick = {() => handleClick("2")}> 2 </button>
        <button onClick = {() => handleClick("3")}> 3 </button>
        <button onClick = {() => handleClick("+")}> + </button>
      </div>
      <div className="secondRow">
        <button onClick = {() => handleClick("4")}> 4 </button>
        <button onClick = {() => handleClick("5")}> 5 </button>
        <button onClick = {() => handleClick("6")}> 6 </button>
        <button onClick = {() => handleClick("-")}> - </button>
      </div>
      <div className="thirdRow">
        <button onClick = {() => handleClick("7")}> 7 </button>
        <button onClick = {() => handleClick("8")}> 8 </button>
        <button onClick = {() => handleClick("9")}> 9 </button>
        <button onClick = {() => handleClick("×")}> × </button>
      </div>
      <div className="fourthRow">
        <button onClick = {() => handleClick(".")}> . </button>
        <button onClick = {() => handleClick("0")}> 0 </button>
        <button onClick = {toggleSign}> +/- </button>
        <button onClick = {() => handleClick("1")}> * </button>
      </div>
      <div className="fifthRow">
        <button onClick = {() => handleClick("÷")}> ÷ </button>
        <button onClick = { handleEqual }> = </button>
        <button onClick = { clearDisplay }> CE </button>
        <button onClick = { handlePercent }> % </button>
      </div>
      </div>
    </div>
    </>
)

}


export default App
