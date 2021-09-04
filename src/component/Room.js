import React from "react";
import "./room.css";
import Button from "@material-ui/core/Button";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Room(props) {
  return (
    <div style={{ borderColor: props.color }} id="posts" class="card">
      <div class="card-body">
        <h5 class="card-title" style={{ color: props.color }}>
          {props.name} Room
          <a
            onClick={() => {
              props.deletefunction(props.index);
            }}
            id="delete_button"
            type="button"
          >
            X
          </a>
        </h5>
        <p class="card-text">Type room: {props.type}</p>
        <Link id="link" to={"/Insideroom" + props.index}>
          <a
            href="#"
            class="btn btn-primary"
            style={{ backgroundColor: props.color }}
            value={props.index}
          >
            Go {props.name}'s Room{" "}
          </a>
        </Link>
      </div>
    </div>
  );
}
