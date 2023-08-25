import QRCodeImage from "./../../../assets/qrCode.png";
import { lightTheme } from "../../../config/theme";
import "./BookAppointment.css";
const BookAppointment = () => {
  return (
    <div
      className="book-appointment"
      style={{
        backgroundColor: lightTheme.colors.logo,
        display: "flex",
        width: "80%",
        margin: "auto",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        // margin: "2% auto",
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        webkitBackdropFilter: "blur( 4px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      <div
        className="book-img-container"
        style={{ width: "50%", margin: "auto" }}
      >
        <img style={{ width: "100%" }} src={QRCodeImage} alt="book" />
      </div>
      <div
        className="p-4 book-desc-container"
        style={{
          width: "50%",
          borderRadius: "10px",
          padding: "5px",
          margin: "10px",
        }}
      >
        <h2 className="font-bold mb-4">Scan QR Code</h2>
        <p className="text-3xl text-gray-500">
          <b>N</b>ow get your Appointment Book
          <br /> <b>J</b>ust By scanning <b>QR Code</b>
        </p>
        <div style={{ margin: "auto" }}></div>
      </div>
    </div>
  );
};

export default BookAppointment;
