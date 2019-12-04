import React from "react";
import { Parallax } from "react-parallax";
import "./parallaxBanner.css";

class ParallaxBanner extends React.Component {
  render() {
    return (
      <section>
        <div className="wrapper1Banner2">
          <Parallax
            bgImage={require(`../../../../asset/images/c.jpg`)}
            strength={300}
          >
            <div className="banner" style={{ width: "100%" }}></div>
          </Parallax>
          <div className="container">
            <div className="row justify-content-md-center inner">
              <div className="col-sm-8 col-md-8 col-lg-8 style1 align-self-start">
                <h1>Check out your repositories, </h1>
              </div>
            </div>
          </div>
          <div className="container-fluid spotlight"></div>
        </div>
      </section>
    );
  }
}

export default ParallaxBanner;
