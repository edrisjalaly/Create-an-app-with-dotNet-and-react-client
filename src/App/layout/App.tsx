import { Container, CssBaseline, List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import NavBar from "./NavBar";

function App() {

  const [Activities, setActivites]= useState<Activity[]>([]);

  useEffect(()=> {
    axios.get<Activity[]>("https://localhost:7201/api/Activities")
    .then(response => setActivites(response.data));

  }, []);

  return (
    <>
    <CssBaseline />
    <NavBar />
    <Container sx={{ mt:3}}>
      <List>
        { Activities.map((activity) => (            
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>            
          </ListItem>
        ))}
      </List>
    </Container>
    </>
  ) 
}

export default App
