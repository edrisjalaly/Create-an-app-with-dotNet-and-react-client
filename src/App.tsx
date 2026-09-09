import { useEffect, useState } from "react"

function App() {

  const [Activities, setActivites]= useState([]);

  useEffect(()=> {
    fetch("https://localhost:7201/api/Activities")
    .then(response => response.json())
    .then(data => setActivites(data));

  }, []);

  return (
    <div>
      <h3 className="app" style={{color: "red"}}> an-app</h3>
      <ul>
        { Activities.map((activity) => (
          <li key={activity.id}> {activity.title} </li>
        ))}
      </ul>
    </div>
  ) 
}

export default App
