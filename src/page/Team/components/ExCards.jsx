import React from "react";
import "../styles/Card.css";
import SingleCard from "./SingleCard";



const detail = [
  {
    name: "NAYEL HASHMI",
    post: "President",
    imageURL: "images/Directorate/p1.jpg",
  },
  {
    name: "DUA SIDDIQUI",
    post: "Vice President",
    imageURL:"images/Directorate/p2.jpg"
  },
  {
    name: "M.ABDULLAH HAYAT",
    post: "General Secretary",
    imageURL:"images/Directorate/p3.jpg",
  },
  {
    name: "MUHAMMMAD USMAN",
    post: "Treasurer",
    imageURL:"images/Directorate/p7.jpg",
  }
];

const ExCards = () => {
  return (
    <>
      <div className="cards-main">
        {detail.map((i) => {
          return <SingleCard key={i.name} name={i.name} post={i.post} imageURL={i.imageURL}/>;
        })}
      </div>
    </>
  );
};

export default ExCards;
