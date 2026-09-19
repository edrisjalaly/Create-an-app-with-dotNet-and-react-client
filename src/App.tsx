import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"

function App() {

  const [Activities, setActivites]= useState<Activity[]>([]);

  useEffect(()=> {
    axios.get<Activity[]>("https://localhost:7201/api/Activities")
    .then(response => setActivites(response.data));

  }, []);

  return (
    <>
      <Typography variant="h3" className="app" style={{color: "red"}}> an-app</Typography>
      <List>
        { Activities.map((activity) => (            
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>            
          </ListItem>
        ))}
      </List>
    </>
  ) 
}

export default App
