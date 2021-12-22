import React from "react";
import { Card, Badge, Button } from "react-bootstrap";
import data from "../data.json";

const items = data.requests;
const shelf = items.filter((s) => s.method.includes("선반"));
const SortByShelf = () => {
  const cardData = () => {
    return shelf.map((item) => (
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
  };
  return <>{cardData()}</>;
};

export default SortByShelf;
