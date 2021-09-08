import "./App.css";
import Typography from "@material-ui/core/Typography";
import { Grid, Card } from "@material-ui/core/";

function App() {
  return (
    <div>
      <header className="App_header">
        <Typography variant="h3">Users</Typography>
      </header>
      {/* Grid has been used to adapt to the screen size */}
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {/* It is sized relative to its parent element based on a 12-column grid layout, I used 3 breakpoints */}
        <Grid item sm={12} md={6} lg={3}>
          <Card></Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
