import { Loader2 } from "lucide-react";

function LoadingFallback() {
  console.log("lazy load");
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-50 p-4">
      <Loader2
        className="spinner-border text-white"
        style={{ width: "10rem", height: "10rem", marginTop: "3rem" }}
      />
      <p className="mt-2 text-white small">Loading...</p>
    </div>
  );
}

export default LoadingFallback;
