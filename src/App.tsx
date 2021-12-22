import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import datas from "../src/data.json";
import ConsultationCard from "./components/ConsultationCard";
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
import RefreshIcon from "@material-ui/icons/Refresh";
import "./components/styles/list-styles.css";
import Switch from "react-switch";
import EmptyList from "./components/EmptyList";

function App() {
  const [check, setCheck] = useState(false);
  const [checkMethodM, setCheckMethodM] = useState(false);
  const [checkMethodS, setCheckMethodS] = useState(false);
  const [checkMaterialA, setCheckMaterialA] = useState(false);
  const [checkMaterialT, setCheckMaterialT] = useState(false);
  const [checkMaterialK, setCheckMaterialK] = useState(false);
  const [checkMaterialG, setCheckMaterialG] = useState(false);
  const [checkMaterialS, setCheckMaterialS] = useState(false);
  const [reset, setReset] = useState(false);

  const items = datas.requests;

  const st = items.filter((item) => item.status === "상담중");
  const methodM = items.filter((m) => m.method.includes("밀링"));
  const methodS = items.filter((s) => s.method.includes("선반"));
  const materialA = items.filter((a) => a.material.includes("알루미늄"));
  const materialT = items.filter((t) => t.material.includes("탄소강"));
  const materialK = items.filter((k) => k.material.includes("강철"));
  const materialG = items.filter((g) => g.material.includes("구리"));
  const materialS = items.filter((s) => s.material.includes("스테인리스강"));

  const handleChange = (check: boolean | ((prevState: boolean) => boolean)) => {
    setCheck(check);
  };
  const handleMethodMChange = (
    change: boolean | ((prevState: boolean) => boolean)
  ) => {
    setCheckMethodM(change);
    console.log(change);
  };

  const handleMethodSChange = (
    change: boolean | ((prevState: boolean) => boolean)
  ) => {
    setCheckMethodS(change);
    console.log(change);
  };

  const handleMaterialAChange = (
    change: boolean | ((prevState: boolean) => boolean)
  ) => {
    setCheckMaterialA(change);
    console.log(change);
  };

  const handleMaterialTChange = (
    change: boolean | ((prevState: boolean) => boolean)
  ) => {
    setCheckMaterialT(change);
    console.log(change);
  };

  const handleMaterialKChange = (
    change: boolean | ((prevState: boolean) => boolean)
  ) => {
    setCheckMaterialK(change);
    console.log(change);
  };

  const handleMaterialGChange = (
    change: boolean | ((prevState: boolean) => boolean)
  ) => {
    setCheckMaterialG(change);
    console.log(change);
  };

  const handleMaterialSChange = (
    change: boolean | ((prevState: boolean) => boolean)
  ) => {
    setCheckMaterialS(change);
    console.log(change);
  };
  const resetHandler = () => {
    window.location.reload();
    setReset(reset);
  };
  const handleCheckChange = (e: { target: { name: any } }) => {
    if (e.target.name === "밀링") {
      handleMethodMChange(!checkMethodM);
    } else if (e.target.name === "선반") {
      handleMethodSChange(!checkMethodS);
    } else if (e.target.name === "알루미늄") {
      handleMaterialAChange(!checkMaterialA);
    } else if (e.target.name === "탄소강") {
      handleMaterialTChange(!checkMaterialT);
    } else if (e.target.name === "강철") {
      handleMaterialKChange(!checkMaterialK);
    } else if (e.target.name === "구리") {
      handleMaterialGChange(!checkMaterialG);
    } else if (e.target.name === "스테인리스강") {
      handleMaterialSChange(!checkMaterialS);
    }
  };

  const checkForLength = () => {
    if (
      items.length !== 0 &&
      !check &&
      !checkMethodM &&
      !checkMethodS &&
      !checkMaterialA &&
      !checkMaterialT &&
      !checkMaterialK &&
      !checkMaterialG &&
      !checkMaterialS
    ) {
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
    } else if (checkMethodM && methodM.length !== 0) {
      return methodM.map((mm) => (
        <Card className="card" key={mm.id}>
          <Card.Body>
            <Card.Title className="card-title">{mm.title}</Card.Title>
            {mm.status === "상담중" ? (
              <span>
                <Badge className="badge-style" pill bg="light">
                  상담중
                </Badge>
              </span>
            ) : (
              ""
            )}
            <h5 className="client-style">{mm.client}</h5>
            <Card.Subtitle className="mb-2 text-muted card-subtitle">
              {mm.due}까지 납기
            </Card.Subtitle>
            <hr />

            <Card.Text className="cardText">
              도면개수
              <span className="body-span">{mm.count || mm.docs}개</span>
            </Card.Text>
            <Card.Text>
              총 수량
              <span className="body-span">{mm.amount}개</span>
            </Card.Text>
            <Card.Text>
              가공방식
              <span className="body-span">{mm.method.join(", ")}</span>
            </Card.Text>
            <Card.Text>
              재료
              <span className="body-span">{mm.material.join(", ")}</span>
            </Card.Text>
            <Button className="cardBtn1">요청 내역 보기</Button>
            <Button className="cardBtn2">채팅하기</Button>
          </Card.Body>
        </Card>
      ));
    } else if (checkMethodS && methodS.length !== 0) {
      return methodS.map((ms) => (
        <Card className="card" key={ms.id}>
          <Card.Body>
            <Card.Title className="card-title">{ms.title}</Card.Title>
            {ms.status === "상담중" ? (
              <span>
                <Badge className="badge-style" pill bg="light">
                  상담중
                </Badge>
              </span>
            ) : (
              ""
            )}
            <h5 className="client-style">{ms.client}</h5>
            <Card.Subtitle className="mb-2 text-muted card-subtitle">
              {ms.due}까지 납기
            </Card.Subtitle>
            <hr />

            <Card.Text className="cardText">
              도면개수
              <span className="body-span">{ms.count || ms.docs}개</span>
            </Card.Text>
            <Card.Text>
              총 수량
              <span className="body-span">{ms.amount}개</span>
            </Card.Text>
            <Card.Text>
              가공방식
              <span className="body-span">{ms.method.join(", ")}</span>
            </Card.Text>
            <Card.Text>
              재료
              <span className="body-span">{ms.material.join(", ")}</span>
            </Card.Text>
            <Button className="cardBtn1">요청 내역 보기</Button>
            <Button className="cardBtn2">채팅하기</Button>
          </Card.Body>
        </Card>
      ));
    } else if (checkMaterialA && materialA.length !== 0) {
      return materialA.map((ma) => (
        <Card className="card" key={ma.id}>
          <Card.Body>
            <Card.Title className="card-title">{ma.title}</Card.Title>
            {ma.status === "상담중" ? (
              <span>
                <Badge className="badge-style" pill bg="light">
                  상담중
                </Badge>
              </span>
            ) : (
              ""
            )}
            <h5 className="client-style">{ma.client}</h5>
            <Card.Subtitle className="mb-2 text-muted card-subtitle">
              {ma.due}까지 납기
            </Card.Subtitle>
            <hr />

            <Card.Text className="cardText">
              도면개수
              <span className="body-span">{ma.count || ma.docs}개</span>
            </Card.Text>
            <Card.Text>
              총 수량
              <span className="body-span">{ma.amount}개</span>
            </Card.Text>
            <Card.Text>
              가공방식
              <span className="body-span">{ma.method.join(", ")}</span>
            </Card.Text>
            <Card.Text>
              재료
              <span className="body-span">{ma.material.join(", ")}</span>
            </Card.Text>
            <Button className="cardBtn1">요청 내역 보기</Button>
            <Button className="cardBtn2">채팅하기</Button>
          </Card.Body>
        </Card>
      ));
    } else if (checkMaterialT && materialT.length !== 0) {
      return materialT.map((mt) => (
        <Card className="card" key={mt.id}>
          <Card.Body>
            <Card.Title className="card-title">{mt.title}</Card.Title>
            {mt.status === "상담중" ? (
              <span>
                <Badge className="badge-style" pill bg="light">
                  상담중
                </Badge>
              </span>
            ) : (
              ""
            )}
            <h5 className="client-style">{mt.client}</h5>
            <Card.Subtitle className="mb-2 text-muted card-subtitle">
              {mt.due}까지 납기
            </Card.Subtitle>
            <hr />

            <Card.Text className="cardText">
              도면개수
              <span className="body-span">{mt.count || mt.docs}개</span>
            </Card.Text>
            <Card.Text>
              총 수량
              <span className="body-span">{mt.amount}개</span>
            </Card.Text>
            <Card.Text>
              가공방식
              <span className="body-span">{mt.method.join(", ")}</span>
            </Card.Text>
            <Card.Text>
              재료
              <span className="body-span">{mt.material.join(", ")}</span>
            </Card.Text>
            <Button className="cardBtn1">요청 내역 보기</Button>
            <Button className="cardBtn2">채팅하기</Button>
          </Card.Body>
        </Card>
      ));
    } else if (checkMaterialK && materialK.length !== 0) {
      return materialK.map((mk) => (
        <Card className="card" key={mk.id}>
          <Card.Body>
            <Card.Title className="card-title">{mk.title}</Card.Title>
            {mk.status === "상담중" ? (
              <span>
                <Badge className="badge-style" pill bg="light">
                  상담중
                </Badge>
              </span>
            ) : (
              ""
            )}
            <h5 className="client-style">{mk.client}</h5>
            <Card.Subtitle className="mb-2 text-muted card-subtitle">
              {mk.due}까지 납기
            </Card.Subtitle>
            <hr />

            <Card.Text className="cardText">
              도면개수
              <span className="body-span">{mk.count || mk.docs}개</span>
            </Card.Text>
            <Card.Text>
              총 수량
              <span className="body-span">{mk.amount}개</span>
            </Card.Text>
            <Card.Text>
              가공방식
              <span className="body-span">{mk.method.join(", ")}</span>
            </Card.Text>
            <Card.Text>
              재료
              <span className="body-span">{mk.material.join(", ")}</span>
            </Card.Text>
            <Button className="cardBtn1">요청 내역 보기</Button>
            <Button className="cardBtn2">채팅하기</Button>
          </Card.Body>
        </Card>
      ));
    } else if (checkMaterialG && materialG.length !== 0) {
      return materialG.map((mg) => (
        <Card className="card" key={mg.id}>
          <Card.Body>
            <Card.Title className="card-title">{mg.title}</Card.Title>
            {mg.status === "상담중" ? (
              <span>
                <Badge className="badge-style" pill bg="light">
                  상담중
                </Badge>
              </span>
            ) : (
              ""
            )}
            <h5 className="client-style">{mg.client}</h5>
            <Card.Subtitle className="mb-2 text-muted card-subtitle">
              {mg.due}까지 납기
            </Card.Subtitle>
            <hr />

            <Card.Text className="cardText">
              도면개수
              <span className="body-span">{mg.count || mg.docs}개</span>
            </Card.Text>
            <Card.Text>
              총 수량
              <span className="body-span">{mg.amount}개</span>
            </Card.Text>
            <Card.Text>
              가공방식
              <span className="body-span">{mg.method.join(", ")}</span>
            </Card.Text>
            <Card.Text>
              재료
              <span className="body-span">{mg.material.join(", ")}</span>
            </Card.Text>
            <Button className="cardBtn1">요청 내역 보기</Button>
            <Button className="cardBtn2">채팅하기</Button>
          </Card.Body>
        </Card>
      ));
    } else if (checkMaterialS && materialS.length !== 0) {
      return materialS.map((ms) => (
        <Card className="card" key={ms.id}>
          <Card.Body>
            <Card.Title className="card-title">{ms.title}</Card.Title>
            {ms.status === "상담중" ? (
              <span>
                <Badge className="badge-style" pill bg="light">
                  상담중
                </Badge>
              </span>
            ) : (
              ""
            )}
            <h5 className="client-style">{ms.client}</h5>
            <Card.Subtitle className="mb-2 text-muted card-subtitle">
              {ms.due}까지 납기
            </Card.Subtitle>
            <hr />

            <Card.Text className="cardText">
              도면개수
              <span className="body-span">{ms.count || ms.docs}개</span>
            </Card.Text>
            <Card.Text>
              총 수량
              <span className="body-span">{ms.amount}개</span>
            </Card.Text>
            <Card.Text>
              가공방식
              <span className="body-span">{ms.method.join(", ")}</span>
            </Card.Text>
            <Card.Text>
              재료
              <span className="body-span">{ms.material.join(", ")}</span>
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

  return (
    <div>
      <Header />
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
                style={{
                  border: !checkMethodM ? "" : "none",
                }}
                variant={
                  !checkMethodM && !checkMethodS && !reset
                    ? "light"
                    : `primary (${1})`
                }
                title="가공방식"
              >
                <Form.Check
                  onChange={handleCheckChange}
                  className="formCheck"
                  id="1"
                  label="밀링"
                  name="밀링"
                  checked={checkMethodM}
                />

                <Form.Check
                  onChange={handleCheckChange}
                  className="formCheck"
                  id="2"
                  label="선반"
                  name="선반"
                  checked={checkMethodS}
                />
              </DropdownButton>
            </Col>
            <Col className="col2">
              <DropdownButton
                className="dropdown2"
                style={{
                  border:
                    !checkMaterialA &&
                    !checkMaterialT &&
                    !checkMaterialK &&
                    !checkMaterialG &&
                    !checkMaterialS
                      ? ""
                      : "none",
                }}
                variant={
                  !checkMaterialA &&
                  !checkMaterialT &&
                  !checkMaterialK &&
                  !checkMaterialG &&
                  !checkMaterialS &&
                  !reset
                    ? "light"
                    : "primary"
                }
                title={
                  !checkMaterialA &&
                  !checkMaterialT &&
                  !checkMaterialK &&
                  !checkMaterialG &&
                  !checkMaterialS
                    ? "재료"
                    : `재료(${1})`
                }
              >
                <Form.Check
                  className="formCheck"
                  onChange={handleCheckChange}
                  id="3"
                  label="알루미늄"
                  name="알루미늄"
                  checked={checkMaterialA}
                />
                <Form.Check
                  className="formCheck"
                  onChange={handleCheckChange}
                  id="4"
                  label="탄소강"
                  name="탄소강"
                  checked={checkMaterialT}
                />
                <Form.Check
                  className="formCheck"
                  onChange={handleCheckChange}
                  id="5"
                  label="구리"
                  name="구리"
                  checked={checkMaterialG}
                />
                <Form.Check
                  className="formCheck"
                  onChange={handleCheckChange}
                  id="6"
                  label="스테인리스강"
                  name="스테인리스강"
                  checked={checkMaterialS}
                />
                <Form.Check
                  className="formCheck"
                  onChange={handleCheckChange}
                  id="7"
                  label="강철"
                  name="강철"
                  checked={checkMaterialK}
                />
              </DropdownButton>
            </Col>
            <Col className="col-refresh" lg={4}>
              {(checkMaterialA ||
                checkMaterialT ||
                checkMaterialK ||
                checkMaterialG ||
                checkMaterialS ||
                checkMethodM ||
                checkMethodS ||
                check) && (
                <>
                  <button
                    onClick={resetHandler}
                    style={{ border: "none", background: "none" }}
                  >
                    <RefreshIcon className="refresh-icon" />
                  </button>
                  <span
                    style={{
                      color: "#2196F3",
                    }}
                  >
                    필터링 리셋
                  </span>
                </>
              )}
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
        </Row>
      </Container>
      <ConsultationCard
        check={check}
        handleChange={handleChange}
        // data={items}
      />
    </div>
  );
}

export default App;
