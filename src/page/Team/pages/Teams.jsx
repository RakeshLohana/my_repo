import React from "react";
import ExCards from "../components/ExCards";
import "../styles/Card.css";
const Teams = () => {
  return (
    <div style={{marginTop:'100px'}}>
      <h1
        style={{
          fontSize: "60px",
          textAlign: "center",
          color: "rgb(153, 0, 0)",
          letterSpacing: "10px",
        }}
      >
        COMPLETE TEAM
      </h1>
      <p
        style={{
          marginTop: "30px",
          fontSize: "20px",
          textAlign: "center",
          color: "#000",
          fontWeight: "bold",
          fontFamily: "Arial",
        }}
      >
        Meet Our Complete Team
      </p>
      {/* EXECUTIVE BODY  */}
      <h1
        style={{
          marginTop: "70px",
          fontSize: "40px",
          textAlign: "center",
          color: "rgb(153, 0, 0)",
          fontWeight: "50",
        }}
      >
        EXECUTIVE BODY
      </h1>

      <div style={{ marginTop: "80px" }}>
        <ExCards />
      </div>
      {/* DIRECTORATE  */}
      {/* <h1
        style={{
          marginTop: "70px",
          fontSize: "40px",
          textAlign: "center",
          color: "#122973",
          fontWeight: "50",
        }}
      >
        DIRECTORATE
      </h1>

      <div style={{ marginTop: "80px" }}>
        <DirCards />
      </div> */}
    </div>
  );
};

export default Teams;
