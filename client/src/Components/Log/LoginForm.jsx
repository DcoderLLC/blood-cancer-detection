import { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  backgroundColor: "#E70449",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#C0033D", // Darker shade for hover effect
  },
});

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Login successful");
      alert("Login successful");

      // Redirect the user to the dashboard after successful login
      navigate("/dashboard");
    } catch (err) {
      console.error(err.message);
      alert("Login failed. Please check your email and password.");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-pink-50">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign In Your Account</h2>
        <p className="text-gray-500 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember Me"
            className="mb-4"
          />
          <div className="text-right text-sm mb-4">
            <a href="/forgot-password" className="text-red-500">
              Forgot Password?
            </a>
          </div>
          <StyledButton
            fullWidth
            variant="contained"
            className="mb-4"
            type="submit" // Remove onSubmit from button and set it to type submit
          >
            Sign In
          </StyledButton>
          <div className="text-center text-gray-500">
            Dont have an account?{" "}
            <Link to="/register" className="text-red-500">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
