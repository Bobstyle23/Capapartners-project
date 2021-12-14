import React, { useState, useEffect } from "react";
import datas from "../data.json";
import {
  Card,
  Container,
  Row,
  Button,
  Badge,
  DropdownButton,
  Col,
  Form,
} from "react-bootstrap";
// import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import "./styles/list-styles.css";
import Switch from "react-switch";
import EmptyList from "./EmptyList";

const List = () => {
  const [check, setCheck] = useState(false);
  const [checkMethod, setCheckMethod] = useState(false);
  const [checkMaterial, setCheckMaterial] = useState(false);

  const handleChange = (check: boolean | ((prevState: boolean) => boolean)) => {
    setCheck(check);
  };
  const items = datas.requests;
  const st = items.filter((item) => item.status === "상담중");
  const methodM = items.filter((m) => m.method.includes("밀링"));
  const methodS = items.filter((s) => s.method.includes("선반"));
  const materialA = items.filter((a) => a.material.includes("알루미늄"));
  const materialT = items.filter((t) => t.material.includes("탄소강"));
  const materialK = items.filter((k) => k.material.includes("강철"));
  const materialG = items.filter((g) => g.material.includes("구리"));
  const materialS = items.filter((s) => s.material.includes("스테인리스강"));

  const handleCheckChange = (e: { target: { name: any } }) => {
    if (e.target.name === "밀링") {
      console.log(methodM);
      return methodM;
    } else if (e.target.name === "선반") {
      console.log(methodS);
      return methodS;
    } else if (e.target.name === "알루미늄") {
      console.log(materialA);
      return materialA;
    } else if (e.target.name === "탄소강") {
      console.log(materialT);
      return materialT;
    } else if (e.target.name === "강철") {
      console.log(materialK);
      return materialK;
    } else if (e.target.name === "구리") {
      console.log(materialG);
      return materialG;
    } else if (e.target.name === "스테인리스강") {
      console.log(materialS);
      return materialS;
    }
  };

  const checkForLength = () => {
    if (items.length !== 0 && !check) {
      // change to items.length === 0 to render EmptyList
      // items.length === 0 으로 변경하고 EmptyList 렌더링합니다.
      return items.map((item) => (
        <Card className="card" key={item.id}>
          <Card.Body>
            <Card.Title className="card-title">{item.title}</Card.Title>
            {item.status === "상담중" ? (
              <span>
                <Badge className="badge-style" pill bg="light">
                  상담중
                </Badge>
              </span>
            ) : (
              ""
            )}
            <h5 className="client-style">{item.client}</h5>
            <Card.Subtitle className="mb-2 text-muted card-subtitle">
              {item.due}까지 납기
            </Card.Subtitle>
            <hr />

            <Card.Text className="cardText">
              도면개수
              <span className="body-span">{item.count || item.docs}개</span>
            </Card.Text>
            <Card.Text>
              총 수량
              <span className="body-span">{item.amount}개</span>
            </Card.Text>
            <Card.Text>
              가공방식
              <span className="body-span">{item.method.join(", ")}</span>
            </Card.Text>
            <Card.Text>
              재료
              <span className="body-span">{item.material.join(", ")}</span>
            </Card.Text>
            <Button className="cardBtn1">요청 내역 보기</Button>
            <Button className="cardBtn2">채팅하기</Button>
          </Card.Body>
        </Card>
      ));
    } else if (check && st.length !== 0) {
      // change to st.length === 0 to render EmptyList
      // st.length === 0 으로 변경하고 EmptyList 렌더링합니다.
      return st.map((item) => (
        <Card className="card" key={item.id}>
          <Card.Body>
            <Card.Title className="card-title">{item.title}</Card.Title>
            <span>
              <Badge className="badge-style" pill bg="light">
                {item.status}
              </Badge>
            </span>

            <h5 className="client-style">{item.client}</h5>

            <Card.Subtitle className="mb-2 text-muted card-subtitle">
              {item.due}까지 납기
            </Card.Subtitle>
            <hr />

            <Card.Text className="cardText">
              도면개수
              <span className="body-span">{item.count || item.docs}개</span>
            </Card.Text>
            <Card.Text>
              총 수량
              <span className="body-span">{item.amount}개</span>
            </Card.Text>
            <Card.Text>
              가공방식
              <span className="body-span">{item.method.join(", ")}</span>
            </Card.Text>
            <Card.Text>
              재료
              <span className="body-span">{item.material.join(", ")}</span>
            </Card.Text>
            <Button className="cardBtn1">요청 내역 보기</Button>
            <Button className="cardBtn2">채팅하기</Button>
          </Card.Body>
        </Card>
      ));
    } else {
      return <EmptyList />;
    }
  };

  useEffect(() => {
    checkForLength();
  });

  return (
    <div>
      <Container>
        <Row className="row-style">
          <h3 className="main-header">들어온 요청</h3>
          <p className="main-subheader">
            파트너님에게 딱 맞는 요청서를 찾아보세요.
          </p>
          <Row
            style={{
              margin: "0.7rem",
              marginRight: "5rem",
            }}
          >
            <Col className="col1" lg={2} xs={6}>
              <DropdownButton
                className="dropdown1"
                variant="light"
                title="가공방식"
              >
                <Form.Check
                  onChange={handleCheckChange}
                  className="formCheck"
                  id="1"
                  label="밀링"
                  name="밀링"
                  checked={checkMethod}
                />

                <Form.Check
                  className="formCheck"
                  id="2"
                  label="선반"
                  name="선반"
                  onChange={handleCheckChange}
                  checked={checkMethod}
                />
              </DropdownButton>
            </Col>
            <Col className="col2">
              <DropdownButton
                className="dropdown2"
                variant="light"
                title="재료"
              >
                <Form.Check
                  className="formCheck"
                  onChange={handleCheckChange}
                  id="3"
                  label="알루미늄"
                  name="알루미늄"
                  checked={checkMaterial ? !checkMaterial : checkMaterial}
                />
                <Form.Check
                  className="formCheck"
                  onChange={handleCheckChange}
                  id="4"
                  label="탄소강"
                  name="탄소강"
                  checked={checkMaterial}
                />
                <Form.Check
                  className="formCheck"
                  onChange={handleCheckChange}
                  id="5"
                  label="구리"
                  name="구리"
                  checked={checkMaterial}
                />

                <Form.Check
                  className="formCheck"
                  onChange={handleCheckChange}
                  id="7"
                  label="강철"
                  name="강철"
                  checked={checkMaterial}
                />
              </DropdownButton>
            </Col>
            <Col lg={4}>
              {/* <RotateLeftIcon
                style={{
                  color: "#2196F3",
                  width: "2rem",
                  height: "2rem",
                  marginRight: "0.5rem",
                  cursor: " pointer",
                }}
              />
              <span style={{ color: "#2196F3" }}>필터링 리셋</span> */}
            </Col>
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
                className="toggle-switch"
                id="material-switch"
                onChange={handleChange}
                checked={check}
              />

              <p className="toggleText">상담 중인 요청만 보기</p>
            </Col>
          </Row>
          {checkForLength()}

          {/* Later will change using ternary operator */}
          {/* 나중에 ternary operator로  병경할게요 */}
        </Row>
      </Container>
    </div>
  );
};

export default List;
