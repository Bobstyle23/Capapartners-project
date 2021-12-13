import datas from "../data.json";
import { Card, Container, Row, Button, Badge } from "react-bootstrap";
import "./styles/list-styles.css";
import EmptyList from "./EmptyList";
import SortButtons from "./SortButtons";

const List = () => {
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
              fontWeight: "700",
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

          <SortButtons items={items} />

          {items.length !== 0 ? (
            items.map((item) => (
              <Card className="card" key={item.id}>
                <Card.Body>
                  <Card.Title style={{ color: "#323D45", fontWeight: "700" }}>
                    {item.title}
                  </Card.Title>
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
                  <h5
                    style={{
                      color: "#323D45",
                      fontWeight: "500",
                    }}
                  >
                    {item.client}
                  </h5>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{
                      color: "#939FA5",
                      marginTop: "2rem",
                      fontWeight: "400",
                    }}
                  >
                    {item.due}까지 납기
                  </Card.Subtitle>
                  <hr />

                  <Card.Text style={{ marginTop: "2rem" }}>
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
                  <Button
                    style={{
                      backgroundColor: "#2196F3",
                      marginRight: "0.8rem",
                      fontWeight: "500",
                      marginTop: "2rem",
                    }}
                  >
                    요청 내역 보기
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#ffffff",
                      color: " #2196F3",
                      border: "1px solid #2196F3",
                      fontWeight: "500",
                      marginTop: "2rem",
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
