import { useState } from 'react';

import './App.css';
import Header from './Header';
import { AppProvider } from "./appContext";

const App = () => {
  const [carousel, setCarousel] = useState(1)

  return (
    <AppProvider value={{ carousel, setCarousel }}>
      <div className="App">
        <Header />

      </div>
    </AppProvider>
  );
}

export default App;
