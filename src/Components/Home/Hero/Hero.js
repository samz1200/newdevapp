import React from "react";
import './Hero.css'
const Hero = () => {
  return (
    <section>
      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-right text-center">
                <h2>
                  Build Your Very Own <br />
                  Mobile App for <br/> <span style={{ color:'blue'}}> IOS & Android</span>
                </h2>
                <p style={{color:'white'}}>
                  {" "}
                  We Create Apps for Individuals, Small Businesses, and
                  Enterprises
                </p>
                <a href="/price">Request a Free Quote Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
