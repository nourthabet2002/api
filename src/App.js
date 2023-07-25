import logo from './logo.svg';
import './App.css';
import Cartlist from './Cartlist';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1>this users cards</h1>
      <Cartlist />
      <Card />
    </div>
  );
}

export default App;
