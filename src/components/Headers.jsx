import react from "react";
import troll from "./images/trollFace.png";

export default function Headers() {
  return (
    <div className="headerClass">
      <img src={troll} alt="This is the header logo" className="header--logo" />
      <h2 className="header--heading">MemeGenerator</h2>
    </div>
  );
}
