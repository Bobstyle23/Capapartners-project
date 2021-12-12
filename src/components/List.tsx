import React, { useState } from "react";
import datas from "../data.json";
import {
  Card,
  Container,
  Row,
  Button,
  Badge,
  DropdownButton,
  Form,
  Col,
} from "react-bootstrap";
import Switch from "react-switch";
import "./styles/list-styles.css";
import EmptyList from "./EmptyList";

const List = () => {
  const [check, setCheck] = useState(false);

  const handleChange = (check: boolean | ((prevState: boolean) => boolean)) => {
    setCheck(check);
  };
  const items = datas.requests;
  const method = items.map((item) => item.method);
  console.log(items);

  for (let i = 0; i < method.length; i++) {
    console.log(method[i]);
  }

  return (
    <div>
      <Container>
        <Row style={{ margin: "5rem" }}>
          <h3
            style={{
              color: "#323D45",
              textAlign: "left",
              marginLeft: "0.2rem",
            }}
          >
            들어온 요청
          </h3>
          <p
            style={{
              color: "#323D45",
              textAlign: "left",
              marginLeft: "0.2rem",
              marginBottom: "2.5rem",
            }}
          >
            파트너님에게 딱 맞는 요청서를 찾아보세요.
          </p>

          <Row>
            <Col lg={2}>
              <DropdownButton
                id="dropdown-basic-button"
                variant="light"
                title="가공방식"
                style={{
                  backgroundColor: "#ffffff",
                  marginLeft: "0.2rem",
                  width: "10%",
                  height: "20%",
                  marginBottom: "1rem",
                }}
              >
                <Form.Check id="1" label="밀링" />
                <Form.Check id="2" label="선반" />
              </DropdownButton>
            </Col>
            <Col lg={2}>
              <DropdownButton
                variant="light"
                title="재료"
                style={{
                  backgroundColor: "#ffffff",
                  width: "10%",
                  height: "20%",
                  marginBottom: "1rem",
                  marginLeft: "0.2rem",
                }}
              >
                <Form.Check id="1" label="밀링" />
                <Form.Check id="2" label="선반" />
              </DropdownButton>
            </Col>
            <Col
              className="toggle"
              lg={2}
              style={{
                paddingLeft: "18rem",
                float: "right",
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
            </Col>

            <Col
              lg={4}
              style={{
                paddingLeft: "10rem",
                marginLeft: "4rem",
              }}
            >
              <p
                style={{
                  color: "#323D45",
                  // marginTop: "-2.5rem",
                  // marginRight: "-15rem",
                }}
              >
                상담 중인 요청만 보기
              </p>
            </Col>
          </Row>

          {items.length !== 0 ? (
            items.map((item) => (
              <Card className="card" key={item.id}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  {item.status === "상담중" ? (
                    <span>
                      <Badge
                        pill
                        bg="light"
                        style={{
                          backgroundColor: "#ffffff",
                          border: "1px solid #FFA000",
                          color: "#FFA000",
                          float: "right",
                          marginTop: "-2rem",
                        }}
                      >
                        상담중
                      </Badge>
                    </span>
                  ) : (
                    ""
                  )}
                  <h5>{item.client}</h5>

                  <Card.Subtitle className="mb-2 text-muted">
                    {item.due}
                  </Card.Subtitle>
                  <hr />
                  <Card.Text>
                    도면개수
                    {item.count || item.docs} 개
                  </Card.Text>
                  <Card.Text>
                    총 수량
                    {item.amount}개
                  </Card.Text>
                  <Card.Text>
                    가공방식
                    {item.method}
                  </Card.Text>
                  <Card.Text>
                    재료
                    {item.material}
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "#2196F3",
                      marginRight: "0.8rem",
                    }}
                  >
                    요청 내역 보기
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#ffffff",
                      color: " #2196F3",
                      border: "1px solid #2196F3",
                    }}
                  >
                    채팅하기
                  </Button>
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
