import { Group } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material'

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Button
                color="inherit"
                sx={{ display: 'flex', gap: 2 }}
              >
                <Group fontSize="large" />
                <Typography variant="h4">
                  this
                </Typography>
              </Button>
            </Box>

            <Box sx={{ display: 'flex' }}>
              <Button color="inherit">Activities</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
            </Box>

            <Button
              size="large"
              variant="contained"
              color="warning"
            >
              Create Activity
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
