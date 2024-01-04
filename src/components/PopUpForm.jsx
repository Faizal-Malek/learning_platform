import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Register(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup--inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>Close  
        <FontAwesomeIcon icon={faX} className="close--icon" /></button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
