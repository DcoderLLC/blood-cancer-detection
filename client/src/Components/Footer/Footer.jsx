import {} from "react";
import {
  Grid,
  Box,
  Typography,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaWhatsappSquare, FaInstagram } from "react-icons/fa";
import { MdNavigateNext, MdLocationOn, MdEmail } from "react-icons/md";
// import logo from "../../assets/logo.jpg"; // Your logo image

const Footer = () => {
  return (
    <Box p={4} bgcolor="#FFFFFF" boxShadow={3}>
      <Grid container spacing={2}>
        {/* Company Info */}
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" flexDirection="column">
            <Link to="/" className="flex items-center">
              <img src={'logo'} alt="Vistara Software" className="h-20 mr-2" />
              {/* <Typography variant="h5" sx={{ color: "#e70449", fontWeight: "bold" }}>
                Rakta<span style={{ color: "#000" }}>Cure</span>
              </Typography> */}
            </Link>
            <Typography variant="body2" mt={2}></Typography>
            <Stack direction="row" mt={2} spacing={1}>
              <Link to="" style={{ textDecoration: "none" }}>
                <IconButton
                  sx={{
                    color: "#25D366", // WhatsApp color
                    "&:hover": {
                      backgroundColor: "#54a0ff",
                    },
                  }}
                >
                  <FaWhatsappSquare size={32} />
                </IconButton>
              </Link>

              <Link to="" style={{ textDecoration: "none" }}>
                <IconButton
                  sx={{
                    color: "#E4405F", // Instagram color
                    "&:hover": {
                      backgroundColor: "#54a0ff",
                    },
                  }}
                >
                  <FaInstagram size={32} />
                </IconButton>
              </Link>
            </Stack>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={6} sm={6} md={4}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link to="/market" style={{ textDecoration: "none" }}>
                <Button
                  startIcon={<MdNavigateNext />}
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "14px" },
                    color: "#e70449",
                  }}
                >
                  Book a Slot
                </Button>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Button
                  startIcon={<MdNavigateNext />}
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "14px" },
                    color: "#e70449",
                  }}
                >
                  About
                </Button>
              </Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Button
                  startIcon={<MdNavigateNext />}
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "14px" },
                    color: "#e70449",
                  }}
                >
                  Contact
                </Button>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  startIcon={<MdNavigateNext />}
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "14px" },
                    color: "#e70449",
                  }}
                >
                  LogIn
                </Button>
              </Link>
            </Stack>
          </Box>
        </Grid>

        {/* Contact Details */}
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
              Contact
            </Typography>
            <Stack spacing={1}>
              <Button
                startIcon={<MdLocationOn />}
                sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "#e70449" }}
              >
                Kankarbagh, Patna, Bihar
              </Button>
              <Button
                startIcon={<MdEmail />}
                sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "#e70449" }}
              >
                raktacure.ai@gmail.com
              </Button>
            </Stack>
          </Box>
          <Typography sx={{ mt: 2, fontSize: "15px", color: "gray" }}>
            <small>© 2024 RakataCure. All rights reserved.</small>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
