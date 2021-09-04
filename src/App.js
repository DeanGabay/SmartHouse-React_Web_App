import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddRoom from "./component/AddRoom.js";
import Room from "./component/Room.js";
import InsideRoom from "./component/InsideRoom.js";
import NavAppliances from "./component/NavAppliances.js";
import Alart from "./component/Alart.js";
import Carosela from "./component/Carosela.js";
import AddAppliances from "./component/AddAppliances.js";
import AppliancesInRoom from "./component/AppliancesInRoom.js";
import EditedAppliances from "./component/EditedAppliances.js";
import React, { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // The room array where there will be information about the room and the devices inside it
  const [room, setroom] = useState([]);
  // An array that once the value within it is true it displays the Alart component
  const [flag, setflag] = useState(false);
  // The function is named the type and color of the room,
  //  it validates and checks whether values have been received in the various inputs and finally updates the room state with information entered from the user
  const Addroom = (t, n, c) => {
    debugger;
    if (room.length > 4) {
      setflag(true);
    }
    if (n != "" && t != "") {
      setroom([...room, { type: t, name: n, color: c, advicelist: [] }]);
    } else if (flag == false) {
      setflag(true);
    }
  };
  const setfalse = () => {
    setflag(false);
  };
  // The function updates the state page,
  // if it true appears NavAplliances components
  const [page, setpage] = useState(false);
  function hide() {
    if (page == false) {
      setpage(true);
      document.getElementById("ShowDiv").style.display = "none";
    } else {
      setpage(false);
      var displaydd = document.getElementById("ShowDiv").style.display;
      if (displaydd == "block")
        document.getElementById("ShowDiv").style.display = "none";
      else {
        document.getElementById("ShowDiv").style.display = "block";
      }
    }
  }
  // The function is activated as soon as the user clicks on a advice from navappliance it gets a name and image of the product
  //  and updates the state advice in them, and updates the state open in true or false
  //  if it is true there is an addappliances component that can add the product to the user's room.
  const [open, setopen] = useState(false);
  const [advice, setadvice] = useState([]);
  const opanAddAppliances = (N, L) => {
    setadvice([{ name: N, logo: L }]);
  };
  const ShowAddApliances = () => {
    setopen(true);
  };
  const hideAddApliances = () => {
    setopen(false);
  };
  // The function gets the product name, its image, the location of the room in the array, and a quantitative value about the product,
  //  it puts the product into the user's room by the PUSE method and enters the quantity of the product according to the value entered by the user.
  var indexroom = 0;
  const addAdvice = (N, L, I, V) => {
    indexroom = I;
    if (V == "") {
    }
    if (V == 1) {
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      setroom(room);
    }
    if (V == 2) {
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      setroom(room);
    }
    if (V == 3) {
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      setroom(room);
    }
    if (V == 4) {
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      setroom(room);
    }
    if (V == 4) {
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      setroom(room);
    }
    if (V == 5) {
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      room[I].advicelist.push({ advicename: N, advicelogo: L });
      setroom(room);
    }
  };
  // The function receives values of image name and advice location,
  //  it puts them in stste so that the EDITEDAPLLIANCE component can display them.
  const [edited1, setedited1] = useState(false);
  const [emptystate, setemptystate] = useState([]);
  function EditedAdvice(N, L, I) {
    setemptystate([{ editedname: N, editedlogo: L, index: I }]);
    setedited1(true);
  }
  // The function gets a value of a new name that the user entered,
  //  if the value is set the function changes and updates the state room
  function EditedConfirm(N, I) {
    debugger;
    setedited1(false);
    if (N != null) {
      room[indexroom].advicelist[I].advicename = N;
    }
  }
  // The function gets the position of the product in the state room
  //  it uses the filter method and creates a new array without the selected product,
  //  then it updates the state room and puts the new array into it
  function DeleteAppliances(I) {
    let AfterDelete = room[indexroom].advicelist.filter(
      (element, index) => index != I
    );
    room[indexroom].advicelist = [...AfterDelete];
    setedited1(false);
  }
  // The function accepts the position of the room in the state room,
  //  it uses the filter method and creates a new array without the selected room,
  //  then it updates the state room and inserts the new array into it.
  function DeleteRoom(I) {
    debugger;
    let AfterDeleteRoom = room.filter((element, index) => index != I);
    setroom([...AfterDeleteRoom]);
  }

  return (
    <Router>
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <img src="https://img.icons8.com/cotton/64/000000/smart-home-connection.png" />
          <a class="navbar-brand">SmartHouse</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link id="link" to="/Homepage">
                  <a class="nav-link">
                    MyHome<span class="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Carosela />
          </Route>
          <Route exact path="/Homepage">
            {room.map((element, i) => {
              return (
                <Room
                  type={element.type}
                  name={element.name}
                  color={element.color}
                  index={i}
                  deletefunction={DeleteRoom}
                />
              );
            })}
            {room.length < 5 && (
              <Link id="link" to="/AddRoom">
                <div id="wrapper">
                  <button
                    type="button"
                    id="B_addRoom"
                    class="btn btn-primary btn-lg"
                  >
                    Add Room
                  </button>
                </div>
              </Link>
            )}
          </Route>
          <Route exact path="/Addroom">
            <AddRoom add={Addroom} />
            {flag == true && (
              <Alart
                set={setfalse}
                info={"Hello, Please choose name and type for the room"}
              />
            )}
            {room.length > 4 && (
              <Alart
                set={setfalse}
                info={"You can add only five rooms in SmartHouse"}
              />
            )}
          </Route>
          {room.map((element, i) => {
            indexroom = i;
            return (
              <Route exact path={"/Insideroom" + i}>
                <InsideRoom
                  type={element.type}
                  name={element.name}
                  color={element.color}
                  index={i}
                  show={hide}
                />
                {page == true && (
                  <NavAppliances
                    addadvice={opanAddAppliances}
                    show={ShowAddApliances}
                  />
                )}
                {page == false}
                {open == true &&
                  advice.map((element) => {
                    return (
                      <AddAppliances
                        index={indexroom}
                        name={element.name}
                        logo={element.logo}
                        close1={hideAddApliances}
                        add={addAdvice}
                      />
                    );
                  })}
                {open == false && (
                  <div id="ShowDiv">
                    {room[indexroom].advicelist.map((element, i) => {
                      return (
                        <AppliancesInRoom
                          name={element.advicename}
                          logo={element.advicelogo}
                          editedadvice={EditedAdvice}
                          index={i}
                        />
                      );
                    })}
                    {edited1 == true &&
                      emptystate.map((element) => {
                        return (
                          <EditedAppliances
                            name={element.editedname}
                            logo={element.editedlogo}
                            index={element.index}
                            function={EditedConfirm}
                            function2={DeleteAppliances}
                          />
                        );
                      })}
                  </div>
                )}
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
