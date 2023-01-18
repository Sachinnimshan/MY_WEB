import React, { useState } from 'react';
import {Dialog} from './alert.styled';

function alertDialog(head, body, cta, icon) {
    const [state, setState] = useState({
        open: false,
        head: "",
        body: "",
        cta: "Okay",
        func: null,
    });

    const handleClose =()=>{
        setState({...state, open: false});
    }

  return (
    <Dialog open={state.open} onClose={handleClose}>

    </Dialog>
  )
}

export default alertDialog;