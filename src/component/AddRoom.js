import React, { useState } from "react";
import "./AddRoom.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function AddRoom(props) {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  return (
    <div class="row">
      <div class="col-1"></div>
      <div class="col-3">
        <label>Room Type</label>
        <select
          onChange={(element) => {
            setType(element.target.value);
          }}
          id="input_type"
          class="form-control form-control-sm"
        >
          <option> </option>
          <option>Bedroom</option>
          <option>Children's Room</option>
          <option>Bathroom</option>
          <option>TV Room</option>
          <option>Gym Room</option>
          <option>kitchen</option>
          <option>garden</option>
        </select>
      </div>
      <div class="col-3">
        <label>Room Name</label>
        <input
          onChange={(element) => {
            setName(element.target.value);
          }}
          id="input_name"
          class="form-control form-control-sm"
          type="text"
          placeholder="Type here"
          maxlength="5"
        ></input>
      </div>

      <div class="col-3">
        <label>Room Icon Color</label>
        <input
          onChange={(element) => {
            setColor(element.target.value);
          }}
          id="input_color"
          class="form-control form-control-sm"
          type="color"
        ></input>
      </div>
      <div class="col-1">
        <button
          onClick={() => {
            props.add(type, name, color);
          }}
          type="button"
          id="B_createRoom"
          class="btn btn-primary btn-sm"
        >
          Create Room
        </button>
      </div>
      <div class="col-1"></div>
    </div>
  );
}
