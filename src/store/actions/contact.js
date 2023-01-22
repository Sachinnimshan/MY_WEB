import { postContactMessage } from "../../helpers/api_helper";
import swal from "sweetalert";


export const postMessage = (data, callback) => async (dispatch) => {
  dispatch({ type: "CONTACT_MESSAGE_REQUEST" });
  try {
    const response = await postContactMessage(data);
    dispatch({ type: "CONTACT_MESSAGE_SUCCESS", payload: response });
    swal("Good job!", "Thank You For Your Support", "success");
  } catch (error) {
    dispatch({
      type: "CONTACT_MESSAGE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    swal("Oops", "Someting Went Wrong", "error");
    
  }
  callback();
};
