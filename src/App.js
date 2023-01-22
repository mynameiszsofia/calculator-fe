import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState("");

  const ops = ['+','-','*', '/', '.'];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    if ((calc === "0") && (value !== ".")) {
      return setCalc(value)
    }
    setCalc(calc + value);
  }

  const getResult = () => {
    setCalc(eval(calc).toString());
  }

  const clear = () => {
    if (calc === "") {
      return;
    }
    setCalc("0")
  }

  const generateDigits = () => {
    const digits = [];

    for (let i = 1; i<10; i++) {
      digits.push(
        <button 
          onClick={() => updateCalc(i.toString())} 
          key={i}>
            {i}
        </button>
      )
    }
    return digits
  }

  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          {calc || "0"}
        </div>
        <div className='container'>
          <div className='digits'>
            {generateDigits()}
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => getResult()}>=</button>
          </div>
          <div className='operators'>
            <button onClick={() => clear()}>CLR</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('/')}>/</button>
          </div>
        </div>
        <div className='memory'>
          <button>Save</button>
          <button>Read</button>
        </div>
      </div>
    </div>
  );
}

export default App;
