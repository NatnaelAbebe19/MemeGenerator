import { useState } from "react";
import "./App.css";
import Headers from "./components/Headers";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="container">
      <Headers />
      <Meme />
    </div>
  );
}

export default App;
