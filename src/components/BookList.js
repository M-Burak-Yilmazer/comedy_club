import { ticketDate } from "../helpers/data";
import image from "../assets/img/drama-312318_1280.png";

import { v4 } from "uuid";
import Ticket from "./Ticket";

const BookList = ({ filterValue }) => {
  return filterValue.length ? (
    <div className="container ">
      {filterValue.map((item) => (
        <Ticket key={v4()} {...item} />
      ))}
    </div>
  ) : (
    <div className="text-center mt-5 mb-3">
      <img
        style={{ minWidth: "300px", maxWidth: "500px", opacity:"0.2"}}
        src={image}
        alt=""
      />
    </div>
  );
};

export default BookList;
