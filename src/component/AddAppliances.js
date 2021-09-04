import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));
const useStyles1 = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function MaxWidthDialog(props) {
  const [advicenumber, setadvicenumber] = useState("");
  const classes = useStyles();
  const classes1 = useStyles1();
  const [name, setname] = useState(props.name);

  return (
    <React.Fragment>
      <Dialog open aria-labelledby="max-width-dialog-title">
        <DialogTitle id="max-width-dialog-title">{props.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can choose how many a {props.name} you will have in the room
          </DialogContentText>
          <div style={{ width: 50, position: "relative", left: 215 }}>
            <img id="img_advice" src={props.logo} />
          </div>

          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <form
                className={classes1.root}
                noValidate
                autoComplete="off"
              ></form>
              <Select
                onChange={(element) => {
                  setadvicenumber(element.target.value);
                }}
                id="adviceNumber"
                autoFocus
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              props.close1();
              props.add(name, props.logo, props.index, advicenumber);
            }}
            color="primary"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
