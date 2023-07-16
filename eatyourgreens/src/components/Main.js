import React from "react";
import Choices from "./Choices";
import Chosen from "./Chosen";

function Main() {
  return (
    <div className="Main container-fluid">
        <div className="row">
        <div className="col-12">
          <h2>Stuff to Eat</h2>
        </div>
      </div>
      <div className="col-12">
        <h2>Stuff Eaten</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <Choices />
        </div>
      </div>
      <div className="col-12">
        <Chosen />
      </div>
    </div>
  );
}

export default Main;
