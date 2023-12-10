import { ticketDate } from "../helpers/data";

import { v4 } from "uuid";
import Ticket from "./Ticket";

const BookList = ({ filterValue }) => {
  return (
    <div className="container ">
      {filterValue.map((item) => (
        <Ticket key={v4()} {...item} />
      ))}
    </div>
  );
};

export default BookList;
