import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Shop } from './Components/Shop';
import './App.css';
import {ContextProvider}from './context'
function App() {
  return (
    <div>
      <Header/>
      <ContextProvider>
        <Shop/>
        </ContextProvider>
        <Footer/>
      </div>
    
  );
}

export default App;
