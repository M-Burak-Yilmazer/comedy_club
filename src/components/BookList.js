import { ticketDate } from "../helpers/data";

import { v4 } from "uuid";
import Ticket from "./Ticket";

const BookList = () => {
  return (
    <div className="container ">
      {ticketDate.map((item) => (
        <Ticket key={v4()} {...item} />
      ))}
    </div>
  );
};

export default BookList;
