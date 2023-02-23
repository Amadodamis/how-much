import './App.css';
import { useState } from "react"
import { createContext } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export const LanguageContext = createContext(null)

function App() {

  const [leng, setLeng] = useState("ESP")
  const toggleLeng = () => {
    setLeng((curre) => (curre === "ENG" ? "ESP" : "ENG"))
  }



  return (
    <LanguageContext.Provider value={{ leng, toggleLeng }} >
      <div className="App">

        <Header leng={leng}/>
        <Body leng={leng} toggleLeng={toggleLeng}/>

        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;