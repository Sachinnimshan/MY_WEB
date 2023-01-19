import React, { useState } from "react";
import Button from "../button/button";
import { Body, Dialog, Title } from "./alert.styled";

function AlertDialog() {
  const [state, setState] = useState({
    open: false,
    head: "",
    body: "",
    cta: "Okay",
    func: null,
  });

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const showAlert = (head, body, cta, onClose) => {
    setState({
      open: true,
      head: head || "",
      body: body || "",
      cta: cta || "Okay",
      func: onClose || null,
    });
  };

  global.showAlert = showAlert;

  return (
    <Dialog open={state.open} onClose={handleClose} fullWidth>
      <Title>{state.head}</Title>
      <Body>{state.body}</Body>
      <Button onClick={handleClose} size="medium">
        {state.cta}
      </Button>
    </Dialog>
  );
}

export default AlertDialog;
