import { Box } from "@mui/material";
import {} from "react";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box>
      <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l shadow-lg">
        <Link
          to="/"
          className="flex items-center space-x-2"
        >
          <img className="w-auto h-12" src={logo} alt="Logo" />
          {/* <h2 className="text-xl font-bold text-[#E70449]">RakataCure</h2> Added h2 */}
        </Link>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="flex-1 -mx-3 space-y-3">
            {/* Navigation Links */}

            <Link
              className="flex items-center px-3 py-2 text-[#e70449] transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-[#C0033D]"
              to="/dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5" // Use text color
              >
                <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>

              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-[#e70449] transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-[#C0033D]"
              to="/reports"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5" // Use text color
              >
                <path d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
              </svg>

              <span className="mx-2 text-sm font-medium">Reporting</span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-[#e70449] transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-[#C0033D]"
              to="/about"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5" // Use text color
              >
                <path d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
              </svg>

              <span className="mx-2 text-sm font-medium">About</span>
            </Link>

            <Link
              className="flex items-center px-3 py-2 text-[#e70449] transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-[#C0033D]"
              to="/contact"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5 " // Use text color
              >
                <path d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>

              <span className="mx-2 text-sm font-medium ">Contact</span>
            </Link>
          </nav>
        </div>
      </aside>
    </Box>
  );
};

export default Sidebar;
