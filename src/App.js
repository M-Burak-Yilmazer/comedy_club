import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import List from "./components/List";
import BookList from "./components/BookList";
import { useState } from "react";

const App = () => {
  const [filterValue, setFilterValue] = useState([]);

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  return (
    <div>
      <Header />
      <List onChange={handleFilterChange} />
      <h1 className="text-center mt-5 display-4 text-white">Ticket Lists</h1>
      <BookList filterValue={filterValue} />
      <p style={{ fontFamily: "Cheese" }} className="text-center mt-5 text-white">
        {" "}
        Copyright ©  Mathias 2023      </p>
    </div>
  );
};

export default App;
