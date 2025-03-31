
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Footer from './Footer/Footer';
import './App.css';
import Routing from "./Routing";
import { createContext, useState } from 'react';
export const Store = createContext();
function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
    <Store.Provider value={[ token, setToken ]}>
    <Header/>
    <Routing/>
    <Footer/>
    </Store.Provider>

    </div>
  );
}

export default App;
