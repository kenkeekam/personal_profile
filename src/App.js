import React from 'react'
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
 
  return (
    <Router>
    <div className="app">
 
        <Switch>

      <Route path="/contact">
        <Header />
        <Contact />
        <Footer />
      </Route>

      <Route path="/">
        <Header />
        <Home />
        <Footer />
      </Route>
  
      </Switch>
     </div>
    </Router>
  );
}

export default App;
