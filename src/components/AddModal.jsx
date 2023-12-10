import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ticketDate } from "../helpers/data";

const AddModal = ({ img, name, handleModal, visible, onChange }) => {
  console.log(name);

  const [count, setCount] = useState(4);
  const [show, setShow] = useState(true);
  const [data, setData] = useState({
    id: "",
    adSoyad: "",
    day: new Date().toISOString().substring(0, 16),
    img: img,
    ticket: "",
    visited: false,
    film: name,
  });
  const [ticketData, setTicketData] = useState(ticketDate);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "day") {
      newValue = new Date(value).toISOString();
    }

    setData({
      ...data,
      [name]: newValue,
    });
  };

  const handleSave = (e) => {
    if (data.adSoyad && data.ticket && data.day) {
      setData({
        ...data,
        id: count,
        adSoyad: e.target.value,
      });
      const newData = {
        id: count,
        adSoyad: data.adSoyad,
        day: data.day,
        img: data.img,
        ticket: data.ticket,
        visited: data.visited,
        film: data.film,
      };
      setTicketData((prevData) => [...prevData, newData]);
      onChange((prevData) => [...prevData, newData]);

      setCount(count + 1);
      setShow(false);
      alert(
        `Sevgili ${data.adSoyad}, seni aramızda görmekten cok mutluyuz... `
      );
      handleModal();
    } else {
      e.preventDefault();
    }
  };

  // const { patient } = data;

  // const handleSave = (e) => {
  //   setData({ ...data, id: count, patient: e.target.value });
  //   setCount(count + 1);
  //   setShow(false);
  //   alert(patient);
  // };

  const handleClose = () => {
    setShow(false);
    handleModal();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          style={{ border: "none", outline: "none" }}
          className="modalList"
          closeButton
        >
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ border: "none", outline: "none" }}
          className="modalList"
        >
          <Form>
            <InputGroup className="mb-3" id="exampleForm.ControlInput1">
              <InputGroup.Text className="text">Name / Surname</InputGroup.Text>
              <Form.Control
                type="text"
                name="adSoyad"
                value={data.adSoyad}
                onChange={handleInputChange}
                autoFocus
              />
            </InputGroup>
            <InputGroup className="mb-3" id="exampleForm.ControlInput1">
              <InputGroup.Text className="text">Number of Ticket</InputGroup.Text>
              <Form.Control
                type="number"
                name="ticket"
                value={data.ticket}
                onChange={handleInputChange}
                autoFocus
              />
            </InputGroup>
            <Form.Group className="mb-3" id="exampleForm.ControlInput1">
              <Form.Label>Reservation Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="day"
                value={data.day.substring(0, 16)}
                onChange={handleInputChange}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ border:"none", backgroundColor: "black" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddModal;
