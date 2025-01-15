import "../assets/favicon.png";

interface Props {
  itemName: string;
  active: boolean;
}

function Popup({ itemName, active }: Props) {
  return (
    <>
      <div
        className={`toast-container position-fixed bottom-0 end-0 p-3 notif${
          active ? "Active" : ""
        }`}
      >
        <div>
          <div className="toast-header">
            <img
              src="../assets/favicon.png"
              className="rounded me-2"
              alt="..."
            ></img>
            <strong className="me-auto">A-Essentials</strong>
            <small>Just now</small>
            <button type="button" className="btn-close"></button>
          </div>
          <div className="toast-body">
            {itemName.length > 25
              ? itemName.substring(0, 20) + "..."
              : itemName.substring(0, 20)}{" "}
            added to cart
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
