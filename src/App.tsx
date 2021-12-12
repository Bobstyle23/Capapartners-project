import React from "react";
import Header from "./components/Header";
import "./App.css";
import datas from "../src/data.json";
function App() {
  return (
    <div className="App">
      <Header />
      <p>
        {datas.requests.map((data) => (
          <>
            <h1>{data.client}</h1>
            <p>{data.amount}</p>
          </>
        ))}
      </p>
    </div>
  );
}

export default App;
