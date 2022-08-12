import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react';
import Title from './components/Title';

function App() {
  const n = 9;
  const [name] = useState("Matheus");
  const redTitle = false;
  return (
    <div className="App">
      {/*CSS global */}
      <h1>React com CSS</h1>
      {/*CSS de componente */}
      <MyComponent/>
      <p>Este paragrafo é do App.js</p>
      {/*Inline CSS */}
      <p style={{color: "blue", padding: "25px",borderTop: "2px slid red"}}>
        Este elemente foi estilizado em forma inline
      </p>
      {/*Inline style dinâmico CSS */}
      <h2 style={n < 10 ? ({color: "purple"}):({color: "pink"})}>
        CSS inline dinâmico
      </h2>
      <h2 style={n > 10 ? ({color: "purple"}):({color: "pink"})}>
        CSS inline dinâmico
      </h2>
      <h2 style={name === "a" ? ({color: "green"}):null}>
        Matheus
      </h2>
      {/*CSS classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinâmica</h2>
      {/*CSS Modules */}
      <Title/>
      <h2 className='my_title'>Teste</h2>
    </div>
  );
}

export default App;
