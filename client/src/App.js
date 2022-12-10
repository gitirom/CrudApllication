
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>CRUDE APPLICATION</h1>
      <div className='form'>
        <leabl id="leabl">MovieName</leabl>
        <input type="text" name='movieName' /><br/>
        <leabl id="leabl">Review</leabl>
        <input type="text" name='review' /><br/>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
