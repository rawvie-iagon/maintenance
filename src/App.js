import Countdown from "react-countdown";

function pad(d) {
  return d < 10 ? "0" + d.toString() : d.toString();
}

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <h3
        style={{
          textAlign: "center",
          fontFamily: "Karla, sans-serif",
          margin: "15px",
        }}
      >
        App will be live in no time! Please be patient.
      </h3>
    );
  } else {
    return (
      <div
        style={{
          margin: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          alignItems: 'center'
        }}
      >
        <h3 style={{ margin: 0, padding: 0, textAlign: 'center' }}>
          Currently down for maintenance, expected to be back in:
        </h3>
        <h1 style={{ margin: 0, padding: 0, textAlign: 'center' }}>
          {pad(Number(hours))}:{pad(Number(minutes))}:{pad(seconds)}
        </h1>
      </div>
    );
  }
};

function App() {
  const epochStartTime = new Date("2024-09-01T21:44:51.00Z");
  const expectedEndTime = new Date(
    epochStartTime.getTime() + 15 * 60 * 1000
  );
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#F9F9FB",
      }}
    >
      <img
        alt="logo"
        style={{ height: "70px" }}
        src="https://docs.iagon.com/img/iagon-logo-dark.png"
      />
      <Countdown date={expectedEndTime} renderer={renderer} />
    </div>
  );
}

export default App;
