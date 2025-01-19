function CustomerInfo() {
  return (
    <>
      <div
        className="d-flex flex-column p-3"
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        <h1 className="mb-5" style={{ fontFamily: "Oswald, sans-serif" }}>
          (Mock) Payment Information
        </h1>
        <h5 className="d-flex">Cardholder-name</h5>
        <div className="d-flex flex-row mt-2">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              First Name
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="first-name"
              aria-label="name"
              aria-describedby="basic-addon1"
            ></input>
          </div>
          <div className="input-group mb-3 ms-3">
            <span className="input-group-text" id="basic-addon1">
              Last Name
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="last-name"
              aria-label="name"
              aria-describedby="basic-addon1"
            ></input>
          </div>
        </div>
        <h5 className="d-flex mt-2">Card Number</h5>
        <div className="d-flex flex-row align-items-center">
          <div className="d-flex me-2 flex-column flex-fill">
            <label className="form-label"></label>
            <input
              type="card"
              className="form-control"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              aria-describedby="card"
            ></input>
          </div>
          <div className="d-flex flex-column w-25 mb-4">
            <div className="d-flex flex-column">
              <label className="form-label">
                <b>MM/YY</b>
              </label>
            </div>
            <input
              type="card"
              className="form-control"
              aria-describedby="card"
            ></input>
          </div>
          <div className="d-flex flex-column ms-1 w-25 mb-4">
            <label className="form-label">
              <b>CVC</b>
            </label>
            <input
              type="card"
              className="form-control"
              aria-describedby="card"
            ></input>
          </div>
        </div>
        <h5 className="d-flex flex-column ">Billing Address</h5>
        <div className="d-flex flex-column mt-2">
          <div className="d-flex flex-fill">
            <label className="form-label"></label>
            <input
              type="address"
              className="form-control"
              placeholder="Address Line 1"
              aria-describedby="address"
            ></input>
          </div>
          <div className="d-flex flex-fill mt-3">
            <label className="form-label"></label>
            <input
              type="address"
              className="form-control"
              placeholder="Address Line 2"
              aria-describedby="address"
            ></input>
          </div>
        </div>
        <div className="d-flex flex-row mt-3">
          <select className="form-select" aria-label="Default select example">
            <option selected>Select State</option>
            <option value="1">The Cut</option>
            <option value="2">useState you mean?</option>
            <option value="3">Ohio</option>
          </select>
          <select
            className="form-select ms-2"
            aria-label="Default select example"
          >
            <option selected>Country</option>
            <option value="1">Wakanda</option>
            <option value="2">Vinland</option>
            <option value="3">___stan</option>
          </select>
          <label className="form-label ms-2"></label>
          <input
            type="address"
            className="form-control"
            placeholder="Zip-Code"
            aria-describedby="address"
          ></input>
        </div>
      </div>
    </>
  );
}

export default CustomerInfo;
