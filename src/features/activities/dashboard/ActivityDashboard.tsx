import { Grid } from '@mui/material'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'

type Props = {
  activities: Activity[]
  selectedActivity?: Activity;

  selectActivity: (id: string) =>void;
  cancelActivity : () => void;
 }

export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelActivity }: Props) {

  console.log(selectedActivity);

  return (
    <Grid container spacing={3}>
     <Grid size={7}>
      <ActivityList activities={activities} selectActivity={selectActivity}  />
     </Grid>
     <Grid size={5}> 
      
      {selectedActivity && <ActivityDetails activity={selectedActivity} cancelActivity={cancelActivity} /> }
     </Grid>
    </Grid>
  )
}
