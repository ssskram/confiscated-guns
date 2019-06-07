import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Image, Col } from "react-bootstrap";
const gun = require("../../../images/gun.png");

const AddButton = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Col md={{ span: 6, offset: 3 }}>
      <Link to="/NewGun">
        <Button size="lg" variant="warning" style={{ fontSize: "1.5em" }} block>
          <Image
            src={gun}
            style={{
              marginRight: "15px",
              height: "35px"
            }}
          />
          Add a gun record
        </Button>
      </Link>
      <br/>
    </Col>
  );
};

export default AddButton;
