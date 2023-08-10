import { Height } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FormInput from "./FormInput";

const Register = () => {
  const getlocation = useLocation();

  const [dialogOpen, setDialogOpen] = useState(true);

  const openDialog = () => {
    if (getlocation.state) setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
  console.log("out", getlocation.state);

  return (
    <>
      <Dialog open={dialogOpen} onClose={closeDialog}    fullWidth={true}
         >
        <DialogTitle style={{
            textAlign: "center"
        }}>Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormInput />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Register;
