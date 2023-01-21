import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useResponsive = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });

  return {
    mobile,
  };
};
