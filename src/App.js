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
  const [catFact, setCatfact] = useState("");
   
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatfact(res.data.fact);
    });
  };
  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
