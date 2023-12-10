import Cards from "./Cards";
import { comedyDaysData } from "../helpers/data";
import { v4 as uuidv4 } from "uuid";

const List = ({ onChange }) => {
  return (
    <div className="container">
      <div className="  my-3 d-flex flex-wrap gap-5 justify-content-center align-items-center">
        {comedyDaysData.map((item) => (
          <div key={uuidv4()} className=" ">
            <Cards item={item} onChange={onChange} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
