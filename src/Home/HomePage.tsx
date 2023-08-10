import { TabPanel } from "@mui/base/TabPanel";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { display } from "@mui/system";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const [value, setValue] = useState("Adding new Feature");
  const navigate = useNavigate();

  const ButtonHandler = (value: string) => {
    setValue(value);
    if (value === "Adding new Feature") navigate("feature");
    if (value === "Comment") navigate("comment");
    if (value === "Like") navigate("like");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <Button
            variant="contained"
            id="1"
            onClick={() => ButtonHandler("Adding new Feature")}
          >
            Adding new Feature
          </Button>
        </div>
        <div>
          <Button variant="contained" onClick={() => ButtonHandler("Like")}>
            Like
          </Button>
        </div>
        <div>
          <Button variant="contained" onClick={() => ButtonHandler("Comment")}>
            Comment{" "}
          </Button>
        </div>
        {/* <h1 style={{
            display:'flex',
            flexDirection:'column',
        }}>{value}</h1> */}
      </div>

      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {value}
      </h1>

      <Outlet></Outlet>
    </>
  );
};
export default HomePage;
