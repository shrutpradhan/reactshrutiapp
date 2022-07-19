import React from 'react'
import './App.css';
import Header from "./components/Header.js"
import Booktrial from "./components/Booktrial"
import Rules from "./components/Rules"
import Working from "./components/Working"

function App() {
  return (
    <div className="App">
      <Header/>
      <Booktrial/>
      <Working/>
      <Rules/>
      

    </div>
  );
}

export default App;
