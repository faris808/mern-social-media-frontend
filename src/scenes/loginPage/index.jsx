import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import Form from "./Form";
import Navbar from "scenes/navbar";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const dispatch = useDispatch();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  return (
      <Box>
        <Box
          sx={{ display: "flex" }}
          width="100%"
          backgroundColor={theme.palette.background.alt}
        >
          <Box
            width="100%"
            backgroundColor={theme.palette.background.alt}
            p="1rem 6%"
            textAlign="center"
          >
            <Typography fontWeight="bold" fontSize="32px" color="primary">
              SocialWave
            </Typography>
          </Box>
          <IconButton onClick={() => dispatch(setMode())} sx={{marginRight:'10px'}}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
        </Box>

        <Box
          width={isNonMobileScreens ? "50%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="1.5rem"
          backgroundColor={theme.palette.background.alt}
        >
          <Typography
            fontWeight="500"
            variant="h5"
            sx={{ mb: "1.5rem" }}
            textAlign={"center"}
          >
            Welcome to SocialWave, where every ripple connects you to a world of
            vibrant interactions !
          </Typography>
          <Form />
        </Box>
      </Box>
  );
};

export default LoginPage;
