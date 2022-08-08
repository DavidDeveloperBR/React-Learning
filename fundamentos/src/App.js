import logo from './logo.svg';
import './App.css';

//Components
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
