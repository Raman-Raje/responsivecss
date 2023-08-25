import "./Team.css";
const Team = () => {
  return (
    <>
      <div className="mx-auto my-8 team-container" style={{ width: "80%" }}>
        <h3 className="text-5xl font-bold mb-12" style={{ color: "#45514B" }}>
          Our Team
        </h3>
        <div className="teams-container flex space-x-8 space-y-8 text-center">
          <div
            className="team-card p-8"
            style={{
              width: "23%",
              border: "2px solid black",
              borderRadius: "12px",
            }}
          >
            <div style={{ width: "80%", margin: "auto" }}>
              <img
                style={{
                  width: "100%",
                  height: "200px",
                  overflow: "hidden",
                  margin: "auto",
                }}
                src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
                alt=""
              />
            </div>
            <h4 className="text-2xl font-semibold text-center pt-4">
              Elon Musk
            </h4>
            <span>Co-Founder & CEO</span>
          </div>
          <div
            className="team-card p-8"
            style={{
              width: "23%",
              border: "2px solid black",
              borderRadius: "12px",
            }}
          >
            <div style={{ width: "80%", margin: "auto" }}>
              <img
                style={{
                  width: "100%",
                  height: "200px",
                  overflow: "hidden",
                  margin: "auto",
                }}
                src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
                alt=""
              />
            </div>

            <h4 className="text-2xl font-semibold text-center pt-4">
              Steve Jobs
            </h4>
            <span>Founder & CEO</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
