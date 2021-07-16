import './App.css';
import Trees from './Trees';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Carbon Equivalencies
        <br />
        How many seedlings will need to grow for 10 years?
        <br />
        <sub>Source: <a href="https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator/">EPA Greenhouse Gas Equivalencies Calculator</a></sub>
      </header>

      <Trees />
    </div>
  );
}

export default App;
