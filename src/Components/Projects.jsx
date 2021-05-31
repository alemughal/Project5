import React from "react";
import { Button, Box } from "@material-ui/core/";
import Project1 from "../Images/project1.png";
import Project2 from "../Images/project2.png";
import Project3 from "../Images/project3.png";
import Project4 from "../Images/project4.png";
import Project5 from "../Images/project4b.png";

function Projects() {
  return (
    <div>
      <div class="card card-1">
        <div class="top">
          <img src={Project1} alt="expense" />
        </div>
        <div class="bottom">
          <p>Expense Tracker App</p>
          <Box textAlign="center">
            <Button
              variant="contained"
              align="center"
              color="primary"
              disableElevation
              size="medium"
              href="https://expense-tracker-alii.surge.sh/"
              target="blank"
            >
              Click
            </Button>
          </Box>
        </div>
      </div>
      <div class="card card-1">
        <div class="top">
          <img src={Project2} alt="covidTracker" />
        </div>
        <div class="bottom">
          <p>Covid Tracker App</p>
          <Box textAlign="center">
            <Button
              variant="contained"
              align="center"
              color="primary"
              disableElevation
              size="medium"
              href="https://covid-tracker-ali.surge.sh/"
              target="blank"
            >
              Click
            </Button>
          </Box>
        </div>
      </div>

      <div class="card card-1">
        <div class="top">
          <img src={Project3} alt="shoeStore" />
        </div>
        <div class="bottom">
          <p>Shoe Store</p>
          <Box textAlign="center">
            <Button
              variant="contained"
              align="center"
              color="primary"
              disableElevation
              size="medium"
              href="https://shoe-store-ali.surge.sh/"
              target="blank"
            >
              Click
            </Button>
          </Box>
        </div>
      </div>
      <div class="card card-1">
        <div class="top">
          <img src={Project4} alt="queenRace" />
        </div>
        <div class="bottom">
          <p>Queen Race Animations</p>
          <Box textAlign="center">
            <Button
              variant="contained"
              align="center"
              color="primary"
              disableElevation
              size="medium"
              href="https://queen-race-ali.surge.sh/"
              target="blank"
            >
              Click
            </Button>
          </Box>
        </div>
      </div>
      <div class="card card-1">
        <div class="top">
          <img src={Project5} alt="animations" />
        </div>
        <div class="bottom">
          <p>Animated Web Page.</p>
          <Box textAlign="center">
            <Button
              variant="contained"
              align="center"
              color="primary"
              disableElevation
              size="medium"
              href="https://little-animations.surge.sh/"
              target="blank"
            >
              Click
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Projects;
