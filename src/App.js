import { Route, Routes } from 'react-router';
import './App.css';
import Login from './components/Home/Login';
import Navbar from './components/Navbar/Navbar';
import PrivateComponents from './components/PrivateComponent/PrivateComponents';
import Product from './components/Product';
import Products from './components/Product/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/products' element={<PrivateComponents><Products /></PrivateComponents>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/products/:id' element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
