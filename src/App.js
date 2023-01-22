import './App.css';

function App() {

  const generateDigits = () => {
    const digits = [];

    for (let i = 1; i<10; i++) {
      digits.push(
        <button key={i}>{i}</button>
      )
    }
    return digits
  }

  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          0
        </div>
        <div className='container'>
          <div className='digits'>
            {generateDigits()}
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
          <div className='operators'>
            <button>CLR</button>
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
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
