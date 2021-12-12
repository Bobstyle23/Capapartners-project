import datas from "../data.json";
import {
  Card,
  Container,
  Row,
  Button,
  Badge,
  DropdownButton,
  Form,
} from "react-bootstrap";
import EmptyList from "./EmptyList";

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
            }}
          >
            들어온 요청
          </h3>
          <p
            style={{
              color: "#323D45",
              textAlign: "left",
            }}
          >
            파트너님에게 딱 맞는 요청서를 찾아보세요.
          </p>
          <DropdownButton
            id="dropdown-basic-button"
            variant="light"
            title="가공방식"
            style={{
              backgroundColor: "#ffffff",
              display: "flex",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Form.Check id="1" label="밀링" />
            <Form.Check id="2" label="선반" />
          </DropdownButton>

          {items.length !== 0 ? (
            items.map((item) => (
              <Card
                key={item.id}
                style={{
                  width: "21.650rem",
                  height: "22.650rem",
                  margin: "1rem",
                  textAlign: "left",
                  padding: "1rem",
                }}
              >
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
