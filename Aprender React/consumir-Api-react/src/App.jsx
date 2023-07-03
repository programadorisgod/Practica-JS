import "./App.css";
import { fetchData } from "./fetchData";
import { Suspense } from "react";
const apiData = fetchData("https://jsonplaceholder.typicode.com/users");
function App() {
  const data = apiData.read();
  return (
    <div className="App">
      <h1>Fetch Like a pro</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}

export default App;
