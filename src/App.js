import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import List from "./components/List";
import BookList from "./components/BookList";

function App() {
  return (
    <div>
      <Header />
      <List />
      <BookList/>
    </div>
  );
}

export default App;
