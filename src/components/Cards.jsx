import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddModal from "./AddModal";

function Cards({ img, name, dep, price }) {
  const [visible, setVisible] = useState(false);

  function handleModal() {
    setVisible(!visible);
  }

  console.log(visible);
  return (
    <>
      {visible && <AddModal img={img} name={name} visible={visible} handleModal={handleModal} />}
      <Card
        className="cardcon"
        style={{
          backgroundColor: "black",
          width: "17rem",
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
          <Card.Text>
            {dep} / Price : {price}
          </Card.Text>
          <Button
            onClick={handleModal}
            style={{
              backgroundColor: "#8e0e00",
              border: "none",
            }}
          >
            Buy Ticket
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
