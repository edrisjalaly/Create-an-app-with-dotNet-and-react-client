import { Grid } from '@mui/material'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'

type Props = {
    activities: Activity[]
}

export default function ActivityDashboard({activities}: Props) {
  return (
    <Grid container spacing={3}>
     <Grid size={7}>
      <ActivityList activities={activities} />
     </Grid>
     <Grid size={5}>
      {activities[1] && <ActivityDetails activity={activities[1]} /> }
     </Grid>
    </Grid>
  )
}
