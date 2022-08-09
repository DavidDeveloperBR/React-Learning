import logo from './logo.svg';
import './App.css';
import City from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { Fragment, useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  //const name = "Thiago";
  const [username] = useState("Joaquim");

  function showMessage(){
    alert("Hello World");
  }

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amrela", newCar: true, km: 0},
    {id: 2, brand: "Mitsubish", color: "Preto", newCar: false, km: 200},
    {id: 3, brand: "Chevrolet", color: "Vermelho", newCar: true, km: 0}
  ]

  const users = [
    {id: 1, name: "Joaquim", age: 30, job: "Programador"},
    {id: 2, name: "Thiago", age: 25, job: "Cozinheiro"},
    {id: 3, name: "Maria", age: 15 , job: "Estudante"}
  ];

  const [message, setMessage] = useState("");

  const handleMessage = (msg) =>{
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em Public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em Assets*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* Componente com props */}
      <ShowUserName name= {username}/>
      {/* Destructuring */}
      <CarDetails brand="Volkswagen" km={550} color="preto" newCar={false}/>
      {/* Reaproveitamento */}
      <CarDetails brand="Fiat" km={200} color="branco" newCar={true}/>
      <CarDetails brand="Ford" km={1000} color="prata" newCar={false}/>
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key= {car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
      ))}
      {/* Fragments*/}
      <Fragments propFragment="Teste"/>
      {/* Children */}
      <Container myValue="teste"> 
        <p>Esse é o conteudo</p>
      </Container>
      {/* Funções em props */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* State lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* Desafio */}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} age={user.age} job={user.job}/>
      ))}
    </div>
  );
}

export default App;
