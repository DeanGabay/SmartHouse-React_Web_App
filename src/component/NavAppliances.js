import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./NavAppliances.css";
import Logo1 from "./imgadvice/1.jpg";
import Logo2 from "./imgadvice/2.jpg";
import Logo3 from "./imgadvice/3.jpg";
import Logo4 from "./imgadvice/4.jpg";
import Logo5 from "./imgadvice/5.jpg";
import Logo6 from "./imgadvice/6.jpg";
import Logo7 from "./imgadvice/7.jpg";
import Logo8 from "./imgadvice/8.jpg";
import Logo9 from "./imgadvice/9.jpg";
import Logo10 from "./imgadvice/10.jpg";
import Logo12 from "./imgadvice/12.jpg";
import Logo13 from "./imgadvice/13.jpg";
import Logo14 from "./imgadvice/14.jpg";
import Logo15 from "./imgadvice/15.jpg";
import Logo16 from "./imgadvice/16.jpg";
import Logo17 from "./imgadvice/17.jpg";
import Logo18 from "./imgadvice/18.jpg";
import Logo19 from "./imgadvice/19.jpg";
import Logo20 from "./imgadvice/20.jpg";
import Logo21 from "./imgadvice/21.jpg";
import Logo22 from "./imgadvice/22.jpg";
import Logo23 from "./imgadvice/23.jpg";
import Logo24 from "./imgadvice/24.jpg";
import Logo25 from "./imgadvice/25.jpg";
import Logo26 from "./imgadvice/26.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Larg appliances" {...a11yProps(0)} />
        <Tab label="Small appliances" {...a11yProps(1)} />
        <Tab label="Elcetrical" {...a11yProps(2)} />
        <Tab label="Bedroom appliances" {...a11yProps(3)} />
        <Tab label="kitchen appliances" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <a
          onClick={() => {
            props.addadvice("Refrigerator", Logo14);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo14} />
            <p id="info_img">Refrigerator</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Refrigerator (WiFi)", Logo14);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo14} />
            <p id="info_img">Refrigerator (WiFi)</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Washing machine", Logo15);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo15} />
            <p id="info_img">Washing machine</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Electric oven", Logo12);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo12} />
            <p id="info_img">Electric oven</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Gas oven", Logo23);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo23} />
            <p id="info_img">Gas oven</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Electric heater", Logo22);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo22} />
            <p id="info_img">Electric heater</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Air-Conditioner", Logo19);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo19} />
            <p id="info_img">Air-Conditioner</p>
          </div>
        </a>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <a
          onClick={() => {
            props.addadvice("Mixer", Logo16);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo16} />
            <p id="info_img">Mixer</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Stereo system", Logo13);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo13} />
            <p id="info_img">Stereo system</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Kettle", Logo24);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo24} />
            <p id="info_img">Kettle</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Automatic vacuum", Logo18);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo18} />
            <p id="info_img">Automatic vacuum</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Coffee machine", Logo17);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo17} />
            <p id="info_img">Coffee machine</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Toaster", Logo25);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo25} />
            <p id="info_img">Toaster</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Vacuum", Logo26);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo26} />
            <p id="info_img">Vacuum</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Laptop", Logo21);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo21} />
            <p id="info_img">Laptop</p>
          </div>
        </a>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <a
          onClick={() => {
            props.addadvice("Timer (heater)", Logo1);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo1} />
            <p id="info_img">Timer (heater)</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Double lighting", Logo2);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo2} />
            <p id="info_img"> Double lighting</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Smart plug", Logo3);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo3} />
            <p id="info_img">Smart plug</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("lighting", Logo4);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo4} />
            <p id="info_img">lighting</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Plug (Zigbell)", Logo5);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo5} />
            <p id="info_img">Plug (Zigbell)</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Plug", Logo6);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo6} />
            <p id="info_img">Plug</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Plug (WiFi)", Logo7);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo7} />
            <p id="info_img">Plug (WiFi)</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Internet (Zigbell)", Logo8);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo8} />
            <p id="info_img">Internet (Zigbell)</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Internet", Logo9);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo9} />
            <p id="info_img">Internet</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Internet (WiFi)", Logo10);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo10} />
            <p id="info_img">Internet (WiFi)</p>
          </div>
        </a>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <a
          onClick={() => {
            props.addadvice("Automatic vacuum", Logo18);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo18} />
            <p id="info_img">Automatic vacuum</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Internet", Logo9);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo9} />
            <p id="info_img">Internet</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Stereo system", Logo13);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo13} />
            <p id="info_img">Stereo system</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Laptop", Logo21);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo21} />
            <p id="info_img">Laptop</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Air-Conditioner", Logo19);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo19} />
            <p id="info_img">Air-Conditioner</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Double lighting", Logo2);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo2} />
            <p id="info_img">Double lighting</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Smart plug", Logo3);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo3} />
            <p id="info_img">Smart plug</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("lighting", Logo4);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo4} />
            <p id="info_img">lighting</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Plug (Zigbell)", Logo5);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo5} />
            <p id="info_img">Plug (Zigbell)</p>
          </div>
        </a>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <a
          onClick={() => {
            props.addadvice("Microwave", Logo20);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo20} />
            <p id="info_img">Microwave</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Coffee machine", Logo17);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo17} />
            <p id="info_img">Coffee machine</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Refrigerator (WiFi)", Logo14);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo14} />
            <p id="info_img">Refrigerator (WiFi)</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Electric oven", Logo12);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo12} />
            <p id="info_img">Electric oven</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Kettle", Logo24);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo24} />
            <p id="info_img">Kettle</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Gas oven", Logo23);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo23} />
            <p id="info_img">Gas oven</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Kettle", Logo24);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo24} />
            <p id="info_img">Kettle</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Toaster", Logo25);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo25} />
            <p id="info_img">Toaster</p>
          </div>
        </a>
        <a
          onClick={() => {
            props.addadvice("Plug", Logo6);
            props.show();
          }}
          id="B_advice"
          type="button"
        >
          <div id="advice">
            <img id="img_advice" src={Logo6} />
            <p id="info_img">Plug</p>
          </div>
        </a>
      </TabPanel>
    </div>
  );
}
