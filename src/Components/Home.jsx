import React from "react";
import HomePic from "../Images/homePic.jpg";
import useWebAnimations, { lightSpeedInLeft } from "@wellyshen/use-web-animations";

function Home() {
  const { ref } = useWebAnimations({...lightSpeedInLeft});
  return (
    <div id="container">
      <div id="content">
        <h1 id="head1" ref={ref}>
          Grow your bussiness with
          <br />
          <strong id="brandName">A.M Services</strong>
        </h1>
        <h4 id="head3">We are team of talented Developers</h4>
        <p>
          We are the team of talented developers Lorem ipsum odor amet,
          consectetuer adipiscing elit. Penatibus auctor faucibus sollicitudin
          laoreet hendrerit. Suspendisse dictumst finibus dolor maximus natoque
          vulputate integer amet. Porttitor fusce nisi pharetra nam litora
          interdum per! Conubia gravida cubilia dictumst justo ligula dignissim.
          Nisl sollicitudin dis vivamus montes at cubilia volutpat cras
          adipiscing.
        </p>
      </div>
      <img src={HomePic} alt="" className="homePic" align="right" />
    </div>
  );
}

export default Home;