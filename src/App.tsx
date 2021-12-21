import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import "./App.css";
import datas from "../src/data.json";

function App() {
  const items = datas.requests;

  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
