export const getAllEducationReducer = (
  state = { loading: true, educationInfo: [] },
  action
) => {
  switch (action.type) {
    case "ALL_EDUCATION_REQUEST":
      return { loading: true };
    case "ALL_EDUCATION_SUCCESS":
      return { loading: false, educationInfo: action.payload };
    case "ALL_EDUCATION_FAIL":
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};
