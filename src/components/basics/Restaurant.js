import React from "react";
import "./style.css";

const Restaurant = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle">Dinner</span>
            <h2 className="card-title">Maggi</h2>
            <span className="card-description subtle">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum aut
              maxime, cum repellendus molestias ratione asperiores vitae
              inventore culpa iure.
            </span>
            <div className="card-read">Read</div>
          </div>
          <img src="" alt="images" className="card-media"/>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
