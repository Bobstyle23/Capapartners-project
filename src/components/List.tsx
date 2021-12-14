import React, { useState } from "react";
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
import "./styles/list-styles.css";
import Switch from "react-switch";
import EmptyList from "./EmptyList";

const List = () => {
  const [check, setCheck] = useState(false);

  const handleChange = (check: boolean | ((prevState: boolean) => boolean)) => {
    setCheck(check);
  };

  const items = datas.requests;
  let st = items.filter((item) => item.status === "상담중");

  console.log(check);
  if (check) {
    console.log(st);
  }

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
                <Form.Check className="formCheck" id="1" label="밀링" />
                <Form.Check className="formCheck" id="2" label="선반" />
              </DropdownButton>
            </Col>
            <Col className="col2">
              <DropdownButton
                className="dropdown2"
                variant="light"
                title="재료"
              >
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
                className="toggle-switch"
                id="material-switch"
                onChange={handleChange}
                checked={check}
              />

              <p className="toggleText">상담 중인 요청만 보기</p>
            </Col>
          </Row>

          {!check && items.length !== 0 ? (
            items.map((item) => (
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
                    <span className="body-span">
                      {item.count || item.docs}개
                    </span>
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
                    <span className="body-span">
                      {item.material.join(", ")}
                    </span>
                  </Card.Text>
                  <Button className="cardBtn1">요청 내역 보기</Button>
                  <Button className="cardBtn2">채팅하기</Button>
                </Card.Body>
              </Card>
            ))
          ) : <EmptyList /> ? (
            st.map((item) => (
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
                    <span className="body-span">
                      {item.count || item.docs}개
                    </span>
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
                    <span className="body-span">
                      {item.material.join(", ")}
                    </span>
                  </Card.Text>
                  <Button className="cardBtn1">요청 내역 보기</Button>
                  <Button className="cardBtn2">채팅하기</Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <EmptyList />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default List;
