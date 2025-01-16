import "../assets/favicon.png";

interface Props {
  itemName: string;
  itemImage: string;
  active: boolean;
}

//set timeout to make active false, then the button can popup again

function Popup({ itemName, active, itemImage }: Props) {
  return (
    <>
      <div
        className={`toast-container p-3 notifColor rounded-4 notif${
          active ? "Active" : ""
        }`}
      >
        <div>
          <div>
            <div className="d-inline">
              <img
                src={itemImage}
                className="rounded me-2"
                alt="logo"
                style={{ height: "2rem" }}
              ></img>
            </div>
            <strong className="me-auto">Asher's-Essentials</strong>
          </div>
          <div className="toast-body">
            {itemName?.length > 40
              ? itemName?.substring(0, 40) + "..."
              : itemName?.substring(0, 40)}{" "}
            added to cart
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
