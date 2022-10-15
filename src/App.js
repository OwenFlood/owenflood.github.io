import './App.css';

function App() {
  const panelWide = 350
  const panelSmall = 200
  const panelHeight = 100

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Owen Flood</p>
      </header>

      <div className="App-body">{/* <p>MEEEE</p> */}</div>

      <img src="headshot.png" alt="frame" className="headshot" />

      <div className="control-panel-wrapper">
        <svg className="control-panel-svg">
          <polygon
            points={
              `0,0 ` + // Top Left
              `${panelWide},0 ` + // Top Right
              `${panelWide / 2 + panelSmall / 2},${panelHeight} ` + // Bottom Right
              `${panelWide / 2 - panelSmall / 2},${panelHeight} ` // Bottom Left
            }
            className="control-panel"
          />
        </svg>
      </div>

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
