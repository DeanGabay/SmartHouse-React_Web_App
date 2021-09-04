import React from "react";
import Switch from "@material-ui/core/Switch";
import "./AppliancesInRoom.css";
export default function AppliancesInRoom(props) {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div id="advice1">
      <a
        onClick={() => {
          props.editedadvice(props.name, props.logo, props.index);
        }}
        id="B_advice_edite"
        type="button"
      >
        <img id="img_advice1" src={props.logo} />
        <p id="info_img1">{props.name}</p>
      </a>
      <br></br>
      <Switch
        onChange
        id="switch1"
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
}
