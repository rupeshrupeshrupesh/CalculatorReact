import { Button } from "@mui/material";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./SideBar.css";

const SideBar: React.FC = () => {
  const [isopen, setIsOpen] = useState(false);
  const navigate=useNavigate();

  const componentStyles: React.CSSProperties = {
    padding: "17px 32px",
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          height: "97vh",
          backgroundColor: "#B0B0B0",
          boxShadow: "0px 10px 10px #F8F8F8",
          width: 350,
          left: isopen ? 0 : -350,
          transition: "left 600ms ease",
        }}
      >
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "100px 10px 0px 10px",
          }}
        >
          <div style={componentStyles}>
            <Button variant="contained" onClick={()=>navigate("home")} >
              Home
            </Button>
          </div>{" "}
          <div style={componentStyles}>
            <Button variant="contained"  onClick={()=>navigate("/about")}>About</Button>
          </div>{" "}
          <div style={componentStyles}>
            <Button variant="contained"  onClick={()=>navigate("social")}>Social</Button>
          </div>{" "}
          <div style={componentStyles}>
            <Button variant="contained"  onClick={()=>navigate("/help")}>Help</Button>
          </div>
          <div style={componentStyles}>
            <Button variant="contained"  onClick={()=>navigate("/setting")}>Setting</Button>
          </div>
          <div style={componentStyles}>
            <Button variant="contained"  onClick={()=>navigate("calculator",{state:isopen})}>Calculator</Button>
          </div>
        </main>
      </div>
      <div
        style={{
            display: "flex",
            justifyContent: "center",
            padding: 30,
        }}
        >
        <Button variant="contained" onClick={() => setIsOpen(!isopen)}>
          Side Bar
        </Button>
      </div>
          <Outlet></Outlet>

    </>
  );
};
export default SideBar;
