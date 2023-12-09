// const Cards = (item) => {
//   return (
//     <div className="card-full">
//       <img className="card-image img-thumbnail" src={item.img} alt="" />
//       <p>{item.name}</p>
//       <p>{item.dep}</p>
//     </div>
//   );
// };

// export default Cards;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ img, name, dep }) {
  return (
    <Card
      className=""
      style={{
        backgroundColor: "black",
        width: "18rem",
        textAlign: "center",
        color: "white",
      }}
    >
      {img ==
      "https://www.biletix.com/static/images/live/event/eventimages/wide/2IF63_denizgoktas_wide.png" ? (
        <Card.Img
          style={{ objectFit: "cover" }}
          className="border border-3 border-white cardImg"
          height="250px "
          variant="top"
          src={img}
        />
      ) : (
        <Card.Img
          style={{}}
          className="border border-3 border-white cardImg"
          height="250px "
          variant="top"
          src={img}
        />
      )}

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{dep}</Card.Text>
        <Button
          style={{
            backgroundColor: "#8e0e00",border:"none"           }}
         
        >
          Buy Ticket
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
