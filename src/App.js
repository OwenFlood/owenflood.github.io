import './App.css';
import ControlPanel from './ControlPanel';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="App-body">{/* <p>MEEEE</p> */}</div>

      <img src="headshot.png" alt="frame" className="headshot" />

      <ControlPanel />

      <Footer />
    </div>
  );
}

export default App;
