import { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  backgroundColor: "#E70449",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#C0033D", // Darker shade for hover effect
  },
});

const SingupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [organization, setOrganization] = useState("");
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleSignUp = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center h-screen bg-pink-50">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign Up Your Account</h2>
        <p className="text-gray-500 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
        <form onSubmit={handleSignUp}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            variant="outlined"
            margin="normal"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Designation"
            name="designation"
            select
            variant="outlined"
            margin="normal"
            onChange={(e) => setDesignation(e.target.value)}
            required
          >
            <MenuItem value="Hematologist">Hematologist</MenuItem>
            <MenuItem value="Oncologist">Oncologist</MenuItem>
            <MenuItem value="Research Laboratories">
              Research Laboratories
            </MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="Organization"
            name="organization"
            variant="outlined"
            margin="normal"
            onChange={(e) => setOrganization(e.target.value)}
            required
          />
          <FormControlLabel
            control={<Checkbox name="agreeToTerms" color="primary" required />}
            label="I agree to the terms & conditions"
            className="mb-4"
          />
          <Link to="/">
            <StyledButton
              fullWidth
              variant="contained"
              className="mb-4"
              type="submit"
            >
              Sign Up
            </StyledButton>
          </Link>
          <div className="text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/" className="text-red-500">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingupForm;
