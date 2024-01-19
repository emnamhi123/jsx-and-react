import React from "react";
import Card from "react-bootstrap/Card";

const Carte = ({
  pcName,
  pcImage,
  pcDescription,
  pcPrice,
  helloImage,
  myName,
}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pcImage} />
        <Card.Body>
          <Card.Text>
            {pcName}
            <br />
            {pcDescription}
            <br />
            {pcPrice}
            <br />
            Hello, {myName}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={helloImage} />
      </Card>
    </div>
  );
};

export default Carte;
