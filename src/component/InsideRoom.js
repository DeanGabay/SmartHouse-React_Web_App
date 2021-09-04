import React from "react";
import "./insideRoom.css";

export default function InsideRoom(props) {
  return (
    <div>
      <div class="card text-center">
        <div class="card-header">{props.type}</div>
        <div class="card-body">
          <h5 style={{ color: props.color }} class="card-title">
            {props.name} room
          </h5>
          <p class="card-text">
            <span>You can add and control appliances in {props.name} room</span>
          </p>
          <p class="card-text">
            <span>Last change:</span>
          </p>
          <a
            onClick={() => {
              props.show();
            }}
            type="button"
            class="btn btn-primary"
          >
            Add appliances
          </a>
        </div>
      </div>
    </div>
  );
}
