import "./App.css";
import JSON from "./users.json";
import Typography from "@material-ui/core/Typography";
import { Grid, Card, CardHeader, CardActionArea } from "@material-ui/core/";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: "#4386eb",
  },
});

function App() {
  const classes = useStyles();


  return (
    <div>
      <header className={classes.App_header}>
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
            <Card className={classes.root}>
              <CardActionArea>
                <CardHeader
                  title={` ${elem.name}`}
                  titleTypographyProps={{ variant: "h4", color: "black" }}

                  subheader={`( ${elem.company.name})`}
                  subheaderTypographyProps={{ variant: "h6" }}
                  // MuiCardHeader-subheader={{display:inline}}
                  avatar={
                    <Avatar
                      aria-label="recipe"
                      className={classes.avatar}
                    ></Avatar>
                  }
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
