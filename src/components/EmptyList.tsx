import React from "react";

const EmptyList = () => {
  return (
    <div>
      <h5
        style={{
          color: " #939FA5",
          width: "100%",
          height: "10rem",
          border: "1px solid #939FA5",
          textAlign: "center",
          padding: "4rem",
          marginTop: "1rem",
        }}
      >
        조건에 맞는 견적 요청이 없습니다.
      </h5>
    </div>
  );
};

export default EmptyList;
