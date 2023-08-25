import Dashboard from "./../assets/dashboard.png";
import Prescription from "./../assets/prescription.png";
import Appointment from "./../assets/appointment.png";
const FeatureData = [
  {
    title: "Appointment",
    list: [
      "Seamlessly manage  appointment scheduling",
      "Acces history of Patient for the clinic",
      "Customizable appointment durations and buffer times",
      "Calendar view for doctors and staff to manage appointments",
    ],
    url: Appointment,
  },
  {
    title: "Prescription",
    list: [
      "Customizable prescription templates",
      "Easily create and manage prescriptions",
      "Access to Drug database with over 500k drugs",
      "Send prescriptions to the patient via SMS or email",
    ],
    url: Prescription,
  },
  {
    title: "Dashboard",
    list: [
      "Stay ahead of your clinic with real-time analytics",
      "Visualize your clinic’s performance with graphs and charts",
      "Compare doctor and staff performance over time",
      "Access to patient demographics and trends",
    ],
    url: Dashboard,
  },
];

export default FeatureData;
