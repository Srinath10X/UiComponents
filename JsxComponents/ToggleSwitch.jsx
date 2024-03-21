import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  return (
    <div class="wrapper">
      <input type="checkbox" id="checkbox" />
      <label for="checkbox" class="switch"></label>
    </div>
  );
};

export default ToggleSwitch;
