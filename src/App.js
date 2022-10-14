import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Owen Flood</p>
      </header>

      <div className="App-body">{/* <p>MEEEE</p> */}</div>

      <img src="headshot.png" alt="frame" className="headshot" />

      <footer className="App-footer">
        <p>
          <a href="https://www.freepik.com/free-vector/car-assembly-line-illustration_3296490.htm#query=factory%20line&position=23&from_view=search">
            Background image
          </a>{" "}
          by katemangostar on Freepik <br />
        </p>
        Image by{" "}
        <a href="https://www.freepik.com/free-vector/male-employee-month-concept_7133470.htm#query=employee%20of%20the%20month&position=12&from_view=search">
          Freepik
        </a>
      </footer>
    </div>
  );
}

export default App;
