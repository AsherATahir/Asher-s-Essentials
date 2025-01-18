import yamchaDead from "../assets/800px-Yamcha_found_dead.jpg";

function InternalError() {
  return (
    <div
      className="d-flex justify-content center flex-column mx-3"
      style={{ fontFamily: "Oswald, sans-serif" }}
    >
      <h1>Error 500 Cannot Fetch Data (Internal server Error)</h1>
      <h3 className="mt-3">
        Meaning, this is postman API's fault... not mine. come back later (pls
        hire me lol)
      </h3>
      <img src={yamchaDead} className="img-fluid"></img>
    </div>
  );
}

export default InternalError;
