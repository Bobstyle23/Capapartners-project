import React from "react";
import datas from "../data.json";
import { Card, Container, Row, Button } from "react-bootstrap";
const List = () => {
  const items = datas.requests;
  const method = items.map((item) => item.method);

  for (let i = 0; i < method.length; i++) {
    console.log(method[i]);
  }

  return (
    <div>
      <Container>
        <Row style={{ margin: "5rem" }}>
          {items.map((item) => (
            <Card
              key={item.id}
              style={{
                width: "21rem",
                margin: "1rem",
                textAlign: "left",
              }}
            >
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <h5>{item.client}</h5>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.due}
                </Card.Subtitle>
                <hr />
                <Card.Text>도면개수 {item.count}개</Card.Text>
                <Card.Text>총 수량 {item.amount}개</Card.Text>
                <Card.Text>가공방식 {item.method}</Card.Text>
                <Card.Text>재료 {item.material}</Card.Text>
                <Button
                  style={{ backgroundColor: "#2196F3", marginRight: "0.8rem" }}
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
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default List;
