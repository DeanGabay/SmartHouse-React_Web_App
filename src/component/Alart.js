import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

export default function Example(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title> We found a problem</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.info}</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              props.set();
              handleClose();
            }}
            variant="primary"
          >
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
