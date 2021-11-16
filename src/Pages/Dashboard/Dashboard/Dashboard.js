import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import { NavLink, Outlet } from "react-router-dom";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{ m: 1, color: "Black", width: "80%" }}
          color="inherit"
        >
          Home
        </Button>
      </NavLink>
      <br />
      <NavLink to="/appointment" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{ m: 1, color: "Black", width: "80%" }}
          color="inherit"
        >
          Appointment
        </Button>
      </NavLink>
      <Divider />
      <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{ m: 1, color: "Black", width: "80%" }}
          color="inherit"
        >
          Dashboard
        </Button>
      </NavLink>
      {admin && (
        <Box>
          <NavLink to="/dashboard/makeAdmin" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ m: 1, color: "Black", width: "80%" }}
              color="inherit"
            >
              Make Admin
            </Button>
          </NavLink>
          <NavLink to="/dashboard/addDoctor" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ m: 1, color: "Black", width: "80%" }}
              color="inherit"
            >
              Add Doctor
            </Button>
          </NavLink>
        </Box>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
