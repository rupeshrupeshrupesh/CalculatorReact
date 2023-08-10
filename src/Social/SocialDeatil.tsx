import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const SocialData = () => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const registerHandler = () => {
    navigate("register",{state:true});
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
          <Button variant="contained" id="1" onClick={() => registerHandler()}>
            Register
          </Button>
        </div>
        <div>
          <Button variant="contained" onClick={()=>navigate("login")}>Login</Button>
        </div>
        <div>
          <Button variant="contained">Help</Button>
        </div>
      </div>



      <Outlet></Outlet>
    </>
  );
};

export default SocialData;
