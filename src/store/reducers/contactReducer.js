export const postMessageReducer = (state= {}, action) => {
  switch (action.type) {
    case "CONTACT_MESSAGE_REQUEST":
      return { loading: true };
    case "CONTACT_MESSAGE_SUCCESS":
      return { loading: false, contactMessage: action.payload };
    case "CONTACT_MESSAGE_FAIL":
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};
