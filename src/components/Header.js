import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Headers(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {" "}
        {/* Change color here */}
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, paddingLeft: "20px" }}
          >
            <strong>Keep Notes</strong>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
