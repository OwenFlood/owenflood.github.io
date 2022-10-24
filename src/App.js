import { useState } from 'react';

import './App.css';
import ControlPanel from './ControlPanel';
import Header from './Header';
import Footer from './Footer';
import Carousel from './Carousel';
import { AppProvider } from "./appContext";

const App = () => {
  const [carousel, setCarousel] = useState(1)

  return (
    <AppProvider value={{ carousel, setCarousel }}>
      <div className="App">
        <Header />

        <Carousel />

        <img src="headshot.png" alt="frame" className="headshot" />

        <ControlPanel />

        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
