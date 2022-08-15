import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "josias", email: "josias@mail.com", bio:"Texto genérico", role: "user"}}/>
    </div>
  );
}

export default App;
