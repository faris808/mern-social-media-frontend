import { Box } from "@mui/material";
import { styled } from "@mui/system";



//Its a styling for widgets and we can say its a blueprint of the widgets we have to simply use it
const WidgetWrapper = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1.5rem 0.75rem 1.5rem",
  backgroundColor: theme.palette.background.alt,
  borderRadius: "0.75rem",
}));

export default WidgetWrapper;