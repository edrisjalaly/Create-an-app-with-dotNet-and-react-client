import { Container, CssBaseline} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {

  const [Activities, setActivites]= useState<Activity[]>([]);
  const [SelectedActivity, setSelectedActivity ] = useState<Activity | undefined>(undefined);

  useEffect(()=> { 
    axios.get<Activity[]>("https://localhost:7201/api/Activities")
    .then(response => setActivites(response.data));

  }, []);

  const handleSelectedActivity = (id: string) =>{
    setSelectedActivity(Activities.find( x =>x.id === id));
  }

  const handleCancelSelectedActivity = () => {
    setSelectedActivity(undefined);
  }

  return (
    <>
    <CssBaseline />
    <NavBar />
    <Container sx={{ mt:3}}>
     <ActivityDashboard 
      activities={Activities} 
      selectActivity={handleSelectedActivity}
      cancelActivity={handleCancelSelectedActivity}
      selectedActivity={SelectedActivity} />
    </Container>
    </>
  ) 
}

export default App
