import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
    

  let myObj = {
    name: "Hitesh",
    age: 25,
    address: {
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
    },
  };
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Card username="Jet Li" Role="Cyber Security" myArr={newArr}/>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card />
    </>
  );
}

export default App;
