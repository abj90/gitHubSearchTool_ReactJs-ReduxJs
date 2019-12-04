import React from "react";
import { Parallax } from "react-parallax";
import "./parallaxBanner.css";

class ParallaxBanner extends React.Component {
  render() {
    return (
      <div className="wrapper1">
        <Parallax
          bgImage={require(`../../../../asset/images/a1.png`)}
          strength={500}
        >
          <div className="banner" style={{ width: "100%" }}>
            <div className="title">
              <h1>Welcome to Github Serch Tool</h1>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default ParallaxBanner;
