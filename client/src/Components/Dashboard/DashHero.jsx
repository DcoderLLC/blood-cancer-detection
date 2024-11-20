import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar"; // Import your sidebar
import {
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios"; // Import axios for HTTP requests
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Import Firebase Storage functions
// import { storage } from "./firebaseStorage"; // Import your Firebase config
import doc from "../../assets/image.png";
import { Link } from "react-router-dom";

const steps = ["Patient Info", "Contact Details", "Upload Blood Cell Image"];

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openPatientDetails, setOpenPatientDetails] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    contact: "",
    email: "",
    address: "",
    bloodCellImage: null,
  });
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [accuracy, setAccuracy] = useState(null); // To store accuracy from the Flask API
  const [uploading, setUploading] = useState(false); // For tracking upload state

  const patients = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      bloodGroup: "O+",
      report: "ALL Negative",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      bloodGroup: "A+",
      report: "ALL Positive",
    },
    {
      id: 3,
      name: "Sam Johnson",
      age: 45,
      bloodGroup: "B-",
      report: "ALL Negative",
    },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    alert("Logged out");
    handleCloseMenu();
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setActiveStep(0); // Reset stepper when modal closes
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Handle form submission to Flask backend
  const handleSubmit = async () => {
    if (formData.bloodCellImage) {
      setUploading(true);

      const fileData = new FormData();
      fileData.append("file", formData.bloodCellImage);

      try {
        // POST request to Flask backend
        const response = await axios.post(
          "http://127.0.0.1:5000/predict", // Flask API endpoint
          fileData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const { prediction, confidence } = response.data;
        alert(`Prediction: ${prediction}, Confidence: ${confidence}%`);
        setAccuracy(confidence); // Storing the accuracy
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Error processing image");
      } finally {
        setUploading(false);
        handleCloseModal();
      }
    }
  };

  // Handle viewing patient details
  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setOpenPatientDetails(true);
  };

  const handleClosePatientDetails = () => {
    setOpenPatientDetails(false);
    setSelectedPatient(null);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              name="name"
              label="Patient Name"
              value={formData.name}
              onChange={handleFormChange}
              fullWidth
              margin="dense"
            />
            <TextField
              name="age"
              label="Age"
              value={formData.age}
              onChange={handleFormChange}
              fullWidth
              margin="dense"
              type="number"
            />
            <TextField
              name="bloodGroup"
              label="Blood Group"
              value={formData.bloodGroup}
              onChange={handleFormChange}
              fullWidth
              margin="dense"
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              name="contact"
              label="Contact Number"
              value={formData.contact}
              onChange={handleFormChange}
              fullWidth
              margin="dense"
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleFormChange}
              fullWidth
              margin="dense"
            />
            <TextField
              name="address"
              label="Address"
              value={formData.address}
              onChange={handleFormChange}
              fullWidth
              margin="dense"
            />
          </>
        );
      case 2:
        return (
          <div>
            <label htmlFor="blood-cell-image-upload">
              Upload Blood Cell Image
            </label>
            <input
              type="file"
              name="bloodCellImage"
              accept="image/*"
              onChange={handleFormChange}
              style={{ display: "block", marginTop: "10px" }}
            />
          </div>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Area */}
      <div className="flex-1 flex flex-col bg-gray-100 p-5">
        {/* Top Navigation */}
        <div className="flex justify-between items-center w-full">
          {/* Header in the center */}
          <h1 className="text-2xl font-bold text-[#E70449]">Dashboard</h1>

          {/* Profile dropdown in the right corner */}
          <div>
            <IconButton onClick={handleClick}>
              <Avatar alt="Profile Image" src={doc} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Link to="https://teal-dinosaur-514419.hostingersite.com/">
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Link>
            </Menu>

            {/* Add Patient Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModal}
              className="ml-4"
            >
              Add Patient
            </Button>
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-700">Patients</h2>
          <TableContainer component={Paper} className="mt-4">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Blood Group</TableCell>
                  <TableCell>Report</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patients.map((patient) => (
                  <TableRow
                    key={patient.id}
                    onClick={() => handlePatientClick(patient)}
                  >
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.bloodGroup}</TableCell>
                    <TableCell>{patient.report}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* Add Patient Modal */}
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Add Patient</DialogTitle>
          <DialogContent>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {renderStepContent(activeStep)}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Cancel
            </Button>
            <Button onClick={handleBack} disabled={activeStep === 0}>
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button
                onClick={handleSubmit}
                color="primary"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Submit"}
              </Button>
            ) : (
              <Button onClick={handleNext} color="primary">
                Next
              </Button>
            )}
          </DialogActions>
        </Dialog>

        {/* Patient Details Modal */}
        <Dialog open={openPatientDetails} onClose={handleClosePatientDetails}>
          <DialogTitle>Patient Details</DialogTitle>
          <DialogContent>
            {selectedPatient && (
              <div>
                <Typography variant="h6">{selectedPatient.name}</Typography>
                <Typography variant="body1">
                  Age: {selectedPatient.age}
                </Typography>
                <Typography variant="body1">
                  Blood Group: {selectedPatient.bloodGroup}
                </Typography>
                <Typography variant="body1">
                  Report: {selectedPatient.report}
                </Typography>
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClosePatientDetails} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Dashboard;
