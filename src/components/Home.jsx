import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your pproblems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div className="">
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            totam similique sint exercitationem deserunt nemo optio earum eius
            labore accusantium a dolor natus laboriosam voluptates officiis
            voluptate odit illo, et ipsa aperiam eos nobis nihil ullam? Quos
            voluptate dolor est cum architecto aspernatur temporibus. At
            excepturi inventore minima facere sit nesciunt aliquam, delectus
            vero blanditiis. In facere illo quos inventore fuga tempora dolores
            nam dolorem, accusantium vero esse a? Veniam magnam facere dolores
            accusantium animi magni minus aperiam sit minima, ullam consequuntur
            sunt explicabo quod omnis error obcaecati libero delectus placeat
            enim voluptatum, qui commodi, incidunt ratione laboriosam. Optio,
            omnis.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div className="">
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
