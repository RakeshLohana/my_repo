import React from "react";
import "../styles/Card.css";
const SingleCard = (props) => {
  return (
    <div>
      <div className="card_team mt-5">
        <div className="imgBx">
          <img src={props.imageURL} alt="images" />
        </div>
        <div className="details">
          <h2>
            {props.name}
            <br />
            <span>{props.post}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
