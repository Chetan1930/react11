import { useEffect, useState } from "react";
import Js from './Components/Js'

function App() {
  const [data, setData] = useState([
    {
      id: "1",
      name: "Chetan",
      age: "22",
      postion: "student",
      status: false,
    },
    {
      id: "2",
      name: "Mohit",
      age: "22",
      postion: "Teacher",
      status: false,
    },
    {
      id: "3",
      name: "Chetan",
      age: "22",
      postion: "student",
      status: false,
    },
    {
      id: "4",
      name: "Chetan",
      age: "22",
      postion: "student",
      status: false,
    },
  ]);

  const keys = Object.keys(data[0]);

  console.log(keys);

  return (
    <>
    <Js/>
      <div className="parent">
        {keys.map((title) => (
          <div className="column">{title}</div>
        ))}
      </div>

      
        {data.map((obj) => {
          return (
            <div className="parent"> 
              {keys.map((key1, i) => {
                return (
                  <div className="column" key={i}>
                    {obj[key1]}
                  </div>
                );
              })}
            </div>
          );
        })}
    
    </>
  );
}

export default App;
