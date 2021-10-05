import React from "react";
import "./Footer.css";
import img1 from '../../../images/ff1.png'
import img2 from "../../../images/d3.jpg";
import img3 from '../../../images/hp1.png'
const Footer = () => {
  return (
    <section>
      <div className="subscribe-area p-5">
        <div className="container box">
          <div className="row">
            <div className="col-md-8 col-xl-8 col-lg-8 col-12 col-xs-12 col-sm-12">
              <div className="subscribe-area-left">
                <h2>
                  <span>Learn More about our</span>Free Vacations & Free Trips
                </h2>
              </div>
              <div className="subscribe-box">
                <form action="">
                  <input type="text" placeholder="Email" />
                  <button type="button"> Submit</button>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-xl-4 col-lg-4 col-12 col-xs-12 col-sm-12">
              <div className="subscribe-right">
                <ul>
                  <li>
                    <img src={img1} alt="" />
                    <span>Free Food</span>
                  </li>
                  <li>
                    <img src={img2} alt="" />
                    <span>Free Happy Hours</span>
                  </li>
                  <li>
                    <img src={img3} alt="" />
                    <span>Free Massages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row bottom">
          <div class="container">
            <div class="row">
            <div class="col-sm">
                <a href="/affiliates">  </a>
              </div>
              <div class="col-sm affliate">
                <a href="/affiliates"> Affiliates </a>
              </div>
              <div class="col-sm">
                <a href="/affiliates"> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
