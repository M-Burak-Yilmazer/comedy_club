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
      <BookList filterValue={filterValue} />
    </div>
  );
};

export default App;
