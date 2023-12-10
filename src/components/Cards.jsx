import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddModal from "./AddModal";

function Cards({ item, onChange }) {
  const [visible, setVisible] = useState(false);

  function handleModal() {
    setVisible(!visible);
  }

  console.log(visible);
  return (
    <>
      {visible && (
        <AddModal
          img={item.img}
          name={item.name}
          visible={visible}
          handleModal={handleModal}
          onChange={onChange}
        />
      )}
      <Card
        className="cardcon"
        style={{
          backgroundColor: "black",
          width: "17rem",
          textAlign: "center",
          color: "white",
        }}
      >
        {item.img ==
        "https://www.biletix.com/static/images/live/event/eventimages/wide/2IF63_denizgoktas_wide.png" ? (
          <Card.Img
            style={{ objectFit: "cover" }}
            className="border border-3 border-white cardImg"
            height="250px "
            variant="top"
            src={item.img}
          />
        ) : (
          <Card.Img
            style={{}}
            className="border border-3 border-white cardImg"
            height="250px "
            variant="top"
            src={item.img}
          />
        )}

        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.dep} / Price : {item.price}
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
