import { Container, CssBaseline, List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

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
     <ActivityDashboard activities={Activities} />
    </Container>
    </>
  ) 
}

export default App
