import React from "react";
import ExCards from "../components/ExCards";
import "../styles/Card.css";
const Teams = () => {
  return (
    <div style={{marginTop:'100px'}}>
      <h1
        style={{
          fontSize: "50px",
          textAlign: "center",
          color: "rgb(153, 0, 0)",
          letterSpacing: "5px",
        }}
      >
        MEET OUR TEAM
      </h1>
      <div style={{ marginTop: "20px" }}>
        <ExCards />
      </div>
    </div>
  );
};

export default Teams;
