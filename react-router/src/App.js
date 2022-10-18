import './App.css';

//config react router

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';

//components
import Navbar from './components/Navbar'
import Product from './components/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
        <h1>React Router</h1>
        <BrowserRouter>
          <Navbar/>
          {/* Search */}
          <SearchForm></SearchForm>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            {{/* Rota dinâmica */}}
            <Route path='/products/:id' element={<Product/>}></Route>
            {/* Nested routes */}
            <Route path='/products/:id/info' element={<Info/>}></Route>
            {/* Search */}
            <Route path='/search' element={<Search/>}></Route>
            {/* No match route */}
            <Route path='*' element={<NotFound/>}></Route>
            {/* Redirect */}
            <Route path='/company' element={<Navigate to='/about'/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
