import React from "react";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const Ticket = (item) => {
  const [show, setShow] = useState(true);

  const [consulted, setConsulted] = useState(false);
  function handleClick(e) {
    setConsulted(!consulted);
  }
  return (
    show && (
      <div>
        <div
          onDoubleClick={handleClick}
          className="bg-info p-2 rounded mb-3 d-flex justify-content-between align-items-center position-relative"
        >
          <div className="d-flex align-items-center justify-content-center">
            <img
              className="img-thumbnail"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
              src={item.img}
              alt=""
            />
            <div className="d-flex flex-column mx-2 ">
              <h5>{item.adSoyad}</h5>
              <p>{item.film}</p>
            </div>
          </div>

          <div>
            <p>
              Date:{item.day.toLocaleDateString()} <br />  Time :
              {item.day.toLocaleTimeString()}
            </p>
            {consulted && (
              <button className="position-absolute">Watched</button>
            )}
          </div>
          <div onClick={() => setShow(false)} style={{ fontSize: "2rem" }}>
            <FaWindowClose />
          </div>
        </div>
      </div>
    )
  );
};

export default Ticket;
