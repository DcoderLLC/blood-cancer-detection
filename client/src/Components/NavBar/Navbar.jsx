import React from "react";
import {
  Typography,
  Stack,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Drawer,
  useMediaQuery,
  List,
  ListItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
// import { IoHome } from "react-icons/io5"; // Home Icon
import { RiCustomerService2Fill } from "react-icons/ri"; // Contact Icon
// import { RiAccountCircleFill } from "react-icons/ri";
import { HiMiniInformationCircle } from "react-icons/hi2"; // About Icon
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDrawerItemClick = () => {
    handleDrawerClose();
  };

  // Updated function to include an optional icon for each link
  const renderLinkButton = (path, label, Icon = null) => (
    <Link to={path} style={{ textDecoration: "none" }}>
      <Button
        sx={{
          paddingRight: "20px",
          color: "#E70449",
          fontWeight: "bold",
          fontSize: "1rem",
          display: "flex",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "#E70449",
            color: "white",
          },
        }}
        variant="none"
      >
        {Icon && <Icon style={{ marginRight: "8px" }} />}{" "}
        {/* Render icon if passed */}
        {label}
      </Button>
    </Link>
  );

  const renderDrawerItem = (path, label, Icon = null) => (
    <Link to={path} style={{ textDecoration: "none" }}>
      <ListItem button onClick={handleDrawerItemClick}>
        <Typography variant="overline" color="white" sx={{ margin: "0 20px" }}>
          {Icon && <Icon style={{ marginRight: "8px" }} />} {/* Drawer icon */}
          {label}
        </Typography>
      </ListItem>
    </Link>
  );

  return (
    <div>
      <Stack
        backgroundColor="#FFFFFF"
        boxShadow={3}
        direction={"row"}
        alignItems={"center"}
        padding={"0px 24px"}
        justifyContent={"space-between"}
        sx={{
          color: "white",
          position: "relative",
          width: "100%",
          zIndex: "1000",
        }}
      >
        <Box className="flex items-center">
          {/* Logo Image */}
          <Link to="/" className="flex items-center">
            <img
              src={logo} // Replace with the path to your logo
              alt="Vistara Software"
              className="h-20  mr-2"
            />
            {/* <Typography variant="h5" className="text-[#E70449] font-bold">
              Rakta<span className="text-gray-900">Cure</span>
            </Typography> */}
          </Link>
        </Box>

        {!isSmallScreen && (
          <Box>
            <ButtonGroup>
              {renderLinkButton("/market", "Book a Slot")} {/* Home Icon */}{" "}
              {/* Service Icon */}
              {/* Catalogue Icon */}
              {renderLinkButton(
                "/about",
                "About",
                HiMiniInformationCircle
              )}{" "}
              {/* About Icon */}
              {renderLinkButton(
                "/contact",
                "Contact",
                RiCustomerService2Fill
              )}{" "}
              {/* {renderLinkButton("/login", "Login", RiAccountCircleFill)}{" "} */}
              {/* Contact Icon */}
            </ButtonGroup>
          </Box>
        )}

        {isSmallScreen && (
          <Box>
            <IconButton
              sx={{
                color: "black",
                "&:hover": { backgroundColor: "#E70449", color: "red" },
              }}
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
            >
              <AiOutlineMenuUnfold style={{ fontSize: "2rem" }} />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
              <List sx={{ backgroundColor: "#E70449", height: "100vh" }}>
                {renderDrawerItem("/market", "Book a Slot")} {/* Home Icon */}
                {renderDrawerItem("/about", "About")} {/* About Icon */}
                {renderDrawerItem("/contact", "Contact")} {/* Contact Icon */}
                {""}
                {/* {renderDrawerItem("/login", "Login")} Service Icon */}
              </List>
            </Drawer>
          </Box>
        )}
      </Stack>
    </div>
  );
};

export default Navbar;
