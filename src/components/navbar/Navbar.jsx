import "./navbar.css";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ closeBar }) => {
  return (
    <div className="navbar">
      <i onClick={closeBar}>
        <CloseIcon style={{ color: "inherit", fontSize: "inherit" }} />
      </i>
      <a href="#">Services</a>
      <a href="#">Impact</a>
      <a href="#">About us</a>
      <a href="#">Contact us</a>
    </div>
  );
};

export default Navbar;
