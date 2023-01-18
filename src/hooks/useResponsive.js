import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const useResponsive = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });

  return {
    mobile,
  };
};
