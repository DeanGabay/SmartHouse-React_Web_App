import React, { useState } from "react";
import "./EditedAppliances.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
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

export default function EditedAppliances(props) {
  const [advicenumber, setadvicenumber] = useState("");
  const classes = useStyles();
  const classes1 = useStyles1();
  const [name, setname] = useState();

  return (
    <React.Fragment>
      <Dialog open aria-labelledby="max-width-dialog-title">
        <DialogTitle id="max-width-dialog-title">{props.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can delete and rename appliances
          </DialogContentText>
          <div style={{ width: 50, position: "relative", left: 215 }}>
            <img id="img_advice2" src={props.logo} />
          </div>

          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <form className={classes1.root} noValidate autoComplete="off">
                <TextField
                  onChange={(element) => {
                    setname(element.target.value);
                  }}
                  id="filled-basic"
                  label="Change Appliances name"
                  variant="filled"
                />
              </form>
            </FormControl>
          </form>
        </DialogContent>
        <div id="edited_button">
          <Button
            onClick={() => {
              props.function2(props.index);
            }}
            color="Secondary"
          >
            Deleted
          </Button>
        </div>
        <DialogActions>
          <Button
            onClick={() => {
              props.function(name, props.index);
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
