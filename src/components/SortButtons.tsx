import React, { useState } from "react";
import { Container, DropdownButton, Form, Col, Row } from "react-bootstrap";
import Switch from "react-switch";
import "./styles/sortButtons.css";

const SortButtons = ({ items }: any) => {
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
              <Form.Check className="formCheck" id="1" label="밀링" />
              <Form.Check className="formCheck" id="2" label="선반" />
            </DropdownButton>
          </Col>
          <Col className="col2">
            <DropdownButton className="dropdown2" variant="light" title="재료">
              <Form.Check className="formCheck" id="1" label="알루미늄" />
              <Form.Check className="formCheck" id="2" label="탄소강" />
              <Form.Check className="formCheck" id="2" label="구리" />
              <Form.Check className="formCheck" id="2" label="합금강" />
              <Form.Check className="formCheck" id="2" label="강철" />
            </DropdownButton>
          </Col>
          <Col lg={4}></Col>
          <Col lg={3} className="col3">
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

            <p className="toggleText">상담 중인 요청만 보기</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SortButtons;
