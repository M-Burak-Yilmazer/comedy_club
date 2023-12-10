import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddModal = ({ img, name, handleModal, visible }) => {
  console.log(name);

  const [count, setCount] = useState(4);
  const [show, setShow] = useState(true);
  const [data, setData] = useState({
    id: "",
    adSoyad: "",
    day: new Date(),
    img: img,
    ticket: "",
    visited: false,
    film: name,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    setData({
      ...data,
      id: count,
      adSoyad: e.target.value,
    });
    setCount(count + 1);
    setShow(false);
    alert(data.adSoyad);
    handleModal();
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
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <InputGroup className="mb-3" controlId="exampleForm.ControlInput1">
              <InputGroup.Text>Name / Surname</InputGroup.Text>
              <Form.Control
                type="text"
                name="adSoyad"
                value={data.adSoyad}
                onChange={handleInputChange}
                autoFocus
              />
            </InputGroup>
            <InputGroup className="mb-3" controlId="exampleForm.ControlInput1">
              <InputGroup.Text>Number of Ticket</InputGroup.Text>
              <Form.Control
                type="number"
                name="ticket"
                value={data.ticket}
                onChange={handleInputChange}
                autoFocus
              />
            </InputGroup>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Reservation Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="day"
                value={data.day} // Set the initial value properly
                onChange={handleInputChange}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
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
