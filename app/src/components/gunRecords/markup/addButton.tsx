import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
const gun = require("../../../images/gun.png");

const AddButton = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Link to="/NewGun">
      <Button size="lg" variant="warning" style={{ fontSize: "1.5em" }}>
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
  );
};

export default AddButton;
