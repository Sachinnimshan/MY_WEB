export const getAllProjectsReducer = (
  state = { loading: true, projects: [] },
  action
) => {
  switch (action.type) {
    case "ALL_PROJECTS_REQUEST":
      return { loading: true };
    case "ALL_PROJECTS_SUCCESS":
      return { loading: false, projects: action.payload };
    case "ALL_PROJECTS_FAIL":
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};

export const getProjectInfoReducer = (
  state = { loading: true, projects: [] },
  action
) => {
  switch (action.type) {
    case "PROJECT_INFO_REQUEST":
      return { loading: true };
    case "PROJECT_INFO_SUCCESS":
      return { loading: false, projectInfo: action.payload };
    case "PROJECT_INFO_FAIL":
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};
