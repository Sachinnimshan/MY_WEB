import React, { useState } from "react";
import { Body, Dialog, Title } from "./alert.styled";

function alertDialog(head, body, cta, icon) {
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

  return (
    <Dialog open={state.open} onClose={handleClose}>
      <Title>{state.head}</Title>
      <Body>{state.body}</Body>
    </Dialog>
  );
}

export default alertDialog;
