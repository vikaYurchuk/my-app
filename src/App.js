import logo from './logo.svg';
import './App.css';
import { Bio } from './components/Bio';
import { Pictures } from './components/Pictures';
import { Gallery } from './components/Gallery';
import { Menu } from './components/Menu';
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Leonardo da Vinci</h1>
      <Menu/>
      </header>

      <main>

      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>  
      </main>
    </div>
  );
}

export default App;
