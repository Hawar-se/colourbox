import "./App.css";
import JSON from "./users.json";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Card,
  CardHeader,
  CardActionArea,
} from "@material-ui/core/";
import Avatar from "@material-ui/core/Avatar";

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

{/* Map through element from JSON file and display it on card  */}
        {JSON.map((elem) => (
          <Grid item xs={12} sm={6} md={6} key={JSON.indexOf(elem)}>
            <Card>
              <CardActionArea>
                <CardHeader
                  titleTypographyProps={{ variant: "h5" }}
                  title={` ${elem.name}`}
                  subheader={` ${elem.company.name}`}
                  avatar={<Avatar aria-label="recipe"></Avatar>}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
