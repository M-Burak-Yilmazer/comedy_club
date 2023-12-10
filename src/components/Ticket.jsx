import React from "react";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const Ticket = ({ id, adSoyad, day, img, ticket, visited, film ,onDelete}) => {
  const [show, setShow] = useState(true);

  const [consulted, setConsulted] = useState(false);
  function handleClick(e) {
    onDelete(id)
    
    setConsulted(!consulted);
  }
  const formattedDate = day ? new Date(day).toLocaleDateString() : "";
  const timeString = day ? new Date(day).toLocaleTimeString() : "";


  return (
    show && (
      <div>
        <div
          onDoubleClick={handleClick}
          className=" ticket-info p-2 rounded mb-3 d-flex justify-content-between align-items-center position-relative"
        >
          <div className="d-flex align-items-center justify-content-center">
            <img
              className="img-thumbnail"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
              src={img}
              alt=""
            />
            <div className="d-flex flex-column mx-2 ">
              <p>
                <span className="fs-3 fw-bold">{adSoyad}</span> <br /> {film}
              </p>
            </div>
          </div>

          <div>
            <p>
              Date: {formattedDate} <br /> Time :{timeString}
            </p>
            {consulted && (
              <button className="position-absolute">Watched</button>
            )}
          </div>
          <div className="d-flex align-items-center justify-content-center ">
            <div>
              
              <p>{ticket} Person</p>
            </div>

            <div className="removebtn" onClick={() => setShow(false)} style={{ fontSize: "2rem" }}>
              <FaWindowClose />
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Ticket;
