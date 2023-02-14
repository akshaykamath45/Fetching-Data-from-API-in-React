import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

//In  JavaScript-->This is they way to fetch data from an API
// fetch("https://catfact.ninja/fact")
// .then((response) => response.json())//converts the response to json
// .then((data) => {
//   console.log(data);-->data is the json object
//});

function App() {
  const [name,setName]=useState(" ");
  const [predictedAge,setPredictedAge]=useState(0);

  const fetchData=()=>{
    Axios.get(`https://api.agify.io/?name=${name}`)
    .then((response)=>{
      setPredictedAge(response.data.age);
    });//Best Practice to use backticks,to declare a variable inside a string
  }
  return (
    <div className="App">
      <input placeholder="Ex. Akshay..." onChange={(event)=>{setName(event.target.value);}}/>
      <button onClick={fetchData}>Predict Age</button>
      <h1>Predicted Age : {predictedAge}</h1>
    </div>
  );
}

export default App;
