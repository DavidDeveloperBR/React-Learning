import './App.css';
import Carro from './components/Carro';

function App() {
  const carros = [
    {id:1, model: "Astra", brand: "Chevrolet", km: 20000, newCar: true},
    {id:2, model: "Kia", brand: "ford", km: 30000, newCar: false},
    { id: 3, model: "Gol", brand: "VW", km: 40000, newCar: true}
  ];

  return (
    <div className="App">
      <h1>Carros</h1>
      {carros.map(carro => (
        <Carro id={carro.id} model={carro.model} brand={carro.brand} km={carro.km} newCar={carro.newCar}/>
      ))}
      
    </div>
  );
}

export default App;
