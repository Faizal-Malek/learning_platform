import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
  return (
    <div className="Nav--container">
      <div className="Nav--logo">
        <h1>Libex</h1>
      </div>
      <div className="Nav--items">
        <ul>
          <li><a href="https://nft.libex.ai/">NFT Market Place</a></li>
          <li><a href="https://quota.libex.ai/">Libex Quota</a></li>
        </ul>
      </div>
      <button class="clip" onClick={props.register}>Register 
      <FontAwesomeIcon icon={faArrowRight}  className ="faIcon" />
      </button>
      <FontAwesomeIcon icon={faUser} className="fa-icon" />
    </div>
  );
}
