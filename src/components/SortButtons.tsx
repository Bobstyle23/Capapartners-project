import React, { useState } from "react";
import { Container, DropdownButton, Form, Col, Row } from "react-bootstrap";
import Switch from "react-switch";
import "./styles/sortButtons.css";

const SortButtons = () => {
  const [check, setCheck] = useState(false);

  const handleChange = (check: boolean | ((prevState: boolean) => boolean)) => {
    setCheck(check);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="col1" lg={2} xs={6}>
            <DropdownButton
              className="dropdown1"
              variant="light"
              title="가공방식"
            >
              <Form.Check id="1" label="밀링" />
              <Form.Check id="2" label="선반" />
            </DropdownButton>
          </Col>
          <Col className="col2" lg={2} xs={6}>
            <DropdownButton
              className="dropdownBtn"
              style={{ display: "flex", justifyContent: "flex-start" }}
              variant="light"
              title="재료"
            >
              <Form.Check id="1" label="밀링" />
              <Form.Check id="2" label="선반" />
            </DropdownButton>
          </Col>

          <Col
            className="toggleBtn"
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Switch
              onColor="#BBDEFB"
              onHandleColor="#2196F3"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={15}
              width={35}
              className="react-switch"
              id="material-switch"
              onChange={handleChange}
              checked={check}
            />
            <p
              style={{
                color: "#323D45",
                marginLeft: "1rem",
                // marginTop: "-2.5rem",
                // marginRight: "-15rem",
              }}
            >
              상담 중인 요청만 보기
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SortButtons;
